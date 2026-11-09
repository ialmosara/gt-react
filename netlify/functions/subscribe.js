// Netlify Function: POST { email } -> adds the address to Kit (formerly ConvertKit).
//
// Environment variables, set in the Netlify dashboard
// (Site configuration > Environment variables) — never commit these:
//   KIT_API_KEY   a Kit v4 API key (Kit > Account settings > Developer > "Add a new key")
//   KIT_FORM_ID   optional; the numeric ID of the Kit form the signups should join.
//                 If set, the form's own settings (e.g. confirmation email) apply.
//
// Kit API docs: https://developers.kit.com/api-reference/subscribers/create-a-subscriber
//
// Step 1 creates the subscriber. Kit documents this endpoint as an upsert, so
// re-subscribing an existing address returns 200 rather than an error.
// Step 2 (only if KIT_FORM_ID is set) adds them to the form; also 200 if already there.

const KIT_API = 'https://api.kit.com/v4';

const json = (statusCode, body) => ({ statusCode, body: JSON.stringify(body) });

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' });
  }

  const { KIT_API_KEY, KIT_FORM_ID } = process.env;
  if (!KIT_API_KEY) {
    return json(500, { error: 'Newsletter signup is not configured yet.' });
  }

  let email;
  try {
    ({ email } = JSON.parse(event.body || '{}'));
  } catch {
    return json(400, { error: 'Invalid request body.' });
  }

  const normalized = typeof email === 'string' ? email.trim().toLowerCase() : '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return json(400, { error: 'Please enter a valid email address.' });
  }
  const headers = { 'Content-Type': 'application/json', 'X-Kit-Api-Key': KIT_API_KEY };

  try {
    const created = await fetch(`${KIT_API}/subscribers`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email_address: normalized }),
    });

    if (!created.ok) {
      const data = await created.json().catch(() => ({}));
      if (created.status === 422) {
        return json(400, { error: 'Please enter a valid email address.' });
      }
      console.error('Kit create subscriber failed', created.status, data);
      return json(502, { error: 'Could not subscribe that address right now.' });
    }

    if (KIT_FORM_ID) {
      const added = await fetch(`${KIT_API}/forms/${encodeURIComponent(KIT_FORM_ID)}/subscribers`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ email_address: normalized }),
      });
      if (!added.ok) {
        const data = await added.json().catch(() => ({}));
        console.error('Kit add-to-form failed', added.status, data);
        return json(502, { error: 'Could not subscribe that address right now.' });
      }
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error('Kit request failed', err);
    return json(502, { error: 'Could not reach the mailing list right now.' });
  }
};
