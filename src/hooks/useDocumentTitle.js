import { useEffect } from 'react';

const DEFAULT_DESCRIPTION =
  'Global Tassels provides college education opportunities for underprivileged youth with leadership qualities in the developing world and supports community organizations working to reduce poverty.';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Sets the browser tab title and the page's meta description (plus the matching
 * Open Graph tags used when a link is shared). Pass just the page name — this
 * appends " — Global Tassels" for you. Omit the description to use the site default.
 */
export default function useDocumentTitle(pageName, description) {
  useEffect(() => {
    const title = pageName ? `${pageName} — Global Tassels` : 'Global Tassels';
    const desc = description || DEFAULT_DESCRIPTION;
    document.title = title;
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
  }, [pageName, description]);
}
