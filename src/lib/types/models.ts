export type ThemeMode = 'dark' | 'light';

export type ClassCategory = 'Strength' | 'HIIT' | 'Cardio' | 'Yoga' | 'Functional';

export interface GymClass {
  id: string;
  name: string;
  category: ClassCategory;
  description: string;
  coach: string;
  time: string;
  duration: string;
  level: 'All levels' | 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  cadence: string;
  description: string;
  features: string[];
  highlight?: boolean;
}
