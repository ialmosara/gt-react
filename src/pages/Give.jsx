import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import DonateButton from '../components/DonateButton.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const ways = [
  { name: 'Donate', to: '#donate' },
  { name: 'Monthly Giving', to: '#donate' },
  { name: 'Sponsor a Student', to: '#sponsor-student' },
  { name: 'Corporate Giving', to: '#corporate' },
  { name: 'Institutional Giving', to: '#corporate' },
  { name: 'Support the Academy', to: '#academy' },
  { name: 'Support the Institute', to: '#institute' },
  { name: 'Gala Sponsorship', to: '#gala-sponsorship' },
];

function GiveIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s-7.5-4.6-10-9.3C.6 8.4 2.6 5 6 5c2 0 3.6 1.1 6 3.6C14.4 6.1 16 5 18 5c3.4 0 5.4 3.4 4 6.7C19.5 16.4 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Give() {
  useDocumentTitle('Give');
  return (
    <>
      <PageHero
        eyebrow="Give"
        title="Invest in opportunity."
        lede="There are many ways to support our mission — every path leads to a simple next step, and every gift is tax-deductible."
        photoLabel="Photo — a scholarship recipient at graduation"
        photoAria="A Global Tassels scholarship recipient celebrating at graduation"
      />

      {/* WAYS TO GIVE OVERVIEW */}
      <section>
        <div className="wrap">
          <SectionHead center eyebrow="Be Part of the Change" title="Choose how you'd like to help." />
          <div className="give-grid cols-4">
            {ways.map((w) => (
              <a className="give-item" href={w.to} key={w.name}>
                <span className="icon">
                  <GiveIcon />
                </span>
                <span className="name">{w.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE / MONTHLY GIVING */}
      <section className="ecosystem" id="donate">
        <div className="wrap">
          <SectionHead center eyebrow="Donate & Monthly Giving" title="A one-time gift, or a standing commitment.">
            One-time donations fund immediate needs. Monthly gifts give the Academy a predictable budget to plan a
            full year of scholarships around.
          </SectionHead>
          <div className="tier-grid">
            <div className="tier-card">
              <span className="tier-name">A Meaningful Gift</span>
              <span className="tier-price">Any Amount</span>
              <p className="tier-desc">
                Global Tassels' full operations depend on unrestricted gifts — from recruitment to the
                relationships that help the organization grow worldwide.
              </p>
              <ul className="tier-perks">
                <li>Tax-deductible receipt emailed instantly</li>
                <li>One-time or annual giving</li>
              </ul>
              <DonateButton campaign="donate" fallbackHref="#donate" className="btn btn-outline">
                Give Once
              </DonateButton>
            </div>
            <div className="tier-card featured">
              <span className="tier-badge">Founding Donors Circle</span>
              <span className="tier-name">Monthly Giving</span>
              <span className="tier-price">
                $10&ndash;$49 <small>/ month</small>
              </span>
              <p className="tier-desc">
                Join the GT Founding Donors Circle — a gift that keeps on giving, and part of Global Tassels'
                legacy as an organization.
              </p>
              <ul className="tier-perks">
                <li>Cancel or adjust anytime</li>
                <li>Recognized as a Founding Donor</li>
                <li>Annual giving summary for tax season</li>
              </ul>
              <DonateButton campaign="donate" fallbackHref="#donate" className="btn btn-gold">
                Give Monthly
              </DonateButton>
            </div>
            <div className="tier-card">
              <span className="tier-name">Special Events</span>
              <span className="tier-price">Varies</span>
              <p className="tier-desc">
                Held annually in New York City and Washington, D.C. — host or sponsor a special event to introduce
                new friends to Global Tassels.
              </p>
              <ul className="tier-perks">
                <li>Private &amp; sponsored event options</li>
                <li>All sizes welcome</li>
              </ul>
              <a className="btn btn-outline" href="#donate">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GIVING LEVELS */}
      <section id="giving-levels">
        <div className="wrap">
          <SectionHead center eyebrow="Giving Levels" title="Every gift has a place in the circle.">
            The annual fund runs January 1 through December 31, and a gift can be restricted to a program or
            unrestricted.
          </SectionHead>
          <div className="tier-grid">
            <div className="tier-card">
              <span className="tier-name">GT Leadership Society</span>
              <span className="tier-price">
                $250&ndash;$999 <small>/ year</small>
              </span>
              <p className="tier-desc">The second level of giving, for supporters and friends around the world.</p>
              <ul className="tier-perks">
                <li>Bronze: $250&ndash;$499</li>
                <li>Silver: $500&ndash;$749</li>
                <li>Gold: $750&ndash;$999</li>
              </ul>
            </div>
            <div className="tier-card">
              <span className="tier-name">Board Giving</span>
              <span className="tier-price">$1,000 <small>/ member / year</small></span>
              <p className="tier-desc">
                Beyond governance, every board member contributes and raises funds each year &mdash; $16,661 in
                2025 &mdash; to select and support more students.
              </p>
              <ul className="tier-perks">
                <li>Fund scholarships directly</li>
                <li>See the full board on the Leadership page</li>
              </ul>
            </div>
            <div className="tier-card">
              <span className="tier-name">Gift by Check</span>
              <span className="tier-price">Mail-in</span>
              <p className="tier-desc">
                Make checks payable to Global Tassels. Email info@globaltassels.org to receive the mailing address.
              </p>
              <ul className="tier-perks">
                <li>Tax-deductible 501(c)(3) gift</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSOR A STUDENT */}
      <section id="sponsor-student">
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder aria="A GT Academy scholar you could sponsor" label="Photo — scholar on campus" />
            <div>
              <p className="eyebrow">Sponsor a Student &middot; Scholarship Underwriting</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>Fund one scholar, start to finish.</h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
                Scholarship underwriting is an opportunity for major supporters to fund the cost of a Student
                Leader's college education — a contribution that can also be directed straight to the university to
                offset tuition, room and board, or other resources.
              </p>
              <DonateButton campaign="donate" fallbackHref="#sponsor-student" className="link-arrow">
                Sponsor a Student &rarr;
              </DonateButton>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE & INSTITUTIONAL GIVING */}
      <section className="ecosystem" id="corporate">
        <div className="wrap">
          <SectionHead center eyebrow="Corporate & Institutional Giving" title="Partner with us at scale.">
            Companies, foundations, and institutions extend their reach through Global Tassels&rsquo; existing
            programs in six countries.
          </SectionHead>
          <div className="network-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: 860, margin: '0 auto' }}>
            <div className="network-card">
              <h3>Corporate Giving</h3>
              <p>Matching gifts, cause marketing, and multi-year scholarship funding commitments.</p>
            </div>
            <div className="network-card">
              <h3>Foundation Grants</h3>
              <p>
                Single or multiyear grants for general operating expenses, community engagement projects, and
                Student Leader educational support.
              </p>
            </div>
            <div className="network-card">
              <h3>Employee Giving</h3>
              <p>Workplace giving campaigns and volunteer days with your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT THE ACADEMY */}
      <section id="academy">
        <div className="wrap">
          <div className="split reverse">
            <PhotoPlaceholder aria="GT Academy scholars in a leadership workshop" label="Photo — leadership workshop" />
            <div>
              <p className="eyebrow">Support the Academy</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.2rem)' }}>Fund scholarships and leadership training.</h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
                Gifts to GT Academy go directly toward tuition scholarships, mentorship programming, and the
                student-success support that keeps scholars enrolled through graduation.
              </p>
              <Link className="link-arrow" style={{ marginTop: 20 }} to="/ecosystem/academy">
                About GT Academy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT THE INSTITUTE */}
      <section className="ecosystem" id="institute">
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder aria="GT Institute researchers at a convening" label="Photo — institute convening" />
            <div>
              <p className="eyebrow">Support the Institute</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.2rem)' }}>Fund research and workforce pathways.</h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
                Gifts to the GT Institute for Sustainability &amp; Social Mobility fund research, convenings, and
                workforce-development pilots designed to keep opportunity local.
              </p>
              <Link className="link-arrow" style={{ marginTop: 20 }} to="/ecosystem/institute">
                About the Institute &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALA SPONSORSHIP */}
      <section className="gala" id="gala-sponsorship">
        <div className="wrap">
          <div>
            <p className="eyebrow on-dark">Gala Sponsorship</p>
            <h2 style={{ marginTop: 10 }}>Sponsor the Founder&rsquo;s Gala.</h2>
            <p className="lede">
              Bronze, Silver, and Gold sponsorship tiers include event recognition, logo placement, and — at the
              Gold level — five complimentary tickets and year-round acknowledgment in promotional materials.
            </p>
            <div className="gala-actions">
              <Link className="btn btn-gold" to="/gala#tickets">
                View Sponsorship Tiers
              </Link>
              <Link className="btn btn-ghost" to="/gala">
                About the Gala
              </Link>
            </div>
          </div>
          <PhotoPlaceholder aria="Sponsor signage at last year's Founder's Gala" label="Photo — sponsor recognition" />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="callout">
            <div>
              <h3>Every gift is accounted for.</h3>
              <p>See our governance, financials, and annual reports before you give.</p>
            </div>
            <div className="callout-actions">
              <Link className="btn btn-gold" to="/leadership#governance">
                Governance &amp; Transparency
              </Link>
              <Link className="btn btn-ghost" to="/impact">
                See Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
