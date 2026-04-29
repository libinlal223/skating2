'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

// All unique images from /public/gallery
const galleryItems = [
  { id: 1,  src: '/gallery/photo_1_2026-04-28_23-05-21.jpg'  },
  { id: 2,  src: '/gallery/photo_2_2026-04-28_23-05-21.jpg'  },
  { id: 3,  src: '/gallery/photo_3_2026-04-28_23-05-21.jpg'  },
  { id: 4,  src: '/gallery/photo_4_2026-04-28_23-05-21.jpg'  },
  { id: 5,  src: '/gallery/photo_5_2026-04-28_23-05-21.jpg'  },
  { id: 6,  src: '/gallery/photo_6_2026-04-28_23-05-21.jpg'  },
  { id: 7,  src: '/gallery/photo_7_2026-04-28_23-05-21.jpg'  },
  { id: 8,  src: '/gallery/photo_8_2026-04-28_23-05-21.jpg'  },
  { id: 9,  src: '/gallery/photo_9_2026-04-28_23-05-21.jpg'  },
  { id: 10, src: '/gallery/photo_10_2026-04-28_23-05-21.jpg' },
  { id: 11, src: '/gallery/photo_2_2026-04-28_23-05-54.jpg'  },
  { id: 12, src: '/gallery/photo_3_2026-04-28_23-05-54.jpg'  },
  { id: 13, src: '/gallery/photo_4_2026-04-28_23-05-54.jpg'  },
];

export default function GalleryPage() {
  const [lb, setLb]           = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(galleryItems.length);

  const lbItem  = galleryItems.find(i => i.id === lb);
  const lbIndex = galleryItems.findIndex(i => i.id === lb);

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLb(galleryItems[(lbIndex - 1 + galleryItems.length) % galleryItems.length].id);
  };
  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLb(galleryItems[(lbIndex + 1) % galleryItems.length].id);
  };

  useEffect(() => {
    if (lb === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  setLb(galleryItems[(lbIndex - 1 + galleryItems.length) % galleryItems.length].id);
      if (e.key === 'ArrowRight') setLb(galleryItems[(lbIndex + 1) % galleryItems.length].id);
      if (e.key === 'Escape')     setLb(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lb, lbIndex]);

  const visItems = galleryItems.slice(0, visibleCount);

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        minHeight: '38vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg-primary)',
        paddingTop: 'var(--space-12)',
        textAlign: 'center',
      }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 'var(--space-2)' }}>
            SmartWheels · Moments
          </p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', marginBottom: 'var(--space-3)' }}>
            Our <span className="gradient-text">Gallery</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto' }}>
            Moments of triumph, training, and teamwork — captured through the lens
          </p>
        </motion.div>
      </section>

      {/* ── Masonry Grid ── */}
      <section style={{ background: 'var(--bg-secondary)', padding: 'var(--space-8) var(--space-4) var(--space-12)' }}>
        <div className="container">

          {/* Responsive column count via CSS var */}
          <style>{`
            .gallery-masonry {
              columns: 4;
              column-gap: 14px;
            }
            @media (max-width: 1100px) { .gallery-masonry { columns: 3; } }
            @media (max-width: 700px)  { .gallery-masonry { columns: 2; } }
            @media (max-width: 420px)  { .gallery-masonry { columns: 1; } }

            .gallery-tile { break-inside: avoid; margin-bottom: 14px; }

            .gallery-tile:hover .gallery-zoom { opacity: 1 !important; }
          `}</style>

          <div className="gallery-masonry">
            {visItems.map((item, i) => (
              <motion.div
                key={item.id}
                className="gallery-tile"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (i % 12) * 0.04 }}
                onClick={() => setLb(item.id)}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'block',
                }}
              >
                {/* Natural-aspect image — portrait stays tall, landscape stays short */}
                <img
                  src={item.src}
                  alt={`SmartWheels gallery photo ${item.id}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',       // ← key: no forced height
                    display: 'block',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                />

                {/* Hover overlay */}
                <div
                  className="gallery-zoom"
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(225,6,0,0.50)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.28s ease',
                    backdropFilter: 'blur(3px)',
                  }}
                >
                  <ZoomIn size={34} color="#fff" />
                </div>
              </motion.div>
            ))}
          </div>

          {visibleCount < galleryItems.length && (
            <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
              <button
                onClick={() => setVisibleCount(c => c + 12)}
                className="btn btn-primary"
                style={{ cursor: 'pointer', border: 'none' }}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lb !== null && lbItem && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLb(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 500,
              background: 'rgba(0,0,0,0.94)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(16px)',
            }}
          >
            {/* Close */}
            <button onClick={() => setLb(null)} style={{
              position: 'absolute', top: 20, right: 20,
              background: 'rgba(255,255,255,0.12)', border: 'none',
              color: '#fff', cursor: 'pointer', padding: 10, borderRadius: '50%', display: 'flex',
            }}>
              <X size={22} />
            </button>

            {/* Prev */}
            <button onClick={goPrev} style={{
              position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.12)', border: 'none',
              color: '#fff', cursor: 'pointer', padding: 14, borderRadius: '50%', display: 'flex',
            }}>
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={lb}
              initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              style={{ borderRadius: '14px', overflow: 'hidden', maxWidth: '88vw', maxHeight: '88vh' }}
            >
              <img
                src={lbItem.src}
                alt={`SmartWheels gallery photo ${lbItem.id}`}
                style={{
                  display: 'block',
                  maxWidth: '88vw',
                  maxHeight: '88vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </motion.div>

            {/* Next */}
            <button onClick={goNext} style={{
              position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.12)', border: 'none',
              color: '#fff', cursor: 'pointer', padding: 14, borderRadius: '50%', display: 'flex',
            }}>
              <ChevronRight size={28} />
            </button>

            {/* Counter */}
            <p style={{
              position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', letterSpacing: '0.12em', margin: 0,
            }}>
              {lbIndex + 1} / {galleryItems.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
