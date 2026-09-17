import './styles/global.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Flagship from './components/Flagship';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Now from './components/Now';
import Certifications from './components/Certifications';
import Beyond from './components/Beyond';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy, { NotFound } from './components/CaseStudy';
import ScrollToTop from './components/ScrollToTop';

const Home = () => (
  <>
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <Nav />
    <main id="main">
      <Hero />
      <Stats />
      <About />
      <Flagship />
      <Projects />
      <Experience />
      <Skills />
      <Now />
      <Certifications />
      <Beyond />
      <Contact />
    </main>
    <Footer />
  </>
);

const App = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<CaseStudy kind="project" />} />
      <Route path="/agents/:slug" element={<CaseStudy kind="agent" />} />
      <Route path="/experience/:slug" element={<CaseStudy kind="experience" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
