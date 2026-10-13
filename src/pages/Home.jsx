import { Link } from 'react-router-dom';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import MetricCounter from '../components/MetricCounter.jsx';
import NewsletterForm from '../components/NewsletterForm.jsx';
import { countries } from '../data/countries.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function Home() {
  useDocumentTitle();
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero" id="top">
        <div className="hero-photo" role="img" aria-label="Global Tassels students in graduation regalia celebrating together"></div>
        <div className="hero-inner">
          <p className="eyebrow on-dark">Global Tassels</p>
          <h1>Education creates opportunity. Leadership creates change.</h1>
          <p className="lede">
            Global Tassels expands access to higher education while developing emerging leaders who create
            meaningful, sustainable change within their own communities.
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#who-we-are">
              Our Mission
            </a>
            <Link className="btn btn-ghost" to="/impact">
              Explore Our Impact
            </Link>
            <Link className="btn btn-ghost" to="/give">
              Donate
            </Link>
          </div>
        </div>
        <p className="hero-tag">Photo &mdash; GT students at commencement</p>
      </section>

      {/* ============ WHO WE ARE ============ */}
      <section id="who-we-are">
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder aria="A Global Tassels mentor working with a young student on schoolwork" label="Photo — mentoring session, Philippines" />
            <div>
              <p className="eyebrow">Who We Are</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>
                One mission. A global commitment to opportunity.
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
                Global Tassels believes in the power of education and leadership to break cycles of poverty and
                build stronger, more equitable communities. What began as a scholarship fund has grown into a
                global ecosystem spanning six countries &mdash; but the mission at its center hasn&rsquo;t moved.
              </p>

              <div className="pillars">
                <div className="pillar">
                  <span className="pillar-num">01</span>
                  <div>
                    <h3>Our Mission</h3>
                    <p>
                      Expand access to higher education and develop emerging leaders who create positive,
                      sustainable change in their communities.
                    </p>
                  </div>
                </div>
                <div className="pillar">
                  <span className="pillar-num">02</span>
                  <div>
                    <h3>Our Vision</h3>
                    <p>A world where every passionate learner has the opportunity to reach their potential and transform their community.</p>
                  </div>
                </div>
                <div className="pillar">
                  <span className="pillar-num">03</span>
                  <div>
                    <h3>Our Values</h3>
                    <p>Empowerment through Education, sustainable development, cultural sensitivity, transparency, and global citizenship.</p>
                  </div>
                </div>
              </div>

              <Link className="link-arrow" style={{ marginTop: 28 }} to="/about">
                Discover Global Tassels &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ECOSYSTEM ============ */}
      <section className="ecosystem" id="ecosystem">
        <div className="wrap">
          <SectionHead center eyebrow="One Mission. A Global Ecosystem." title="Three pillars, working as one.">
            Global Tassels advances its mission through three interconnected areas that together turn access into
            lasting impact.
          </SectionHead>

          <div className="eco-grid">
            <article className="eco-card academy">
              <PhotoPlaceholder aria="Students at a university campus" label="Photo — campus life" />
              <div className="body">
                <p className="kicker">GT Academy</p>
                <h3>Education, at the center</h3>
                <p className="thread">Education &middot; Scholarships &middot; Leadership &middot; Student Success</p>
                <p className="desc">
                  The Academy is the heart of the original Global Tassels mission &mdash; scholarships, leadership
                  development, and a lasting commitment to student success.
                </p>
                <Link className="link-arrow" to="/ecosystem/academy">
                  Explore GT Academy &rarr;
                </Link>
              </div>
            </article>

            <article className="eco-card foundation">
              <PhotoPlaceholder aria="Donors and partners gathered at a Global Tassels event" label="Photo — partner reception" />
              <div className="body">
                <p className="kicker">GT Foundation</p>
                <h3>Fueling what&rsquo;s possible</h3>
                <p className="thread">Philanthropy &middot; Fundraising &middot; Partnerships &middot; Advancement</p>
                <p className="desc">
                  The Foundation mobilizes the resources and relationships that sustain and expand opportunity for
                  students around the world.
                </p>
                <Link className="link-arrow" to="/ecosystem/foundation">
                  Explore GT Foundation &rarr;
                </Link>
              </div>
            </article>

            <article className="eco-card institute">
              <PhotoPlaceholder aria="Researchers and faculty at an international convening" label="Photo — institute convening" />
              <div className="body">
                <p className="kicker">GT Institute for Sustainability &amp; Social Mobility</p>
                <h3>Research into action</h3>
                <p className="thread">Research &middot; Innovation &middot; Sustainability &middot; Workforce Development</p>
                <p className="desc">
                  The Institute advances research, convenings, and innovative solutions for sustainable development
                  and social mobility.
                </p>
                <Link className="link-arrow" to="/ecosystem/institute">
                  Explore The Institute &rarr;
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ WHERE WE WORK ============ */}
      <section id="where-we-work">
        <div className="wrap">
          <SectionHead center eyebrow="Where We Work" title="Our global community">
            We work alongside students, alumni, and community partners across six countries &mdash; and counting.
          </SectionHead>

          <div className="map-panel">
            <div className="country-row">
              {countries.map((c) => (
                <Link className="country" to={`/where-we-work/${c.slug}`} key={c.slug}>
                  <span className="pin" role="img" aria-label={`Photo of a Global Tassels student in ${c.name}`}></span>
                  <span className="name">{c.name}</span>
                  <span className="meta">Students &amp; Alumni</span>
                </Link>
              ))}
            </div>
            <div className="map-cta">
              <Link className="btn btn-outline" to="/where-we-work">
                Explore Our Countries &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ IMPACT NUMBERS ============ */}
      <section className="impact" id="impact">
        <div className="wrap">
          <div className="impact-head">
            <div>
              <p className="eyebrow on-dark">Impact By The Numbers</p>
              <h2 style={{ marginTop: 10 }}>Clear, measurable outcomes.</h2>
            </div>
            <Link className="link-arrow on-dark" to="/impact">
              View Our Impact &rarr;
            </Link>
          </div>

          <div className="stat-grid cols-3">
            <MetricCounter count={6} label="Countries" />
            <MetricCounter count={12} label="Years of Impact" />
            <MetricCounter count={75} suffix="%" label="of FY2025 Expenses Invested Directly in Students" />
          </div>
        </div>
      </section>

      {/* ============ 360 IMPACT ============ */}
      <section>
        <div className="wrap">
          <div className="impact-360">
            <div className="copy">
              <p className="eyebrow">The 360 Impact Commitment</p>
              <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>Education is only the beginning.</h2>
              <p>
                Global Tassels students aren&rsquo;t simply recipients of financial assistance &mdash; they&rsquo;re
                expected to become contributors to their own communities. Launched in 2025, the 360 Community Impact Project strengthens partnerships through student volunteerism and service at local nonprofits around the world.
              </p>
              <Link className="link-arrow" to="/impact#three-sixty">
                Discover 360 Impact &rarr;
              </Link>
            </div>
            <PhotoPlaceholder
              style={{ aspectRatio: '4/3' }}
              aria="Global Tassels students engaged in community service"
              label="Photo — community service day"
            />
          </div>

          <div className="flow" style={{ marginTop: 72 }}>
            <div className="flow-node">
              <span className="dot">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M6.5 10.7V16c0 1.8 2.5 3.3 5.5 3.3s5.5-1.5 5.5-3.3v-5.3" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <span className="label">Education</span>
            </div>
            <span className="flow-arrow" aria-hidden="true">&rarr;</span>
            <div className="flow-node">
              <span className="dot">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M5 20c1-4 4-6 7-6s6 2 7 6" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <span className="label">Leadership</span>
            </div>
            <span className="flow-arrow" aria-hidden="true">&rarr;</span>
            <div className="flow-node final">
              <span className="dot">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="2.6" fill="currentColor" />
                </svg>
              </span>
              <span className="label">360 Impact</span>
            </div>
            <span className="flow-arrow" aria-hidden="true">&rarr;</span>
            <div className="flow-node">
              <span className="dot">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M15 5.2a3 3 0 0 1 0 5.8" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M17 19v-2a4 4 0 0 0-2-3.5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <span className="label">Community</span>
            </div>
            <span className="flow-arrow" aria-hidden="true">&rarr;</span>
            <div className="flow-node">
              <span className="dot">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12h4l2-7 4 14 2-7h6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="label">Social Change</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STORIES ============ */}
      <section>
        <div className="wrap">
          <SectionHead center eyebrow="Real People. Real Change." title="The people behind our mission" />

          <div className="stories-grid">
            <article className="story-card">
              <PhotoPlaceholder aria="Portrait of Sokha, a Global Tassels scholarship student in Cambodia" />
              <p className="kicker">Student Story</p>
              <h3>Sokha</h3>
              <p className="place">Cambodia</p>
              <p className="desc">From scholarship student to community leader.</p>
              <Link className="link-arrow" style={{ fontSize: '0.86rem' }} to="/where-we-work/cambodia">
                Read Sokha&rsquo;s story &rarr;
              </Link>
            </article>
            <article className="story-card">
              <PhotoPlaceholder aria="Portrait of Jose, a Global Tassels alumnus in Colombia" />
              <p className="kicker">Alumni Story</p>
              <h3>Jose</h3>
              <p className="place">Colombia</p>
              <p className="desc">Turning opportunity into impact in his community.</p>
              <Link className="link-arrow" style={{ fontSize: '0.86rem' }} to="/where-we-work/colombia">
                Read Jose&rsquo;s story &rarr;
              </Link>
            </article>
            <article className="story-card">
              <PhotoPlaceholder aria="Portrait of Winnie, a Global Tassels alumna in Kenya" />
              <p className="kicker">Alumni Story</p>
              <h3>Winnie</h3>
              <p className="place">Kenya</p>
              <p className="desc">Using education to transform lives.</p>
              <Link className="link-arrow" style={{ fontSize: '0.86rem' }} to="/where-we-work/kenya">
                Read Winnie&rsquo;s story &rarr;
              </Link>
            </article>
            <article className="story-card">
              <PhotoPlaceholder aria="Photo of a community partner organization in the Philippines" />
              <p className="kicker">Community Partner Story</p>
              <h3>Bridging Opportunities</h3>
              <p className="place">Philippines</p>
              <p className="desc">Partnering for a stronger, brighter future.</p>
              <Link className="link-arrow" style={{ fontSize: '0.86rem' }} to="/where-we-work/philippines">
                Read their story &rarr;
              </Link>
            </article>
          </div>
          <div className="stories-foot">
            <Link className="btn btn-outline" to="/where-we-work">
              View More Stories &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ============ NEWS ============ */}
      <section className="news" id="news">
        <div className="wrap">
          <SectionHead center eyebrow="News &amp; Events" title="What&rsquo;s happening at Global Tassels" />
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
          </div>
          <div className="stories-foot">
            <Link className="btn btn-outline" to="/news">
              View All News &amp; Events &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ============ GALA ============ */}
      <section className="gala" id="gala">
        <div className="wrap">
          <div>
            <p className="eyebrow on-dark">The Founder&rsquo;s Gala</p>
            <h2 style={{ marginTop: 10 }}>12th Annual Global Tassels Founder&rsquo;s Gala</h2>
            <p className="date-line">New York &middot; August 1, 2026</p>
            <p className="lede">
              An evening celebrating education, leadership, and global impact &mdash; and the students, alumni, and
              partners who make it possible.
            </p>
            <div className="gala-actions">
              <Link className="btn btn-gold" to="/gala#tickets">
                Purchase Tickets
              </Link>
              <Link className="btn btn-ghost" to="/gala#tickets">
                Become a Sponsor
              </Link>
              <Link className="btn btn-ghost" to="/give#gala-sponsorship">
                Support the Gala
              </Link>
            </div>
            <div className="gala-links">
              <Link to="/gala#about">About the Gala</Link>
              <Link to="/gala#about">About the Gala</Link>
              <Link to="/gala#honorees">Honorees</Link>
              <Link to="/gala#program">Program</Link>
              <Link to="/gala#travel">Travel &amp; Hotel</Link>
              <Link to="/gala#past-galas">Past Galas</Link>
              <Link to="/gala#gallery">Gala Gallery</Link>
            </div>
          </div>
          <PhotoPlaceholder aria="Photo of last year's Founder's Gala ballroom" label="Photo — 2026 Gala" />
        </div>
      </section>

      {/* ============ GIVE ============ */}
      <section id="give">
        <div className="wrap">
          <SectionHead center eyebrow="Be Part of the Change" title="Invest in opportunity.">
            There are many ways to support our mission &mdash; every path leads to a simple next step.
          </SectionHead>

          <div className="give-grid">
            <Link className="give-item" to="/give#donate">
              <span className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s-7.5-4.6-10-9.3C.6 8.4 2.6 5 6 5c2 0 3.6 1.1 6 3.6C14.4 6.1 16 5 18 5c3.4 0 5.4 3.4 4 6.7C19.5 16.4 12 21 12 21z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <span className="name">Donate</span>
            </Link>
            <Link className="give-item" to="/give#sponsor-student">
              <span className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 20c1-4.2 4-6.5 7-6.5s6 2.3 7 6.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="name">Sponsor a Student</span>
            </Link>
            <Link className="give-item" to="/give">
              <span className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M8 21V10l4-6 4 6v11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M3 21h18" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="name">Volunteer</span>
            </Link>
            <Link className="give-item" to="/give#corporate">
              <span className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 12a5 5 0 0 1 5-5 5 5 0 0 1 5 5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 19a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="name">Partner With Us</span>
            </Link>
            <Link className="give-item" to="/gala">
              <span className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4v9M6 8h12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 21h16l-1.5-6h-13L4 21z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="name">Attend the Gala</span>
            </Link>
          </div>
          <div className="give-foot">
            <Link className="btn btn-primary" to="/give">
              Get Involved &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="newsletter">
        <div className="wrap">
          <div>
            <h2>Stay connected</h2>
            <p>Get the latest stories, impact updates, and event invitations.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
