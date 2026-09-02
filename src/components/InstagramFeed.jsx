import PhotoPlaceholder from './PhotoPlaceholder.jsx';
import socialPhotos from '../data/socialPhotos.json';

/**
 * Renders the photos synced from Instagram by scripts/sync-instagram.mjs
 * (see .github/workflows/sync-instagram.yml) into a gallery grid. Falls
 * back to a friendly empty state before the first sync has run, or if the
 * access token isn't configured yet — see the README's "Instagram photo
 * sync" section.
 */
export default function InstagramFeed() {
  if (socialPhotos.length === 0) {
    return (
      <div className="gallery-grid">
        <PhotoPlaceholder aria="Instagram photos will appear here once syncing is set up" label="Syncs weekly from Instagram" />
        <PhotoPlaceholder aria="Instagram photos will appear here once syncing is set up" label="Syncs weekly from Instagram" />
        <PhotoPlaceholder aria="Instagram photos will appear here once syncing is set up" label="Syncs weekly from Instagram" />
        <PhotoPlaceholder aria="Instagram photos will appear here once syncing is set up" label="Syncs weekly from Instagram" />
      </div>
    );
  }

  return (
    <div className="gallery-grid">
      {socialPhotos.map((photo) => (
        <a
          key={photo.id}
          href={photo.permalink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={photo.caption ? `View on Instagram: ${photo.caption}` : 'View on Instagram'}
        >
          <PhotoPlaceholder src={photo.src} aria={photo.caption} />
        </a>
      ))}
    </div>
  );
}
