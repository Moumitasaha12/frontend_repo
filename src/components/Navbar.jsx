import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 40px', borderBottom: '0.5px solid var(--border)',
        position: 'sticky', top: 0, zIndex: 100, background: 'var(--bg)' }}>
      <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ textDecoration: 'none' }}>
        <div style={{ fontFamily: 'Playfair Display,serif', fontSize: 20,
          fontWeight: 700, color: 'var(--text)', cursor: 'pointer',
          letterSpacing: -0.5 }}>
          Moumita Saha
        </div>
      </a>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {['Work', 'Internships', 'Skills', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`}
            style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none' }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
            {item}
          </a>
        ))}
        <button onClick={() => setDark(!dark)}
          style={{ background: 'var(--surf2)', border: '0.5px solid var(--border)',
            borderRadius: 20, padding: '6px 14px', cursor: 'pointer',
            fontSize: 13, color: 'var(--text)' }}>
          {dark ? '☀ Light' : '☾ Dark'}
        </button>
        <a href="/Moumita_Saha_CV.pdf" download="Moumita_Saha_CV.pdf"
          style={{ background: 'var(--c1)', color: '#fff', padding: '8px 18px',
            borderRadius: 4, fontSize: 12, fontWeight: 500, textDecoration: 'none' }}>
          Download CV
        </a>
      </div>
    </motion.nav>
  );
}
