'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const branchData = [
  { name: 'Anchal', location: 'Market jn, Anchal, Kollam, Kerala 691306', timings: '06:00 AM - 08:00 PM', phone: '+91 9876543210', mapQuery: 'SMARTWHEELS+Skating+Academy,+Market+jn,+Anchal,+Kollam,+Kerala+691306', lat: 8.9288, lng: 76.9048 },
  { name: 'Izyan Sports City Puthenkulam', location: 'Puthenkulam, Parippally, Kerala 691302', timings: '06:00 AM - 08:00 PM', phone: '+91 9876543211', mapQuery: 'Izyan+Sports+City+%26+Convention+Centre,+Puthenkulam,+Parippally,+Kerala+691302', lat: 8.8105, lng: 76.7323 },
  { name: 'Kalluvathukkal', location: 'Kalluvathukkal, Kerala 691578', timings: '06:00 AM - 08:00 PM', phone: '+91 9876543212', mapQuery: 'SMARTWHEELS+Skating+Academy,+Kalluvathukkal,+Kerala+691578', lat: 8.8183, lng: 76.7454 },
];

export default function BranchesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)', paddingTop: 'var(--space-12)', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 80%, rgba(255,212,0,0.06), transparent 60%)' }} />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', zIndex: 1 }}>
          <h1>Our <span className="gradient-text">Branches</span></h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: 'var(--space-2) auto 0' }}>Find a SmartWheels training center near you</p>
        </motion.div>
      </section>

      {/* Map Embeds */}
      <section style={{ background: 'var(--bg-secondary)', padding: 'var(--space-6) var(--space-4)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-4)' }}>
            {branchData.map((branch, idx) => (
              <motion.div 
                key={branch.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: 'var(--space-3) var(--space-4)', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.06)', borderBottom: 'none' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '0.05em' }}>
                    {branch.name}
                  </h3>
                </div>
                <div style={{ width: '100%', height: 350, borderBottomLeftRadius: 'var(--radius-lg)', borderBottomRightRadius: 'var(--radius-lg)', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
                  <iframe 
                    src={`https://maps.google.com/maps?q=${branch.mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    aria-hidden="false" 
                    tabIndex={0}
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Cards */}
      <section ref={ref} style={{ background: 'var(--bg-primary)', padding: 'var(--space-12) var(--space-4)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-4)' }}>
            {branchData.map((b, i) => (
              <motion.div key={b.name} className="card" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ padding: 'var(--space-4)', flex: '1 1 300px', maxWidth: '380px', width: '100%' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', letterSpacing: '0.06em', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>{b.name}</h3>
                {[
                  { icon: MapPin, text: b.location },
                  { icon: Clock, text: b.timings },
                  { icon: Phone, text: b.phone },
                ].map((detail, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 8 }}>
                    <detail.icon size={16} color="var(--accent-red)" /> {detail.text}
                  </div>
                ))}
                <a href={`tel:${b.phone.replace(/\s/g, '')}`} className="btn btn-primary" style={{ marginTop: 'var(--space-2)', width: '100%', fontSize: '0.8rem' }}>Contact Branch</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
