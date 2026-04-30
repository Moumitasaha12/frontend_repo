import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const COLORS = ['var(--c1)', 'var(--c3)', 'var(--c2)', 'var(--c4)', 'var(--c1)'];

const projectDetails = {
  'Monkeypox Detection': {
    github: 'https://github.com/moumitasaha',
    image: null,
    extra: 'Implemented CNN and ML models with multi-level attention modules using Python, TensorFlow and OpenCV. Achieved 95.55% accuracy on a multi-class skin lesion dataset.'
  },
  'Oil Well Monitoring Dashboard': {
    github: 'https://github.com/Moumitasaha12/ongc_dashboard.git',
    image: null,
    extra: 'Built for ONGC internship. React + Node.js dashboard processing 5K+ operational records from a CSV-backed backend. Improved data insight speed by 30%.'
  },
  'Aarogyam': {
    github: 'https://github.com/Moumitasaha12/Aarogyam.git',
    image: null,
    extra: 'Full-stack healthcare management app. Manages patient records, appointments and doctor scheduling using React.js, Express.js and MongoDB.'
  },
  'Job Portal': {
    github: null,
    image: null,
    extra: 'Java-based web application using Servlets, JSP and MySQL. Features recruiter and applicant dashboards, job posting and application tracking. Optimized DB queries improved response time by ~25%.'
  },
  'Covid Detection': {
    github: 'https://github.com/Moumitasaha12/covid_detection.git',
    image: null,
    extra: 'Binary classification of COVID-positive and negative chest X-rays using Python, TensorFlow, Keras and OpenCV. Achieved 94.16% accuracy.'
  },
};

function Modal({ project, onClose }) {
  const details = projectDetails[project.title] || {};
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
          zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 20 }}>
        <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          onClick={e => e.stopPropagation()}
          style={{ background: 'var(--surf)', border: '0.5px solid var(--border)',
            borderRadius: 12, padding: 32, maxWidth: 560, width: '100%',
            maxHeight: '80vh', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-start', marginBottom: 16 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)' }}>
              {project.icon} {project.title}
            </h2>
            <button onClick={onClose}
              style={{ background: 'none', border: 'none', fontSize: 20,
                cursor: 'pointer', color: 'var(--muted)' }}>✕</button>
          </div>

          {details.image && (
            <img src={details.image} alt={project.title}
              style={{ width: '100%', borderRadius: 8, marginBottom: 16,
                border: '0.5px solid var(--border)' }} />
          )}

          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8,
            marginBottom: 20 }}>{details.extra || project.description}</p>

          {project.accuracy && (
            <div style={{ display: 'inline-block', background: 'var(--surf2)',
              border: '0.5px solid var(--border)', borderRadius: 4,
              padding: '4px 12px', fontSize: 12, marginBottom: 16,
              color: 'var(--c2)' }}>
              Result: {project.accuracy}
            </div>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            {project.tech_stack?.map(t => (
              <span key={t} style={{ fontSize: 11, padding: '3px 10px',
                borderRadius: 3, border: '0.5px solid var(--border)',
                color: 'var(--muted)' }}>{t}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            {details.github && (
              <a href={details.github} target="_blank" rel="noreferrer"
                style={{ background: 'var(--text)', color: 'var(--bg)',
                  padding: '8px 20px', borderRadius: 4, fontSize: 12,
                  fontWeight: 500, textDecoration: 'none' }}>
                View on GitHub →
              </a>
            )}
            {!details.github && (
              <span style={{ fontSize: 12, color: 'var(--muted)',
                padding: '8px 0' }}>GitHub link coming soon</span>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get('/api/projects').then(r => setProjects(r.data)).catch(console.error);
  }, []);

  return (
    <section id="work" style={{ padding: '50px 40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <span style={{ fontSize: 10, letterSpacing: 2, color: 'var(--muted)',
          textTransform: 'uppercase', fontFamily: 'Playfair Display,serif' }}>Featured Projects</span>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
        {projects.map((p, i) => (
          <motion.div key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            style={{ background: 'var(--surf)', border: '0.5px solid var(--border)',
              borderRadius: 10, padding: 20, cursor: 'pointer',
              borderTop: `2px solid ${COLORS[i % COLORS.length]}` }}
            onClick={() => setSelected(p)}>
            <div style={{ display: 'flex', justifyContent: 'space-between',
              alignItems: 'flex-start', marginBottom: 10 }}>
              <span style={{ fontFamily: 'Playfair Display,serif', fontSize: 15, fontWeight: 600 }}>
                {p.icon} {p.title}
              </span>
              {p.accuracy && (
                <span style={{ fontSize: 10, background: 'var(--surf2)',
                  border: '0.5px solid var(--border)', borderRadius: 3,
                  padding: '2px 7px', color: 'var(--c2)', whiteSpace: 'nowrap',
                  marginLeft: 8 }}>
                  {p.accuracy}
                </span>
              )}
            </div>
            <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 14 }}>
              {p.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
              {p.tech_stack?.map(t => (
                <span key={t} style={{ fontSize: 10, padding: '2px 8px', borderRadius: 3,
                  border: '0.5px solid var(--border)', color: 'var(--muted)' }}>{t}</span>
              ))}
            </div>
            <span style={{ fontSize: 11, color: 'var(--c3)', fontWeight: 500 }}>
              More details →
            </span>
          </motion.div>
        ))}
      </div>
      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
