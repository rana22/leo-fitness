import type { Announcement } from '$lib/announcements/types';

/**
 * Opening-soon campaign:
 * - starts when the visitor opens the page
 * - expires at the end of October 1, 2026 in Nepal time
 * - no fixed campaign start date is stored
 */
export const announcements: Announcement[] = [
  {
    id: 'opening-soon',
    kind: 'opening',
    placement: 'hero',
    title: 'Opening Soon',
    message: 'A stronger, healthier, happier you is coming to Nakhipot.',
    startMode: 'client-open',
    endsAt: '2026-10-01T23:59:59+05:45',
    action: { label: 'Get Notified', href: '/contact' },
    enabled: true,
    priority: 70
  },
  {
    id: 'founding-offer',
    kind: 'promotion',
    placement: 'banner',
    title: '50% OFF FOR 3 MONTHS',
    message: 'Limited-time founding member offer.',
    endsAt: '2026-10-01T23:59:59+05:45',
    action: { label: 'Claim Offer', href: '/membership' },
    enabled: true,
    priority: 50,
    dismissible: true
  },
  {
    id: 'new-hiit',
    kind: 'event',
    placement: 'card',
    title: 'New HIIT Classes',
    message: 'Saturday · 7:00 AM',
    action: { label: 'View Schedule', href: '/classes' },
    enabled: true,
    priority: 30
  },
  {
    id: 'free-assessment',
    kind: 'event',
    placement: 'card',
    title: 'Free Fitness Assessment',
    message: 'Book a complimentary 30-minute session.',
    action: { label: 'Book Now', href: '/contact?intent=assessment' },
    enabled: true,
    priority: 20
  },
  {
    id: 'holiday-hours',
    kind: 'operational',
    placement: 'card',
    title: 'Holiday Hours',
    message: 'View our updated schedule before you visit.',
    action: { label: 'View Hours', href: '/contact' },
    enabled: true,
    priority: 80
  },
  {
    id: 'refer-a-friend',
    kind: 'general',
    placement: 'card',
    title: 'Refer a Friend',
    message: 'Bring a friend and help build the community.',
    action: { label: 'Learn More', href: '/contact?intent=referral' },
    enabled: true,
    priority: 10
  }
];
