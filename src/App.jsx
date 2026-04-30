import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <Navbar />
      <Hero />
      <Ticker />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <footer style={{ padding: '20px 40px', borderTop: '0.5px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--muted)' }}>
        <span>© 2025 Moumita Saha · Amity University, Kolkata</span>
        <span>Built from scratch · React · Node · PostgreSQL</span>
      </footer>
    </div>
  );
}
