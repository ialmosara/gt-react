import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import NewsletterForm from '../components/NewsletterForm.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const EMAIL = 'info@globaltassels.org';

const socials = [
  { name: 'Instagram', handle: '@globaltassels', href: 'https://www.instagram.com/globaltassels/' },
  { name: 'Facebook', handle: '@globaltassels', href: 'https://www.facebook.com/globaltassels' },
  { name: 'LinkedIn', handle: 'Global Tassels', href: 'https://www.linkedin.com/company/5257555' },
  { name: 'YouTube', handle: 'Global Tassels', href: 'https://www.youtube.com/channel/UCrMyB0KWxp0qZg7oHOcgKPA' },
];

const routes = [
  { label: 'Nominate a student', to: '/recruitment', desc: 'How selection works and which countries are open.' },
  { label: 'Give', to: '/give', desc: 'Donate, join the Founding Donors Circle, or ask about underwriting.' },
  { label: 'Volunteer, mentor, or partner', to: '/get-involved', desc: 'Ways to get involved beyond giving.' },
  { label: 'The Founder’s Gala', to: '/gala', desc: 'Tickets, sponsorship, and honoree details.' },
];

export default function Contact() {
  useDocumentTitle('Contact', 'Contact Global Tassels by email, follow us on social media, or subscribe to our newsletter.');
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        lede="Questions, nominations, press requests, or ideas — we'd love to hear from you."
        photoLabel="Photo — the Global Tassels team"
        photoAria="Members of the Global Tassels team together"
      />

      <section>
        <div className="wrap">
          <div className="doc-list" style={{ alignItems: 'start' }}>
            <div className="network-card">
              <h3>Email</h3>
              <p>
                <a className="link-arrow" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </p>
              <p>
                For general questions, nominations, volunteering, press, and gifts by check. Email us to receive
                our mailing address.
              </p>
            </div>
            <div className="network-card">
              <h3>Follow along</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {socials.map((s) => (
                  <li key={s.name}>
                    <a className="link-arrow" href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.name} &middot; {s.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ecosystem">
        <div className="wrap">
          <SectionHead center eyebrow="Looking for something specific?" title="Start here." />
          <div className="doc-list">
            {routes.map((r) => (
              <Link className="doc-item" to={r.to} key={r.to}>
                <div>
                  <div className="doc-name">{r.label}</div>
                  <div className="doc-meta">{r.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="wrap">
          <div>
            <h2>Stay connected</h2>
            <p>Get the latest stories, impact updates, and event invitations.</p>
          </div>
          <NewsletterForm idSuffix="contact" />
        </div>
      </section>
    </>
  );
}
