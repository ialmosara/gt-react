import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import EcosystemOverview from './pages/EcosystemOverview.jsx';
import Academy from './pages/Academy.jsx';
import Foundation from './pages/Foundation.jsx';
import Institute from './pages/Institute.jsx';
import WhereWeWork from './pages/WhereWeWork.jsx';
import CountryPage from './pages/CountryPage.jsx';
import Leadership from './pages/Leadership.jsx';
import Impact from './pages/Impact.jsx';
import NewsEvents from './pages/NewsEvents.jsx';
import Gala from './pages/Gala.jsx';
import Give from './pages/Give.jsx';
import Recruitment from './pages/Recruitment.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ecosystem" element={<EcosystemOverview />} />
          <Route path="/ecosystem/academy" element={<Academy />} />
          <Route path="/ecosystem/foundation" element={<Foundation />} />
          <Route path="/ecosystem/institute" element={<Institute />} />
          <Route path="/where-we-work" element={<WhereWeWork />} />
          <Route path="/where-we-work/:slug" element={<CountryPage />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/news" element={<NewsEvents />} />
          <Route path="/gala" element={<Gala />} />
          <Route path="/give" element={<Give />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
