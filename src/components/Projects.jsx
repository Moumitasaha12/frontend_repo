import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const COLORS = ['var(--c1)', 'var(--c3)', 'var(--c2)', 'var(--c4)', 'var(--c1)'];

const projectDetails = {
  'Monkeypox Detection': {
    github: null,
    extra: 'Implemented CNN and ML models with multi-level attention modules using Python, TensorFlow and OpenCV. Achieved 95.55% accuracy on a multi-class skin lesion dataset.'
  },
  'ONGC Well Dashboard': {
    github: 'https://github.com/Moumitasaha12/ongc_dashboard.git',
    extra: 'Built for ONGC internship. React + Node.js dashboard processing 5K+ operational records from a CSV-backed backend. Improved data insight speed by 30%.'
  },
  'Aarogyam': {
    github: 'https://github.com/Moumitasaha12/Aarogyam.git',
    extra: 'Full-stack healthcare management app. Manages patient records, appointments and doctor scheduling using React.js, Express.js and MongoDB.'
  },
  'Job Portal': {
    github: null,
    extra: 'Java-based web application using Servlets, JSP and MySQL. Features recruiter and applicant dashboards, job posting and application tracking. Response time improved by ~25%.'
  },
  'Covid Detection': {
    github: 'https://github.com/Moumitasaha12/covid_detection.git',
    extra: 'Binary classification of COVID-positive and negative chest X-rays using Python, TensorFlow, Keras and OpenCV. Achieved 94.16% accuracy.'
  },
};

function Modal({ project, onClose }) {
  const details = projectDetails[project.title] || {};
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)',
        zIndex: 1000, display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: 16 }}>
      <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        onClick={e => e.stopPropagation()}
        style={{ background: 'var(--surf)', border: '0.5px solid var(--border)',
          borderRadius: 12, padding: 24, maxWidth: 520, width: '100%',
          maxHeight: '85vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', marginBottom: 14 }}>
          <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: 20,
            fontWeight: 700, color: 'var(--text)', flex: 1, marginRight: 12 }}>
            {project.icon} {project.title}
          </h2>
          <button onClick={onClose}
            style={{ background: 'none', border: 'none', fontSize: 20,
              cursor: 'pointer', color: 'var(--muted)', flexShrink: 0 }}>✕</button>
        </div>
        <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 }}>
          {details.extra || project.description}
        </p>
        {project.accuracy && (
          <div style={{ display: 'inline-block', background: 'var(--surf2)',
            border: '0.5px solid var(--border)', borderRadius: 4,
            padding: '4px 12px', fontSize: 12, marginBottom: 16, color: 'var(--c2)' }}>
            Result: {project.accuracy}
          </div>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {project.tech_stack?.map(t => (
            <span key={t} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 3,
              border: '0.5px solid var(--border)', color: 'var(--muted)' }}>{t}</span>
          ))}
        </div>
        {details.github ? (
          <a href={details.github} target="_blank" rel="noreferrer"
            style={{ background: 'var(--text)', color: 'var(--bg)', padding: '9px 20px',
              borderRadius: 4, fontSize: 12, fontWeight: 500, textDecoration: 'none',
              display: 'inline-block' }}>
            View on GitHub →
          </a>
        ) : (
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>Private / No public repo</span>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const base = import.meta.env.VITE_API_URL || '';
    axios.get(`${base}/api/projects`)
      .then(r => setProjects(r.data))
      .catch(() => setError(true));
  }, []);

  // Fallback static data if API fails
  const fallback = [
    { id:1, icon:'🦠', title:'Monkeypox Detection', description:'CNN + ML models with multi-level attention modules. Built with Python, TensorFlow and OpenCV.', tech_stack:['TensorFlow','OpenCV','CNN','Python'], accuracy:'95.55%' },
    { id:2, icon:'🛢️', title:'ONGC Well Dashboard', description:'Oil well monitoring dashboard processing 5K+ operational records via React and Node.js.', tech_stack:['React','Node.js','CSV'], accuracy:'30% faster' },
    { id:3, icon:'🏥', title:'Aarogyam', description:'Full-stack healthcare management — patient records and appointments.', tech_stack:['React','Express.js','MongoDB'], accuracy:'Full Stack' },
    { id:4, icon:'💼', title:'Job Portal', description:'Java web app with recruiter/applicant dashboards and job tracking.', tech_stack:['Java','JSP','MySQL','Servlets'], accuracy:'25% faster' },
    { id:5, icon:'🫁', title:'Covid Detection', description:'Binary classification of COVID chest X-rays using deep learning.', tech_stack:['TensorFlow','Keras','OpenCV','Python'], accuracy:'94.16%' },
  ];

  const displayProjects = projects.length > 0 ? projects : fallback;

  return (
    <section id="work" style={{ padding: '50px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <span style={{ fontSize: 10, letterSpacing: 2, color: 'var(--muted)',
          textTransform: 'uppercase', fontFamily: 'Playfair Display,serif' }}>Featured Projects</span>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
      </div>
      <div style={{ display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 12 }}>
        {displayProjects.map((p, i) => (
          <motion.div key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            viewport={{ once: true }}
            style={{ background: 'var(--surf)', border: '0.5px solid var(--border)',
              borderRadius: 10, padding: 18, cursor: 'pointer',
              borderTop: `2px solid ${COLORS[i % COLORS.length]}`,
              WebkitTapHighlightColor: 'transparent' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected(p)}>
            <div style={{ display: 'flex', justifyContent: 'space-between',
              alignItems: 'flex-start', marginBottom: 10 }}>
              <span style={{ fontFamily: 'Playfair Display,serif', fontSize: 14,
                fontWeight: 600, flex: 1, marginRight: 8 }}>
                {p.icon} {p.title}
              </span>
              {p.accuracy && (
                <span style={{ fontSize: 10, background: 'var(--surf2)',
                  border: '0.5px solid var(--border)', borderRadius: 3,
                  padding: '2px 7px', color: 'var(--c2)', whiteSpace: 'nowrap' }}>
                  {p.accuracy}
                </span>
              )}
            </div>
            <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 12 }}>
              {p.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 12 }}>
              {p.tech_stack?.map(t => (
                <span key={t} style={{ fontSize: 10, padding: '2px 8px', borderRadius: 3,
                  border: '0.5px solid var(--border)', color: 'var(--muted)' }}>{t}</span>
              ))}
            </div>
            <span style={{ fontSize: 11, color: 'var(--c3)', fontWeight: 500 }}>
              Tap for details →
            </span>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
