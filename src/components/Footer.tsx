'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname?.startsWith('/admin') || pathname?.startsWith('/instructor') || pathname?.startsWith('/student')) return null;

  return (
    <footer className="footer">
      {/* Red accent line */}
      <div className="footer__accent-line" />

      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <Image src="/logo.jpg" alt="SmartWheels Logo" width={40} height={40} style={{ borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.1em', fontSize: '1.25rem' }}>
                  SmartWheels
                </h4>
                <span style={{ fontSize: '0.65rem', color: 'var(--accent-red)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  Skating Academy
                </span>
              </div>
            </div>
            <p className="footer__tagline">
              Professional skating training for all ages. Building champions since 2019.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className="footer__social-link" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="footer__social-link" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h5 className="footer__col-title">Quick Links</h5>
            <Link href="/about" className="footer__link">About Us</Link>
            <Link href="/branches" className="footer__link">Our Branches</Link>
            <Link href="/gallery" className="footer__link">Gallery</Link>
            <Link href="/contact" className="footer__link">Contact</Link>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h5 className="footer__col-title">Contact Us</h5>
            <a href="tel:+911234567890" className="footer__link footer__contact-link">
              <Phone size={14} />
              +91 123 456 7890
            </a>
            <a href="mailto:info@smartwheels.com" className="footer__link footer__contact-link">
              <Mail size={14} />
              info@smartwheels.com
            </a>
            <span className="footer__link footer__contact-link">
              <MapPin size={14} />
              Mumbai, India
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© {currentYear} SmartWheels Skating Academy. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>


    </footer>
  );
}
