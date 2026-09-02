import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found — Global Tassels';
  }, []);

  return (
    <section>
      <div className="wrap not-found">
        <p className="eyebrow">404</p>
        <h1>We couldn&rsquo;t find that page.</h1>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 480 }}>
          The page you're looking for may have moved. Head back home, or explore where Global Tassels works.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>
          <Link className="btn btn-outline" to="/where-we-work">
            Where We Work
          </Link>
        </div>
      </div>
    </section>
  );
}
