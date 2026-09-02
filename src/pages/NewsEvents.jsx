import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import NewsletterForm from '../components/NewsletterForm.jsx';
import InstagramFeed from '../components/InstagramFeed.jsx';
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
    month: 'Aug',
    day: '1',
    title: "12th Annual Founder's Gala",
    meta: 'New York, NY',
    desc: "An evening celebrating education, leadership, and global impact. Tickets and sponsorship packages are open now.",
  },
  {
    month: 'Sep',
    day: '10',
    title: 'GT Academy Fall Cohort Orientation',
    meta: 'Virtual — all six countries',
    desc: 'The incoming class of scholars meets Academy staff, mentors, and each other for the first time.',
  },
  {
    month: 'Oct',
    day: '22',
    title: 'GT Institute Workforce Pathways Convening',
    meta: 'Nairobi, Kenya',
    desc: 'Researchers, employers, and policymakers gather to discuss what keeps graduates connected to opportunity at home.',
  },
  {
    month: 'Dec',
    day: '3',
    title: 'Year-End Giving Deadline',
    meta: 'Online',
    desc: 'The last day to make a tax-deductible gift count toward this calendar year.',
  },
];

export default function NewsEvents() {
  useDocumentTitle('News & Events');
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
            <article className="news-card">
              <PhotoPlaceholder aria="Photo of a Global Tassels delegation trip" />
              <div className="body">
                <span className="meta">
                  <span className="cat">Global Delegations</span> &middot; May 2026
                </span>
                <h3>GT leadership returns from a delegation to Kenya and the Philippines</h3>
                <p>Site visits with country teams, partner NGOs, and this year&rsquo;s incoming scholarship cohort.</p>
              </div>
            </article>
            <article className="news-card">
              <PhotoPlaceholder aria="Photo of an Institute research convening" />
              <div className="body">
                <span className="meta">
                  <span className="cat">GT Institute</span> &middot; Coming Soon
                </span>
                <h3>The GT Institute for Sustainability & Social Mobility is preparing to launch</h3>
                <p>Research, convenings, and workforce-development programming are on the way — stay tuned.</p>
              </div>
            </article>
            <article className="news-card">
              <PhotoPlaceholder aria="Photo from the Founder's Gala" />
              <div className="body">
                <span className="meta">
                  <span className="cat">Gala</span> &middot; February 2026
                </span>
                <h3>Save the date: the 12th Annual Founder&rsquo;s Gala returns to New York</h3>
                <p>Tickets and sponsorship packages are open now.</p>
              </div>
            </article>
            <article className="news-card">
              <PhotoPlaceholder aria="Photo of a new scholarship cohort" />
              <div className="body">
                <span className="meta">
                  <span className="cat">GT Academy</span> &middot; January 2026
                </span>
                <h3>200 new scholars welcomed across six countries</h3>
                <p>The largest single scholarship cohort in Global Tassels&rsquo; history begins the spring term.</p>
              </div>
            </article>
            <article className="news-card">
              <PhotoPlaceholder aria="Photo of a corporate partnership signing" />
              <div className="body">
                <span className="meta">
                  <span className="cat">Foundation</span> &middot; December 2025
                </span>
                <h3>New corporate partnership expands scholarships in Colombia</h3>
                <p>A multi-year commitment will fund 150 additional scholarships over the next five years.</p>
              </div>
            </article>
            <article className="news-card">
              <PhotoPlaceholder aria="Photo of Global Tassels alumni reunion" />
              <div className="body">
                <span className="meta">
                  <span className="cat">Alumni</span> &middot; November 2025
                </span>
                <h3>First-ever global alumni reunion draws graduates from all six countries</h3>
                <p>Alumni reconnected, mentored current scholars, and helped shape the next Strategic Plan.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="ecosystem" id="events">
        <div className="wrap">
          <SectionHead center eyebrow="Events" title="Upcoming on the calendar." />
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
          <div className="stories-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: 900, margin: '0 auto' }}>
            <article className="story-card">
              <PhotoPlaceholder aria="Portrait of Sokha, a Global Tassels scholarship student in Cambodia" />
              <p className="kicker">Student Story</p>
              <h3>Sokha</h3>
              <p className="place">Cambodia</p>
              <p className="desc">From scholarship student to community leader.</p>
            </article>
            <article className="story-card">
              <PhotoPlaceholder aria="Portrait of Jose, a Global Tassels alumnus in Colombia" />
              <p className="kicker">Alumni Story</p>
              <h3>Jose</h3>
              <p className="place">Colombia</p>
              <p className="desc">Turning opportunity into impact in his community.</p>
            </article>
            <article className="story-card">
              <PhotoPlaceholder aria="Portrait of Winnie, a Global Tassels alumna in Kenya" />
              <p className="kicker">Alumni Story</p>
              <h3>Winnie</h3>
              <p className="place">Kenya</p>
              <p className="desc">Using education to transform lives.</p>
            </article>
          </div>
          <div className="stories-foot">
            <Link className="btn btn-outline" to="/impact#stories">
              More Stories of Impact &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="ecosystem" id="publications">
        <div className="wrap">
          <SectionHead eyebrow="Publications" title="Reports available now, and research on the way.">
            The GT Institute for Sustainability &amp; Social Mobility is still preparing to launch — its research
            briefs aren't published yet. In the meantime, here's what Global Tassels already publishes.
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
                <div className="doc-meta">Coming soon</div>
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
