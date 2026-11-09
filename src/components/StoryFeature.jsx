import { Link } from 'react-router-dom';
import PhotoPlaceholder from './PhotoPlaceholder.jsx';

/**
 * The one student story the site can tell from published facts, plus a note
 * about the "Voices of Global Tassels" archive in the 2026-2030 strategic plan.
 * Replace this with real stories as the archive fills up.
 */
export default function StoryFeature() {
  return (
    <>
      <div className="split">
        <PhotoPlaceholder
          src="/images/people/karen-gutierrez.jpg"
          aria="Karen Gutiérrez, a Global Tassels Student Leader from Colombia"
          style={{ aspectRatio: '1 / 1', maxWidth: 420 }}
        />
        <div>
          <p className="eyebrow">Student Leader &middot; Colombia</p>
          <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>Karen Gutiérrez</h2>
          <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
            Karen is a Global Tassels Student Leader from Colombia. At the 12th Annual Founder&rsquo;s Gala in 2026
            she was the keynote speaker and received the Founder&rsquo;s Leaders Key Award, the highest award
            Global Tassels bestows for commitment and service in leadership, education, and civic engagement.
          </p>
          <Link className="link-arrow" style={{ marginTop: 24 }} to="/where-we-work/colombia">
            Global Tassels in Colombia &rarr;
          </Link>
        </div>
      </div>
      <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.92rem', maxWidth: 620, margin: '48px auto 0' }}>
        More stories are on the way. Global Tassels is building &ldquo;Voices of Global Tassels,&rdquo; a digital
        archive of student journeys, alumni testimonials, and community impact stories, as part of its 2026&ndash;2030
        strategic plan.
      </p>
    </>
  );
}
