import { motion } from 'framer-motion';

const stats = [
  { num: '3+', label: 'Internships', color: 'var(--c1)' },
  { num: '95%', label: 'Model Accuracy', color: 'var(--c3)' },
  { num: '5K+', label: 'Records Processed', color: 'var(--c2)' },
];

export default function Hero() {
  return (
    <section style={{ padding: '70px 40px 60px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 40 }}>
      <div style={{ flex: 1, minWidth: 280 }}>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: 12, letterSpacing: 2, color: 'var(--muted)',
            textTransform: 'uppercase', marginBottom: 16 }}>
          Software Engineer
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontWeight: 700, fontSize: 'clamp(36px,4vw,56px)',
            lineHeight: 1.1, letterSpacing: -1, marginBottom: 18, color: 'var(--text)' }}>
          Building things<br />
          <span style={{ color: 'var(--c1)' }}>that matter.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 420,
            lineHeight: 1.8, marginBottom: 32, fontWeight: 300 }}>
          Final year B.Tech CSE student at Amity University, Kolkata.
          Passionate about Deep Learning, full-stack development, and building
          systems that solve real problems.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#work"
            style={{ background: 'var(--c1)', color: '#fff', padding: '10px 26px',
              borderRadius: 4, fontSize: 13, fontWeight: 500, textDecoration: 'none' }}>
            View Projects →
          </a>
          <a href="#contact"
            style={{ background: 'transparent', color: 'var(--text)',
              border: '0.5px solid var(--border)', padding: '10px 26px',
              borderRadius: 4, fontSize: 13, textDecoration: 'none' }}>
            Get In Touch
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ display: 'flex', gap: 20, marginTop: 40 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display,serif', fontSize: 26,
                fontWeight: 700, color: s.color }}>{s.num}</div>
              <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2,
                letterSpacing: 0.5 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        style={{ position: 'relative' }}>
        <div style={{ width: 260, height: 300, borderRadius: 12,
          border: '0.5px solid var(--border)', overflow: 'hidden',
          background: 'var(--surf2)' }}>
          <img src="/profile.jpg" alt="Moumita Saha"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={e => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = `
                <div style="width:100%;height:100%;display:flex;align-items:center;
                  justify-content:center;flex-direction:column;gap:8px">
                  <div style="width:70px;height:70px;borderRadius:50%;background:#C84B31;
                    display:flex;align-items:center;justify-content:center;
                    fontSize:28px;fontWeight:700;color:white;fontFamily:Playfair Display,serif">MS</div>
                  <span style="fontSize:12px;color:#888">Add profile.jpg to public/</span>
                </div>`;
            }} />
        </div>
        <div style={{ position: 'absolute', bottom: -12, right: -12,
          background: 'var(--c2)', color: '#fff', borderRadius: 6,
          padding: '8px 14px', fontSize: 11, fontWeight: 500 }}>
          CGPA 8.01 · SGPA 9.23
        </div>
      </motion.div>
    </section>
  );
}
