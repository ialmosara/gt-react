import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const pastGalas = [
  { year: '2026', title: '12th Annual Founder’s Gala', note: 'Saturday, August 1, 2026 — New York. Keynote speaker and Founder’s Leaders Key Award recipient: Karen Gutiérrez, a Global Tassels Student Leader from Colombia.' },
  { year: '2025', title: '11th Annual Founder’s Gala', note: 'Saturday, August 16, 2025 — Washington, DC (Eaton Hotel). $52,895 in donations raised; $23,536.93 net after event expenses.' },
  { year: '2024', title: '10th Annual Founder’s Gala', note: 'Saturday, June 15, 2024 — New York City, in person. Sponsors supported 12 Student Leaders and 17 Sustainable Development Goal tables.' },
  { year: '2023', title: '9th Annual Founder’s Gala', note: 'Sunday, August 6, 2023 — held virtually over Zoom.' },
  { year: '2022', title: '8th Annual Founder’s Gala', note: 'Friday, July 1, 2022, 6pm EDT — held virtually over Zoom, $250 per ticket.' },
  { year: '2021', title: '7th Annual Founder’s Gala', note: 'Saturday, July 24, 2021 — held virtually, with start times across New York, San Francisco, Guatemala City, Bogotá, Nairobi, and Manila.' },
  { year: '2020', title: '6th Annual Founder’s Gala', note: 'Saturday, August 15, 2020 — held virtually over Zoom.' },
  { year: '2019', title: '5th Annual Founder’s Gala', note: 'Saturday, June 1, 2019 — The Prince George Ballroom, New York City.' },
  { year: '2018', title: '4th Annual Founder’s Gala', note: 'Monday, May 28, 2018 — Battery Gardens, Battery Park, Manhattan.' },
  { year: '2017', title: '3rd Annual Founder’s Gala', note: 'June 30, 2017 — India House Club, New York City. Founder’s Key Award: Luz Alcira Granada, Save the Children Colombia.' },
  { year: '2016', title: '2nd Annual Founder’s Gala', note: 'June 30, 2016 — “Piecing It All Together,” a Manhattan penthouse. Founder’s Key Award: Jerome Ringo, Zoetic Global.' },
  { year: '2015', title: '1st Annual Founder’s Gala', note: 'June 16, 2015 — Museum of the Moving Image, New York. Founder’s Key Award: Jason Tengco, White House Initiative on Asian Americans and Pacific Islanders.' },
];

const honorees2026 = [
  {
    award: 'Founder’s Leaders Key Award & Keynote Speaker',
    people: [{ name: 'Karen Gutiérrez', title: 'Global Tassels Student Leader, Colombia' }],
  },
  {
    award: 'Global Community Innovator Awards',
    people: [
      { name: 'Alicia Cortéz', title: 'Board President, Gavilan College, California' },
      { name: 'Dr. Wintor McNeel', title: 'West Coast Regional Director, Child Care Providers United' },
      { name: 'Claire Kruse', title: 'Head of Global Support, Moodle' },
      { name: 'Tony D. Elder', title: 'Innovation Specialist, The Guardian Life Insurance' },
      { name: 'Regie Cabico', title: 'Publisher & Founder Director, Capfire Press, NYC' },
      { name: 'Dr. Marcela Murillo Van Den Boss', title: 'Associate Professor, Santa Fe College, Florida' },
      { name: 'Dr. Joshua Moon-Johnson', title: 'Campus President, Connecticut State Community College' },
      { name: 'Jennifer Lopez', title: 'Teacher/Coach, New York City Department of Education' },
    ],
  },
  {
    award: 'Community Artist Excellence Award',
    people: [{ name: 'Sage Rivera', title: 'Artist & Filmmaker; Chief Strategy Officer, Destination Tomorrow' }],
  },
  {
    award: 'Distinguished Service Awards',
    people: [
      { name: 'Denica Kelly', title: 'Global Tassels Executive Leadership Team' },
      { name: 'Vivian Bejarin', title: 'Global Tassels Board Member' },
    ],
  },
];

// Award categories and criteria from the founder's Nov 2026 call for 2027 nominations.
const awards2027 = [
  {
    name: 'Founder’s Leaders Key Award & Keynote Speaker',
    desc: 'Bestowed on one individual with a record of global community engagement who is an influential figure of social change, with international development or sustainability work. This honoree is also the evening’s keynote speaker.',
  },
  {
    name: 'Global Community Innovation Award',
    desc: 'For individuals who have led community initiatives at the local, national, or global level, where the cause and impact align with one or more of the 17 UN Sustainable Development Goals.',
  },
  {
    name: 'Distinguished Service Awards',
    desc: 'For members of the Global Tassels network who have served at least two years as a board member, volunteer, community advisor, consultant, or executive leadership team member.',
  },
  {
    name: 'Community Artist Excellence Award',
    desc: 'For one artist who has shown artistic talent and built community through contributions in the realm of education at any level.',
  },
];

const pricing2026 = [
  { name: 'Individual ticket', price: '$350' },
  { name: 'Bronze — Entertainment Sponsor', price: '$500' },
  { name: 'Silver — Reception Hour Sponsor', price: '$1,000' },
  { name: 'Gold — Gala Underwriter (five tickets included)', price: '$5,000' },
];

export default function Gala() {
  useDocumentTitle("Founder's Gala");
  return (
    <>
      <PageHero
        eyebrow="The Founder's Gala"
        title="13th Annual Founder's Gala"
        lede="Saturday, May 15, 2027 · The Terra, San Francisco — our theme is “Community and Togetherness Matter Most.” Save the date."
        photoLabel="Photo — Founder's Gala"
        photoAria="Guests at a past Founder's Gala"
      />

      {/* ABOUT THE GALA */}
      <section id="about">
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder src="/images/gala/gala-group.jpg" aria="Global Tassels supporters posing together at a Founder's Gala" style={{ aspectRatio: '3 / 2' }} />
            <div>
              <p className="eyebrow">About the Gala</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>
                Community and Togetherness Matter Most.
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
                The Founder&rsquo;s Gala is Global Tassels&rsquo; flagship annual fundraising event, bringing together
                donors, alumni, and community partners to celebrate education, leadership, and global impact. The
                13th Annual Gala takes place at The Terra in San Francisco on Saturday, May 15, 2027.
              </p>
              <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: '1.02rem', maxWidth: 520 }}>
                All proceeds support Global Tassels&rsquo; mission to provide college education opportunities for
                underprivileged youth with leadership qualities in the developing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TICKETS & SPONSORSHIP */}
      <section className="ecosystem" id="tickets">
        <div className="wrap">
          <SectionHead center eyebrow="Tickets & Sponsorship" title="Details are on the way.">
            Ticket prices and sponsorship packages for the 13th Annual Gala haven&rsquo;t been announced yet. Email
            us and we&rsquo;ll let you know as soon as they open.
          </SectionHead>
          <div className="window-card" style={{ maxWidth: 560, margin: '0 auto' }}>
            <p className="eyebrow">For reference: the 2026 gala</p>
            {pricing2026.map((row) => (
              <div key={row.name} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, fontSize: '0.95rem', color: 'var(--ink-soft)' }}>
                <span>{row.name}</span>
                <strong style={{ color: 'var(--purple-800)' }}>{row.price}</strong>
              </div>
            ))}
            <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: 6 }}>
              2027 pricing may differ. Journal page ads ran $100&ndash;$300 in 2026.
            </p>
          </div>
          <div className="stories-foot">
            <a className="btn btn-gold" href="mailto:info@globaltassels.org?subject=13th%20Annual%20Founder%27s%20Gala">
              Ask about tickets &amp; sponsorship
            </a>
          </div>
        </div>
      </section>

      {/* HONOREES */}
      <section id="honorees">
        <div className="wrap">
          <SectionHead center eyebrow="2027 Honorees" title="Honorees will be announced.">
            Nominations for the 2027 honorees are being gathered now. These are the four recognitions the gala
            presents each year.
          </SectionHead>
          <div className="program-list" style={{ maxWidth: 760, margin: '0 auto' }}>
            {awards2027.map((a) => (
              <div className="program-item" key={a.name}>
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </span>
                <p><strong>{a.name}</strong> &mdash; {a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 HONOREES */}
      <section className="ecosystem" id="honorees-2026">
        <div className="wrap">
          <SectionHead center eyebrow="2026 Honorees" title="Last year&rsquo;s honorees.">
            The 12th Annual Founder&rsquo;s Gala, held August 1, 2026 in New York, honored educators, innovators,
            and community leaders &mdash; with a Global Tassels Student Leader as keynote speaker.
          </SectionHead>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {honorees2026.map((group) => (
              <div key={group.award} style={{ marginBottom: 36 }}>
                <p className="eyebrow" style={{ marginBottom: 14 }}>{group.award}</p>
                <div className="program-list">
                  {group.people.map((p) => (
                    <div className="program-item" key={p.name}>
                      <span className="icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p><strong>{p.name}</strong> &mdash; {p.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <img
            src="/images/gala/honorees-2026.jpg"
            alt="Graphic listing the 2026 Founder's Gala honorees, keynote speaker, and award categories"
            style={{ maxWidth: 520, width: '100%', margin: '24px auto 0', borderRadius: 4 }}
          />
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <div className="wrap">
          <SectionHead eyebrow="Gala Gallery" title="Moments from past galas." />
          <div className="gallery-grid">
            <PhotoPlaceholder aria="Photo from a past Founder's Gala" label="Gala Gallery" />
            <PhotoPlaceholder aria="Photo from a past Founder's Gala" label="Gala Gallery" />
            <PhotoPlaceholder aria="Photo from the 9th Annual Founder's Gala, 2023" label="2023 Gala" />
            <PhotoPlaceholder aria="Photo from the 8th Annual Founder's Gala, 2022" label="2022 Gala" />
          </div>
        </div>
      </section>

      {/* PAST GALAS */}
      <section className="ecosystem" id="past-galas">
        <div className="wrap">
          <SectionHead eyebrow="Past Galas" title="A look back." />
          <div className="timeline">
            {pastGalas.map((g) => (
              <div className="timeline-item" key={g.year}>
                <div className="timeline-year">{g.year}</div>
                <p>
                  <strong>{g.title}</strong> &mdash; {g.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="callout">
            <div>
              <h3>Save the date: May 15, 2027.</h3>
              <p>The 13th Annual Founder&rsquo;s Gala &middot; The Terra, San Francisco.</p>
            </div>
            <div className="callout-actions">
              <a className="btn btn-gold" href="mailto:info@globaltassels.org?subject=13th%20Annual%20Founder%27s%20Gala">
                Get gala updates
              </a>
              <Link className="btn btn-ghost" to="/give">
                Support our students
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
