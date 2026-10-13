import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { getCountryBySlug } from '../data/countries.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function CountryPage() {
  const { slug } = useParams();
  const country = getCountryBySlug(slug);

  useDocumentTitle(country ? country.name : 'Country not found');

  if (!country) {
    return (
      <section>
        <div className="wrap not-found">
          <p className="eyebrow">Where We Work</p>
          <h1>We don&rsquo;t have a page for that country yet.</h1>
          <p style={{ color: 'var(--ink-soft)', maxWidth: 480 }}>
            Global Tassels currently works in six countries. Take a look at the full list, or head back home.
          </p>
          <Link className="btn btn-primary" to="/where-we-work">
            View All Countries
          </Link>
        </div>
      </section>
    );
  }

  const { name, summary, heroTag, programs, impact, stories, gallery } = country;

  return (
    <>
      <PageHero eyebrow="Where We Work" title={name} lede={summary} photoLabel={heroTag} photoAria={`Global Tassels students and partners in ${name}`} />

      <section className="ecosystem">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">Our Students &amp; Alumni</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.2rem)' }}>
                Student leaders &amp; alumni in {name}.
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1rem', maxWidth: 520 }}>{summary}</p>
              <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: '1rem', maxWidth: 520 }}>{impact}</p>
            </div>
            <PhotoPlaceholder aria={`Global Tassels students in ${name}`} label={`Photo — students, ${name}`} style={{ aspectRatio: '4/5' }} />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SectionHead eyebrow="Programs" title={`How Global Tassels works in ${name}.`} />
          <div className="program-list" style={{ maxWidth: 760 }}>
            {programs.map((p) => (
              <div className="program-item" key={p}>
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {stories.length > 0 && (
        <section className="ecosystem">
          <div className="wrap">
            <SectionHead center eyebrow="Stories" title={`Stories from ${name}`} />
            <div className="stories-grid" style={{ gridTemplateColumns: `repeat(${Math.min(stories.length, 4)}, 1fr)`, maxWidth: 900, margin: '0 auto' }}>
              {stories.map((s) => (
                <article className="story-card" key={s.name}>
                  <PhotoPlaceholder aria={`Portrait related to ${s.name}, ${name}`} />
                  <p className="kicker">{s.kicker}</p>
                  <h3>{s.name}</h3>
                  <p className="place">{name}</p>
                  <p className="desc">{s.blurb}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="wrap">
          <SectionHead eyebrow="Photo Gallery" title={`Life in the ${name} program.`} />
          <div className="gallery-grid">
            {gallery.map((label) => (
              <PhotoPlaceholder key={label} aria={`${label}, ${name}`} label={label} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="callout">
            <div>
              <h3>Explore the rest of our global community.</h3>
              <p>Global Tassels works in six countries, each with its own students, partners, and stories.</p>
            </div>
            <div className="callout-actions">
              <Link className="btn btn-gold" to="/where-we-work">
                All Countries
              </Link>
              <Link className="btn btn-ghost" to="/give">
                Sponsor a Student
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
