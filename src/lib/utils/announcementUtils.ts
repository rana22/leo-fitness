import type { Announcement } from "$types/announcement";

export function getStartMilliseconds(
  announcement: Announcement,
  clientOpenAt = Date.now()
): number {
  if (announcement.startMode === 'client-open') return clientOpenAt;
  if (!announcement.startsAt) return Number.NEGATIVE_INFINITY;
  return Date.parse(announcement.startsAt);
}

export function isAnnouncementActive(
  announcement: Announcement,
  now = Date.now(),
  clientOpenAt = now
): boolean {
  if (!announcement.enabled) return false;

  const startsAt = getStartMilliseconds(announcement, clientOpenAt);
  const endsAt = announcement.endsAt ? Date.parse(announcement.endsAt) : Number.POSITIVE_INFINITY;

  return now >= startsAt && now < endsAt;
}

export function getRemainingMilliseconds(announcement: Announcement, now = Date.now()): number {
  if (!announcement.endsAt) return Number.POSITIVE_INFINITY;
  return Math.max(0, Date.parse(announcement.endsAt) - now);
}

export function getCountdownParts(milliseconds: number) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));

  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60
  };
}

export function sortAnnouncements(announcements: Announcement[]) {
  return [...announcements].sort((a, b) => b.priority - a.priority);
}

export function getActiveAnnouncements(
  announcements: Announcement[],
  placement: Announcement['placement'],
  now = Date.now(),
  clientOpenAt = now
) {
  return sortAnnouncements(
    announcements.filter(
      (announcement) =>
        announcement.placement === placement &&
        isAnnouncementActive(announcement, now, clientOpenAt)
    )
  );
}
