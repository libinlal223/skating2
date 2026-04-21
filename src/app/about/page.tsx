'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Zap, Target, Eye, Flame, Shield, TrendingUp, Heart, Globe, Star, Building } from 'lucide-react';
import { getAllSchools, SchoolProfile } from '@/lib/schoolService';

const programs = [
  { title: 'Beginner', level: 1, desc: 'Perfect for first-time skaters. Learn balance, basic movement, and safety fundamentals.', color: '#4CAF50', features: ['Basic stance & balance', 'Forward movement', 'Stopping techniques', 'Safety training'] },
  { title: 'Intermediate', level: 2, desc: 'Build speed, agility, and confidence. Advanced techniques for competitive readiness.', color: '#FFD400', features: ['Speed training', 'Crossover turns', 'Slalom techniques', 'Endurance building'] },
  { title: 'Advanced', level: 3, desc: 'Elite training for competition-level skaters. Race preparation and championship coaching.', color: '#E10600', features: ['Race strategy', 'Advanced freestyle', 'Competition preparation', 'Performance analysis'] },
];

const missionPoints = [
  { icon: Flame, color: '#E10600', title: 'Ignite Passion', desc: 'Ignite a passion for skating by creating a dynamic, safe, and motivating learning environment for learners of all ages.' },
  { icon: TrendingUp, color: '#FFD400', title: 'International Standards', desc: 'Train athletes to international standards through expert coaching, structured skill development, and scientific training methods.' },
  { icon: Shield, color: '#C0C0C0', title: 'Build Character', desc: 'Build character beyond the rink by instilling discipline, perseverance, leadership, teamwork, and respect.' },
  { icon: Star, color: '#FFD400', title: 'Nurture Talent', desc: 'Identify, nurture, and mentor talent to prepare skaters for competitive excellence at district, state, national, and international levels.' },
  { icon: Heart, color: '#E10600', title: 'Promote Wellness', desc: 'Promote a culture of fitness and wellbeing, empowering young minds to adopt a healthy, active, and purpose-driven lifestyle.' },
  { icon: Globe, color: '#C0C0C0', title: 'Champion Inclusivity', desc: 'Champion inclusivity and opportunity, ensuring every aspiring skater receives guidance, encouragement, and a platform to shine.' },
];


const reviews = [
  { name: 'Priya Menon', role: 'Parent of student', stars: 5, text: 'My daughter has transformed completely since joining Smart Wheels. The coaches are incredibly patient and professional. She won her first district medal within 6 months!' },
  { name: 'Arjun Nair', role: 'Advanced Student', stars: 5, text: 'Train here for 2 years now. The training is world-class and Coach Abhi pushes you to be the best version of yourself. Best academy in Kerala!' },
  { name: 'Reethu Krishnan', role: 'Parent of student', stars: 5, text: 'The discipline and confidence my son has gained here is priceless. Smart Wheels is not just about skating — it shapes character.' },
  { name: 'Sneha Das', role: 'Intermediate Student', stars: 5, text: 'I came in with zero experience and within a year I was competing at state level. The structured programs really work!' },
  { name: 'Anoop Varma', role: 'Parent of student', stars: 5, text: 'Incredible facilities, dedicated coaches, and a very nurturing environment. My kids absolutely love coming here every day.' },
  { name: 'Meghna Pillai', role: 'Beginner Student', stars: 5, text: 'The best decision I made was joining Smart Wheels. The community is so supportive and the coaches make learning fun and effective.' },
  { name: 'Rahul Shenoy', role: 'Parent of student', stars: 5, text: "Avanika's Guinness World Record is proof of what Smart Wheels can achieve. So proud to be part of this amazing academy family!" },
  { name: 'Divya Suresh', role: 'Advanced Student', stars: 5, text: 'Training with Coach Afi has been life-changing. The attention to detail and personalized coaching here is unlike anything else.' },
];

export default function AboutPage() {
  const ref1 = useRef(null), ref2 = useRef(null), ref3 = useRef(null), ref4 = useRef(null), ref5 = useRef(null), ref6 = useRef(null);
  const inView1 = useInView(ref1, { once: true, margin: '-80px' });
  const inView6 = useInView(ref6, { once: true, margin: '-80px' });
  const inView2 = useInView(ref2, { once: true, margin: '-80px' });
  const inView3 = useInView(ref3, { once: true, margin: '-80px' });
  const inView4 = useInView(ref4, { once: true, margin: '-80px' });
  const inView5 = useInView(ref5, { once: true, margin: '-60px' });

  const [schools, setSchools] = useState<SchoolProfile[]>([]);
  const [schoolsLoading, setSchoolsLoading] = useState(true);

  useEffect(() => {
    getAllSchools().then(list => {
      setSchools(list);
      setSchoolsLoading(false);
    }).catch(() => setSchoolsLoading(false));
  }, []);

  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: 'var(--bg-primary)', paddingTop: 'var(--space-12)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(225,6,0,0.08), transparent 60%)' }} />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: 'var(--space-4)' }}>
          <h1 style={{ marginBottom: 'var(--space-3)' }}>Building <span className="gradient-text">Champions</span> on Wheels</h1>
          <p style={{ maxWidth: 600, margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Smart Wheels has been transforming aspiring skaters into competitive athletes through world-class coaching and state-of-the-art facilities.
          </p>
        </motion.div>
      </section>

      {/* Founder Story */}
      <section ref={ref1} style={{ background: 'var(--bg-secondary)', padding: 'var(--space-12) var(--space-4)' }}>
        <div className="container about-founder-grid">
          {/* Header — desktop col 2 row 1, mobile order 1 */}
          <motion.div className="about-person-header" initial={{ opacity: 0, x: 40 }} animate={inView1 ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: 'var(--accent-red)', letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>Our Story</span>
            <h2 style={{ margin: 'var(--space-2) 0 var(--space-2)' }}>Founder & <span className="gradient-text">Head Coach</span></h2>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>Afi J - Founder &amp; Head Coach</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['B.P.Ed', 'M.P.Ed', 'NSNIS Certified Coach'].map(q => (
                <span key={q} style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 12px', background: 'rgba(225,6,0,0.1)', border: '1px solid rgba(225,6,0,0.3)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-red)', letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>{q}</span>
              ))}
            </div>
          </motion.div>
          {/* Photo — desktop col 1 rows 1–2, mobile order 2 */}
          <motion.div className="about-person-img" initial={{ opacity: 0, x: -40 }} animate={inView1 ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div style={{ width: '100%', maxWidth: '350px', margin: '0 auto', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <motion.img src="/founder.jpeg" alt="Smart Wheels Founder" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </motion.div>
          {/* Body text — desktop col 2 row 2, mobile order 3 */}
          <motion.div className="about-person-body" initial={{ opacity: 0, x: 40 }} animate={inView1 ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-3)' }}>
              Smart Wheels Skating Academy was born from a vision to bring professional-level skating training to aspiring athletes across Kerala. What started as a single training center and has grown into a multi-city academy producing state and national champions.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Our founder, driven by decades of competitive skating experience, established a training methodology that combines international techniques with personalized coaching, creating a path to excellence for every student.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Managing Director */}
      <section ref={ref6} style={{ background: 'var(--bg-primary)', padding: 'var(--space-12) var(--space-4)' }}>
        <div className="container about-md-grid">
          {/* Header — desktop col 1 row 1, mobile order 1 */}
          <motion.div className="about-person-header" initial={{ opacity: 0, x: -40 }} animate={inView6 ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: '#FFD400', letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>Leadership</span>
            <h2 style={{ margin: 'var(--space-2) 0 var(--space-2)' }}>Managing <span className="gradient-text">Director</span></h2>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Amal K S - Managing Director</h3>
          </motion.div>
          {/* Photo — desktop col 2 rows 1–2, mobile order 2 */}
          <motion.div className="about-person-img" initial={{ opacity: 0, x: 40 }} animate={inView6 ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
            <div style={{ width: '100%', maxWidth: '350px', margin: '0 auto', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <motion.img src="/managing director.jpeg" alt="Managing Director" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </motion.div>
          {/* Body text — desktop col 1 row 2, mobile order 3 */}
          <motion.div className="about-person-body" initial={{ opacity: 0, x: -40 }} animate={inView6 ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-3)' }}>
              Guiding Smart Wheels with a strategic vision, our Managing Director ensures that the academy remains at the forefront of skating education and sports management.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Focused on infrastructure, student welfare, and expanding our reach, the leadership is committed to nurturing an environment where every skater can thrive and achieve their highest potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={ref2} style={{ background: 'var(--bg-primary)', padding: 'var(--space-16) var(--space-4)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,212,0,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container">
          <motion.div className="section-title" initial={{ opacity: 0, y: 40 }} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>

            <h2>The <span className="gradient-text">Vision</span></h2>
            <div className="divider" />
          </motion.div>
          <motion.div
            className="about-vision-box"
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              maxWidth: '1060px',
              margin: '0 auto',
              padding: 'var(--space-10) var(--space-12)',
              background: 'linear-gradient(135deg, rgba(255,212,0,0.07), rgba(225,6,0,0.05))',
              border: '1px solid rgba(255,212,0,0.2)',
              borderRadius: 'var(--radius-xl)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: '-20px', left: '40px', fontFamily: 'Georgia, serif', fontSize: '14rem', color: 'rgba(255,212,0,0.07)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>&ldquo;</div>
            <p style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.55rem)', color: 'var(--text-secondary)', lineHeight: 2.1, textAlign: 'center', position: 'relative', zIndex: 1, fontStyle: 'italic', letterSpacing: '0.01em' }}>
              To emerge as a beacon of excellence in skating that shapes{' '}
              <span style={{ color: '#FFD400', fontWeight: 700, fontStyle: 'normal' }}>confident champions</span> and{' '}
              <span style={{ color: '#FFD400', fontWeight: 700, fontStyle: 'normal' }}>responsible individuals</span> — nurturing excellence, resilience, and sportsmanship through world-class training, innovation, and unwavering commitment to holistic development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={ref3} style={{ background: 'var(--bg-secondary)', padding: 'var(--space-12) var(--space-4)' }}>
        <div className="container">
          <motion.div className="section-title" initial={{ opacity: 0, y: 40 }} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', background: 'rgba(225,6,0,0.1)', border: '1px solid rgba(225,6,0,0.3)', borderRadius: '99px', color: 'var(--accent-red)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.12em', marginBottom: 'var(--space-3)' }}>
              <Target size={13} /> Our Mission
            </div>
            <h2>Our <span className="gradient-text">Mission</span></h2>
            <div className="divider" />
            <p style={{ maxWidth: '800px', margin: '0 auto var(--space-3)', lineHeight: 1.8 }}>To emerge as a beacon of excellence in skating that shapes confident champions and responsible individuals—nurturing excellence, resilience, and sportsmanship through world-class training, innovation, and unwavering commitment to holistic development.</p>
            <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>At Smart Wheels Skating Academy, our mission is to:</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)', maxWidth: '1100px', margin: '0 auto' }}>
            {missionPoints.map((item, i) => (
              <motion.div
                key={item.title}
                className="card"
                initial={{ opacity: 0, y: 40 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}
              >
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: `${item.color}18`, border: `1px solid ${item.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <item.icon size={24} color={item.color} strokeWidth={1.5} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', letterSpacing: '0.06em', color: item.color, marginBottom: '4px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Associated Schools Section */}
      <section ref={ref5} style={{ background: 'var(--bg-secondary)', padding: 'var(--space-8) var(--space-4)' }}>
        <div className="container">
          <motion.div className="section-title" initial={{ opacity: 0, y: 40 }} animate={inView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: 'var(--space-4)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: 'rgba(255,212,0,0.1)', border: '1px solid rgba(255,212,0,0.3)', borderRadius: '99px', color: '#FFD400', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.12em', marginBottom: 'var(--space-2)' }}>
              <Building size={12} /> Our Network
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: 'var(--space-2)' }}>Associated <span className="gradient-text">Schools</span></h2>
            <div className="divider" style={{ margin: 'var(--space-2) auto' }} />
            <p style={{ fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto' }}>We are proud to partner with these esteemed institutions to bring quality roller skating education to students within their school campuses.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 'var(--space-2)', maxWidth: '1000px', margin: '0 auto' }}>
            {schoolsLoading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-card)', padding: '8px 12px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)', opacity: 0.5 }}>
                  <div style={{ width: 22, height: 14, background: 'rgba(225,6,0,0.2)', borderRadius: 4 }} />
                  <div style={{ height: 14, background: 'rgba(255,255,255,0.08)', borderRadius: 4, flex: 1 }} />
                </div>
              ))
            ) : schools.length > 0 ? (
              schools.map((school, idx) => (
                <motion.div
                  key={school.id}
                  initial={{ opacity: 0, x: -10, y: 10 }}
                  animate={inView5 ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-card)', padding: '8px 12px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)' }}
                  className="no-hover-card"
                >
                  <div style={{ color: 'var(--accent-red)', fontSize: '0.85rem', width: '22px', fontWeight: 700, flexShrink: 0 }}>{idx + 1}.</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '0.85rem', lineHeight: 1.4 }}>{school.name}</div>
                </motion.div>
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', padding: 'var(--space-4)' }}>
                No associated schools listed yet.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Coaching Fees & Student Packages Section */}
      <section ref={ref4} style={{ background: 'var(--bg-primary)', padding: 'var(--space-12) var(--space-4)' }}>
        <div className="container">
          <motion.div className="section-title" initial={{ opacity: 0, y: 40 }} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: '#FFD400', letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>Programs & Pricing</span>
            <h2>Coaching Fees & <span className="gradient-text">Student Packages</span></h2>
            <div className="divider" />
            <p>We offer flexible coaching programs tailored for schools and students, ensuring quality training and participation in major events.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
            <motion.div className="card" initial={{ opacity: 0, y: 30 }} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}>
              <div style={{ padding: '4px 12px', background: 'rgba(225,6,0,0.1)', color: 'var(--accent-red)', borderRadius: '4px', display: 'inline-block', fontWeight: 600, fontSize: '0.8rem', marginBottom: 'var(--space-2)' }}>MOST POPULAR</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-1)' }}>FULL DAY</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: 'var(--space-3)' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>₹10,000</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Includes Annual Day Dance Performance, Participation in School Rallies, and Roller Skating Skill Development.</p>
            </motion.div>

            <motion.div className="card" initial={{ opacity: 0, y: 30 }} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-1)', marginTop: '28px' }}>HALF DAY</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: 'var(--space-3)' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>₹8,000</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Includes Annual Day Dance Performance and Independence Day Rally Performance.</p>
            </motion.div>

            <motion.div className="card" initial={{ opacity: 0, y: 30 }} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-1)', marginTop: '28px' }}>1.5 HOURS</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: 'var(--space-3)' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>₹6,000</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>(Minimum 30 students per batch)</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView4 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, rgba(225,6,0,0.1), rgba(255,212,0,0.05))',
              border: '1px solid rgba(225,6,0,0.2)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-6)',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>STUDENT PACKAGES</h3>
            <div className="about-packages-row" style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-8)', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
              <div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Monthly</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FFD400' }}>₹300<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}> /student</span></div>
              </div>
              <div className="about-packages-divider" style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Yearly</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#E10600' }}>₹2,500<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}> /year</span></div>
              </div>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '8px 24px', borderRadius: '99px' }}>
              ✨ Includes participation in Annual Day Dance and School Events.
            </p>
          </motion.div>
        </div>
      </section>

    </>
  );
}
