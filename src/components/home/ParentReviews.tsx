'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const parentReviews = [
  {
    name: 'Makesh Mohanan Sreeveni',
    role: 'Parent',
    stars: 5,
    text: 'Thank you SmartWheels for making my daughter this smart, skilful and athletic. It\'s been a year or more that my daughter is training under you guys. She did achieve many goals under your training. You SmartWheels carved my daughter with discipline & skills. This academy is the best. Thank you once again.',
  },
  {
    name: 'Anupama Abhilash',
    role: 'Parent',
    stars: 5,
    text: 'My son recently joined the SmartWheels skating academy, and I\'m really happy with the experience so far. The coaches are very dedicated and put in a lot of effort with each child. I can already see improvement in his confidence and skills. Thank you for your hard work and commitment. Very dedicated coaches and great effort from the team. My son is enjoying and learning a lot. Highly satisfied with SmartWheels skating academy.',
  },
  {
    name: 'Jaheeda Ajeeb',
    role: 'Parent',
    stars: 5,
    text: 'A great skating academy in Kollam. Professional coaching, and visible student\'s progress.',
  },
  {
    name: 'Veena Praveen',
    role: 'Parent',
    stars: 5,
    text: 'Excellent guidance and support by the Masters. Offers numerous physical and mental benefits. There\'s nothing I would change; everything was well-organized and enjoyable. I\'d definitely recommend SmartWheels to anyone who wants to learn skating in a fun and friendly environment!',
  },
  {
    name: 'B Saju',
    role: 'Parent',
    stars: 5,
    text: 'Very appreciative. Well trained and professional trainers. Dedicative and friendly guys. As a parent I am very satisfied. Value for money is best.',
  },
  {
    name: 'Lijin K L',
    role: 'Parent',
    stars: 5,
    text: 'Highly experienced and well-coordinated instructors provide outstanding, specialized coaching in roll ball.',
  },
  {
    name: 'Jiji Sabu',
    role: 'Parent',
    stars: 5,
    text: 'SmartWheels skating class is very good. They teach the children very well.',
  },
  {
    name: 'Devi Rajesh',
    role: 'Parent',
    stars: 5,
    text: 'One and only one of its kind in Kollam — dedicated instructors thriving to mould students both physically and mentally for the sport of skating.',
  },
  {
    name: 'Shyni Rojin',
    role: 'Parent',
    stars: 5,
    text: 'Best coaching in skating and roll ball. Systematic training and a very friendly atmosphere.',
  },
  {
    name: 'Sumi Sibi',
    role: 'Parent',
    stars: 5,
    text: 'SmartWheels skating Kalluvathukkal coaching is very good.',
  },
  {
    name: 'Prasanth Dharmangatha Kurup',
    role: 'Parent',
    stars: 5,
    text: 'Excellent coaching. The coaches are dedicated and friendly, and the learning environment is very positive. This academy is the best in the area. Highly recommend this place.',
  },
];

export default function ParentReviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} style={{ background: 'var(--bg-secondary)', padding: 'var(--space-12) var(--space-4)', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(255,212,0,0.06), transparent 60%)', pointerEvents: 'none' }} />
      <div className="container">
        <motion.div className="section-title" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', background: 'rgba(255,212,0,0.1)', border: '1px solid rgba(255,212,0,0.3)', borderRadius: '99px', color: '#FFD400', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.12em', marginBottom: 'var(--space-3)' }}>
            ★ Parent Reviews
          </div>
          <h2>What <span className="gradient-text">Parents</span> Say</h2>
          <div className="divider" />
          <p>Real stories of growth, confidence, and championships</p>
        </motion.div>
      </div>

      {/* Marquee Row 1 — left scroll */}
      <div style={{ overflow: 'hidden', marginBottom: 'var(--space-4)' }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          style={{ display: 'flex', gap: 'var(--space-4)', width: 'max-content' }}
        >
          {[...parentReviews, ...parentReviews].map((r, i) => (
            <div key={i} style={{
              minWidth: '340px', maxWidth: '340px',
              background: 'var(--bg-card)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-4)',
              flexShrink: 0,
              boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                {Array.from({ length: r.stars }).map((_, s) => (
                  <span key={s} style={{ color: '#FFD400', fontSize: '1rem' }}>★</span>
                ))}
              </div>
              {/* Quote */}
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 'var(--space-3)', fontStyle: 'italic' }}>
                &ldquo;{r.text}&rdquo;
              </p>
              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #FFD400, #E10600)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: '1rem', color: '#fff', flexShrink: 0 }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-primary)', letterSpacing: '0.04em' }}>{r.name}</div>
                  <div style={{ fontSize: '0.74rem', color: '#FFD400', textTransform: 'uppercase' as const, letterSpacing: '0.08em', fontWeight: 600 }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 — right scroll */}
      <div style={{ overflow: 'hidden' }}>
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 45, ease: 'linear', repeat: Infinity }}
          style={{ display: 'flex', gap: 'var(--space-4)', width: 'max-content' }}
        >
          {[...parentReviews.slice(6), ...parentReviews.slice(0, 6), ...parentReviews.slice(6), ...parentReviews.slice(0, 6)].map((r, i) => (
            <div key={i} style={{
              minWidth: '340px', maxWidth: '340px',
              background: 'var(--bg-card)',
              border: '1px solid rgba(255,212,0,0.08)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-4)',
              flexShrink: 0,
              boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            }}>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                {Array.from({ length: r.stars }).map((_, s) => (
                  <span key={s} style={{ color: '#FFD400', fontSize: '1rem' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 'var(--space-3)', fontStyle: 'italic' }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #E10600, #FFD400)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: '1rem', color: '#fff', flexShrink: 0 }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-primary)', letterSpacing: '0.04em' }}>{r.name}</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--accent-red)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', fontWeight: 600 }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
