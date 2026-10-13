import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import DonateButton from '../components/DonateButton.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const program = [
  { time: '6:00 PM', title: 'Cocktail Reception', desc: 'Welcome drinks, silent auction preview, and the photo gallery from this year’s countries.' },
  { time: '7:15 PM', title: 'Dinner & Program', desc: 'Seated dinner, the founder’s remarks, and student and alumni speakers from this year’s cohort.' },
  { time: '8:30 PM', title: 'Honoree Presentation', desc: 'This year’s Founder’s Award and Community Partner Award are presented.' },
  { time: '9:00 PM', title: 'Live Fund-a-Need', desc: 'A live appeal to fund next year’s incoming scholarship cohort.' },
  { time: '9:30 PM', title: 'Dancing & Dessert', desc: 'The evening closes with music, dessert, and time to connect.' },
];

const pastGalas = [
  { year: '2025', title: '11th Annual Founder’s Gala', note: 'Saturday, August 16, 2025 — Washington, DC (Eaton Hotel). $52,895 in donations raised; $23,536.93 net after event expenses.' },
  { year: '2024', title: '10th Annual Founder’s Gala', note: 'Saturday, June 15, 2024 — New York City, in person. Sponsors supported 12 Student Leaders and 17 Sustainable Development Goal tables.' },
  { year: '2023', title: '9th Annual Founder’s Gala', note: 'Sunday, August 6, 2023 — held virtually over Zoom.' },
  { year: '2022', title: '8th Annual Founder’s Gala', note: 'Held virtually over Zoom at 6pm EDT, $250 per ticket.' },
  { year: '2021', title: '7th Annual Founder’s Gala', note: 'Saturday, July 24, 2021 — held virtually, with start times across New York, San Francisco, Guatemala City, Bogotá, Nairobi, and Manila.' },
  { year: '2020', title: '6th Annual Founder’s Gala', note: 'Saturday, August 15, 2020 — held virtually over Zoom.' },
  { year: '2019', title: '5th Annual Founder’s Gala', note: 'Saturday, June 1, 2019 — The Prince George Ballroom, New York City.' },
  { year: '2018', title: '4th Annual Founder’s Gala', note: 'Monday, May 28, 2018 — Battery Gardens, Battery Park, Manhattan.' },
  { year: '2017', title: '3rd Annual Founder’s Gala', note: 'June 30, 2017 — India House Club, New York City. Founder’s Key Award: Luz Alcira Granada, Save the Children Colombia.' },
  { year: '2016', title: '2nd Annual Founder’s Gala', note: 'June 30, 2016 — “Piecing It All Together,” a Manhattan penthouse. Founder’s Key Award: Jerome Ringo, Zoetic Global.' },
  { year: '2015', title: '1st Annual Founder’s Gala', note: 'June 16, 2015 — Museum of the Moving Image, New York. Founder’s Key Award: Jason Tengco, White House Initiative on Asian Americans and Pacific Islanders.' },
];

const honoreeGroups = [
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

export default function Gala() {
  useDocumentTitle("Founder's Gala");
  return (
    <>
      <PageHero
        eyebrow="The Founder's Gala"
        title="12th Annual Founder's Gala"
        lede="Saturday, August 1, 2026 · New York — celebrating education, leadership, and global impact, and the students, alumni, and partners who make it possible. All proceeds support college education opportunities for Global Tassels' Student Leaders."
        photoLabel="Photo — Founder's Gala, New York"
        photoAria="Guests at a past Founder's Gala in New York"
      />

      {/* ABOUT THE GALA */}
      <section id="about">
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder src="/images/gala/gala-group.jpg" aria="Global Tassels supporters posing together at a Founder's Gala" style={{ aspectRatio: '3 / 2' }} />
            <div>
              <p className="eyebrow">About the Gala</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>
                Twelve years of opening doors.
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
                The Founder's Gala is Global Tassels' flagship annual fundraising event, bringing together donors,
                alumni, and community partners for an evening that funds the next year of Student Leader
                scholarships. This year's gala returns to New York in person.
              </p>
              <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: '1.02rem', maxWidth: 520 }}>
                All proceeds support Global Tassels' mission to provide college education opportunities for
                underprivileged youth with leadership qualities in the developing world — and, this year, to help
                extend that opportunity toward a US education for select Student Leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TICKETS & SPONSORSHIP */}
      <section className="ecosystem" id="tickets">
        <div className="wrap">
          <SectionHead center eyebrow="Tickets & Sponsorship" title="Join us in the room.">
            Our goal this year is 120 individual tickets, plus sponsors at every level — all pricing is subject to
            change based on availability.
          </SectionHead>
          <div className="tier-grid cols-4">
            <div className="tier-card featured">
              <span className="tier-badge">Goal: 120 Tickets</span>
              <span className="tier-name">Individual Ticket</span>
              <span className="tier-price">$350</span>
              <p className="tier-desc">A single seat at the 12th Annual Founder&rsquo;s Gala in New York.</p>
              <ul className="tier-perks">
                <li>Full evening program</li>
                <li>Tax-deductible portion applies</li>
              </ul>
              <DonateButton campaign="gala" fallbackHref="#tickets" className="btn btn-gold">
                Buy Your Ticket
              </DonateButton>
            </div>
            <div className="tier-card">
              <span className="tier-name">Bronze — Entertainment Sponsor</span>
              <span className="tier-price">$500</span>
              <p className="tier-desc">Your name or company logo displayed throughout the event.</p>
              <ul className="tier-perks">
                <li>Continuous recognition among guests</li>
              </ul>
              <DonateButton campaign="gala" fallbackHref="#tickets" className="btn btn-outline">
                Become a Bronze Sponsor
              </DonateButton>
            </div>
            <div className="tier-card">
              <span className="tier-name">Silver — Reception Hour Sponsor</span>
              <span className="tier-price">$1,000</span>
              <p className="tier-desc">Prominent recognition during the welcome champagne hour.</p>
              <ul className="tier-perks">
                <li>Name &amp; logo displayed at the event</li>
                <li>Featured in the gala journal</li>
              </ul>
              <DonateButton campaign="gala" fallbackHref="#tickets" className="btn btn-outline">
                Become a Silver Sponsor
              </DonateButton>
            </div>
            <div className="tier-card">
              <span className="tier-name">Gold — Gala Underwriter</span>
              <span className="tier-price">$5,000</span>
              <p className="tier-desc">Premier recognition throughout the event and gala journal.</p>
              <ul className="tier-perks">
                <li>Prominent logo placement all evening</li>
                <li>Acknowledged in all promotional materials</li>
                <li>Five complimentary tickets included</li>
              </ul>
              <DonateButton campaign="gala" fallbackHref="#tickets" className="btn btn-outline">
                Become a Gold Sponsor
              </DonateButton>
            </div>
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <p className="eyebrow">Journal Page Advertisement</p>
            <p style={{ color: 'var(--ink-soft)', marginTop: 10, fontSize: '0.98rem' }}>
              Business Card Ad $100 &middot; Quarter Page $200 &middot; Half Page $250 &middot; Full Page $300
            </p>
          </div>
        </div>
      </section>

      {/* HONOREES */}
      <section id="honorees">
        <div className="wrap">
          <SectionHead center eyebrow="2026 Honorees" title="Recognized this year.">
            The 12th Annual Founder&rsquo;s Gala honors educators, innovators, and community leaders &mdash; with a
            Global Tassels Student Leader as keynote speaker.
          </SectionHead>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {honoreeGroups.map((group) => (
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

      {/* PROGRAM */}
      <section className="ecosystem" id="program">
        <div className="wrap">
          <SectionHead eyebrow="Program" title="How the evening runs." />
          <div className="program-list" style={{ maxWidth: 760, margin: '0 auto' }}>
            {program.map((p) => (
              <div className="program-item" key={p.title}>
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <p>
                  <strong>
                    {p.time} &mdash; {p.title}
                  </strong>
                  <br />
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL & HOTEL */}
      <section id="travel">
        <div className="wrap">
          <div className="split reverse">
            <PhotoPlaceholder aria="Photo of the gala's host hotel exterior" label="Photo — host hotel" />
            <div>
              <p className="eyebrow">Travel &amp; Hotel Info</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.2rem)' }}>Planning your trip to New York.</h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
                Global Tassels has secured a discounted room block at the host hotel for gala weekend. Book early —
                the block typically sells out three weeks before the event.
              </p>
              <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: '1.02rem', maxWidth: 520 }}>
                Details on the host hotel, discounted rate, airport transportation, and parking will be sent to all
                ticket holders and posted here closer to the event.
              </p>
              <a className="link-arrow" style={{ marginTop: 20 }} href="#travel">
                Hotel Booking Details &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="ecosystem" id="gallery">
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
      <section id="past-galas">
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
              <h3>Save your seat for August 1, 2026.</h3>
              <p>Individual tickets and sponsorships are available now.</p>
            </div>
            <div className="callout-actions">
              <DonateButton campaign="gala" fallbackHref="#tickets" className="btn btn-gold">
                Purchase Tickets
              </DonateButton>
              <DonateButton campaign="gala" fallbackHref="#tickets" className="btn btn-ghost">
                Become a Sponsor
              </DonateButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
