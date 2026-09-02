import PhotoPlaceholder from './PhotoPlaceholder.jsx';

/**
 * The compact hero banner used at the top of every subpage (About,
 * Ecosystem detail pages, Where We Work, a country page, Leadership).
 * Distinct from the full-bleed homepage hero, which stays unique to Home.
 */
export default function PageHero({ eyebrow, title, lede, photoLabel, photoAria }) {
  return (
    <section className="page-hero">
      <PhotoPlaceholder className="page-hero-photo" label={photoLabel} aria={photoAria} />
      <div className="wrap page-hero-inner">
        {eyebrow && <p className="eyebrow on-dark">{eyebrow}</p>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </section>
  );
}
