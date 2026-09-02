import { useState } from 'react';

/**
 * The "Stay connected" email signup used on Home and News & Events.
 * Posts to a Netlify Function (/.netlify/functions/subscribe) which adds the
 * address to the Mailchimp list configured via environment variables — see
 * netlify/functions/subscribe.js and the README's "Email list" section.
 */
export default function NewsletterForm({ idSuffix = '' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');
  const inputId = `nl-email${idSuffix ? `-${idSuffix}` : ''}`;

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setStatus('success');
      setMessage("You're subscribed — thanks for staying connected!");
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage(err.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <form className="nl-form" onSubmit={handleSubmit}>
      <label htmlFor={inputId} className="visually-hidden">
        Email address
      </label>
      <input
        id={inputId}
        type="email"
        placeholder="Your email address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading'}
      />
      <button className="btn btn-primary" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
      </button>
      {message && (
        <p className={`nl-message ${status === 'error' ? 'is-error' : 'is-success'}`} role="status">
          {message}
        </p>
      )}
    </form>
  );
}
