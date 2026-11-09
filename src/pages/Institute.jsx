import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function Institute() {
  useDocumentTitle(
    'GT Institute',
    'The GT Institute for Sustainability & Social Mobility launches in 2027 with the Polytechnic University of the Philippines, advancing education and applied research for adult learners.'
  );
  return (
    <>
      <PageHero
        eyebrow="GT Institute for Sustainability & Social Mobility"
        title="Launching in 2027 — research built to make opportunity last."
        lede="The Institute launches in 2027 in partnership with the Polytechnic University of the Philippines (PUP), advancing education and applied research on sustainable practices, workforce development, and social mobility."
        photoLabel="Photo — GT Institute"
        photoAria="Global Tassels GT Institute team and partners"
      />

      <section>
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder aria="GT Institute faculty and partners working together" label="Photo — GT Institute" />
            <div>
              <p className="eyebrow">What the Institute will do</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>
                Education creates opportunity. Research will make it last.
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 540 }}>
                The GT Institute for Sustainability &amp; Social Mobility will empower adult learners (ages 25 and up)
                and communities through transformative education and applied research centered on sustainable
                practices and workforce development &mdash; a hub for learning, innovation, and action that
                bridges education, sustainability, and opportunity.
              </p>
              <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: '1.02rem', maxWidth: 540 }}>
                Dr. Jeffrey Acido serves as Executive Director and Chief Institute Officer, supported by Institute
                Ambassadors Javette Johnson and Vivian Bejarin.
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
              <p><strong>Education for adult learners</strong> (ages 25 and up) seeking career realignment, centered on sustainable practices and workforce development.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 12a5 5 0 0 1 5-5 5 5 0 0 1 5 5" stroke="currentColor" strokeWidth="1.5" /><path d="M4 19a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.5" /></svg>
              </span>
              <p><strong>Applied research</strong> on sustainability and social mobility that bridges education, environmental stewardship, and opportunity.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 19v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.6" /><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" /><path d="M15 5.2a3 3 0 0 1 0 5.8" stroke="currentColor" strokeWidth="1.6" /></svg>
              </span>
              <p><strong>Workforce development</strong> and training pathways aligned with Career and Technical Education (CTE) models.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="2.6" fill="currentColor" /></svg>
              </span>
              <p><strong>A hub for learning, innovation, and action</strong> — the first of several themed GT Institutes planned in the 2026–2030 strategic plan, alongside Leadership in Community and Global Education.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="callout" style={{ background: 'var(--purple-050)', color: 'var(--ink)' }}>
            <div>
              <p className="eyebrow">Institute Publications</p>
              <h3 style={{ color: 'var(--purple-900)', marginTop: 8 }}>First publications to come.</h3>
              <p style={{ color: 'var(--ink-soft)' }}>
                The Institute&rsquo;s first research briefs and convenings will be posted here as they&rsquo;re published. Email us to be the first to know.
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
