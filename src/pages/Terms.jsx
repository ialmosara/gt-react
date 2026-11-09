import PageHero from '../components/PageHero.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { termsParagraphs, termsUpdated } from '../data/terms.js';

// Bold a leading "Section Title." if the paragraph starts with one.
function Paragraph({ text, id }) {
  const m = text.match(/^([A-Z][A-Za-z ,&/'’-]{2,60}\.)\s+(.*)$/s);
  return (
    <p id={id} style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '0.98rem', lineHeight: 1.65 }}>
      {m ? (
        <>
          <strong style={{ color: 'var(--purple-900)' }}>{m[1]}</strong> {m[2]}
        </>
      ) : (
        text
      )}
    </p>
  );
}

export default function Terms() {
  useDocumentTitle('Terms of Use & Privacy Policy', 'The Global Tassels website Terms of Use and Privacy Policy.');
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use & Privacy Policy"
        lede={`Carried over from the original Global Tassels website. Last updated ${termsUpdated}.`}
        photoLabel="Global Tassels"
        photoAria="Global Tassels"
      />
      <section>
        <div className="wrap" style={{ maxWidth: 860 }}>
          {termsParagraphs.map((t, i) => (
            <Paragraph key={i} text={t} id={t.startsWith('Privacy Policy') ? 'privacy' : undefined} />
          ))}
        </div>
      </section>
    </>
  );
}
