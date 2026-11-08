import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="credentials" className="credentials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-number">04</span>
            <span className="section-label-line"></span>
            <span className="section-label-text">ACCREDITATIONS &amp; CREDENTIALS</span>
          </div>
          <h2 className="section-title">
            Industry &amp; foundational certifications.
          </h2>
          <p className="section-subtitle">
            Verified qualifications demonstrating competencies across cloud AI, web application development, and digital marketing.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="credentials-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="credential-card">
              <div className="credential-card-header">
                <div className="credential-badge-icon">
                  <Award size={18} />
                </div>
                <div className="credential-meta-right">
                  <span className="mono-spec">{cert.category}</span>
                  <span className="credential-year mono-meta">{cert.year}</span>
                </div>
              </div>

              <h3 className="credential-title">{cert.title}</h3>
              <p className="credential-issuer mono-meta">Issuer: {cert.issuer}</p>

              <p className="credential-desc">{cert.description}</p>

              <div className="credential-skills-covered">
                {cert.skillsCovered.map((skill) => (
                  <span key={skill} className="credential-tag">
                    <CheckCircle size={10} style={{ color: 'var(--accent-olive)' }} />
                    {skill}
                  </span>
                ))}
              </div>

              <div className="credential-footer">
                <div className="credential-status">
                  <ShieldCheck size={13} style={{ color: 'var(--accent-olive)' }} />
                  <span className="mono-meta">Verified Credential</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Synthesis Box */}
        <div className="credentials-synthesis-box">
          <div className="synthesis-badge">
            <span className="mono-spec">CONTINUOUS LEARNING</span>
          </div>
          <p className="synthesis-text">
            Actively pursuing advanced coursework in Deep Learning, Computer Vision pipelines, and modern distributed systems as part of the ongoing BS Artificial Intelligence curriculum at KFUEIT.
          </p>
        </div>
      </div>
    </section>
  );
}
