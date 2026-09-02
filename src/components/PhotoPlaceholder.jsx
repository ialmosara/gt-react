/**
 * A styled stand-in for real photography. Renders a duotone gradient panel
 * with a small caption (e.g. "Photo — mentoring session, Philippines") so
 * anyone reviewing the site can see exactly what image belongs there.
 *
 * Once you have a real photo, pass `src` (and keep `aria` as real alt text)
 * and this renders an actual <img> instead, inside the same `.photo`
 * container — so aspect ratio, rounding, and caption styling still apply.
 */
export default function PhotoPlaceholder({ src, label, aria, className = '', style }) {
  return (
    <div className={`photo ${className}`} style={style}>
      {src ? (
        <img src={src} alt={aria || ''} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span role="img" aria-label={aria || label || 'Photo placeholder'} style={{ display: 'block', width: '100%', height: '100%' }} />
      )}
      {label && <span className="tag">{label}</span>}
    </div>
  );
}
