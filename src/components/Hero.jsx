import { motion } from 'framer-motion';

const stats = [
  { num: '4+', label: 'Internships', color: 'var(--c1)' },
  { num: '95%', label: 'Model Accuracy', color: 'var(--c3)' },
  { num: '5K+', label: 'Records Processed', color: 'var(--c2)' },
];

const socials = [
  {
    label: 'GitHub',
    icon: '⌥',
    href: 'https://github.com/Moumitasaha12',
    color: 'var(--text)'
  },
  {
    label: 'LinkedIn',
    icon: 'in',
    href: 'https://www.linkedin.com/in/moumita-saha-727335217',
    color: 'var(--c3)'
  },
  {
    label: 'moumita3651230@gmail.com',
    icon: '✉',
    href: 'mailto:moumita3651230@gmail.com',
    color: 'var(--c1)'
  },
];

export default function Hero() {
  return (
    <section style={{ padding: 'clamp(32px,5vw,70px) clamp(16px,4vw,40px)' }}>

      {/* Top — text + photo */}
      <div style={{ display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>

        {/* Left text */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 11, letterSpacing: 2, color: 'var(--muted)',
              textTransform: 'uppercase', marginBottom: 14 }}>
            Full Stack Developer & ML Engineer
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontWeight: 700, fontSize: 'clamp(30px,5vw,54px)',
              lineHeight: 1.1, letterSpacing: -1, marginBottom: 16, color: 'var(--text)' }}>
            Building things<br />
            <span style={{ color: 'var(--c1)' }}>that matter.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 420,
              lineHeight: 1.8, marginBottom: 28, fontWeight: 300 }}>
            Final year B.Tech CSE student at Amity University, Kolkata.
            Passionate about Deep Learning, full-stack development, and
            building systems that solve real problems.
          </motion.p>

          {/* CTA buttons */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
            <a href="#work"
              style={{ background: 'var(--c1)', color: '#fff', padding: '10px 24px',
                borderRadius: 4, fontSize: 13, fontWeight: 500,
                textDecoration: 'none', display: 'inline-block' }}>
              View Projects →
            </a>
            <a href="/Moumita_Saha_CV.pdf" download
              style={{ background: 'transparent', color: 'var(--text)',
                border: '0.5px solid var(--border)', padding: '10px 24px',
                borderRadius: 4, fontSize: 13, textDecoration: 'none',
                display: 'inline-block' }}>
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'var(--surf2)', border: '0.5px solid var(--border)',
                  borderRadius: 6, padding: '7px 14px', fontSize: 12,
                  textDecoration: 'none', color: 'var(--text)',
                  WebkitTapHighlightColor: 'transparent' }}>
                <span style={{ fontSize: 13, color: s.color }}>{s.icon}</span>
                <span>{s.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile photo */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
          style={{ flexShrink: 0 }}>
          <div style={{ width: 'clamp(160px,25vw,240px)',
            height: 'clamp(180px,28vw,280px)', borderRadius: 12,
            border: '0.5px solid var(--border)', overflow: 'hidden',
            background: 'var(--surf2)', position: 'relative' }}>
            <img src="/profile.jpg" alt="Moumita Saha"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={e => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `
                  <div style="width:100%;height:100%;display:flex;align-items:center;
                    justify-content:center;flex-direction:column;gap:8px;background:var(--surf2)">
                    <div style="width:64px;height:64px;border-radius:50%;background:var(--c1);
                      display:flex;align-items:center;justify-content:center;
                      font-size:24px;font-weight:700;color:white;font-family:Playfair Display,serif">
                      MS
                    </div>
                    <span style="font-size:11px;color:var(--muted)">Add profile.jpg</span>
                  </div>`;
              }} />
          </div>
          <div style={{ marginTop: 8, background: 'var(--surf2)',
            border: '0.5px solid var(--border)', borderRadius: 6,
            padding: '6px 12px', fontSize: 11, textAlign: 'center',
            color: 'var(--muted)' }}>
            CGPA 7.84 · SGPA 9.00
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{ display: 'flex', gap: 'clamp(16px,4vw,40px)',
          borderTop: '0.5px solid var(--border)', paddingTop: 24, flexWrap: 'wrap' }}>
        {stats.map((s, i) => (
          <div key={i}>
            <div style={{ fontFamily: 'Playfair Display,serif',
              fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: s.color }}>
              {s.num}
            </div>
            <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2,
              letterSpacing: 0.5 }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
