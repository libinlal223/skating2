'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const galleryItems = [
  { id: 34, studentName: 'Subjunior Girls', achievement: 'District Rollball', award: 'Gold Medal', color: '#FFD400', image: '/achievemnts2025/img38.jpeg' },
  { id: 35, studentName: 'Amrita (Subjunior Girls)', achievement: 'State meet Roll ball championship', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img40.jpeg' },
  { id: 36, studentName: 'Devadeth (Sub Junior Boys)', achievement: 'State meet Rollball championship', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img39.jpeg' },
  { id: 37, studentName: 'Jagan (Mini Boys)', achievement: 'State meet Rollball championship', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img41.jpeg' },
  { id: 38, studentName: 'Madhav (Sub Junior Boys)', achievement: 'State meet Rollball championship', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img42.jpeg' },
  { id: 39, studentName: 'Mini Girls', achievement: 'District Roll Ball', award: 'Bronze Medal', color: '#E10600', image: '/achievemnts2025/img43.jpeg' },
  { id: 40, studentName: 'Sub Junior', achievement: 'District Roll Ball', award: 'Bronze Medal', color: '#FFD400', image: '/achievemnts2025/img44.jpeg' },
  { id: 41, studentName: 'Junior', achievement: 'District Roll Ball', award: 'Silver Medal', color: '#C0C0C0', image: '/achievemnts2025/img45.jpeg' },
  { id: 42, studentName: 'mini', achievement: 'District Roll Ball', award: 'Silver Medal', color: '#E10600', image: '/achievemnts2025/img46.jpeg' },
  { id: 43, studentName: 'Parthipan (Sub Junior Boys)', achievement: 'State meet Rollball championship', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img47.jpeg' },
  { id: 44, studentName: 'Anha (Sub Junior Girls )', achievement: 'State meet Rollball championship', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img49.jpeg' },
  { id: 45, studentName: 'Govind (Sub JUnior Boys)', achievement: 'State meet Rollball championship', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img48.jpeg' },
  { id: 46, studentName: 'Avanika (Sub Junior Girls)', achievement: 'State meet Rollball championship', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img50.jpeg' },
  { id: 47, studentName: 'Anugraha (Junior Girls)', achievement: 'State meet Rollball championship', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img51.jpeg' },
  { id: 48, studentName: 'Mahi (Junior Boys)', achievement: 'State meet Rollball championship', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img52.jpeg' },
  { id: 49, studentName: 'Zeher (Super mini Girls) ', achievement: 'South Zone National Championship', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img53.jpeg' },
  { id: 50, studentName: 'Akhilesh (Junior Boys) ', achievement: 'State meet Rollball championship', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img55.jpeg' },
  { id: 51, studentName: 'Bhuvi (Super Mini Girls)', achievement: 'South Zone National Champions', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img54.jpeg' },
  { id: 52, studentName: 'Adam (Super mini Boys) ', achievement: 'South Zone National Champions', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img56.jpeg' },
  { id: 53, studentName: 'Niyati (Super Mini Girls)', achievement: 'South Zone National Champions', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img58.jpeg' },
  { id: 54, studentName: 'Sangeeth (Super Mini Boys)', achievement: 'South Zone National Champions', award: 'Medal / Participation', color: '#E10600', image: '/achievemnts2025/img59.jpeg' },
  { id: 55, studentName: 'Mantra (Super Mini Girls)', achievement: 'South Zone National Champions', award: 'Medal / Participation', color: '#FFD400', image: '/achievemnts2025/img57.jpeg' },
  { id: 56, studentName: 'Namisha P (Super Mini Girls)', achievement: 'South Zone National Champions', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img60.jpeg' },
  { id: 57, studentName: 'Meher (Mini Girls)', achievement: 'District Roll Ball', award: 'Medal / Participation', color: 'rgba(225, 6, 0, 1)', image: '/achievemnts2025/img61.jpeg' },
  { id: 58, studentName: 'Sub Junior Girls', achievement: 'South Zone National Champions', award: 'Gold medal', color: '#FFD400', image: '/achievemnts2025/img62.jpeg' },
  { id: 59, studentName: 'Abhav (Sub Junior Boys)', achievement: 'State meet Rollball championship', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img63.jpeg' },
  { id: 60, studentName: 'Anula Shinu (Sub junior Girls)', achievement: 'National participation and south zone national', award: 'Bronze Medal', color: '#E10600', image: '/achievemnts2025/img64.jpeg' },
  { id: 61, studentName: 'Suhana Nargiz (Sub Junior Girls)', achievement: 'National participation and south zone national', award: 'Bronze Medal', color: '#FFD400', image: '/achievemnts2025/img65.jpeg' },
  { id: 62, studentName: 'Sreehari (Sub Junior Boys)', achievement: 'State meet Rollball championship', award: 'Medal / Participation', color: '#C0C0C0', image: '/achievemnts2025/img66.jpeg' },
  { id: 63, studentName: 'Sanaan ', achievement: '13th Roll Ball National Championship ', award: 'Bronze Medal', color: '#E10600', image: '/achievemnts2025/img67.jpeg' },
  { id: 64, studentName: 'Sidharth V', achievement: '13th Roll Ball National Championship ', award: 'Bronze Medal', color: '#FFD400', image: '/achievemnts2025/img70.jpeg' },
  { id: 65, studentName: 'SmartWheels Interschool skating Championship 2025-26', achievement: 'Champions:Vimala Central School, Karamcode', award: 'Champions', color: '#C0C0C0', image: '/achievemnts2025/img69.jpeg' },
  { id: 66, studentName: 'SmartWheels Interschool skating Championship 2025-26', achievement: ' Spinning Legs, Tvm', award: '1st Runner', color: '#E10600', image: '/achievemnts2025/img68.jpeg' },
  { id: 67, studentName: 'SmartWheels Interschool skating Championship 2025-26', achievement: ' MGM Karuna Central School, Paripally', award: '2nd Runner', color: '#FFD400', image: '/achievemnts2025/img71.jpeg' },
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
              {(() => {
                const item = galleryItems.find(g => g.id === lightbox); return item ? (
                  <div style={{ width: '100%', height: '100%', position: 'relative', background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={item.image} alt={item.studentName} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 0 }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', zIndex: 1, pointerEvents: 'none' }} />
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', letterSpacing: '0.05em', color: '#F5F5F5', zIndex: 2, position: 'absolute', bottom: 40 }}>{item.studentName}</h3>
                    <p style={{ color: '#DDD', zIndex: 2, position: 'absolute', bottom: 15, display: 'flex', gap: '10px', alignItems: 'center' }}><span>{item.achievement}</span> <span style={{ color: item.color }}>|</span> <span>🏆 {item.award}</span></p>
                  </div>) : null;
              })()}
            </motion.div>
            <button onClick={e => { e.stopPropagation(); const idx = galleryItems.findIndex(f => f.id === lightbox); setLightbox(galleryItems[(idx + 1) % galleryItems.length].id); }}
              style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#F5F5F5', cursor: 'pointer', padding: 12, borderRadius: '50%' }}><ChevronRight size={32} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
