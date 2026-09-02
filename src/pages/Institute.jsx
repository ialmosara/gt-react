import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function Institute() {
  useDocumentTitle('GT Institute');
  return (
    <>
      <PageHero
        eyebrow="GT Institute for Sustainability & Social Mobility"
        title="Launching soon — research built to make opportunity last."
        lede="The Institute will expand Global Tassels' work beyond scholarships into research, convenings, and innovative solutions for sustainable development and social mobility. Stay tuned."
        photoLabel="Photo — planning session for the Institute's launch"
        photoAria="Global Tassels staff planning the GT Institute's programming"
      />

      <section>
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder aria="Global Tassels staff and advisors planning the Institute's programming" label="Photo — Institute in the works" />
            <div>
              <p className="eyebrow">What the Institute will do</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>
                Education creates opportunity. Research will make it last.
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 540 }}>
                The GT Institute for Sustainability &amp; Social Mobility is being built to expand Global Tassels'
                work beyond scholarships and into research, knowledge creation, and professional learning — studying
                what actually keeps first-generation graduates connected to opportunity long after graduation.
              </p>
              <Link className="link-arrow" style={{ marginTop: 24 }} to="/give">
                Support the Institute &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ecosystem">
        <div className="wrap">
          <SectionHead center eyebrow="Focus areas" title="Where the Institute will concentrate its work." />
          <div className="program-list" style={{ maxWidth: 760, margin: '0 auto' }}>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" /></svg>
              </span>
              <p><strong>Applied research</strong> on the outcomes that matter most for first-generation graduates and their communities.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 12a5 5 0 0 1 5-5 5 5 0 0 1 5 5" stroke="currentColor" strokeWidth="1.5" /><path d="M4 19a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.5" /></svg>
              </span>
              <p><strong>Convenings &amp; conferences</strong> that bring together faculty, practitioners, and Global Tassels partners.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 19v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.6" /><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" /><path d="M15 5.2a3 3 0 0 1 0 5.8" stroke="currentColor" strokeWidth="1.6" /></svg>
              </span>
              <p><strong>Workforce development</strong> pathways connecting alumni to employers and career opportunities at home.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="2.6" fill="currentColor" /></svg>
              </span>
              <p><strong>Sustainability &amp; social mobility research</strong> shared publicly to inform the broader field, not just Global Tassels' own programs.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="callout" style={{ background: 'var(--purple-050)', color: 'var(--ink)' }}>
            <div>
              <p className="eyebrow">Institute Publications</p>
              <h3 style={{ color: 'var(--purple-900)', marginTop: 8 }}>Coming soon.</h3>
              <p style={{ color: 'var(--ink-soft)' }}>
                The Institute is still in development — its first research briefs and convenings haven't been
                published yet. Sign up for the newsletter to be the first to know when it launches.
              </p>
            </div>
            <div className="callout-actions">
              <Link className="btn btn-gold" to="/news">
                News &amp; Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="callout">
            <div>
              <h3>Interested in a research partnership?</h3>
              <p>The Institute welcomes collaboration with universities, NGOs, and fellow researchers.</p>
            </div>
            <div className="callout-actions">
              <Link className="btn btn-gold" to="/give">
                Support the Institute
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
