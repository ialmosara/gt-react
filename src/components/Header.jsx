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
          <img className="brand-logo" src="/images/brand/logo-600.png" alt="Global Tassels" width="180" height="40" />
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
