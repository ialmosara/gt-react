import { useEffect } from 'react';
import { givebutter } from '../data/givebutter.js';

let widgetScriptPromise = null;

/**
 * Loads Givebutter's widget script once (it upgrades any
 * .givebutter-campaign-button elements on the page into popup donation/
 * ticketing forms). Safe to call from multiple components — subsequent
 * calls reuse the same script tag instead of injecting it again.
 */
function useGivebutterWidget() {
  useEffect(() => {
    if (!givebutter.accountId || widgetScriptPromise) return;
    widgetScriptPromise = new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = `https://widgets.givebutter.com/latest.umd.cjs?acct=${givebutter.accountId}&p=other`;
      script.async = true;
      script.onload = resolve;
      document.body.appendChild(script);
    });
  }, []);
}

/**
 * A "Give"/"Buy Ticket"/"Become a Sponsor" button. When Givebutter is
 * configured (src/data/givebutter.js), it opens Givebutter's popup checkout
 * for the given campaign. Until then, it falls back to a plain in-page
 * anchor so the site still works — nothing looks broken pre-setup.
 *
 * `campaign` — 'donate' | 'gala', matching the keys in data/givebutter.js
 * `fallbackHref` — where to link before Givebutter is configured
 */
export default function DonateButton({ campaign, fallbackHref = '#', className, children }) {
  useGivebutterWidget();

  const campaignCode = campaign === 'gala' ? givebutter.galaCampaign : givebutter.donateCampaign;
  const isConfigured = Boolean(givebutter.accountId && campaignCode);

  if (isConfigured) {
    return (
      <a className={`givebutter-campaign-button ${className || ''}`} data-campaign={campaignCode}>
        {children}
      </a>
    );
  }

  return (
    <a className={className} href={fallbackHref}>
      {children}
    </a>
  );
}
