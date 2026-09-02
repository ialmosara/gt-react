import { useEffect } from 'react';

/**
 * Sets document.title for the current page. Pass just the page name —
 * this appends " — Global Tassels" for you.
 */
export default function useDocumentTitle(pageName) {
  useEffect(() => {
    document.title = pageName ? `${pageName} — Global Tassels` : 'Global Tassels';
  }, [pageName]);
}
