import type { GymClass } from '$lib/types/models';

export const classes: GymClass[] = [
  { id: 'strength', name: 'Strength Training', category: 'Strength', description: 'Build power, technique and durable strength.', coach: 'Alex Morgan', time: '06:00 AM', duration: '60 min', level: 'All levels', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=82' },
  { id: 'hiit', name: 'HIIT Blast', category: 'HIIT', description: 'Short, intense intervals designed to push your limits.', coach: 'Sarah James', time: '07:00 AM', duration: '45 min', level: 'Intermediate', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=82' },
  { id: 'yoga', name: 'Yoga & Mobility', category: 'Yoga', description: 'Move better, recover smarter and build balance.', coach: 'Priya Shah', time: '09:00 AM', duration: '60 min', level: 'All levels', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=82' },
  { id: 'cardio', name: 'Cardio Burn', category: 'Cardio', description: 'Build endurance with a focused, high-energy session.', coach: 'Sarah James', time: '12:00 PM', duration: '45 min', level: 'All levels', image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=82' },
  { id: 'functional', name: 'Functional Fitness', category: 'Functional', description: 'Train movement patterns that carry into everyday life.', coach: 'Mark Chen', time: '05:00 PM', duration: '50 min', level: 'Intermediate', image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=82' },
  { id: 'core', name: 'Core & Abs', category: 'Functional', description: 'A concentrated session for stability and control.', coach: 'Mark Chen', time: '06:00 PM', duration: '30 min', level: 'All levels', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=82' }
];
