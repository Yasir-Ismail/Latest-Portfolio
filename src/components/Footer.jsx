import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = 2026;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container">
        {/* Main Footer Block */}
        <div className="footer-main-grid">
          {/* Identity & Mission */}
          <div className="footer-col-identity">
            <div className="footer-brand">
              <span className="brand-monogram">{personalInfo.initials}</span>
              <span className="footer-brand-name">{personalInfo.name}</span>
            </div>
            <p className="footer-tagline">
              BS Artificial Intelligence Student at KFUEIT &amp; Full-Stack Web Developer. Dedicated to minimal, reliable, user-focused digital systems.
            </p>
            <div className="footer-location-stamp mono-meta">
              <span>{personalInfo.location}</span>
              <span className="footer-dot">•</span>
              <span>{personalInfo.coordinates}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col-nav">
            <span className="footer-heading mono-spec">NAVIGATION</span>
            <ul className="footer-links-list">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#projects" className="footer-link">Selected Works</a></li>
              <li><a href="#about" className="footer-link">Background &amp; Philosophy</a></li>
              <li><a href="#skills" className="footer-link">Technical Arsenal</a></li>
              <li><a href="#credentials" className="footer-link">Credentials</a></li>
              <li><a href="#contact" className="footer-link">Communication</a></li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="footer-col-channels">
            <span className="footer-heading mono-spec">CHANNELS</span>
            <ul className="footer-links-list">
              <li>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-link footer-ext-link">
                  <span>GitHub Profile</span>
                  <ArrowUpRight size={11} />
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link footer-ext-link">
                  <span>LinkedIn Network</span>
                  <ArrowUpRight size={11} />
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className="footer-link footer-ext-link">
                  <span>Direct Email</span>
                  <ArrowUpRight size={11} />
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="footer-link footer-ext-link">
                  <span>WhatsApp Messenger</span>
                  <ArrowUpRight size={11} />
                </a>
              </li>
              <li>
                <a href={personalInfo.existingPortfolio} target="_blank" rel="noopener noreferrer" className="footer-link footer-ext-link">
                  <span>Classic Portfolio</span>
                  <ArrowUpRight size={11} />
                </a>
              </li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="footer-col-action">
            <button onClick={scrollToTop} className="footer-back-to-top" aria-label="Back to top of page">
              <span className="mono-meta">BACK TO TOP</span>
              <div className="back-to-top-icon">
                <ArrowUp size={14} />
              </div>
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright mono-meta">
            &copy; {CURRENT_YEAR} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-ethos mono-meta">
            Designed with quiet luxury, minimal editorial typography &amp; clean web standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
