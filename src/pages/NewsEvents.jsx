import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import StoryFeature from '../components/StoryFeature.jsx';
import SectionHead from '../components/SectionHead.jsx';
import NewsletterForm from '../components/NewsletterForm.jsx';
import InstagramFeed from '../components/InstagramFeed.jsx';
import { newsItems } from '../data/news.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

function DocIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M7 3h7l4 4v14H7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

const events = [
  {
    month: 'May',
    day: '15',
    title: "13th Annual Founder's Gala",
    meta: 'The Terra, San Francisco, CA',
    desc: 'Theme: “Community and Togetherness Matter Most.” Ticket and sponsorship details will be announced soon.',
  },
];

export default function NewsEvents() {
  useDocumentTitle(
    'News & Events',
    'The latest from Global Tassels: the 13th Annual Founder’s Gala, recruitment visits, annual reports, and upcoming events.'
  );
  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title="What's happening at Global Tassels."
        lede="Updates from six countries, one ecosystem — new research, upcoming convenings, and the stories behind the numbers."
        photoLabel="Photo — GT delegation trip"
        photoAria="Global Tassels staff and partners on a country visit"
      />

      {/* NEWS */}
      <section id="news">
        <div className="wrap">
          <SectionHead center eyebrow="News" title="Latest from the ecosystem." />
          <div className="news-grid">
            {newsItems.map((n) => (
              <article className="news-card" key={n.title}>
                <PhotoPlaceholder aria={n.photo} />
                <div className="body">
                  <span className="meta">
                    <span className="cat">{n.cat}</span> &middot; {n.date}
                  </span>
                  <h3>{n.title}</h3>
                  <p>{n.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="ecosystem" id="events">
        <div className="wrap">
          <SectionHead center eyebrow="Events" title="Upcoming on the calendar.">
            More dates will be posted here as they&rsquo;re confirmed.
          </SectionHead>
          <div className="event-list" style={{ maxWidth: 760, margin: '0 auto' }}>
            {events.map((e) => (
              <div className="event-item" key={e.title}>
                <div className="event-date">
                  <span className="month">{e.month}</span>
                  <span className="day">{e.day}</span>
                </div>
                <div className="body">
                  <h3>{e.title}</h3>
                  <p className="meta">{e.meta}</p>
                  <p className="desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section id="stories">
        <div className="wrap">
          <SectionHead center eyebrow="Stories" title="Real people, real change." />
          <StoryFeature />
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="ecosystem" id="publications">
        <div className="wrap">
          <SectionHead eyebrow="Publications" title="Reports available now, and research on the way.">
            The GT Institute for Sustainability &amp; Social Mobility launches in 2027, and its first publications
            will be posted here. In the meantime, here's what Global Tassels already publishes.
          </SectionHead>
          <div className="doc-list">
            <a className="doc-item" href="/leadership#governance">
              <span className="icon">
                <DocIcon />
              </span>
              <div>
                <div className="doc-name">Annual Report</div>
                <div className="doc-meta">Organization-wide report</div>
              </div>
            </a>
            <a className="doc-item" href="/about#strategic-plan">
              <span className="icon">
                <DocIcon />
              </span>
              <div>
                <div className="doc-name">Strategic Plan</div>
                <div className="doc-meta">Downloadable PDF</div>
              </div>
            </a>
            <a className="doc-item" href="/ecosystem/institute">
              <span className="icon">
                <DocIcon />
              </span>
              <div>
                <div className="doc-name">GT Institute Research</div>
                <div className="doc-meta">First publications to come</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section id="media">
        <div className="wrap">
          <SectionHead center eyebrow="Media" title="Global Tassels in the news." />
          <div className="network-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: 860, margin: '0 auto' }}>
            <div className="network-card">
              <h3>Press Mentions</h3>
              <p>Coverage of Global Tassels programs, research, and events from outlets in our partner countries.</p>
            </div>
            <div className="network-card">
              <h3>Media Kit</h3>
              <p>Logos, boilerplate, and fact sheets for journalists and partners covering our work.</p>
            </div>
            <div className="network-card">
              <h3>Speaking &amp; Interviews</h3>
              <p>Media requests for Global Tassels leadership, staff, or scholars.</p>
            </div>
          </div>

          <div style={{ marginTop: 56 }}>
            <SectionHead
              center
              eyebrow="From Instagram"
              title="Follow along."
              className="section-head"
            >
              Synced automatically — see the README for how this is wired up.
            </SectionHead>
            <InstagramFeed />
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="wrap">
          <div>
            <h2>Stay connected</h2>
            <p>Get the latest stories, impact updates, and event invitations.</p>
          </div>
          <NewsletterForm idSuffix="news" />
        </div>
      </section>
    </>
  );
}
