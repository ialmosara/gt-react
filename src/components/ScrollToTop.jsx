import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On every route change: scrolls to the top of the page, or — if the URL
 * includes a #hash (e.g. a footer link to /about#founder, or a homepage
 * section like /#give) — scrolls that element into view once it's mounted.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.replace('#', '');
    // Wait a tick for the new page's content to mount before locating the target.
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
