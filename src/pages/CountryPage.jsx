import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { getCountryBySlug, sharedPrograms } from '../data/countries.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function CountryPage() {
  const { slug } = useParams();
  const country = getCountryBySlug(slug);

  useDocumentTitle(country ? country.name : 'Country not found', country ? country.summary : undefined);

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

  const { name, summary, heroTag, timeline, gallery } = country;

  return (
    <>
      <PageHero eyebrow="Where We Work" title={name} lede={summary} photoLabel={heroTag} photoAria={`Global Tassels students and partners in ${name}`} />

      <section className="ecosystem" id="history">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">Our history in {name}</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.2rem)' }}>
                A timeline of our work.
              </h2>
              <div className="timeline" style={{ marginTop: 28 }}>
                {timeline.map((t) => (
                  <div className="timeline-item" key={t.when + t.text}>
                    <div className="timeline-year" style={{ fontSize: '1.05rem' }}>{t.when}</div>
                    <p>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <PhotoPlaceholder aria={`Global Tassels Student Leaders in ${name}`} label={`Photo — Student Leaders, ${name}`} style={{ aspectRatio: '4/5' }} />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SectionHead eyebrow="Programs" title={`How Global Tassels works in ${name}.`}>
            These programs run in every country where Global Tassels works.
          </SectionHead>
          <div className="program-list" style={{ maxWidth: 760 }}>
            {sharedPrograms.map((p) => (
              <div className="program-item" key={p.name}>
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <p><strong>{p.name}</strong> &mdash; {p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SectionHead eyebrow="Photo Gallery" title={`Global Tassels in ${name}.`} />
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
              <p>Global Tassels works in six countries, and is cultivating more.</p>
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
