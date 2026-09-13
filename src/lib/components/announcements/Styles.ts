import type { Announcement } from "$lib/announcements/types";

export type AnnouncementStyle = {
  background: string;
  border: string;
  icon: string;
  title: string;
  message: string;
  action: string;
  close: string;
};

export function getAnnouncementStyle(
  kind: Announcement['kind']
): AnnouncementStyle {
  switch (kind) {
    case 'critical':
      return {
        background: 'bg-[var(--announcement-critical)]',
        border: 'border-red-400/30',
        icon: 'text-white',
        title: 'text-white',
        message: 'text-white/85',
        action: 'text-white',
        close: 'text-white/70 hover:text-white'
      };

    case 'operational':
      return {
        background: 'bg-[var(--announcement-operational)]',
        border: 'border-red-300/30',
        icon: 'text-white',
        title: 'text-white',
        message: 'text-white/90',
        action: 'text-white',
        close: 'text-white/70 hover:text-white'
      };

    case 'promotion':
      return {
        background: 'bg-[var(--announcement-promotion)]',
        border: 'border-blue-300/30',
        icon: 'text-white',
        title: 'text-white',
        message: 'text-white/90',
        action: 'text-white',
        close: 'text-white/70 hover:text-white'
      };

    case 'event':
      return {
        background: 'bg-[var(--announcement-event)]',
        border: 'border-emerald-300/30',
        icon: 'text-white',
        title: 'text-white',
        message: 'text-white/90',
        action: 'text-white',
        close: 'text-white/70 hover:text-white'
      };

    case 'opening':
      return {
        background: 'bg-black',
        border: 'border-white/10',
        icon: 'text-[var(--brand-bright)]',
        title: 'text-white',
        message: 'text-white/75',
        action: 'text-[var(--brand-bright)]',
        close: 'text-white/60 hover:text-white'
      };

    case 'general':
    default:
      return {
        background: 'bg-[var(--announcement-general)]',
        border: 'border-white/20',
        icon: 'text-black',
        title: 'text-black',
        message: 'text-black/70',
        action: 'text-black',
        close: 'text-black/60 hover:text-black'
      };
  }
}