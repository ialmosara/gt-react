// Netlify Function: POST { email } -> adds the address to a Mailchimp audience.
//
// Requires three environment variables, set in the Netlify dashboard
// (Site configuration > Environment variables) — never commit these:
//   MAILCHIMP_API_KEY        e.g. "abc123def456...-us21"  (the "-us21" suffix IS the server prefix)
//   MAILCHIMP_SERVER_PREFIX  e.g. "us21" (the part after the dash in the API key)
//   MAILCHIMP_LIST_ID        the Audience/List ID from Mailchimp's Audience settings
//
// Mailchimp docs: https://mailchimp.com/developer/marketing/api/list-members/add-or-update-list-member/
//
// Uses PUT + an MD5 hash of the lowercased email as the member's resource ID.
// That makes this endpoint idempotent — re-subscribing an existing address
// just updates their status to "subscribed" instead of erroring.

import crypto from 'node:crypto';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const { MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_LIST_ID } = process.env;
  if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_LIST_ID) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Newsletter signup is not configured yet.' }),
    };
  }

  let email;
  try {
    ({ email } = JSON.parse(event.body || '{}'));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body.' }) };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Please enter a valid email address.' }) };
  }

  const normalized = email.trim().toLowerCase();
  const memberHash = crypto.createHash('md5').update(normalized).digest('hex');
  const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${memberHash}`;

  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
      },
      body: JSON.stringify({
        email_address: normalized,
        status_if_new: 'subscribed',
        status: 'subscribed',
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      // "Member Exists" with status already subscribed isn't really an error for us.
      if (data.title === 'Member Exists') {
        return { statusCode: 200, body: JSON.stringify({ ok: true }) };
      }
      return {
        statusCode: 400,
        body: JSON.stringify({ error: data.detail || 'Could not subscribe that address.' }),
      };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    return { statusCode: 502, body: JSON.stringify({ error: 'Could not reach the mailing list right now.' }) };
  }
};
