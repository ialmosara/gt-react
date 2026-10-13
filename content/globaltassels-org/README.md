# globaltassels.org content archive

A snapshot of the original WordPress site's public content, pulled on 2026-10-12 via its open
WordPress REST API (`/wp-json/wp/v2/pages`, `/media`) and The Events Calendar / WooCommerce store endpoints.
This is reference material for building the new site — it is not imported by the app.

- `pages/` — all 43 pages as cleaned text (WPBakery shortcodes stripped). `pages-index.json` lists them.
- `events.json` — 32 calendar events (2015–2023, galas, receptions, mission trips).
- `media.json` — 65 media-library items with original URLs (logos, banners, honoree graphics, headshots).
- `products.json` — the 2026 gala ticket / sponsorship / journal-ad products.

Notes: the original has no blog posts. Image *files* are not stored here — only URLs. Items the new site uses
(logo, gala photos) were copied into `public/images/`.
