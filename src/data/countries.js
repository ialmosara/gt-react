// Country data for the "Where We Work" pages. Everything here comes from Global
// Tassels' own published timeline, events calendar, and 2025 Annual Report —
// no per-country student, alumni, or partner counts are published, so none are
// shown. Add a seventh country by adding one more object (the pipeline is
// Turkey, Peru, Sierra Leone, Guatemala, and Thailand).
//
// `timeline` entries are { when, text }, oldest first.

export const countries = [
  {
    slug: 'cambodia',
    name: 'Cambodia',
    summary:
      'Cambodia is one of Global Tassels’ six active countries. A global recruitment event was held there on March 24, 2026, and nominations have been open.',
    heroTag: 'Photo — GT Student Leaders, Cambodia',
    timeline: [
      { when: 'March 24, 2026', text: 'Global recruitment event held in Cambodia.' },
      { when: '2026', text: 'Nominations for prospective Student Leaders are open.' },
    ],
    gallery: ['Recruitment event', 'Student interviews', 'Community engagement', 'Student Leaders'],
  },
  {
    slug: 'colombia',
    name: 'Colombia',
    summary:
      'Colombia was one of Global Tassels’ five pilot countries. The first delegation traveled to Bogotá in October 2014, and the relationship has grown through recruitment, academic partnerships, and community engagement ever since.',
    heroTag: 'Photo — GT Student Leaders, Colombia',
    timeline: [
      { when: 'October 2014', text: 'The first group of Global Tassels team members travels to Colombia.' },
      { when: 'May 2015', text: 'A second visit to Bogotá kicks off global recruitment of potential students.' },
      { when: 'March 2016', text: 'A third visit to Bogotá focuses on building academic partnerships.' },
      { when: 'February 2017', text: 'A community engagement and mission trip takes the team back to Bogotá.' },
      { when: '2017', text: 'Luz Alcira Granada of Save the Children Colombia receives the Founder’s Leaders Key Award.' },
      { when: '2026', text: 'Karen Gutiérrez, a Global Tassels Student Leader from Colombia, is the keynote speaker at the 12th Annual Founder’s Gala.' },
    ],
    gallery: ['Delegation visit', 'University partnership', 'Community engagement', 'Student Leaders'],
  },
  {
    slug: 'india',
    name: 'India',
    summary:
      'India was a pilot country, first visited in December 2014. Global Tassels returned to New Delhi to interview students in 2015, and a cultivation visit was planned for March 2026.',
    heroTag: 'Photo — GT Student Leaders, India',
    timeline: [
      { when: 'December 2014', text: 'Global Tassels team members travel to India; the IRS approves the organization’s 501(c)(3) status the same month.' },
      { when: 'Summer 2015', text: 'A second trip to New Delhi interviews students as part of global recruitment.' },
      { when: '2015', text: 'Rokas Beresniovas of the State Bank of India is honored at the first Founder’s Gala.' },
      { when: 'March 2026', text: 'A cultivation visit to India was planned.' },
    ],
    gallery: ['Delegation visit', 'Student interviews', 'Community engagement', 'Student Leaders'],
  },
  {
    slug: 'jamaica',
    name: 'Jamaica',
    summary:
      'Jamaica held a recruitment visit in the fall of 2026. After a nomination window, a delegation traveled there to interview prospective Student Leaders and meet local partners.',
    heroTag: 'Photo — GT delegation, Jamaica',
    timeline: [
      { when: 'September 15 – October 20, 2026', text: 'Nominations open for prospective Jamaican Student Leaders.' },
      { when: 'October 30 – November 3, 2026', text: 'The GT Academy delegation interviews candidates, engages local partners, and explores ways to strengthen educational partnerships.' },
      { when: 'After the visit', text: 'The delegation prepares a Visit Summary Report and presents its top candidates to the Board for final selection.' },
    ],
    gallery: ['Delegation visit', 'Student interviews', 'Community engagement', 'Student Leaders'],
  },
  {
    slug: 'kenya',
    name: 'Kenya',
    summary:
      'Global Tassels first visited Nairobi in August 2015 to begin a community engagement initiative with local orphanages, and the relationship has centered on service and partnership since.',
    heroTag: 'Photo — GT Student Leaders, Kenya',
    timeline: [
      { when: 'August 2015', text: 'An initial visit to Nairobi launches a community engagement initiative with local orphanages.' },
      { when: 'July 2016', text: 'A Community Engagement Mission Trip to Kenya for Global Tassels volunteers.' },
    ],
    gallery: ['Delegation visit', 'Community engagement', 'Orphanage partnership', 'Student Leaders'],
  },
  {
    slug: 'philippines',
    name: 'Philippines',
    summary:
      'The Philippines was a pilot country, first visited in January 2015, and has hosted recruitment and community projects since. The GT Institute launches in 2027 with the Polytechnic University of the Philippines.',
    heroTag: 'Photo — GT Student Leaders, Philippines',
    timeline: [
      { when: 'January 2015', text: 'Global Tassels travels to Manila for the first time.' },
      { when: 'Summer 2015', text: 'Manila hosts the first complete round of global recruitment.' },
      { when: 'June 2018', text: 'A Global Recruitment and Community Engagement visit returns to the Philippines.' },
      { when: 'April 2019', text: 'The team visits Manila for Project JOI and Project KIN.' },
      { when: 'March 2026', text: 'A cultivation visit to the Philippines was planned.' },
      { when: '2027', text: 'The GT Institute for Sustainability & Social Mobility launches in partnership with the Polytechnic University of the Philippines (PUP).' },
    ],
    gallery: ['Delegation visit', 'Project JOI', 'Community engagement', 'Student Leaders'],
  },
];

// Programs that run across every country (from the original site's program pages).
export const sharedPrograms = [
  {
    name: 'Project AIR — Academia In Reach',
    desc: 'A leadership and academic development program for service-minded students from disadvantaged communities. Student Leaders receive tuition-free undergraduate education through partner colleges, plus counseling, a support network, career training, and language and cultural preparation. Back home, they complete a two-year service commitment to local anti-poverty initiatives.',
  },
  {
    name: 'Project JOI — Justice & Opportunity Initiative',
    desc: 'Student Leaders are given the foundation and framework to start a community hub for innovation, open to everyone in their home community and designed around the UN Sustainable Development Goals. Global Tassels supports each project from inception to completion.',
  },
  {
    name: 'LInC — Learning and Innovative Communities',
    desc: 'Partnerships with local NGOs focused on youth development, educational access, and poverty reduction, combining volunteers, expert advice, resources, and financial assistance.',
  },
  {
    name: 'Mentoring',
    desc: 'Mentors are selected to help Student Leaders transition to college and develop socially, building a coaching relationship meant to last well beyond graduation.',
  },
];

export function getCountryBySlug(slug) {
  return countries.find((c) => c.slug === slug);
}
