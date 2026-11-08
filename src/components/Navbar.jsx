import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Real-time local time in Pakistan (UTC+5)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }).format(now);
        setCurrentTime(timeStr);
      } catch {
        setCurrentTime('PKT (GMT+5)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar-root ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Identity & Monogram */}
            <a href="#hero" className="navbar-brand">
              <span className="brand-monogram">{personalInfo.initials}</span>
              <div className="brand-text">
                <span className="brand-name">{personalInfo.name}</span>
                <span className="brand-role">BS AI • Full-Stack</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="navbar-desktop-nav" aria-label="Main Navigation">
              {navLinks.map((item) => (
                <a key={item.label} href={item.href} className="nav-link-item">
                  <span className="nav-link-dot"></span>
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Availability & Action */}
            <div className="navbar-actions">
              <div className="navbar-status-pill" title="Currently open for select freelance and collaborative roles">
                <span className="status-dot-wrapper">
                  <span className="status-dot-ring"></span>
                  <span className="status-dot-core"></span>
                </span>
                <span className="navbar-status-text">Available</span>
              </div>

              <a href="#contact" className="navbar-cta-btn">
                <span>Let's Talk</span>
                <ArrowUpRight size={13} className="navbar-cta-icon" />
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}>
        <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-brand">
              <span className="brand-monogram">{personalInfo.initials}</span>
              <span className="brand-name">{personalInfo.name}</span>
            </div>
            <button className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="mobile-nav-links">
            {navLinks.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mobile-nav-num">0{index + 1}</span>
                <span className="mobile-nav-label">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="mobile-drawer-footer">
            <div className="mobile-meta-item">
              <span className="mono-meta">Current Location</span>
              <p className="mobile-meta-val">{personalInfo.location}</p>
            </div>
            {currentTime && (
              <div className="mobile-meta-item">
                <span className="mono-meta">Local Time</span>
                <p className="mobile-meta-val">
                  <Clock size={12} style={{ display: 'inline', marginRight: 4 }} />
                  {currentTime} (PKT)
                </p>
              </div>
            )}
            <div className="mobile-drawer-cta">
              <a href="#contact" className="btn-primary" style={{ width: '100%' }} onClick={() => setMobileMenuOpen(false)}>
                Initiate Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
