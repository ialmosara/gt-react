import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const EMAIL = 'info@globaltassels.org';
const mail = (subject) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

const partnerBenefits = [
  { name: 'Impact in the global community', desc: 'Your partnership supports Global Tassels’ mission of ending poverty through education and its commitment to community service.' },
  { name: 'Community leadership & service', desc: 'We can connect you with Global Tassels leaders who volunteer with your organization.' },
  { name: 'Recognition', desc: 'Partners are recognized publicly on the website and at special events.' },
  { name: 'Join a delegation', desc: 'Community partners are often invited to join Global Tassels delegations on annual mission trips.' },
];

export default function GetInvolved() {
  useDocumentTitle(
    'Get Involved',
    'Volunteer, mentor a Student Leader, partner through the LInC program, or run for Global Tassels.'
  );
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="There's a place for you here."
        lede="Teaming with local community organizations is our top priority. Whether you have an hour, a profession, or an organization to bring, there's a way to help students become leaders for their communities."
        photoLabel="Photo — volunteers and Student Leaders"
        photoAria="Global Tassels volunteers and Student Leaders working together on a community project"
      />

      {/* VOLUNTEER */}
      <section id="volunteer">
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder aria="Global Tassels volunteers at an event" label="Photo — GT volunteers" />
            <div>
              <p className="eyebrow">Volunteer</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>Put your time where your beliefs are.</h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
                Most Global Tassels volunteers give their time because they understand how much service matters and
                how much quality education changes lives. Volunteers help tell people about Global Tassels and its
                partners&rsquo; programs, show why they deserve support, and join people worldwide who raise and
                distribute funds for those programs.
              </p>
              <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: '1.02rem', maxWidth: 520 }}>
                Opportunities are flexible and fit the organization&rsquo;s most important work. Global Tassels is
                always looking for volunteers.
              </p>
              <a className="link-arrow" style={{ marginTop: 24 }} href={mail('Volunteering with Global Tassels')}>
                Email us to volunteer &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MENTORING */}
      <section className="ecosystem" id="mentoring">
        <div className="wrap">
          <div className="split reverse">
            <PhotoPlaceholder aria="A Global Tassels mentor with a Student Leader" label="Photo — mentor and Student Leader" />
            <div>
              <p className="eyebrow">Mentoring</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>A coaching relationship that lasts.</h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
                Not everyone can be a Global Tassels mentor. Mentors are chosen to help Student Leaders transition to
                college and to develop socially. We look for seasoned, globally minded professionals with positive
                energy who want to help students become voices and forces of change for their countries.
              </p>
              <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: '1.02rem', maxWidth: 520 }}>
                Mentors meet their students the summer before school starts, through events, orientations,
                community service, and city explorations. As a role model and confidant, a mentor builds a coaching
                relationship meant to last through college and long after students return home.
              </p>
              <a className="link-arrow" style={{ marginTop: 24 }} href={mail('Becoming a Global Tassels mentor')}>
                Ask about mentoring &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LINC */}
      <section id="linc">
        <div className="wrap">
          <SectionHead center eyebrow="LInC · Learning and Innovative Communities" title="Bring your NGO into the Global Tassels community.">
            The LInC program makes non-governmental organizations integral partners, working on youth development,
            educational access, social mobility, social awareness, and poverty reduction.
          </SectionHead>
          <div className="program-list" style={{ maxWidth: 760, margin: '0 auto' }}>
            <div className="program-item">
              <span className="icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7.5-4.6-10-9.3C.6 8.4 2.6 5 6 5c2 0 3.6 1.1 6 3.6C14.4 6.1 16 5 18 5c3.4 0 5.4 3.4 4 6.7C19.5 16.4 12 21 12 21z" stroke="currentColor" strokeWidth="1.5" /></svg>
              </span>
              <p><strong>Funding and resources</strong> &mdash; Global Tassels provides financial assistance and resources so partner NGOs can scale their missions in their own communities.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 19v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.6" /><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" /></svg>
              </span>
              <p><strong>Volunteers and expert advice</strong> &mdash; Partners gain volunteers and practical guidance from the Global Tassels network.</p>
            </div>
            <div className="program-item">
              <span className="icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6" /><path d="M5 20c1-4 4-6 7-6s6 2 7 6" stroke="currentColor" strokeWidth="1.6" /></svg>
              </span>
              <p><strong>Roles for Student Leaders</strong> &mdash; The partnerships give Global Tassels Student Leaders real ways to take part and contribute to their communities.</p>
            </div>
          </div>
          <div className="stories-foot">
            <a className="btn btn-outline" href={mail('LInC program partnership')}>
              Ask about LInC &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="ecosystem" id="partners">
        <div className="wrap">
          <SectionHead center eyebrow="Corporate & Community Partners" title="Partner with Global Tassels.">
            Global Tassels works with corporations and organizations dedicated to ending global poverty through
            education. Our team will work with you on a targeted, strategic partnership that fits your community and
            business goals.
          </SectionHead>
          <div className="network-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {partnerBenefits.map((b) => (
              <div className="network-card" key={b.name}>
                <h3>{b.name}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.85rem', maxWidth: 620, margin: '28px auto 0' }}>
            Global Tassels teams up with organizations in the US and abroad but doesn&rsquo;t endorse the views they
            express or recommend their products or services.
          </p>
          <div className="stories-foot">
            <a className="btn btn-primary" href={mail('Partnering with Global Tassels')}>
              Become a partner
            </a>
          </div>
        </div>
      </section>

      {/* GT RUNNER */}
      <section id="runner">
        <div className="wrap">
          <div className="split">
            <PhotoPlaceholder aria="A Global Tassels GT Runner at a race" label="Photo — GT Runner" />
            <div>
              <p className="eyebrow">GT Runner</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.3rem)' }}>Every run has a purpose.</h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
                GT Runner invites members, supporters, and volunteers to raise funds for Global Tassels by running
                races, from a 5K to a full marathon. It&rsquo;s a pilot program that promotes health and wellness
                while giving the community an easy way to take part in the mission.
              </p>
              <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: '1.02rem', maxWidth: 520 }}>
                Runners dedicate a mile to each of their supporters, and every race has a fundraising goal.
                Applicants receive a GT Runner packet with items to wear during the race, and their registration
                fee is reimbursed if they reach their goal.
              </p>
              <a className="link-arrow" style={{ marginTop: 24 }} href={mail('GT Runner application')}>
                Apply to be a GT Runner &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="callout">
            <div>
              <h3>Not sure where to start?</h3>
              <p>Tell us what you can offer and we&rsquo;ll point you to the right place.</p>
            </div>
            <div className="callout-actions">
              <Link className="btn btn-gold" to="/contact">
                Contact Us
              </Link>
              <Link className="btn btn-ghost" to="/give">
                Give
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
