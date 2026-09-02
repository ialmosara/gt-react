import { Link } from 'react-router-dom';
import { footerColumns } from '../data/navigation.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <span className="brand-mark" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L2 8l10 5 8-4.2V15h2V8L12 3z" fill="currentColor" />
                <path d="M6 12.2V16c0 2 2.7 4 6 4s6-2 6-4v-3.8l-6 3-6-3z" fill="currentColor" opacity="0.7" />
              </svg>
            </span>
            <span className="brand-name">Global Tassels</span>
          </Link>
          <p>
            Expanding access to higher education and developing emerging leaders who create sustainable change in
            their communities.
          </p>
        </div>

        {footerColumns.map((col) => (
          <div className="foot-col" key={col.heading}>
            <h4>{col.heading}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrap footer-bottom">
        <span>&copy; {new Date().getFullYear()} Global Tassels. A 501(c)(3) nonprofit organization.</span>
        <div className="socials" aria-label="Social media">
          <a href="#" aria-label="Facebook">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 22v-8.5H16l.5-3.5h-3V7.7c0-1 .3-1.7 1.7-1.7H16.6V2.8C16 2.7 14.9 2.6 13.7 2.6c-2.6 0-4.4 1.6-4.4 4.5v2.9H6.5V13H9.3v9h4.2z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3v5.8H9z" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="2.5" y="6" width="19" height="12" rx="3" />
              <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Accessibility</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
