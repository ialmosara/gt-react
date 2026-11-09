import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

// Board roster effective January 1, 2027, as provided by the founder (Oct 2026).
// His rule: always show full name, current affiliation, and state.
const board = [
  { name: 'Dr. Brian Rothschild', title: 'Chair, Board of Directors · Stevens Institute of Technology · New York' },
  { name: 'Prof. Robin Cook', title: 'Board Vice Chair · University of the District of Columbia · Washington, DC' },
  { name: 'Dr. Shanté Bassett', title: 'Board Treasurer · Rapha Mind & Body, LLC · Connecticut' },
  { name: 'Mr. Jonathan Santos Ramos', title: 'Board Secretary · Care For the Homeless NYC · New York' },
  { name: 'Dr. Elvin T. Ramos', title: 'Founder & Head of Global Network · De Anza College · California' },
  { name: 'Dr. Jeffrey Acido', title: 'Executive Director & Chief Institute Officer · University of Hawaii, Leeward CC · Hawaii', photo: '/images/people/jeffrey-acido.jpg' },
  { name: 'Dr. Richard Zalman', title: 'Chair of Commission, GT Foundation · Univ. of the District of Columbia · New Jersey' },
  { name: 'Dr. Christian Aguiar', title: 'University of the District of Columbia · Washington, DC', photo: '/images/people/christian-aguiar.jpg' },
  { name: 'Ms. Coco-Nicole Banks', title: 'Advanced Energy United · California' },
  { name: 'Prof. Vivian Bejarin', title: 'De Anza College · California' },
  { name: 'Ms. Divina Grace Dayrit', title: 'Ernst & Young · Maryland', photo: '/images/people/divina-grace-dayrit.jpg' },
  { name: 'Ms. Nicole Trevena Flores', title: 'Southeastern Community College · Arkansas' },
  { name: 'Prof. Gary Greaves', title: 'CUNY Guttman Community College · New York' },
  { name: 'Ms. Jophrane Ligonde', title: 'NYC Department of Education · New York' },
  { name: 'Ms. Nadia Mundle', title: "Mundle's Income Tax & Accounting Services Corp. · New York" },
  { name: 'Ms. Lydia Nylander', title: 'Amalgamated Bank · Maryland' },
  { name: 'Ms. Pepper Reed', title: 'United States Tax Court · Washington, DC' },
  { name: 'Ms. Hilda Risi', title: 'Community Leader & Retired Teacher · New Jersey' },
  { name: 'Mr. Map Shen', title: 'Tradeweb · New York' },
  { name: 'Ms. Carolyn Todd', title: 'LaGuardia Community College, CUNY · New York', photo: '/images/people/carolyn-todd.jpg' },
  { name: 'Ms. Lauren Tomlinson', title: 'The New School University · New York', photo: '/images/people/lauren-tomlinson.jpg' },
];

// Leadership is organized by entity: the GT Academy, the GT Institute, and the GT Foundation.
const units = [
  {
    heading: 'GT Academy — Executive Leadership Team',
    people: [
      { name: 'Ms. Latosha Baldwin', title: '5th President & CEO · Maryland', photo: '/images/people/latosha-baldwin.jpg' },
      { name: 'Haronid "Yogi" Javier', title: 'Chief Operations Officer' },
      { name: 'Clarissa Palomar', title: 'Social Media Officer' },
      { name: 'Lenora Easter, Esq., J.D.', title: 'Chief Legal Counsel' },
      { name: 'Daniel Zapien', title: 'Director of Productions' },
    ],
  },
  {
    heading: 'GT Academy — Leadership',
    people: [
      { name: 'Denica Kelly', title: 'Chair' },
      { name: 'Chantelle Etienne', title: 'Co-Chair' },
      { name: 'Dr. Marcela Murillo', title: 'Co-Chair' },
    ],
  },
  {
    heading: 'GT Institute for Sustainability & Social Mobility',
    people: [
      { name: 'Dr. Jeffrey Acido', title: 'Executive Director & Chief Institute Officer', photo: '/images/people/jeffrey-acido.jpg' },
      { name: 'Ms. Javette Johnson', title: 'Ambassador' },
      { name: 'Prof. Vivian Bejarin', title: 'Ambassador' },
    ],
  },
  {
    heading: 'GT Foundation',
    people: [{ name: 'Dr. Richard Zalman', title: 'Chair of Commission, GT Foundation' }],
  },
];

const network = [
  { name: 'Advisors', desc: 'Subject-matter experts who guide strategy across the ecosystem.' },
  { name: 'Faculty', desc: 'University partners who teach, mentor, and help shape curriculum.' },
  { name: 'Fellows', desc: 'Institute fellows leading applied research projects.' },
  { name: 'Country Leadership', desc: 'On-the-ground teams running programs in each of our six countries.' },
  { name: 'Global Partners', desc: 'NGOs, universities, and community organizations we work alongside.' },
];

const documents = [
  { name: 'Bylaws', meta: 'PDF — available on request' },
  { name: 'Annual Reports', meta: 'Updated yearly' },
  { name: 'Strategic Plan 2025–2030', meta: 'PDF — available on request' },
  { name: 'Financial Information', meta: 'Audited financials & Form 990' },
  { name: 'Policies', meta: 'Conflict of interest, whistleblower & more' },
  { name: 'Nonprofit Information', meta: '501(c)(3) determination letter' },
];

function DocIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M7 3h7l4 4v14H7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export default function Leadership() {
  useDocumentTitle(
    'Leadership & Governance',
    'Meet the Global Tassels Board of Directors and executive leadership, and see how the organization is governed.'
  );
  return (
    <>
      <PageHero
        eyebrow="Leadership & Governance"
        title="The people and structure behind Global Tassels."
        lede="As Global Tassels has grown from a scholarship fund into a global ecosystem, so has the governance behind it. This page is where that accountability lives."
        photoLabel="Photo — board meeting"
        photoAria="Global Tassels board and staff at a leadership meeting"
      />

      {/* BOARD OF DIRECTORS */}
      <section id="board">
        <div className="wrap">
          <SectionHead center eyebrow="Board of Directors" title="21 volunteers governing Global Tassels.">
            The Board of Directors for 2027.
          </SectionHead>
          <div className="people-grid">
            {board.map((person) => (
              <div className="person-card" key={person.name}>
                <PhotoPlaceholder src={person.photo} aria={`Portrait of ${person.name}, Global Tassels board member`} />
                <span className="name">{person.name}</span>
                <span className="role">{person.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTIVE LEADERSHIP */}
      <section className="ecosystem" id="executive">
        <div className="wrap">
          <SectionHead center eyebrow="Executive Leadership" title="Who runs Global Tassels day to day." />
          {units.map((unit) => (
            <div key={unit.heading} style={{ marginBottom: 48 }}>
              <p className="eyebrow" style={{ textAlign: 'center', marginBottom: 22 }}>{unit.heading}</p>
              <div className="people-grid cols-3" style={{ maxWidth: 860, margin: '0 auto' }}>
                {unit.people.map((person) => (
                  <div className="person-card" key={unit.heading + person.name}>
                    <PhotoPlaceholder src={person.photo} aria={`Portrait of ${person.name}, ${person.title.split(' · ')[0]}`} />
                    <span className="name">{person.name}</span>
                    <span className="role">{person.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder">
        <div className="wrap">
          <div className="split reverse">
            <PhotoPlaceholder aria="Portrait of Dr. Elvin T. Ramos, founder of Global Tassels" label="Photo — Dr. Elvin T. Ramos" />
            <div>
              <p className="eyebrow">Founder</p>
              <h2 style={{ marginTop: 10, fontSize: 'clamp(1.8rem,3vw,2.2rem)' }}>
                Dr. Elvin T. Ramos, D.A.
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: '1.02rem', maxWidth: 520 }}>
                Dr. Ramos founded Global Tassels in May 2014 and served as its first President until stepping down
                effective June 30, 2020. He serves as Founder &amp; Head of the Global Network and remains on the Board of Directors, where he was Board Chair from 2023–2025.
              </p>
              <Link className="link-arrow" style={{ marginTop: 20 }} to="/about#founder">
                Read the Founder&rsquo;s Story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL NETWORK */}
      <section className="ecosystem" id="network">
        <div className="wrap">
          <SectionHead center eyebrow="Global Network" title="Beyond the board and executive team." />
          <div className="network-grid">
            {network.map((item) => (
              <div className="network-card" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE & TRANSPARENCY */}
      <section id="governance">
        <div className="wrap">
          <SectionHead eyebrow="Governance & Transparency" title="The documents behind the mission.">
            As Global Tassels becomes a more sophisticated organization, this is where that accountability shows up
            in writing.
          </SectionHead>
          <div className="doc-list">
            {documents.map((doc) => (
              <a className="doc-item" href="#governance" key={doc.name}>
                <span className="icon">
                  <DocIcon />
                </span>
                <div>
                  <div className="doc-name">{doc.name}</div>
                  <div className="doc-meta">{doc.meta}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="callout">
            <div>
              <h3>Questions about governance or finances?</h3>
              <p>Reach out and we'll point you to the right document or the right person.</p>
            </div>
            <div className="callout-actions">
              <Link className="btn btn-gold" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
