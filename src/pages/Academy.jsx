import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import MetricCounter from '../components/MetricCounter.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function Academy() {
  useDocumentTitle('GT Academy');
  return (
    <>
      <PageHero
        eyebrow="GT Academy"
        title="Education, scholarships, and leadership at the center."
        lede="GT Academy is the heart of the original Global Tassels mission — scholarships, leadership development, and a lasting commitment to student success."
        photoLabel="Photo — GT Academy scholars"
        photoAria="Global Tassels scholarship students on a university campus"
      />

      <section>
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder aria="A Global Tassels scholar studying on campus" label="Photo — scholar on campus" />
            <div>
              <p className="eyebrow">What the Academy does</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>
                A scholarship is the start, not the whole story.
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 540 }}>
                Every GT Academy scholar is selected for academic ability and leadership potential, not just
                financial need. From there, the Academy stays involved — through mentorship, leadership training,
                and a community-service expectation — for as long as a student is in the program and often well
                beyond graduation.
              </p>
              <Link className="link-arrow" style={{ marginTop: 24 }} to="/give">
                Sponsor a Student &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ecosystem">
        <div className="wrap">
          <SectionHead center eyebrow="Programs" title="How students move through the Academy." />
          <div className="program-list" style={{ maxWidth: 760, margin: '0 auto' }}>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7.5-4.6-10-9.3C.6 8.4 2.6 5 6 5c2 0 3.6 1.1 6 3.6C14.4 6.1 16 5 18 5c3.4 0 5.4 3.4 4 6.7C19.5 16.4 12 21 12 21z" stroke="currentColor" strokeWidth="1.5" /></svg>
              </span>
              <p><strong>Scholarships for marginalized students</strong> — full-ride scholarships for talented, economically disadvantaged students who show leadership potential and a commitment to community development.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6" /><path d="M5 20c1-4 4-6 7-6s6 2 7 6" stroke="currentColor" strokeWidth="1.6" /></svg>
              </span>
              <p><strong>University &amp; institutional partnerships</strong> creating pathways to college access where higher education is limited, through academic exchanges, mentorship, and capacity building.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 19v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.6" /><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" /></svg>
              </span>
              <p><strong>Workforce &amp; career development</strong> — career-readiness programs, including vocational and technical education aligned with Career and Technical Education (CTE) models.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12h4l2-7 4 14 2-7h6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              </span>
              <p><strong>Community engagement &amp; leadership development</strong> — service-learning and community-driven projects that make students agents of change at home.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="wrap">
          <div className="impact-head">
            <div>
              <p className="eyebrow on-dark">Academy By The Numbers</p>
              <h2 style={{ marginTop: 10 }}>What scholarships have made possible.</h2>
            </div>
          </div>
          <div className="stat-grid cols-3">
            <MetricCounter count={6} label="Countries" />
            <MetricCounter count={12} label="Years Awarding Scholarships" />
            <MetricCounter count={25000} prefix="$" label="Invested in Student Leaders, FY2025" />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="callout">
            <div>
              <h3>Help fund the next cohort.</h3>
              <p>Every scholarship starts with a donor willing to open a door.</p>
            </div>
            <div className="callout-actions">
              <Link className="btn btn-gold" to="/give">
                Sponsor a Student
              </Link>
              <Link className="btn btn-ghost" to="/ecosystem">
                Back to Our Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
