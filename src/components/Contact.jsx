import React, { useState } from 'react';
import { Mail, MapPin, Check, Copy, ArrowUpRight, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Web Development',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Direct WhatsApp dispatch
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please provide your name and message.');
      return;
    }
    const text = encodeURIComponent(
      `Hello Yasir,\n\nMy name is ${formData.name} (${formData.email || 'No email provided'}).\nInquiry: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    );
    window.open(`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
    setSubmittedStatus('whatsapp');
  };

  // Direct Email dispatch
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please provide your name and message.');
      return;
    }
    const subject = encodeURIComponent(`[${formData.inquiryType}] Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmittedStatus('email');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-number">05</span>
            <span className="section-label-line"></span>
            <span className="section-label-text">COMMUNICATION &amp; INQUIRY</span>
          </div>
          <h2 className="section-title">
            Let's discuss a project or collaboration.
          </h2>
          <p className="section-subtitle">
            Whether you have a commercial web project, a custom software requirement, or an AI research discussion, my inbox is open.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-layout-grid">
          {/* Left Column: Direct Communication Channels */}
          <div className="contact-channels-card">
            <div className="channels-header">
              <span className="mono-spec">DIRECT ACCESS</span>
              <h3 className="channels-title">Available Channels</h3>
              <p className="channels-desc">
                Direct point of contact for freelance engagements, technical collaborations, and academic inquiries.
              </p>
            </div>

            <div className="channels-list">
              {/* Email Box */}
              <div className="channel-box">
                <div className="channel-icon-wrap">
                  <Mail size={16} />
                </div>
                <div className="channel-content">
                  <span className="channel-label mono-meta">ELECTRONIC MAIL</span>
                  <a href={`mailto:${personalInfo.email}`} className="channel-val channel-val-link">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="channel-copy-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={14} style={{ color: 'var(--accent-olive)' }} /> : <Copy size={14} />}
                  <span className="copy-tooltip">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="channel-box">
                <div className="channel-icon-wrap">
                  <MessageSquare size={16} />
                </div>
                <div className="channel-content">
                  <span className="channel-label mono-meta">WHATSAPP DIRECT</span>
                  <a
                    href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-val channel-val-link"
                  >
                    {personalInfo.whatsappDisplay}
                  </a>
                </div>
                <a
                  href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-ext-btn"
                  title="Open WhatsApp chat"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Location */}
              <div className="channel-box">
                <div className="channel-icon-wrap">
                  <MapPin size={16} />
                </div>
                <div className="channel-content">
                  <span className="channel-label mono-meta">CURRENT LOCATION</span>
                  <span className="channel-val">{personalInfo.location}</span>
                  <span className="channel-sub mono-meta">{personalInfo.coordinates} • UTC+5</span>
                </div>
              </div>
            </div>

            {/* Social & Profiles Bar */}
            <div className="channels-footer">
              <span className="mono-meta">ONLINE PROFILES:</span>
              <div className="channels-social-links">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-chip">
                  <span>GitHub</span>
                  <ArrowUpRight size={11} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-chip">
                  <span>LinkedIn</span>
                  <ArrowUpRight size={11} />
                </a>
                <a href={personalInfo.existingPortfolio} target="_blank" rel="noopener noreferrer" className="social-chip">
                  <span>Classic Folio</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div className="contact-form-card">
            <div className="form-card-header">
              <span className="mono-spec">INQUIRY FORM</span>
              <h3 className="form-card-title">Send a Direct Message</h3>
              <p className="form-card-subtitle">
                Fill in the details below to dispatch instantly via WhatsApp or your default email client.
              </p>
            </div>

            <form className="contact-form-inner" onSubmit={handleWhatsAppSubmit}>
              <div className="form-row-dual">
                <div className="form-field">
                  <label htmlFor="name" className="form-label mono-meta">
                    Your Name <span className="field-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Jane Doe"
                    required
                    className="editorial-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="form-label mono-meta">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. jane@domain.com"
                    className="editorial-input"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="inquiryType" className="form-label mono-meta">
                  Topic / Inquiry Area
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="editorial-select"
                >
                  <option value="Web Development Project">Commercial Web Development</option>
                  <option value="AI / Vision Collaboration">AI &amp; Computer Vision Collaboration</option>
                  <option value="Full-Stack Engineering">Full-Stack Application (PHP/MySQL/React)</option>
                  <option value="General Technical Inquiry">General Inquiry / Consultation</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-label mono-meta">
                  Project Brief or Message <span className="field-required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Outline your timeline, scope, or questions..."
                  required
                  className="editorial-textarea"
                ></textarea>
              </div>

              {/* Dual Action Dispatch Buttons */}
              <div className="form-actions-dual">
                <button type="submit" className="btn-primary form-submit-btn">
                  <MessageSquare size={14} />
                  <span>Send via WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="btn-secondary form-email-btn"
                >
                  <Mail size={14} />
                  <span>Send via Email Client</span>
                </button>
              </div>

              {submittedStatus && (
                <div className="form-status-alert">
                  <Check size={14} style={{ color: 'var(--accent-olive)' }} />
                  <span>
                    {submittedStatus === 'whatsapp'
                      ? 'WhatsApp chat initiated with your message prefilled.'
                      : 'Email client launched with your message draft.'}
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
