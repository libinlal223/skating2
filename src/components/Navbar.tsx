'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Branches', href: '/branches' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname?.startsWith('/admin') || pathname?.startsWith('/instructor') || pathname?.startsWith('/student')) return null;

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="navbar__inner">
        {/* Logo */}
        <Link href="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <Image src="/logo.jpg" alt="SmartWheels Logo" width={40} height={40} style={{ borderRadius: '50%', objectFit: 'cover' }} />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">SmartWheels</span>
            <span className="navbar__logo-sub">Skating Academy</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="navbar__link">
              {link.name}
              <span className="navbar__link-underline" />
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="navbar__actions">
          <Link href="/student/login" className="navbar__portal-btn">
            Student Portal
          </Link>
          <Link href="/admin/login" className="btn btn-primary navbar__cta">
            Admin Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar__mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="navbar__mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <div className="navbar__mobile-actions">
              <Link href="/student/login" className="btn btn-secondary" style={{ width: '100%' }}>
                Student Portal
              </Link>
              <Link href="/admin/login" className="btn btn-primary" style={{ width: '100%' }}>
                Admin Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </motion.header>
  );
}
