import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Languages',
    color: 'var(--c1)',
    icon: '{ }',
    skills: ['Python', 'Java', 'SQL']
  },
  {
    title: 'Frontend',
    color: 'var(--c3)',
    icon: '✦',
    skills: ['React.js', 'HTML', 'CSS', 'JSP']
  },
  {
    title: 'Backend',
    color: 'var(--c2)',
    icon: '⚙',
    skills: ['Node.js', 'Express.js', 'Servlets', 'REST APIs']
  },
  {
    title: 'ML & AI',
    color: 'var(--c4)',
    icon: '◈',
    skills: ['TensorFlow', 'Keras', 'scikit-learn', 'pandas', 'NumPy', 'matplotlib']
  },
  {
    title: 'Computer Vision',
    color: 'var(--c1)',
    icon: '◎',
    skills: ['OpenCV', 'Tesseract OCR', 'CNN', 'LSTM']
  },
  {
    title: 'Databases',
    color: 'var(--c3)',
    icon: '▦',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL']
  },
  {
    title: 'Tools & IDEs',
    color: 'var(--c2)',
    icon: '⬡',
    skills: ['VS Code', 'Kaggle', 'Anaconda', 'Eclipse', 'Git', 'GitHub']
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '50px 40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
        <span style={{ fontSize: 10, letterSpacing: 2, color: 'var(--muted)',
          textTransform: 'uppercase', fontFamily: 'Playfair Display,serif' }}>Skills & Stack</span>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
      </div>

      <div style={{ display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
        {categories.map((cat, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, boxShadow: '0 6px 24px rgba(0,0,0,0.08)' }}
            style={{ background: 'var(--surf)', border: '0.5px solid var(--border)',
              borderRadius: 10, padding: 20,
              borderTop: `2px solid ${cat.color}` }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 16, color: cat.color }}>{cat.icon}</span>
              <span style={{ fontFamily: 'Playfair Display,serif', fontSize: 14,
                fontWeight: 600, color: 'var(--text)' }}>{cat.title}</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {cat.skills.map((skill, j) => (
                <motion.span key={j}
                  whileHover={{ scale: 1.05, background: cat.color, color: '#fff',
                    borderColor: cat.color }}
                  style={{ fontSize: 11, padding: '4px 10px', borderRadius: 20,
                    border: '0.5px solid var(--border)', color: 'var(--muted)',
                    cursor: 'default', transition: 'all .15s', display: 'inline-block' }}>
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      

    </section>
  );
}
