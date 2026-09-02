import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import MetricCounter from '../components/MetricCounter.jsx';
import { countries } from '../data/countries.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function WhereWeWork() {
  useDocumentTitle('Where We Work');
  return (
    <>
      <PageHero
        eyebrow="Where We Work"
        title="Our global community"
        lede="We work alongside students, alumni, and community partners in six countries — and this page is built so a seventh is just one more entry, not a redesign."
        photoLabel="Photo — GT country delegation"
        photoAria="Global Tassels staff and students representing several partner countries"
      />

      <section>
        <div className="wrap">
          <SectionHead center eyebrow="Six countries, one model" title="Choose a country to explore its program.">
            Every country page follows the same structure: students, alumni, community partners, programs, impact,
            and stories.
          </SectionHead>

          <div className="country-grid">
            {countries.map((c) => (
              <Link className="country-card" to={`/where-we-work/${c.slug}`} key={c.slug}>
                <PhotoPlaceholder aria={`Photo of Global Tassels students and partners in ${c.name}`} label={c.heroTag} />
                <div className="body">
                  <h3>{c.name}</h3>
                  <p>{c.summary}</p>
                  <span className="stats-line">
                    {c.stats.students}+ current students &middot; {c.stats.alumni.toLocaleString()}+ alumni
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="wrap">
          <div className="impact-head">
            <div>
              <p className="eyebrow on-dark">Across All Six Countries</p>
              <h2 style={{ marginTop: 10 }}>The reach, added up.</h2>
            </div>
          </div>
          <div className="stat-grid cols-3">
            <MetricCounter count={6} label="Active Countries" />
            <MetricCounter count={3} label="Countries in Cultivation" />
            <MetricCounter count={12} label="Years of Impact" />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: 24, textAlign: 'center' }}>
            As we grow, we plan to work with other countries around the world — currently cultivating partnerships
            in Turkey, Peru, and Thailand.
          </p>
        </div>
      </section>
    </>
  );
}
