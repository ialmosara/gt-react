import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import MetricCounter from '../components/MetricCounter.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function Impact() {
  useDocumentTitle('Our Impact');
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="Impact you can measure, from students to communities."
        lede="Every number here traces back to a person — a student who enrolled, an alum who's now leading, a partner organization that opened a door. This is where that adds up."
        photoLabel="Photo — GT students and alumni celebrating"
        photoAria="Global Tassels students and alumni celebrating together"
      />

      {/* IMPACT DASHBOARD */}
      <section className="impact" id="dashboard">
        <div className="wrap">
          <div className="impact-head">
            <div>
              <p className="eyebrow on-dark">Impact Dashboard</p>
              <h2 style={{ marginTop: 10 }}>Clear, measurable outcomes.</h2>
            </div>
          </div>
          <div className="stat-grid">
            <MetricCounter count={6} label="Countries" />
            <MetricCounter count={12} label="Years of Impact" />
            <MetricCounter count={30} label="Board & Executive Leaders" />
            <MetricCounter count={75} suffix="%" label="of FY2025 Expenses Invested Directly in Students" />
            <MetricCounter count={52895} prefix="$" label="Raised at the 11th Annual Founder's Gala" />
            <MetricCounter count={16661} prefix="$" label="Given by Board Members in 2025" />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: 28, textAlign: 'center' }}>
            Source: Global Tassels 2025 Annual Report (fiscal year 2025, published May 2026).
          </p>
        </div>
      </section>

      {/* STUDENTS */}
      <section id="students">
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder aria="Current Global Tassels scholarship students in class" label="Photo — current scholars" />
            <div>
              <p className="eyebrow">Students</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>
                Selected for potential, supported to graduation.
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
                GT Academy identifies talented but economically disadvantaged students and provides full-ride scholarships, alongside leadership development, mentorship, and community-engagement projects — not just a one-time award.
              </p>
              <Link className="link-arrow" style={{ marginTop: 24 }} to="/ecosystem/academy">
                Explore GT Academy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ALUMNI */}
      <section className="ecosystem" id="alumni">
        <div className="wrap">
          <div className="split reverse">
            <PhotoPlaceholder aria="A Global Tassels alumnus mentoring current students" label="Photo — alumni mentorship" />
            <div>
              <p className="eyebrow">Alumni</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>
                Where the scholarship keeps paying forward.
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
                Global Tassels alumni go on to lead in education, public service, and business across their home
                countries — and a majority stay actively connected as mentors, donors, or country-team volunteers.
              </p>
              <Link className="link-arrow" style={{ marginTop: 24 }} to="/where-we-work">
                Meet Alumni By Country &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY PARTNERS */}
      <section id="partners">
        <div className="wrap">
          <SectionHead center eyebrow="Community Partners" title="We don't do this alone.">
            A growing network of universities, NGOs, and local organizations extends what Global Tassels can reach on its
            own.
          </SectionHead>
          <div className="network-grid">
            <div className="network-card">
              <h3>University Partners</h3>
              <p>Admissions and financial-aid relationships that get scholars onto campus.</p>
            </div>
            <div className="network-card">
              <h3>Local NGOs</h3>
              <p>On-the-ground organizations that help identify students and run community programming.</p>
            </div>
            <div className="network-card">
              <h3>Employers</h3>
              <p>Internship and hiring pipelines that turn a degree into a career.</p>
            </div>
            <div className="network-card">
              <h3>Government &amp; Civic Partners</h3>
              <p>Agencies and civic groups the Institute works with on policy and workforce pathways.</p>
            </div>
            <div className="network-card">
              <h3>Corporate Sponsors</h3>
              <p>Companies that fund scholarships, gala tables, and program operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 360 IMPACT */}
      <section className="ecosystem" id="three-sixty">
        <div className="wrap">
          <div className="impact-360">
            <div className="copy">
              <p className="eyebrow">The 360 Impact Commitment</p>
              <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>Education is only the beginning.</h2>
              <p>
                Global Tassels students aren&rsquo;t simply recipients of financial assistance &mdash; they&rsquo;re
                expected to become contributors to their own communities. Launched in 2025, the 360 Community Impact Project strengthens partnerships through student volunteerism and service at local nonprofits around the world — and the 2026–2030 strategic plan builds it out with a 360 Impact Commitment Dashboard.
              </p>
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

      {/* STORIES OF IMPACT */}
      <section id="stories">
        <div className="wrap">
          <SectionHead center eyebrow="Real People. Real Change." title="Stories of impact" />

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
              Explore Every Country &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="callout">
            <div>
              <h3>Your gift becomes part of this dashboard.</h3>
              <p>Every scholarship, every partner, every hour of service started with someone deciding to give.</p>
            </div>
            <div className="callout-actions">
              <Link className="btn btn-gold" to="/give">
                Give Now
              </Link>
              <Link className="btn btn-ghost" to="/where-we-work">
                See Where We Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
