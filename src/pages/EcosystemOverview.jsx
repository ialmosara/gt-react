import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function EcosystemOverview() {
  useDocumentTitle('Our Ecosystem');
  return (
    <>
      <PageHero
        eyebrow="Our Ecosystem"
        title="One mission. A global ecosystem."
        lede="Global Tassels advances its mission through three interconnected areas — each with its own focus, working toward the same outcome."
        photoLabel="Photo — GT Academy, Foundation & Institute"
        photoAria="A collage representing the three pillars of the Global Tassels ecosystem"
      />

      <section>
        <div className="wrap">
          <SectionHead center eyebrow="How the pieces fit" title="Three pillars, working as one.">
            Education is still the heart of Global Tassels. The Foundation and the Institute exist to sustain and
            extend what the Academy makes possible.
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
    </>
  );
}
