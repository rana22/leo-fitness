import type { Announcement } from './types';

export function getStartMilliseconds(
  announcement: Announcement,
  clientOpenAt = Date.now()
): number {
  // Starts when the visitor opens the page.
  if (announcement.startMode === 'client-open') {
    return clientOpenAt;
  }

  // No start date means the announcement is active immediately.
  if (!announcement.startsAt) {
    return Number.NEGATIVE_INFINITY;
  }

  const parsed = Date.parse(announcement.startsAt);

  // Invalid date: treat it as immediately active rather than
  // accidentally filtering the announcement out.
  if (Number.isNaN(parsed)) {
    return Number.NEGATIVE_INFINITY;
  }

  return parsed;
}

export function isAnnouncementActive(
  announcement: Announcement,
  now = Date.now(),
  clientOpenAt = now
): boolean {
  // Disabled announcements never appear.
  if (!announcement.enabled) {
    return false;
  }

  const startsAt = getStartMilliseconds(
    announcement,
    clientOpenAt
  );

  // Has not started yet.
  if (now < startsAt) {
    return false;
  }

  // No end date means it remains active indefinitely.
  if (!announcement.endsAt) {
    return true;
  }

  const endsAt = Date.parse(announcement.endsAt);

  // Invalid end date: fail open and keep the announcement visible.
  if (Number.isNaN(endsAt)) {
    return true;
  }

  // Active up to and including the configured end time.
  return now <= endsAt;
}

export function getRemainingMilliseconds(
  announcement: Announcement,
  now = Date.now()
): number {
  if (!announcement.endsAt) {
    return Number.POSITIVE_INFINITY;
  }

  const endsAt = Date.parse(announcement.endsAt);

  if (Number.isNaN(endsAt)) {
    return Number.POSITIVE_INFINITY;
  }

  return Math.max(0, endsAt - now);
}

export function getCountdownParts(
  milliseconds: number
) {
  const totalSeconds = Math.max(
    0,
    Math.floor(milliseconds / 1000)
  );

  return {
    days: Math.floor(totalSeconds / 86_400),

    hours: Math.floor(
      (totalSeconds % 86_400) / 3_600
    ),

    minutes: Math.floor(
      (totalSeconds % 3_600) / 60
    ),

    seconds: totalSeconds % 60
  };
}

export function sortAnnouncements(
  announcements: Announcement[]
): Announcement[] {
  return [...announcements].sort(
    (a, b) =>
      (b.priority ?? 0) -
      (a.priority ?? 0)
  );
}

// export function getActiveAnnouncements(
//   announcements: Announcement[],
//   placement: Announcement['placement'],
//   now = Date.now(),
//   clientOpenAt = now
// ): Announcement[] {
//   const activeAnnouncements = announcements.filter(
//     (announcement) =>
//       announcement.placement === placement &&
//       isAnnouncementActive(
//         announcement,
//         now,
//         clientOpenAt
//       )
//   );

//   return sortAnnouncements(activeAnnouncements);
// }

export function getActiveAnnouncements(
  announcements: Announcement[],
  placement: Announcement['placement'],
  now: number,
  clientOpenAt: number,
  allowedKinds?: Announcement['kind'][]
): Announcement[] {
  return sortAnnouncements(
    announcements.filter((announcement) => {
      const placementMatches =
        placement === 'topbar'
          ? true
          : announcement.placement === placement;

      const kindMatches =
        !allowedKinds?.length ||
        allowedKinds.includes(announcement.kind);

      return (
        placementMatches &&
        kindMatches &&
        isAnnouncementActive(
          announcement,
          now,
          clientOpenAt
        )
      );
    })
  );
}