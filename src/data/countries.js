// Placeholder country data for the "Where We Work" template.
// Swap these numbers, names, and stories for the real thing whenever
// GT staff have them — the CountryPage component doesn't need to change,
// which is the whole point of building this as a template + data file.
// Adding a seventh country later (Thailand, Ghana, Peru, ...) means
// adding one more object here.

export const countries = [
  {
    slug: 'cambodia',
    name: 'Cambodia',
    summary:
      'Global Tassels began working in Cambodia by partnering with local schools to identify students with strong academic records and leadership potential but limited access to university.',
    heroTag: 'Photo — GT students, Cambodia',
    stats: { students: 40, alumni: 210, partners: 12 },
    programs: [
      'University scholarships for first-generation students',
      'Leadership development workshops',
      'English-language and university-readiness tutoring',
      'Community service placements with local NGOs',
    ],
    impact:
      'Cambodian Global Tassels alumni now work across education, public health, and small-business development in Phnom Penh and their home provinces — several have returned to mentor the newest cohort of scholars.',
    stories: [{ name: 'Sokha', kicker: 'Student Story', blurb: 'From scholarship student to community leader.' }],
    gallery: ['Orientation day', 'University campus visit', 'Community service project', 'Graduation ceremony'],
  },
  {
    slug: 'colombia',
    name: 'Colombia',
    summary:
      'In Colombia, Global Tassels partners with community organizations in and around Bogotá and Medellín to support students pursuing degrees in fields tied to local economic development.',
    heroTag: 'Photo — GT students, Colombia',
    stats: { students: 55, alumni: 340, partners: 18 },
    programs: [
      'Merit-based university scholarships',
      'Mentorship pairing alumni with incoming students',
      'Entrepreneurship and small-business training',
      'Annual regional leadership summit',
    ],
    impact:
      'Colombian alumni have gone on to found two community-based nonprofits and a youth mentoring collective that now partners directly with Global Tassels on local programming.',
    stories: [{ name: 'Jose', kicker: 'Alumni Story', blurb: 'Turning opportunity into impact in his community.' }],
    gallery: ['Scholarship signing day', 'Leadership summit', 'Alumni mentorship session', 'Community project'],
  },
  {
    slug: 'india',
    name: 'India',
    summary:
      'Global Tassels supports students across several Indian states through partnerships with community-based organizations focused on first-generation college access.',
    heroTag: 'Photo — GT students, India',
    stats: { students: 60, alumni: 410, partners: 22 },
    programs: [
      'University and vocational scholarships',
      'Career-readiness and interview coaching',
      'Peer mentoring circles',
      'Community health and literacy volunteer projects',
    ],
    impact:
      'Graduates of the program are now working in engineering, public health, and education, with many contributing a portion of their income back into local scholarship funds.',
    stories: [],
    gallery: ['Scholar cohort meetup', 'Campus visit', 'Volunteer literacy program', 'Graduation day'],
  },
  {
    slug: 'jamaica',
    name: 'Jamaica',
    summary:
      'Global Tassels works with secondary schools and community groups across Jamaica to identify students ready for university and support them through to graduation.',
    heroTag: 'Photo — GT students, Jamaica',
    stats: { students: 25, alumni: 130, partners: 9 },
    programs: [
      'University scholarships and book stipends',
      'Summer leadership institute',
      'Community service requirement and tracking',
      'Alumni career-mentorship network',
    ],
    impact:
      'Jamaican alumni have led youth mentoring initiatives in Kingston and Montego Bay, extending Global Tassels’ reach well beyond its original scholarship cohort.',
    stories: [],
    gallery: ['Leadership institute', 'Scholarship ceremony', 'Community service day', 'Alumni gathering'],
  },
  {
    slug: 'kenya',
    name: 'Kenya',
    summary:
      'Our Kenya program partners with schools and community organizations in Nairobi and surrounding counties to support students with strong academic records and a demonstrated commitment to community service.',
    heroTag: 'Photo — GT students, Kenya',
    stats: { students: 45, alumni: 265, partners: 15 },
    programs: [
      'Full and partial university scholarships',
      'Leadership and public-speaking workshops',
      'Community health outreach partnerships',
      'Annual alumni reunion and mentorship day',
    ],
    impact:
      'Winnie, one of our earliest Kenyan scholars, now works in community health education and returns each year to mentor incoming students through the program.',
    stories: [{ name: 'Winnie', kicker: 'Alumni Story', blurb: 'Using education to transform lives.' }],
    gallery: ['Scholar orientation', 'Community health outreach', 'Campus life', 'Alumni reunion day'],
  },
  {
    slug: 'philippines',
    name: 'Philippines',
    summary:
      'In the Philippines, Global Tassels partners with community organizations across several regions to expand access to university education and to strengthen local nonprofit capacity.',
    heroTag: 'Photo — GT students, Philippines',
    stats: { students: 50, alumni: 300, partners: 20 },
    programs: [
      'University scholarships and mentoring',
      'Community partner capacity-building grants',
      'Student-led community service projects',
      'Regional leadership and networking events',
    ],
    impact:
      'A long-running partnership with a local community organization has grown into one of Global Tassels’ strongest models for pairing scholarships with local capacity-building.',
    stories: [{ name: 'Bridging Opportunities', kicker: 'Community Partner Story', blurb: 'Partnering for a stronger, brighter future.' }],
    gallery: ['Partner site visit', 'Scholarship cohort', 'Community project', 'Regional leadership event'],
  },
];

export function getCountryBySlug(slug) {
  return countries.find((c) => c.slug === slug);
}
