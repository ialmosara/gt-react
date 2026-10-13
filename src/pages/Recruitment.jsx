import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { nominationWindows, windowStatus, windowDates } from '../data/recruitment.js';

const CONTACT = 'info@globaltassels.org';

const steps = [
  {
    title: 'Nomination',
    text: 'A student must be nominated by someone affiliated with a school, community-based organization, NGO, government office, or business.',
  },
  {
    title: 'Application',
    text: 'Nominated students are invited to an all-day open application session, where they take a basic English-language sample exam and bring their required documents.',
  },
  {
    title: 'Interviews',
    text: 'Each student sits for a two-to-one interview with a Global Tassels team member and a GT Community Advisor from their own country, plus a group interview.',
  },
  {
    title: 'Vetting',
    text: 'GT delegates review the student’s portfolio and the internal vetting process begins.',
  },
  {
    title: 'Final decision',
    text: 'Decisions can take up to three months. Acceptance comes by certified mail and a personal phone call; non-acceptance letters go by email to the student and the nominator.',
  },
];

const criteria = [
  { name: 'Academic excellence', desc: 'A strong academic record and real intellectual curiosity in their field.' },
  { name: 'Leadership skills', desc: 'Leadership experience in school or community, and the potential to take initiative and lead projects.' },
  { name: 'Community engagement', desc: 'A history of service and a demonstrated commitment to social change.' },
  { name: 'Independence & self-motivation', desc: 'Self-reliance, drive, and the ambition to overcome obstacles.' },
  { name: 'Passion for poverty reduction', desc: 'A genuine interest in poverty alleviation and an understanding of social justice.' },
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
            <PhotoPlaceholder aria="A nominated student at an open application session" label="Photo — open application session" />
            <div>
              <p className="eyebrow">How selection works</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>
                Five steps, from nomination to decision.
              </h2>
              <div className="pillars" style={{ marginTop: 28 }}>
                {steps.map((s, i) => (
                  <div className="pillar" key={s.title}>
                    <span className="pillar-num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              </article>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.88rem', marginTop: 28 }}>
            Also in cultivation: Thailand (visit date to be determined). Schedules change — email us to confirm
            a country&rsquo;s current status.
          </p>
        </div>
      </section>

      {/* WHO WE LOOK FOR */}
      <section id="criteria">
        <div className="wrap">
          <SectionHead center eyebrow="Who we look for" title="Students ready to lead change at home.">
            These are the basic criteria. Partner colleges and universities may add their own requirements, such
            as exams, documentation, and applications.
          </SectionHead>
          <div className="network-grid">
            {criteria.map((c) => (
              <div className="network-card" key={c.name}>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
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
