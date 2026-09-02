export default function SectionHead({ eyebrow, title, children, center = false, onDark = false, className = '' }) {
  return (
    <div className={`section-head ${center ? 'center' : ''} ${className}`}>
      {eyebrow && <p className={`eyebrow ${onDark ? 'on-dark' : ''}`}>{eyebrow}</p>}
      {title && <h2>{title}</h2>}
      {children && <p>{children}</p>}
    </div>
  );
}
