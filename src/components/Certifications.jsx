import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certifications = [
  {
    title: 'Database Management System',
    org: 'IIT Kharagpur — NPTEL',
    logo: '/logos/logo-m.CNHeS_sM.jpg',
    duration: 'Completed',
    color: 'var(--c3)',
    description: 'Comprehensive course covering relational databases, SQL, normalization, transactions, indexing and query optimization.',
    certificate: '/certificates/cert_nptel.png',
    tags: ['SQL', 'DBMS', 'Normalization', 'Transactions'],
  },
  {
    title: 'Credit-Linked Program in Data Science',
    org: 'IIT Guwahati — Daksh Gurukul',
    logo: '/logos/iigmasai.jpeg',
    duration: 'Ongoing',
    color: 'var(--c2)',
    description: 'Industry-aligned credit-linked program covering data science fundamentals, machine learning, statistics and Python for data analysis.',
    certificate: null,
    tags: ['Python', 'Machine Learning', 'Statistics', 'Data Analysis'],
  },
];

const achievements = [
  {
    icon: '🎓',
    title: 'SGPA 9.23',
    subtitle: 'Amity University, Kolkata',
    description: 'Achieved SGPA of 9.23 in the most recent semester while simultaneously managing multiple internships and projects.',
    color: 'var(--c4)',
  },
];

function CertCard({ cert }) {
  const [showCert, setShowCert] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
        style={{
          background: 'var(--surf)', border: '0.5px solid var(--border)',
          borderRadius: 10, padding: 20, cursor: 'pointer',
          borderTop: `2px solid ${cert.color}`, transition: 'box-shadow .2s'
        }}
        onClick={() => cert.certificate && setShowCert(true)}>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 8, overflow: 'hidden',
            background: 'var(--surf2)', border: '0.5px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
          }}>
            <img src={cert.logo} alt={cert.org}
              style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }}
              onError={e => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `<span style="font-size:10px;font-weight:700;color:var(--muted)">CERT</span>`;
              }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'Playfair Display,serif', fontSize: 14,
              fontWeight: 600, color: 'var(--text)', marginBottom: 3 }}>{cert.title}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>{cert.org}</div>
          </div>
          <span style={{
            fontSize: 10, padding: '3px 10px', borderRadius: 20,
            border: `0.5px solid ${cert.color}`, color: cert.color
          }}>{cert.duration}</span>
        </div>

        <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 14 }}>
          {cert.description}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {cert.tags.map((t, i) => (
              <span key={i} style={{ fontSize: 10, padding: '2px 8px', borderRadius: 20,
                border: '0.5px solid var(--border)', color: 'var(--muted)' }}>{t}</span>
            ))}
          </div>
          {cert.certificate
            ? <span style={{ fontSize: 11, color: cert.color, fontWeight: 500, whiteSpace: 'nowrap', marginLeft: 10 }}>View Certificate →</span>
            : <span style={{ fontSize: 11, color: 'var(--muted)', fontStyle: 'italic' }}>In progress</span>
          }
        </div>
      </motion.div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCert && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShowCert(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
              zIndex: 1000, display: 'flex', alignItems: 'center',
              justifyContent: 'center', padding: 20 }}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{ background: 'var(--surf)', borderRadius: 12, padding: 24,
                maxWidth: 700, width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', marginBottom: 16 }}>
                <h3 style={{ fontFamily: 'Playfair Display,serif', fontSize: 18 }}>{cert.title}</h3>
                <button onClick={() => setShowCert(false)}
                  style={{ background: 'none', border: 'none', fontSize: 20,
                    cursor: 'pointer', color: 'var(--muted)' }}>✕</button>
              </div>
              <img src={cert.certificate} alt="Certificate"
                style={{ width: '100%', borderRadius: 8,
                  border: '0.5px solid var(--border)' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AchievementCard({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: 'var(--surf)', border: '0.5px solid var(--border)',
        borderRadius: 10, padding: 20, transition: 'box-shadow .2s',
        borderTop: `2px solid ${item.color}`
      }}>
      <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
      <div style={{ fontFamily: 'Playfair Display,serif', fontSize: 15,
        fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{item.title}</div>
      <div style={{ fontSize: 11, color: item.color, marginBottom: 10 }}>{item.subtitle}</div>
      <AnimatePresence>
        {hovered && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, overflow: 'hidden' }}>
            {item.description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <>
      {/* Certifications */}
      <section id="certifications" style={{ padding: '50px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <span style={{ fontSize: 10, letterSpacing: 2, color: 'var(--muted)',
            textTransform: 'uppercase', fontFamily: 'Playfair Display,serif' }}>Certifications</span>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        </div>
        <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 24 }}>
          Click to view certificate
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" style={{ padding: '0 40px 50px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <span style={{ fontSize: 10, letterSpacing: 2, color: 'var(--muted)',
            textTransform: 'uppercase', fontFamily: 'Playfair Display,serif' }}>Achievements</span>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        </div>
        <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 24 }}>
          Hover to read more
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {achievements.map((item, i) => (
            <AchievementCard key={i} item={item} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
