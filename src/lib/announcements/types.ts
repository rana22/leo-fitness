export type AnnouncementKind =
  | 'critical'
  | 'operational'
  | 'promotion'
  | 'opening'
  | 'event'
  | 'general';

export type AnnouncementPlacement = 'topbar' | 'hero' | 'banner' | 'card';
export type AnnouncementStartMode = 'fixed' | 'client-open';

export interface AnnouncementAction {
  label: string;
  href: string;
}

export interface Announcement {
  id: string;
  kind: AnnouncementKind;
  placement: AnnouncementPlacement;
  title: string;
  message?: string;
  startMode?: AnnouncementStartMode;
  startsAt?: string;
  endsAt?: string;
  action?: AnnouncementAction;
  enabled: boolean;
  priority: number;
  dismissible?: boolean;
}
