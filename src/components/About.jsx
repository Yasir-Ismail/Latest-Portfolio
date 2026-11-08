import { GraduationCap, Compass, CheckCircle2 } from 'lucide-react';
import { education, workPrinciples, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-number">01</span>
            <span className="section-label-line"></span>
            <span className="section-label-text">BACKGROUND &amp; PHILOSOPHY</span>
          </div>
          <h2 className="section-title">
            Architecting purposeful software at the intersection of AI and web craft.
          </h2>
          <p className="section-subtitle">
            A grounded approach rooted in practical implementation, algorithmic inquiry, and user-centered design.
          </p>
        </div>

        {/* Two-Column Editorial Narrative */}
        <div className="about-editorial-grid">
          {/* Left Column: Personal Narrative & Academic Foundation */}
          <div className="about-narrative-col">
            <div className="editorial-lead-box">
              <span className="mono-spec">THE PROFILE</span>
              <p className="editorial-lead-text">
                I am a <strong>BS Artificial Intelligence student</strong> at Khwaja Fareed University of Engineering &amp; Information Technology (KFUEIT) and a <strong>Full-Stack Web Developer</strong> dedicated to building dependable, human-centered digital products.
              </p>
            </div>

            <div className="about-prose">
              <p>
                My focus centers on combining solid software engineering practices—from clean, semantic frontend experiences to robust server-side architectures—with practical machine learning methodologies. I believe code should solve tangible problems rather than merely chase technical trends.
              </p>
              <p>
                Whether designing commercial client interfaces, architecting relational databases in PHP and MySQL, or training object detection models with YOLO and SSD for computer vision perception, I approach every build through disciplined problem-solving, continuous testing, and refined attention to detail.
              </p>
            </div>

            {/* Academic Journey Card */}
            <div className="about-education-card">
              <div className="edu-card-header">
                <div className="edu-card-title-group">
                  <GraduationCap size={18} className="edu-icon" />
                  <h3 className="edu-card-title">Academic Formation</h3>
                </div>
                <span className="mono-spec">CURRICULUM</span>
              </div>

              <div className="edu-timeline">
                {education.map((item, index) => (
                  <div key={item.degree} className="edu-timeline-item">
                    <div className="edu-timeline-marker">
                      <span className="edu-timeline-dot"></span>
                      {index < education.length - 1 && <span className="edu-timeline-stem"></span>}
                    </div>
                    <div className="edu-timeline-content">
                      <div className="edu-item-top">
                        <h4 className="edu-degree">{item.degree}</h4>
                        <span className="edu-status-pill">{item.status}</span>
                      </div>
                      <p className="edu-institution">{item.institution}</p>
                      <p className="edu-period mono-meta">{item.period}</p>
                      <p className="edu-desc">{item.description}</p>
                      
                      <div className="edu-highlights">
                        {item.highlights.map((h) => (
                          <span key={h} className="edu-highlight-tag">
                            <CheckCircle2 size={10} style={{ color: 'var(--accent-olive)' }} />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: How I Work / Methodological Framework */}
          <div className="about-principles-col">
            <div className="principles-intro">
              <div className="principles-badge">
                <Compass size={14} />
                <span className="mono-spec">METHODOLOGY</span>
              </div>
              <h3 className="principles-heading">How I Approach Building</h3>
              <p className="principles-sub">
                A disciplined three-phase framework designed to prevent technical debt and deliver resilient software.
              </p>
            </div>

            <div className="principles-stack">
              {workPrinciples.map((p) => (
                <div key={p.number} className="principle-card">
                  <div className="principle-card-top">
                    <span className="principle-number">{p.number}</span>
                    <span className="principle-dot"></span>
                    <h4 className="principle-title">{p.title}</h4>
                  </div>
                  <p className="principle-summary">{p.summary}</p>
                </div>
              ))}
            </div>

            {/* Direct Quote Card */}
            <div className="about-quote-box">
              <div className="quote-mark">&ldquo;</div>
              <p className="quote-body">
                Great digital products aren't defined by visual gimmicks. They are shaped by clean architecture, deep clarity on the problem, and a relentless commitment to usability.
              </p>
              <div className="quote-author">
                <span className="quote-author-name">{personalInfo.name}</span>
                <span className="mono-meta">Rahim Yar Khan, PK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
