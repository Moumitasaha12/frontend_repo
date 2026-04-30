const items = ['Python','React','Node.js','TensorFlow','OpenCV','Java','MySQL','Deep Learning','PostgreSQL','OCR','Express','MongoDB'];

export default function Ticker() {
  return (
    <div style={{ borderTop: '0.5px solid #1c1c1c', borderBottom: '0.5px solid #1c1c1c',
      padding: '10px 0', overflow: 'hidden', background: '#0d0d0d' }}>
      <div style={{ display: 'flex', gap: 36, animation: 'ticker 25s linear infinite',
        whiteSpace: 'nowrap' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{
            fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700,
            letterSpacing: 1, textTransform: 'uppercase',
            color: i % 3 === 0 ? 'var(--c5)' : 'var(--muted)'
          }}>{item} ·</span>
        ))}
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
