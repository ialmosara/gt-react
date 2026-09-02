#!/usr/bin/env node
// Pulls the latest photos from Instagram and commits them into the repo so
// the site can render real photos with zero runtime API calls, tokens, or
// third-party services. Meant to run on a schedule via GitHub Actions — see
// .github/workflows/sync-instagram.yml — but works fine run locally too.
//
// Requires an Instagram Graph API long-lived access token (the Instagram
// account must be a Business or Creator account linked to a Facebook Page).
// See the README's "Instagram photo sync" section for the one-time setup.
//
// What it does:
//   1. Fetches the latest N media items from Instagram
//   2. Downloads each IMAGE (skips VIDEO/carousels for now, see note below)
//   3. Writes them to public/images/social/, deleting any files from a
//      previous run that are no longer in the latest batch — so the repo
//      doesn't grow forever, it just rotates a fixed-size set.
//   4. Writes src/data/socialPhotos.json, the manifest the site reads.
//
// Usage:  INSTAGRAM_ACCESS_TOKEN=xxxx node scripts/sync-instagram.mjs

import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const IMAGES_DIR = path.join(ROOT, 'public', 'images', 'social');
const MANIFEST_PATH = path.join(ROOT, 'src', 'data', 'socialPhotos.json');
const LIMIT = 16; // how many recent photos to keep cached

const token = process.env.INSTAGRAM_ACCESS_TOKEN;
if (!token) {
  console.error('Missing INSTAGRAM_ACCESS_TOKEN environment variable. See README > Instagram photo sync.');
  process.exit(1);
}

async function fetchMedia() {
  const fields = 'id,caption,media_type,media_url,permalink,timestamp';
  const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${LIMIT}&access_token=${token}`;
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Instagram API error: ${data.error?.message || res.statusText}`);
  }
  return data.data || [];
}

async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.statusText}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(destPath, buffer);
}

async function main() {
  await mkdir(IMAGES_DIR, { recursive: true });

  const media = await fetchMedia();
  // NOTE: CAROUSEL_ALBUM items need a separate call to /{media-id}/children
  // to get their individual images — skipped here for simplicity. VIDEO
  // items are skipped too (this feeds <PhotoPlaceholder>, a still-image slot).
  const images = media.filter((m) => m.media_type === 'IMAGE');

  const manifest = [];
  const keepFiles = new Set();

  for (const item of images) {
    const ext = '.jpg';
    const filename = `${item.id}${ext}`;
    keepFiles.add(filename);
    const destPath = path.join(IMAGES_DIR, filename);

    try {
      await downloadImage(item.media_url, destPath);
    } catch (err) {
      console.warn(`Skipping ${item.id}: ${err.message}`);
      continue;
    }

    manifest.push({
      id: item.id,
      src: `/images/social/${filename}`,
      caption: (item.caption || '').slice(0, 280),
      permalink: item.permalink,
      timestamp: item.timestamp,
    });
  }

  // Remove cached images from a previous run that aren't in this batch.
  const existing = await readdir(IMAGES_DIR).catch(() => []);
  await Promise.all(
    existing.filter((f) => !keepFiles.has(f)).map((f) => rm(path.join(IMAGES_DIR, f)).catch(() => {}))
  );

  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');

  console.log(`Synced ${manifest.length} photo(s) from Instagram.`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
