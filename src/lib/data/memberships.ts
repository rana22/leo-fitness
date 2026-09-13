// import type { MembershipPlan } from '$lib/types/models';

// export const membershipPlans: MembershipPlan[] = [
//   {
//     id: 'basic',
//     name: 'Basic',
//     price: 29,
//     cadence: '/month',
//     description: 'Simple access for consistent training.',
//     features: ['Gym access', 'Locker room', 'Free Wi-Fi', 'Community events']
//   },
//   {
//     id: 'premium',
//     name: 'Premium',
//     price: 49,
//     cadence: '/month',
//     description: 'The complete experience for serious progress.',
//     features: ['Gym access', 'All group classes', 'Personal training (1 session/month)', 'Nutrition guidance', 'Guest passes (2/month)'],
//     highlight: true
//   },
//   {
//     id: 'elite',
//     name: 'Elite',
//     price: 79,
//     cadence: '/month',
//     description: 'High-touch coaching with maximum flexibility.',
//     features: ['Everything in Premium', 'Unlimited personal training', 'Custom workout plan', 'Priority support', 'Exclusive events']
//   }
// ];

export type MembershipPlan = {
  id: string;
  name: string;
  price: number;
  currency: 'NPR';
  period: 'month';
  description: string;
  features: string[];
  popular?: boolean;
  enabled: boolean;
  comingSoon?: boolean;
};

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 2499,
    currency: 'NPR',
    period: 'month',
    description:
      'Everything you need to build a consistent training routine.',
    features: [
      'Full gym access',
      'Locker room access',
      'Free Wi-Fi',
      'Community events'
    ],
    enabled: true
  },

  {
    id: 'premium',
    name: 'Premium',
    price: 4999,
    currency: 'NPR',
    period: 'month',
    description:
      'More guidance, more flexibility, and more support.',
    features: [
      'Everything in Basic',
      'All group classes',
      'Personal training session',
      'Nutrition guidance',
      'Guest passes'
    ],
    popular: true,
    enabled: false,
    comingSoon: true
  },

  {
    id: 'elite',
    name: 'Elite',
    price: 7999,
    currency: 'NPR',
    period: 'month',
    description:
      'A premium coaching experience built around your goals.',
    features: [
      'Everything in Premium',
      'Unlimited personal training',
      'Custom workout plan',
      'Priority support',
      'Nutrition planning',
      'Exclusive events'
    ],
    enabled: false,
    comingSoon: true
  }
];