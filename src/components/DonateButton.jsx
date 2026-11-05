import { payments } from '../data/payments.js';

/**
 * A "Give" button that opens Global Tassels' PayPal donation page in a new tab.
 * Configured in src/data/payments.js.
 */
export default function DonateButton({ className, children }) {
  return (
    <a className={className} href={payments.paypalDonateUrl} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
