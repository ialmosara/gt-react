// Per-country nomination windows for the Recruitment & Nominations page.
// Source: globaltassels.org/recruitment/nominations (last updated 2026-09-23).
//
// Update this file as windows open and close — the page works out the badge
// ("Open", "Closed", "Opens soon") from the dates below, so a dated window
// closes itself. An entry with no dates uses `status` as written.
//
//   status   'open' | 'closed'        used when there are no dates
//   opens    'YYYY-MM-DD'             optional
//   closes   'YYYY-MM-DD'             optional, inclusive
//   visit    cultivation-visit timing (free text)
//   event    global-recruitment event (free text)

export const nominationWindows = [
  { country: 'Cambodia', status: 'open', visit: null, event: 'March 24, 2026' },
  { country: 'Jamaica', opens: '2026-09-15', closes: '2026-10-20', visit: 'TBD', event: 'TBD' },
  { country: 'Colombia', status: 'closed', visit: 'TBD', event: 'TBD' },
  { country: 'India', status: 'closed', visit: 'March 2026', event: 'TBD' },
  { country: 'Kenya', status: 'closed', visit: 'TBD', event: 'TBD' },
  { country: 'Philippines', status: 'closed', visit: 'March 2026', event: 'TBD' },
];

const DAY = 24 * 60 * 60 * 1000;

export function windowStatus(w, now = new Date()) {
  if (w.opens || w.closes) {
    const opens = w.opens ? new Date(`${w.opens}T00:00:00`) : null;
    const closes = w.closes ? new Date(`${w.closes}T00:00:00`).getTime() + DAY : null;
    if (opens && now < opens) return 'soon';
    if (closes && now >= closes) return 'closed';
    return 'open';
  }
  return w.status;
}

export function windowDates(w) {
  const fmt = (iso) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  if (w.opens && w.closes) return `${fmt(w.opens)} – ${fmt(w.closes)}, ${w.closes.slice(0, 4)}`;
  return null;
}
