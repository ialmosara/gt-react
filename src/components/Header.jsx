import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { primaryNav } from '../data/navigation.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on any resize back to desktop width.
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 980) setOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`site-header ${open ? 'nav-open' : ''}`}>
      <div className="nav-row">
        <Link className="brand" to="/" aria-label="Global Tassels home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 3L2 8l10 5 8-4.2V15h2V8L12 3z" fill="currentColor" />
              <path d="M6 12.2V16c0 2 2.7 4 6 4s6-2 6-4v-3.8l-6 3-6-3z" fill="currentColor" opacity="0.55" />
            </svg>
          </span>
          <span className="brand-name">
            Global Tassels
            <small>EDUCATION &middot; LEADERSHIP &middot; MOBILITY</small>
          </span>
        </Link>

        <nav className="primary" aria-label="Primary">
          {primaryNav.map((item) =>
            item.hash ? (
              <Link key={item.label} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-gold" to="/give">
            Donate
          </Link>
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primaryNav"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
