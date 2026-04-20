'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const parentReviews = [
  { name: 'Priya Menon', role: 'Parent', stars: 5, text: 'My daughter has transformed completely since joining SmartWheels. The coaches are incredibly patient and professional. She won her first district medal within 6 months!' },
  { name: 'Rahul Shenoy', role: 'Parent', stars: 5, text: "Avanika's Guinness World Record is proof of what SmartWheels can achieve. So proud to be part of this amazing academy family!" },
  { name: 'John David', role: 'Parent', stars: 5, text: 'The discipline and confidence my son has gained here is priceless. SmartWheels is not just about skating — it shapes character.' },
  { name: 'Sofia Reji', role: 'Parent', stars: 5, text: 'The coaching staff is top-notch. They pay attention to every detail and ensure every child is progressing safely.' },
  { name: 'Anand Varma', role: 'Parent', stars: 5, text: 'Incredible facilities, dedicated coaches, and a very nurturing environment. My kids absolutely love coming here every day.' },
  { name: 'Deepa Nair', role: 'Parent', stars: 5, text: 'Highly recommend this academy! The systematic approach to training has helped my daughter become much faster and more confident.' },
  { name: 'George Kurian', role: 'Parent', stars: 5, text: 'Best skating academy in Kerala. The way they prepare kids for national level competitions is truly commendable.' },
  { name: 'Meera Krishnan', role: 'Parent', stars: 5, text: 'We have been with SmartWheels for two years. Seeing my son perform at the state level has been a dream come true.' },
  { name: 'Ajith Kumar', role: 'Parent', stars: 5, text: 'The focus on physical fitness, balance, and sportsmanship is amazing. I can see a positive change in my kid’s overall health.' },
  { name: 'Sneha Thomas', role: 'Parent', stars: 5, text: 'A great place for beginners and advanced skaters alike. The trainers make learning fun while keeping a strict focus on form.' },
  { name: 'Rajeev Pillai', role: 'Parent', stars: 5, text: 'I am so happy with the progress my children have made. The academy provides regular feedback and keeps parents involved.' },
  { name: 'Lakshmi Iyer', role: 'Parent', stars: 5, text: 'Absolutely fantastic! The team spirit and motivation the coaches instil in the students is what makes SmartWheels stand out.' },
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
