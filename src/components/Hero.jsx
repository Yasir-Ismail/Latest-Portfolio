import { ArrowDown, ArrowUpRight, Compass, Terminal, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        {/* Top Editorial Index Line */}
        <div className="hero-top-bar">
          <div className="hero-top-item">
            <span className="mono-spec">FOLIO / 2026</span>
            <span className="hero-top-sep">•</span>
            <span className="mono-meta">PORTFOLIO EDITION</span>
          </div>

          <div className="hero-top-item hero-top-center">
            <Compass size={12} className="hero-icon-muted" />
            <span className="mono-meta">{personalInfo.location}</span>
            <span className="hero-top-sep">|</span>
            <span className="mono-spec">{personalInfo.coordinates}</span>
          </div>

          <div className="hero-top-item">
            <span className="status-dot-wrapper">
              <span className="status-dot-ring"></span>
              <span className="status-dot-core"></span>
            </span>
            <span className="mono-meta">{personalInfo.status}</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="hero-grid">
          {/* Main Column: Typography & Intent */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dash"></span>
              <span className="mono-spec">ARTIFICIAL INTELLIGENCE &amp; WEB ENGINEERING</span>
            </div>

            <h1 className="hero-name">
              {personalInfo.name}
            </h1>

            <h2 className="hero-headline">
              &ldquo;Building digital experiences with code and creativity.&rdquo;
            </h2>

            <p className="hero-intro">
              {personalInfo.introduction}
            </p>

            {/* Editorial Quick Metrics Bar */}
            <div className="hero-specs-row">
              <div className="hero-spec-box">
                <span className="spec-label">EDUCATION</span>
                <span className="spec-value">BS Artificial Intelligence</span>
                <span className="spec-sub">KFUEIT (2024–2028)</span>
              </div>
              <div className="hero-spec-box">
                <span className="spec-label">FOCUS</span>
                <span className="spec-value">Full-Stack &amp; Vision</span>
                <span className="spec-sub">Practical Products</span>
              </div>
              <div className="hero-spec-box">
                <span className="spec-label">STATUS</span>
                <span className="spec-value">Available</span>
                <span className="spec-sub">Freelance &amp; Collab</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary">
                <span>View Selected Works</span>
                <ArrowDown size={14} />
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Let's Talk</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Quick Links & Verification */}
            <div className="hero-social-links">
              <span className="mono-meta" style={{ marginRight: '0.5rem' }}>DIRECT:</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero-link">
                GitHub <ArrowUpRight size={11} />
              </a>
              <span className="hero-link-sep">/</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero-link">
                LinkedIn <ArrowUpRight size={11} />
              </a>
              <span className="hero-link-sep">/</span>
              <a href={`mailto:${personalInfo.email}`} className="hero-link">
                Email <ArrowUpRight size={11} />
              </a>
            </div>
          </div>

          {/* Right Column: Distinctive Personal Identity Composition */}
          <div className="hero-identity-wrapper">
            <div className="identity-card">
              {/* Editorial Corner Crosshairs */}
              <div className="corner-mark corner-tl">+</div>
              <div className="corner-mark corner-tr">+</div>
              <div className="corner-mark corner-bl">+</div>
              <div className="corner-mark corner-br">+</div>

              {/* Identity Header */}
              <div className="identity-header">
                <div className="identity-badge">
                  <span className="identity-badge-dot"></span>
                  <span className="mono-spec">AUTHENTIC RECORD</span>
                </div>
                <span className="identity-id">REF. YI-2026-KF</span>
              </div>

              {/* Portrait Frame with Warm Monochromatic Tone */}
              <div className="identity-image-frame">
                <img
                  src={personalInfo.avatar}
                  alt="Yasir Ismail portrait"
                  className="identity-portrait"
                  onError={(e) => {
                    // Fallback to sophisticated monogram if image load fails
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="identity-monogram-fallback" style={{ display: 'none' }}>
                  <span className="fallback-initials">YI</span>
                  <span className="mono-spec">Yasir Ismail</span>
                </div>
                
                {/* Floating Subtle Metadata Overlay */}
                <div className="identity-overlay-badge">
                  <Terminal size={11} />
                  <span>Full-Stack &amp; AI</span>
                </div>
              </div>

              {/* Identity Details Sheet */}
              <div className="identity-details">
                <div className="identity-row">
                  <span className="mono-meta">Identity</span>
                  <span className="identity-value">{personalInfo.name}</span>
                </div>
                <div className="identity-row">
                  <span className="mono-meta">Degree</span>
                  <span className="identity-value">BS Artificial Intelligence</span>
                </div>
                <div className="identity-row">
                  <span className="mono-meta">Institution</span>
                  <span className="identity-value">KFUEIT (2024–2028)</span>
                </div>
                <div className="identity-row">
                  <span className="mono-meta">Practice</span>
                  <span className="identity-value">Web Tech • Python • Vision</span>
                </div>

                <div className="identity-footer-stamp">
                  <div className="stamp-seal">
                    <ShieldCheck size={14} className="stamp-icon" />
                    <span>VERIFIED PROFILE</span>
                  </div>
                  <span className="mono-spec">PK • 2026</span>
                </div>
              </div>
            </div>

              <div className="identity-caption">
                <span className="identity-caption-line"></span>
                <p className="identity-caption-text">
                  Combining software craft with emerging machine intelligence.
                </p>
              </div>
          </div>
        </div>

        {/* Editorial Sub-Hero Banner */}
        <div className="hero-ticker-band">
          <div className="ticker-item">
            <span className="ticker-bullet">✦</span>
            <span>KFUEIT BS ARTIFICIAL INTELLIGENCE (2024–2028)</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-bullet">✦</span>
            <span>FULL-STACK WEB DEVELOPMENT</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-bullet">✦</span>
            <span>COMPUTER VISION &amp; DEEP LEARNING</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-bullet">✦</span>
            <span>PHP &amp; MYSQL DATABASE ARCHITECTURE</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-bullet">✦</span>
            <span>QUIET LUXURY &amp; USER-CENTERED DESIGN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
