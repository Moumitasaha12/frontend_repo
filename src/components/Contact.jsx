import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const submit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill all fields.');
      return;
    }
    try {
      await axios.post('/api/contact', form);
      setStatus('Message sent! I will get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('Something went wrong. Please try again.');
    }
  };

  const inputStyle = {
    width: '100%', background: 'var(--surf2)',
    border: '0.5px solid var(--border)',
    borderRadius: 6, padding: '10px 14px', color: 'var(--text)',
    fontSize: 13, outline: 'none', marginBottom: 10,
    fontFamily: 'Inter, sans-serif'
  };

  const links = [
    { label: 'Email', value: 'moumita3651230@gmail.com', href: 'mailto:moumita3651230@gmail.com', color: 'var(--c1)' },
    { label: 'Phone', value: '+91-9362031317', href: 'tel:+919362031317', color: 'var(--c3)' },
    { label: 'LinkedIn', value: 'linkedin.com/in/moumita-saha', href: 'https://www.linkedin.com/in/moumita-saha-727335217', color: 'var(--c4)' },
    { label: 'GitHub', value: 'github.com/moumitasaha', href: 'https://github.com/Moumitasaha12', color: 'var(--c2)' },
  ];

  return (
    <section id="contact" style={{ padding: '50px 40px 70px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
        <span style={{ fontSize: 10, letterSpacing: 2, color: 'var(--muted)',
          textTransform: 'uppercase', fontFamily: 'Playfair Display,serif' }}>Get In Touch</span>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
      </div>

      <div style={{ display: 'flex', gap: 50, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 260 }}>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8,
            marginBottom: 24, fontWeight: 300 }}>
            I am currently looking for full-time opportunities. Whether you have a question,
            a project idea, or just want to say hello — my inbox is always open!
          </p>
          <input style={inputStyle} placeholder="Your Name"
            value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          <input style={inputStyle} placeholder="Your Email"
            value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          <textarea style={{ ...inputStyle, height: 120, resize: 'vertical' }}
            placeholder="Your Message"
            value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            onClick={submit}
            style={{ background: 'var(--c1)', color: '#fff', border: 'none',
              padding: '10px 28px', borderRadius: 4, fontSize: 13,
              fontWeight: 500, cursor: 'pointer' }}>
            Send Message →
          </motion.button>
          {status && (
            <p style={{ fontSize: 12, color: 'var(--c2)', marginTop: 10 }}>{status}</p>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10,
          justifyContent: 'flex-start', paddingTop: 60 }}>
          {links.map((c, i) => (
            <a key={i} href={c.href} target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 12,
                background: 'var(--surf)', border: '0.5px solid var(--border)',
                borderRadius: 6, padding: '12px 18px', fontSize: 13,
                textDecoration: 'none', color: 'var(--text)',
                transition: 'border-color .2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = c.color}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
              <span style={{ width: 7, height: 7, borderRadius: '50%',
                background: c.color, display: 'block', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 10, color: 'var(--muted)',
                  letterSpacing: 0.5, marginBottom: 2 }}>{c.label}</div>
                <div style={{ fontSize: 12 }}>{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
