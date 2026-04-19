'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Trophy } from 'lucide-react';

const medals = [
  {
    type: 'Gold',
    color: '#FFD400',
    glow: 'rgba(255,212,0,0.4)',
    count: 12,
    competition: 'State Championship 2024',
    event: 'Speed Skating',
  },
  {
    type: 'Silver',
    color: '#C0C0C0',
    glow: 'rgba(192,192,192,0.4)',
    count: 18,
    competition: 'District Championship 2024',
    event: 'Freestyle Skating',
  },
  {
    type: 'Bronze',
    color: '#CD7F32',
    glow: 'rgba(205,127,50,0.4)',
    count: 25,
    competition: 'National Championship 2023',
    event: 'Artistic Skating',
  },
];

export default function MedalShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="medals section-padding" ref={ref}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Medal <span className="gradient-text">Showcase</span>
          </h2>
          <div className="divider" />
          <p>Our students&apos; achievements on the competitive stage</p>
        </motion.div>

        <div className="medals__grid">
          {medals.map((medal, i) => (
            <motion.div
              key={medal.type}
              className="medals__card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div
                className="medals__icon"
                style={{
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                <span className="medals__emoji">
                  <Trophy size={64} color={medal.color} strokeWidth={1.5} />
                </span>
              </div>

              <h3 className="medals__type" style={{ color: medal.color }}>{medal.type}</h3>
              <div className="medals__count">{medal.count} Medals</div>


            </motion.div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
