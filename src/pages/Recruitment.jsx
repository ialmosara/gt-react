import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { nominationWindows, windowStatus, windowDates } from '../data/recruitment.js';

const CONTACT = 'info@globaltassels.org';

// Source: the GT Academy "Global Recruitment Process" infographic sent by the founder (Oct 2026).
const steps = [
  {
    title: 'Nomination & outreach',
    points: [
      'Engage with schools, community partners, and networks.',
      'Invite nominations for Grade 11–12 students.',
      'Share Global Tassels’ mission, eligibility criteria, and the nomination process.',
      'Confirm qualified nominees and schedule interviews.',
    ],
  },
  {
    title: 'Pre-interview preparation',
    points: [
      'Review nominations and supporting documents.',
      'Prepare interview questions and tools using the TIRCA framework.',
      'Confirm the interview schedule and logistics.',
      'Coordinate with local partners and venues.',
    ],
  },
  {
    title: 'Student interviews & TIRCA assessment',
    points: [
      'Conduct group activities and individual interviews.',
      'Assess each student against the five TIRCA criteria below.',
      'Collect applications, verify information, and take student photos.',
    ],
  },
  {
    title: 'Review & recommend',
    points: [
      'The delegation debriefs and reviews all interview notes and assessments.',
      'Top candidates are identified using the TIRCA rubric and alignment with the Global Tassels mission.',
      'The delegation prepares a Visit Summary Report with recommendations.',
      'Top candidates are submitted for board review and presentation.',
    ],
  },
  {
    title: 'Board deliberation & final selection',
    points: [
      'The delegation presents its top candidates to Global Tassels leadership, the Board of Directors, and Foundation Commissioners.',
      'They discuss, deliberate, and vote.',
      'The selected GT Student Leader is announced and welcomed into the Global Tassels family.',
    ],
  },
];

const tirca = [
  { letter: 'T', name: 'Talent & Potential' },
  { letter: 'I', name: 'Impact & Initiative' },
  { letter: 'R', name: 'Resilience & Character' },
  { letter: 'C', name: 'Community Engagement' },
  { letter: 'A', name: 'Academic Commitment' },
];

const statusLabel = { open: 'Open', closed: 'Closed', soon: 'Opens soon' };

export default function Recruitment() {
  useDocumentTitle('Recruitment & Nominations');
  const now = new Date();
  const windows = nominationWindows
    .map((w) => ({ ...w, state: windowStatus(w, now), dates: windowDates(w) }))
    .sort((a, b) => (a.state === 'open' ? 0 : 1) - (b.state === 'open' ? 0 : 1));
  const anyOpen = windows.some((w) => w.state === 'open');

  return (
    <>
      <PageHero
        eyebrow="Global Recruitment"
        title="Nominate a student leader."
        lede="Global Tassels awards full college scholarships to high-achieving young leaders who show exceptional promise but need financial support to pursue higher education."
        photoLabel="Photo — recruitment interviews"
        photoAria="Global Tassels team members interviewing a student during global recruitment"
      />

      {/* HOW IT WORKS */}
      <section id="process">
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder aria="Global Tassels delegation interviewing prospective Student Leaders" label="Photo — recruitment interviews" />
            <div>
              <p className="eyebrow">How selection works</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>
                Five stages, from nomination to selection.
              </h2>
              <div className="pillars" style={{ marginTop: 28 }}>
                {steps.map((st, i) => (
                  <div className="pillar" key={st.title}>
                    <span className="pillar-num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{st.title}</h3>
                      <ul style={{ color: 'var(--ink-soft)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {st.points.map((pt) => (
                          <li key={pt}>&bull; {pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="callout" style={{ marginTop: 56 }}>
            <div>
              <h3>How long does it take?</h3>
              <p>
                The process can take up to six months, from initial outreach and nominations to the final
                selection and welcome of a new GT Student Leader. After every visit, a Visit Summary Report is
                shared with the entire Global Tassels community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOMINATION WINDOWS */}
      <section className="ecosystem" id="windows">
        <div className="wrap">
          <SectionHead center eyebrow="Nomination windows" title="Each country has its own timeline.">
            Nomination forms open only during a country&rsquo;s window.{' '}
            {anyOpen
              ? 'Nominations are open now in the countries marked below.'
              : 'No window is open right now — check back, or email us to be notified.'}
          </SectionHead>
          <div className="window-grid">
            {windows.map((w) => (
              <article className="window-card" key={w.country}>
                <div className="window-head">
                  <h3>{w.country}</h3>
                  <span className={`status-pill ${w.state}`}>{statusLabel[w.state]}</span>
                </div>
                {w.dates && <p className="window-line">Window: {w.dates}</p>}
                {w.visit && <p className="window-line">Cultivation visit: {w.visit}</p>}
                {w.event && <p className="window-line">Global recruitment: {w.event}</p>}
                {w.note && <p className="window-line"><strong>{w.note}</strong></p>}
              </article>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.88rem', marginTop: 28 }}>
            Also in cultivation: Turkey, Peru, Sierra Leone, Guatemala, and Thailand. Schedules change — email us to
            confirm a country&rsquo;s current status.
          </p>
        </div>
      </section>

      {/* THE TIRCA RUBRIC */}
      <section id="criteria">
        <div className="wrap">
          <SectionHead center eyebrow="How candidates are assessed" title="The TIRCA framework.">
            Every candidate is assessed against five criteria. Nominations are open to Grade 11&ndash;12 students,
            and partner colleges and universities may add their own requirements.
          </SectionHead>
          <div className="network-grid">
            {tirca.map((t) => (
              <div className="network-card" key={t.name} style={{ alignItems: 'center', textAlign: 'center' }}>
                <span className="pillar-num" style={{ fontSize: '2rem', width: 'auto' }}>{t.letter}</span>
                <h3>{t.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO CAN NOMINATE */}
      <section className="ecosystem" id="nominate">
        <div className="wrap">
          <SectionHead center eyebrow="Nominating a student" title="Who can nominate, and what to have ready." />
          <div className="doc-list" style={{ alignItems: 'start' }}>
            <div className="network-card">
              <h3>Who can nominate</h3>
              <p>
                Community leaders representing schools and universities, community-based organizations,
                government offices, businesses, religious organizations, nonprofits, and NGOs. Students cannot
                nominate themselves.
              </p>
            </div>
            <div className="network-card">
              <h3>What to have ready</h3>
              <p>
                Your name, affiliation, title, and contact details; the student&rsquo;s name, school, graduation
                year, and contact details; and short answers on how you know the student, what inspires you about
                them, why they fit Global Tassels&rsquo; mission, and how they&rsquo;re part of their community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs">
        <div className="wrap">
          <SectionHead eyebrow="Beyond selection" title="What a Student Leader commits to.">
            Recruitment is the start of a longer partnership, built around two community-focused programs.
          </SectionHead>
          <div className="program-list" style={{ maxWidth: 760 }}>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" /><path d="M6.5 10.7V16c0 1.8 2.5 3.3 5.5 3.3s5.5-1.5 5.5-3.3v-5.3" stroke="currentColor" strokeWidth="1.6" /></svg>
              </span>
              <p><strong>Project AIR &ldquo;Academia In Reach&rdquo;</strong> &mdash; Global Tassels&rsquo; leadership and academic development program for service-minded students from disadvantaged communities. Student Leaders receive counseling, a support network, career training, and language and cultural preparation to succeed at partner institutions, then return home for a two-year service commitment to local anti-poverty initiatives.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="2.6" fill="currentColor" /></svg>
              </span>
              <p><strong>Project JOI &ldquo;Justice &amp; Opportunity Initiative&rdquo;</strong> &mdash; while studying, Student Leaders are given the foundation and framework to start a community hub for innovation, open to everyone in their home community, and designed around the UN Sustainable Development Goals. Global Tassels supports each project from inception to completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="wrap">
          <div className="callout">
            <div>
              <h3>Know a student who should apply?</h3>
              <p>
                Email us to request the nomination form for an open country, or to ask about the TIRCA
                (International Recruitment Course of Action) documents that describe the full process.
              </p>
            </div>
            <div className="callout-actions">
              <a className="btn btn-gold" href={`mailto:${CONTACT}?subject=Student%20nomination%20request`}>
                Request a nomination form
              </a>
              <a className="btn btn-ghost" href={`mailto:${CONTACT}?subject=Recruitment%20question`}>
                Ask a question
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
