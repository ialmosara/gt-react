import { useEffect, useRef, useState } from 'react';

function formatNum(n) {
  return Math.round(n).toLocaleString('en-US');
}

/**
 * A single stat tile that counts up from 0 to `count` once it scrolls
 * into view. Respects prefers-reduced-motion by rendering the final
 * value immediately instead of animating.
 */
export default function MetricCounter({ count, prefix = '', suffix = '', label }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(() => prefix + formatNum(count) + suffix);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            animate();
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);

    function animate() {
      const duration = 1400;
      let start = null;
      function step(ts) {
        if (start === null) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(prefix + formatNum(count * eased) + suffix);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className="stat" ref={ref}>
      <span className="num">{display}</span>
      <span className="label">{label}</span>
    </div>
  );
}
