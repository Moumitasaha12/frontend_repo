import { motion } from 'framer-motion';

const categories = [
  { title: 'Languages', color: 'var(--c1)', icon: '{ }',
    skills: ['Python', 'Java', 'SQL'] },
  { title: 'Frontend', color: 'var(--c3)', icon: '✦',
    skills: ['React.js', 'HTML', 'CSS', 'JSP'] },
  { title: 'Backend', color: 'var(--c2)', icon: '⚙',
    skills: ['Node.js', 'REST APIs', 'Servlets'] },
  { title: 'ML & AI', color: 'var(--c4)', icon: '◈',
    skills: ['TensorFlow', 'Keras', 'scikit-learn', 'pandas', 'NumPy'] },
  { title: 'Computer Vision', color: 'var(--c1)', icon: '◎',
    skills: ['OpenCV', 'Tesseract OCR', 'CNN', 'LSTM'] },
  { title: 'Databases', color: 'var(--c3)', icon: '▦',
    skills: ['MySQL', 'PostgreSQL'] },
  { title: 'Tools', color: 'var(--c2)', icon: '⬡',
    skills: ['VS Code', 'Kaggle', 'Anaconda', 'Git', 'GitHub'] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '50px clamp(16px,4vw,40px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <span style={{ fontSize: 10, letterSpacing: 2, color: 'var(--muted)',
          textTransform: 'uppercase', fontFamily: 'Playfair Display,serif' }}>Skills & Stack</span>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
      </div>
      <div style={{ display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,200px), 1fr))', gap: 12 }}>
        {categories.map((cat, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
            style={{ background: 'var(--surf)', border: '0.5px solid var(--border)',
              borderRadius: 10, padding: 18, borderTop: `2px solid ${cat.color}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 15, color: cat.color }}>{cat.icon}</span>
              <span style={{ fontFamily: 'Playfair Display,serif', fontSize: 13,
                fontWeight: 600 }}>{cat.title}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {cat.skills.map((skill, j) => (
                <span key={j}
                  style={{ fontSize: 11, padding: '4px 10px', borderRadius: 20,
                    border: '0.5px solid var(--border)', color: 'var(--muted)',
                    display: 'inline-block' }}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
