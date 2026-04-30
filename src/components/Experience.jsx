import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const internships = [
  {
    org: 'National Informatics Centre',
    short: 'NIC',
    duration: 'Jun – Jul 2025',
    color: 'var(--c3)',
    logo: '/logos/nic.jpg',
    role: 'OCR Developer Intern',
    points: [
      'Developed Chakma OCR system using Tesseract 5.5.1 and LSTM models',
      'Curated and augmented 10,000+ characters to boost dataset diversity',
      'Automated bulk testing on 500+ samples via Python scripts',
    ]
  },
  {
    org: 'Oil & Natural Gas Corporation',
    short: 'ONGC',
    duration: 'May – Jun 2025',
    color: '#8B0000',
    logo: '/logos/ongc.png',
    role: 'Full Stack Developer Intern',
    points: [
      'Built oil well monitoring dashboard using React and Node.js',
      'Integrated CSV-backed custom backend processing 5K+ operational records',
      'Improved data insight speed by 30%, enabling faster field decisions',
    ]
  },
  {
    org: 'Zocvi (HealthOk)',
    short: 'ZOCVI',
    duration: 'Nov 2024 – May 2025',
    color: 'var(--c4)',
    logo: '/logos/zocvi.png',
    role: 'Business Application Developer',
    points: [
      'Contributed to Business Application Development across 2 teams',
      'Worked on internal tools and workflow automation features',
    ]
  },
  {
    org: 'NIT Agartala',
    short: 'NITA',
    duration: 'Jun – Aug 2024',
    color: 'var(--c1)',
    logo: '/logos/nita.png',
    role: 'Research Intern',
    points: [
      'Built object-tracking robot using microcontrollers and sensors',
      'Developed terminal control interface for real-time robot navigation',
      'Reduced system latency by 30% through optimized control loops',
    ]
  },
];

function InternshipCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      onClick={() => setOpen(!open)}
      whileHover={{ boxShadow: '0 6px 28px rgba(0,0,0,0.1)' }}
      style={{
        background: 'var(--surf)', border: '0.5px solid var(--border)',
        borderRadius: 10, padding: '18px 20px', cursor: 'pointer',
        borderLeft: `2.5px solid ${item.color}`, transition: 'box-shadow .2s'
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>

        {/* Logo box */}
        <div style={{
          width: 48, height: 48, borderRadius: 8, overflow: 'hidden',
          background: 'var(--surf2)', border: '0.5px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
        }}>
          <img
            src={item.logo}
            alt={item.org}
            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }}
            onError={e => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = `<span style="font-size:11px;font-weight:700;color:var(--muted);font-family:Playfair Display,serif">${item.short}</span>`;
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Playfair Display,serif', fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>
              {item.org}
            </span>
            <span style={{ fontSize: 11, color: 'var(--muted)' }}>{item.duration}</span>
          </div>
          <div style={{ fontSize: 12, color: item.color, marginTop: 3 }}>{item.role}</div>
        </div>

        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}
          style={{ fontSize: 11, color: 'var(--muted)', marginLeft: 8, display: 'block' }}>
          ▼
        </motion.span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden' }}>
            <div style={{ paddingTop: 16, paddingLeft: 62 }}>
              {item.points.map((pt, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: item.color, fontSize: 16, lineHeight: 1.4 }}>·</span>
                  <span style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="internships" style={{ padding: '50px 40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
        <span style={{ fontSize: 10, letterSpacing: 2, color: 'var(--muted)',
          textTransform: 'uppercase', fontFamily: 'Playfair Display,serif' }}>Internships</span>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
      </div>
      <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>Click any card to expand details</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {internships.map((item, i) => (
          <InternshipCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
