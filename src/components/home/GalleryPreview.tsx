'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const galleryItems = [
  { id: 1, studentName: 'Student 5', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img5.jpeg' },
  { id: 2, studentName: 'Student 6', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img6.jpeg' },
  { id: 3, studentName: 'Student 7', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img7.jpeg' },
  { id: 4, studentName: 'Student 8', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img8.jpeg' },
  { id: 5, studentName: 'Student 9', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img9.jpeg' },
  { id: 6, studentName: 'Student 10', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img10.jpeg' },
  { id: 7, studentName: 'Student 11', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img11.jpeg' },
  { id: 8, studentName: 'Student 12', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img12.jpeg' },
  { id: 9, studentName: 'Student 13', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img13.jpeg' },
  { id: 10, studentName: 'Student 14', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img14.jpeg' },
  { id: 11, studentName: 'Student 15', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img15.jpeg' },
  { id: 12, studentName: 'Student 16', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img16.jpeg' },
  { id: 13, studentName: 'Student 17', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img17.jpeg' },
  { id: 14, studentName: 'Student 18', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img18.jpeg' },
  { id: 15, studentName: 'Student 19', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img19.jpeg' },
  { id: 16, studentName: 'Student 20', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img20.jpeg' },
  { id: 17, studentName: 'Student 21', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img21.jpeg' },
  { id: 18, studentName: 'Student 22', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img22.jpeg' },
  { id: 19, studentName: 'Student 23', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img23.jpeg' },
  { id: 20, studentName: 'Student 24', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img24.jpeg' },
  { id: 21, studentName: 'Student 25', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img25.jpeg' },
  { id: 22, studentName: 'Student 26', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img26.jpeg' },
  { id: 23, studentName: 'Student 27', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img27.jpeg' },
  { id: 24, studentName: 'Student 28', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img28.jpeg' },
  { id: 25, studentName: 'Student 29', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img29.jpeg' },
  { id: 26, studentName: 'Student 30', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img30.jpeg' },
  { id: 27, studentName: 'Student 31', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img31.jpeg' },
  { id: 28, studentName: 'Student 32', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img32.jpeg' },
  { id: 29, studentName: 'Student 33', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img33.jpeg' },
  { id: 30, studentName: 'Student 34', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img34.jpeg' },
  { id: 31, studentName: 'Student 35', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img35.jpeg' },
  { id: 32, studentName: 'Student 36', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img36.jpeg' },
  { id: 33, studentName: 'Student 37', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img37.jpeg' },
  { id: 34, studentName: 'Student 38', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img38.jpeg' },
  { id: 35, studentName: 'Student 39', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img39.jpeg' },
  { id: 36, studentName: 'Student 40', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img40.jpeg' },
  { id: 37, studentName: 'Student 41', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img41.jpeg' },
  { id: 38, studentName: 'Student 42', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img42.jpeg' },
  { id: 39, studentName: 'Student 43', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img43.jpeg' },
  { id: 40, studentName: 'Student 44', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img44.jpeg' },
  { id: 41, studentName: 'Student 45', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img45.jpeg' },
  { id: 42, studentName: 'Student 46', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img46.jpeg' },
  { id: 43, studentName: 'Student 47', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img47.jpeg' },
  { id: 44, studentName: 'Student 48', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img48.jpeg' },
  { id: 45, studentName: 'Student 49', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img49.jpeg' },
  { id: 46, studentName: 'Student 50', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img50.jpeg' },
  { id: 47, studentName: 'Student 51', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img51.jpeg' },
  { id: 48, studentName: 'Student 52', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img52.jpeg' },
  { id: 49, studentName: 'Student 53', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img53.jpeg' },
  { id: 50, studentName: 'Student 54', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img54.jpeg' },
  { id: 51, studentName: 'Student 55', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img55.jpeg' },
  { id: 52, studentName: 'Student 56', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img56.jpeg' },
  { id: 53, studentName: 'Student 57', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img57.jpeg' },
  { id: 54, studentName: 'Student 58', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img58.jpeg' },
  { id: 55, studentName: 'Student 59', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img59.jpeg' },
  { id: 56, studentName: 'Student 60', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img60.jpeg' },
  { id: 57, studentName: 'Student 61', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img61.jpeg' },
  { id: 58, studentName: 'Student 62', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img62.jpeg' },
  { id: 59, studentName: 'Student 63', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img63.jpeg' },
  { id: 60, studentName: 'Student 64', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img64.jpeg' },
  { id: 61, studentName: 'Student 65', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img65.jpeg' },
  { id: 62, studentName: 'Student 66', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img66.jpeg' },
  { id: 63, studentName: 'Student 67', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img67.jpeg' },
  { id: 64, studentName: 'Student 68', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img68.jpeg' },
  { id: 65, studentName: 'Student 69', achievement: 'Event Name', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img69.jpeg' },
  { id: 66, studentName: 'Student 70', achievement: 'Event Name', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img70.jpeg' },
  { id: 67, studentName: 'Student 71', achievement: 'Event Name', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img71.jpeg' },
];

export default function GalleryPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightbox, setLightbox] = useState<number | null>(null);
  
  const [isMobile, setIsMobile] = useState(false);
  const [loadClicks, setLoadClicks] = useState(0);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const baseCount = isMobile ? 6 : 20;
  const visibleCount = baseCount + (loadClicks * baseCount);

  const handleLoadMore = () => {
    setLoadClicks(c => c + 1);
  };

  return (
    <section ref={ref} style={{ background: 'var(--bg-primary)', padding: 'var(--space-12) var(--space-4)' }}>
      <div className="container">
        <motion.div className="section-title" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2>Achievements in <span className="gradient-text">2025</span></h2>
          <div className="divider" />
          <p>Capturing moments of excellence, training, and competitive spirit</p>
        </motion.div>

        <motion.div layout className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {galleryItems.slice(0, visibleCount).map((item, i) => (
              <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }} onClick={() => setLightbox(item.id)}
                className="achievement-card"
                style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer', height: i % 3 === 0 ? 300 : 200, background: `linear-gradient(135deg, ${item.color}20, ${item.color}08)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={item.image} alt={item.studentName} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                {/* Always-visible name & event overlay at bottom */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)', padding: '36px 14px 12px', display: 'flex', flexDirection: 'column', gap: 3, pointerEvents: 'none' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', textShadow: '0 1px 4px rgba(0,0,0,0.6)', lineHeight: 1.2 }}>{item.studentName}</span>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: item.color, fontWeight: 600, lineHeight: 1.3 }}>{item.achievement}</span>
                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase' as const, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.85)', fontWeight: 500, lineHeight: 1.2 }}>🏆 {item.award}</span>
                </div>
                {/* Hover zoom icon overlay */}
                <div className="achievement-card-hover" style={{ position: 'absolute', inset: 0, background: 'rgba(225,6,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')} onMouseLeave={e => (e.currentTarget.style.opacity = '0')}>
                  <ZoomIn size={28} color="#fff" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {visibleCount < galleryItems.length && (
          <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
            <button onClick={handleLoadMore} className="btn btn-primary" style={{ cursor: 'pointer', border: 'none' }}>Load More</button>
          </div>
        )}
      </div>
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 400, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)' }}>
            <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: '#F5F5F5', cursor: 'pointer' }}><X size={24} /></button>
            <button onClick={e => { e.stopPropagation(); const idx = galleryItems.findIndex(f => f.id === lightbox); setLightbox(galleryItems[(idx - 1 + galleryItems.length) % galleryItems.length].id); }}
              style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#F5F5F5', cursor: 'pointer', padding: 12, borderRadius: '50%' }}><ChevronLeft size={32} /></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={e => e.stopPropagation()}
              style={{ width: '80%', maxWidth: 800, aspectRatio: '16/10', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              {(() => { const item = galleryItems.find(g => g.id === lightbox); return item ? (
                <div style={{ width: '100%', height: '100%', position: 'relative', background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={item.image} alt={item.studentName} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 0 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', zIndex: 1, pointerEvents: 'none' }} />
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', letterSpacing: '0.05em', color: '#F5F5F5', zIndex: 2, position: 'absolute', bottom: 40 }}>{item.studentName}</h3>
                  <p style={{ color: '#DDD', zIndex: 2, position: 'absolute', bottom: 15, display: 'flex', gap: '10px', alignItems: 'center' }}><span>{item.achievement}</span> <span style={{ color: item.color }}>|</span> <span>🏆 {item.award}</span></p>
                </div>) : null; })()}
            </motion.div>
            <button onClick={e => { e.stopPropagation(); const idx = galleryItems.findIndex(f => f.id === lightbox); setLightbox(galleryItems[(idx + 1) % galleryItems.length].id); }}
              style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#F5F5F5', cursor: 'pointer', padding: 12, borderRadius: '50%' }}><ChevronRight size={32} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
