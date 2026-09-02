// Shared navigation data for Header and Footer.

export const primaryNav = [
  { label: 'About', to: '/about' },
  { label: 'Our Ecosystem', to: '/ecosystem' },
  { label: 'Our Impact', to: '/impact' },
  { label: 'Where We Work', to: '/where-we-work' },
  { label: 'Leadership & Governance', to: '/leadership' },
  { label: 'News & Events', to: '/news' },
  { label: 'Give', to: '/give' },
];

export const footerColumns = [
  {
    heading: 'About',
    links: [
      { label: 'Our Story', to: '/about#our-story' },
      { label: 'Mission & Vision', to: '/about#mission-vision' },
      { label: 'Our History', to: '/about#history' },
      { label: 'Our Founder', to: '/about#founder' },
      { label: 'Strategic Plan', to: '/about#strategic-plan' },
    ],
  },
  {
    heading: 'Our Work',
    links: [
      { label: 'GT Academy', to: '/ecosystem/academy' },
      { label: 'GT Foundation', to: '/ecosystem/foundation' },
      { label: 'GT Institute', to: '/ecosystem/institute' },
      { label: '360 Impact', to: '/impact#three-sixty' },
      { label: 'Where We Work', to: '/where-we-work' },
    ],
  },
  {
    heading: 'Get Involved',
    links: [
      { label: 'Donate', to: '/give#donate' },
      { label: 'Volunteer', to: '/give' },
      { label: 'Partner', to: '/give#corporate' },
      { label: 'Gala', to: '/gala' },
      { label: 'Corporate Partnerships', to: '/give#corporate' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'News', to: '/news' },
      { label: 'Annual Reports', to: '/leadership#governance' },
      { label: 'Publications', to: '/news#publications' },
      { label: 'Governance', to: '/leadership#governance' },
      { label: 'Contact', to: '/about' },
    ],
  },
];
