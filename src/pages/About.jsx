import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const history = [
  {
    year: '2014',
    text: 'Dr. Elvin T. Ramos founds Global Tassels in May, writing the original mission and vision while abroad in Norway and Germany. By December, the IRS grants 501(c)(3) status after delegate trips to Colombia, Haiti, and India.',
  },
  {
    year: '2015',
    text: 'The first cohort of GT Student Leaders is selected from five pilot countries, and the Founder’s Gala holds its first year as Global Tassels’ flagship annual fundraiser.',
  },
  {
    year: '2016',
    text: 'Global Tassels becomes a charity partner of the Bank of New York Mellon Corporate Social Responsibility office and signs a partnership agreement with the Diplomatic Council.',
  },
  {
    year: '2020',
    text: 'Dr. Ramos steps down as President effective June 30, opening a new chapter of leadership carried forward by Dr. Shánte Bassett, Ms. Ashley Johnson, and Dr. Richard Zalman.',
  },
  {
    year: '2025',
    text: 'Led by Board Chair Dr. Elvin T. Ramos and Latosha Baldwin — Global Tassels’ 5th President & CEO — the organization develops its 2026–2030 Strategic Plan, holds its 11th Annual Founder’s Gala at the Eaton Hotel in Washington, DC, and launches the 360 Community Impact Project.',
  },
  {
    year: '2026',
    text: 'Global Tassels publishes its 2025 Annual Report and begins carrying out “Raising the Bar,” its 2026–2030 Strategic Plan, while celebrating its 12th Annual Founder’s Gala in New York.',
  },
];

export default function About() {
  useDocumentTitle('About');
  return (
    <>
      <PageHero
        eyebrow="About Global Tassels"
        title="How a scholarship fund became a global ecosystem."
        lede="The mission hasn't changed since day one — expand access to higher education and develop the leaders who put it to work at home. What's grown around that mission is what this page is about."
        photoLabel="Photo — GT delegation trip"
        photoAria="Global Tassels leadership and student delegates on a visit to a partner community"
      />

      {/* OUR STORY */}
      <section id="our-story">
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder aria="Founding cohort of Global Tassels scholarship students" label="Photo — the first scholarship cohort" />
            <div>
              <p className="eyebrow">Our Story</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>
                A scholarship fund that grew into a global ecosystem.
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 540 }}>
                Global Tassels started with a simple observation: talented, driven students were being kept out of
                higher education by circumstance, not by ability. What began as a small scholarship fund for a
                handful of students has grown into a global ecosystem spanning six countries — GT Academy, GT
                Foundation, and the GT Institute for Sustainability &amp; Social Mobility — while holding onto the
                same conviction that started it all: that education and leadership, together, are what break cycles
                of poverty.
              </p>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 540 }}>
                Today, Global Tassels students and alumni are expected to be more than recipients of a scholarship —
                they're expected to become contributors to their own communities, a commitment we call{' '}
                <Link className="link-arrow" style={{ fontSize: '1em' }} to="/impact">
                  360 Impact
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="ecosystem" id="mission-vision">
        <div className="wrap">
          <SectionHead center eyebrow="Mission, Vision & Guiding Principles" title="What we believe, and why it holds together." />
          <div className="eco-grid">
            <article className="eco-card academy">
              <div className="body">
                <p className="kicker">Our Mission</p>
                <h3>Why we exist</h3>
                <p className="desc">
                  Provide college education opportunities for underprivileged youth with leadership qualities living in the developing world, and support local community-based organizations with programs related to poverty reduction.
                </p>
              </div>
            </article>
            <article className="eco-card foundation">
              <div className="body">
                <p className="kicker">Our Vision</p>
                <h3>What we're working toward</h3>
                <p className="desc">A network of change agents working to eradicate poverty around the world.</p>
              </div>
            </article>
            <article className="eco-card institute">
              <div className="body">
                <p className="kicker">Our Guiding Principles</p>
                <h3>The principles that guide us</h3>
                <p className="desc">
                  Empowerment through Education &middot; Sustainable Development &middot; Cultural Sensitivity &amp;
                  Collaboration &middot; Transparency &amp; Accountability &middot; Global Citizenship &amp; Social
                  Responsibility.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* OUR HISTORY */}
      <section id="history">
        <div className="wrap">
          <SectionHead eyebrow="Our History" title="From one scholarship fund to a global ecosystem.">
            A short timeline of how Global Tassels got here — and where the current strategic plan is taking it next.
          </SectionHead>
          <div className="timeline">
            {history.map((item) => (
              <div className="timeline-item" key={item.year}>
                <div className="timeline-year">{item.year}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR FOUNDER */}
      <section className="ecosystem" id="founder">
        <div className="wrap">
          <div className="split reverse">
            <PhotoPlaceholder aria="Portrait of Dr. Elvin T. Ramos, founder of Global Tassels" label="Photo — Dr. Elvin T. Ramos" />
            <div>
              <p className="eyebrow">Our Founder</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>
                Dr. Elvin T. Ramos, D.A.
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 540 }}>
                Driven by his passion for education and global development, Dr. Ramos founded Global Tassels in May
                2014, drafting the organization's original mission and vision while abroad in Norway and Germany.
                The launch coincided with the United Nations' 2015–2030 Sustainable Development Goals, and Global
                Tassels positioned itself within that broader movement to end extreme poverty through education.
              </p>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 540 }}>
                Dr. Ramos stepped down as President effective June 30, 2020, after six years leading the
                organization he founded. He continues to serve on the Global Tassels Board of Directors.
              </p>
              <Link className="link-arrow" style={{ marginTop: 24 }} to="/leadership#founder">
                Meet Our Leadership &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC PLAN */}
      <section id="strategic-plan">
        <div className="wrap">
          <SectionHead center eyebrow="Strategic Plan 2026–2030" title="Raising the bar.">
            Four goals guide the 2026–2030 strategic plan &mdash; a framework for strengthening programs, advancing
            partnerships, and growing Global Tassels&rsquo; reach. Its rallying cry: #LeadingChangeTogether.
          </SectionHead>
          <div className="program-list" style={{ maxWidth: 760, margin: '0 auto' }}>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" /></svg>
              </span>
              <p><strong>Goal 1 &mdash; Transformative leadership &amp; programmatic strategy.</strong> Build a leadership development framework with annual governance and equity-centered training, grow LINC programs and a 360 Impact Commitment Dashboard, and strengthen financial stewardship with quarterly dashboards and a multi-year funding model.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6" /><path d="M5 20c1-4 4-6 7-6s6 2 7 6" stroke="currentColor" strokeWidth="1.6" /></svg>
              </span>
              <p><strong>Goal 2 &mdash; Organizational development &amp; cultural infrastructure.</strong> Deepen alumni engagement, unify the GT brand and website under a global communications strategy, strengthen governance with a balanced scorecard, and reaffirm the mission, vision, and core values with the Board, staff, and alumni.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="2.6" fill="currentColor" /></svg>
              </span>
              <p><strong>Goal 3 &mdash; Strategic growth in fundraising &amp; global partnerships.</strong> Design a multi-year fundraising plan through the GT Foundation, form Regional Partnership Councils, and cultivate two to three new countries each year through ethical, locally rooted expansion.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12h4l2-7 4 14 2-7h6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              </span>
              <p><strong>Goal 4 &mdash; Innovative storytelling &amp; community impact.</strong> Launch signature GT Institutes, create the GT StoryLab and a &ldquo;Voices of Global Tassels&rdquo; digital archive, fund community projects with partners in students&rsquo; home areas, and publish an annual GT Impact Report.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALLOUT */}
      <section>
        <div className="wrap">
          <div className="callout">
            <div>
              <h3>Want the details behind the plan?</h3>
              <p>Governance documents, annual reports, and financial information are available on the Leadership & Governance page.</p>
            </div>
            <div className="callout-actions">
              <Link className="btn btn-gold" to="/leadership#governance">
                Governance &amp; Transparency
              </Link>
              <Link className="btn btn-ghost" to="/leadership">
                Leadership &amp; Governance
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
