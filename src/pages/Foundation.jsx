import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function Foundation() {
  useDocumentTitle('GT Foundation');
  return (
    <>
      <PageHero
        eyebrow="GT Foundation"
        title="Fueling what's possible across the ecosystem."
        lede="The GT Foundation mobilizes the resources and relationships that sustain and expand opportunity for students around the world."
        photoLabel="Photo — Foundation partner reception"
        photoAria="Donors and partners at a Global Tassels Foundation event"
      />

      <section>
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder aria="Donors and community partners at a Global Tassels reception" label="Photo — donor reception" />
            <div>
              <p className="eyebrow">What the Foundation does</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>
                Every scholarship depends on someone showing up for it.
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 540 }}>
                The Foundation is responsible for philanthropy, fundraising, partnerships, and advancement across
                Global Tassels — building the relationships with individual donors, corporate partners, and
                institutional funders that make GT Academy and the GT Institute possible.
              </p>
              <Link className="link-arrow" style={{ marginTop: 24 }} to="/give">
                Give to Global Tassels &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ecosystem">
        <div className="wrap">
          <SectionHead center eyebrow="How the Foundation raises support" title="Ways donors and partners get involved." />
          <div className="program-list" style={{ maxWidth: 760, margin: '0 auto' }}>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7.5-4.6-10-9.3C.6 8.4 2.6 5 6 5c2 0 3.6 1.1 6 3.6C14.4 6.1 16 5 18 5c3.4 0 5.4 3.4 4 6.7C19.5 16.4 12 21 12 21z" stroke="currentColor" strokeWidth="1.5" /></svg>
              </span>
              <p><strong>Individual giving</strong>, including one-time gifts and monthly donors who sponsor a student's ongoing education.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 12a5 5 0 0 1 5-5 5 5 0 0 1 5 5" stroke="currentColor" strokeWidth="1.5" /><path d="M4 19a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.5" /></svg>
              </span>
              <p><strong>Corporate partnerships</strong> that combine funding with employee volunteering and skills-based support.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="2.6" fill="currentColor" /></svg>
              </span>
              <p><strong>Foundation &amp; institutional grants</strong> supporting specific programs across the Academy and Institute.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 4v9M6 8h12" stroke="currentColor" strokeWidth="1.5" /><path d="M4 21h16l-1.5-6h-13L4 21z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
              </span>
              <p><strong>The Founder's Gala</strong> — Global Tassels' flagship annual fundraising event, with ticket, sponsorship, and honoree opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="callout">
            <div>
              <h3>The 12th Annual Founder's Gala</h3>
              <p>New York &middot; August 1, 2026 — tickets and sponsorship packages are open.</p>
            </div>
            <div className="callout-actions">
              <Link className="btn btn-gold" to="/gala">
                Learn About the Gala
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
