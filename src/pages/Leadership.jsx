import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const board = [
  { name: 'Dr. Brian Rothschild', title: 'Chair, Board of Directors · Stevens Institute of Technology · New York' },
  { name: 'Ms. Robin Cook', title: 'Board Vice Chair · University of the District of Columbia · Washington, DC' },
  { name: 'Dr. Shanté Bassett', title: 'Board Treasurer · Rapha Mind & Body, LLC · Connecticut' },
  { name: 'Mr. Jonathan Santos-Ramos', title: 'Board Secretary · Care For the Homeless NYC · New Jersey' },
  { name: 'Dr. Elvin T. Ramos', title: 'Founder & Head of Global Network · California · Board Chair 2023–2025' },
  { name: 'Dr. Jeffrey Acido', title: 'Chair, GT Institutes · University of Hawaii, Leeward CC · Hawaii' },
  { name: 'Dr. Richard Zalman', title: 'Chair of Commission, GT Foundation · Univ. of the District of Columbia · New Jersey' },
  { name: 'Christian Aguiar', title: 'University of the District of Columbia' },
  { name: 'Kyle Alvarez', title: 'PwC' },
  { name: 'Coco-Nicole Banks', title: 'Advanced Energy United' },
  { name: 'Vivian Bejarin', title: 'De Anza College' },
  { name: 'Dr. Sushini Chand', title: 'De Anza College' },
  { name: 'Christina Cho', title: 'De Anza College' },
  { name: 'Ferhat Dastan', title: 'Eagle Group NY, Inc.' },
  { name: 'Divina Grace Dayrit', title: 'Ernst & Young' },
  { name: 'Ramona Gabriel', title: 'De Anza College' },
  { name: 'Dr. Nate Mickelson', title: 'New York University' },
  { name: 'Nadia Mundle', title: "Mundle's Income Tax & Accounting Services Corp." },
  { name: 'Hilda Risi', title: 'Community Leader' },
  { name: 'Lauren Tomlinson', title: 'The New School University' },
  { name: 'Ivory Walker', title: 'Bergdorf Goodman' },
];

const executives = [
  { name: 'Ms. Latosha Baldwin', title: '5th President & CEO · Maryland' },
  { name: 'Denica Kelly', title: 'Chief Operating Officer' },
  { name: 'Haronid "Yogi" Javier', title: 'Chief Student Success Officer' },
  { name: 'Clarissa Palomar', title: 'Chief of Staff' },
  { name: "James O'Brien", title: 'Chief Financial Officer' },
  { name: 'Lenora Easter, Esq., J.D.', title: 'Chief Legal Counsel' },
  { name: 'Timisha Dixon', title: 'Chief Impact Officer' },
  { name: 'Daniel Zapien', title: 'Chief Communications Officer' },
  { name: 'Karen Gutierrez', title: 'Assistant VP, Student Development' },
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
  useDocumentTitle('Leadership & Governance');
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
          <SectionHead center eyebrow="Board of Directors" title="21 volunteers governing Global Tassels." />
          <div className="people-grid">
            {board.map((person) => (
              <div className="person-card" key={person.name}>
                <PhotoPlaceholder aria={`Portrait of ${person.name}, Global Tassels board member`} />
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
          <div className="people-grid cols-3" style={{ maxWidth: 860, margin: '0 auto' }}>
            {executives.map((person) => (
              <div className="person-card" key={person.name}>
                <PhotoPlaceholder aria={`Portrait of ${person.name}, Global Tassels ${person.title.split(' · ')[0]}`} />
                <span className="name">{person.name}</span>
                <span className="role">{person.title}</span>
              </div>
            ))}
          </div>
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
              <Link className="btn btn-gold" to="/about">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
