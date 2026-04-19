'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const baseItems = [
  { studentName: 'John Doe', achievement: 'Speed Training', award: 'Gold Medal', color: '#E10600', image: '/WhatsApp%20Image%202026-04-16%20at%2010.23.55%20AM.jpeg' },
  { studentName: 'Jane Smith', achievement: 'State Championship', award: 'State Champion', color: '#FFD400', image: '/WhatsApp%20Image%202026-04-16%20at%2010.23.58%20AM.jpeg' },
  { studentName: 'Alex Johnson', achievement: 'Annual Day 2024', award: 'Best Performer', color: '#C0C0C0', image: '/WhatsApp%20Image%202026-04-16%20at%2010.23.59%20AM%20(1).jpeg' },
  { studentName: 'Emily Davis', achievement: 'Balance Drills', award: '1st Place', color: '#E10600', image: '/WhatsApp%20Image%202026-04-16%20at%2010.23.59%20AM%20(2).jpeg' },
  { studentName: 'Michael Brown', achievement: 'National Recognition', award: 'National Finalist', color: '#FFD400', image: '/WhatsApp%20Image%202026-04-16%20at%2010.23.59%20AM.jpeg' },
  { studentName: 'Sarah Wilson', achievement: 'District Finals', award: 'Silver Medal', color: '#C0C0C0', image: '/WhatsApp%20Image%202026-04-16%20at%2010.32.21%20AM%20(1).jpeg' },
  { studentName: 'David Lee', achievement: 'Summer Camp', award: 'Fastest Lap', color: '#E10600', image: '/WhatsApp%20Image%202026-04-16%20at%2010.32.21%20AM.jpeg' },
  { studentName: 'Laura White', achievement: 'Technique Session', award: 'Perfect Form', color: '#FFD400', image: '/WhatsApp%20Image%202026-04-16%20at%2010.32.22%20AM%20(1).jpeg' },
  { studentName: 'Chris Green', achievement: 'Excellence Trophy', award: 'Trophy Winner', color: '#E10600', image: '/WhatsApp%20Image%202026-04-16%20at%2010.32.22%20AM.jpeg' },
  { studentName: 'Emma Hall', achievement: 'Regional Sprint', award: 'Gold Medal', color: '#FFD400', image: '/WhatsApp%20Image%202026-04-16%20at%2010.32.23%20AM%20(1).jpeg' },
  { studentName: 'James Allen', achievement: 'Winter Carnival', award: 'Bronze Medal', color: '#C0C0C0', image: '/WhatsApp%20Image%202026-04-16%20at%2010.32.23%20AM%20(2).jpeg' },
  { studentName: 'Olivia Scott', achievement: 'Advanced Tactics', award: 'Rising Star', color: '#E10600', image: '/WhatsApp%20Image%202026-04-16%20at%2010.32.23%20AM.jpeg' },
];

const galleryItems = Array.from({ length: 28 }).map((_, i) => ({
  id: i + 1,
  studentName: baseItems[i % baseItems.length].studentName,
  achievement: baseItems[i % baseItems.length].achievement,
  award: baseItems[i % baseItems.length].award,
  color: baseItems[i % baseItems.length].color,
  image: baseItems[i % baseItems.length].image
}));

export default function GalleryPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, galleryItems.length));
  };

  return (
    <section ref={ref} style={{ background: 'var(--bg-primary)', padding: 'var(--space-12) var(--space-4)' }}>
      <div className="container">
        <motion.div className="section-title" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2>Achievements in <span className="gradient-text">2025</span></h2>
          <div className="divider" />
          <p>Capturing moments of excellence, training, and competitive spirit</p>
        </motion.div>

        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--space-2)' }}>
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
