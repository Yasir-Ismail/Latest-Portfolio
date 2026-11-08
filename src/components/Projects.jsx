import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, ChevronDown, ChevronUp, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { featuredProjects, archiveProjects } from '../data/portfolioData';

export default function Projects() {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-number">03</span>
            <span className="section-label-line"></span>
            <span className="section-label-text">SELECTED WORKS</span>
          </div>
          <h2 className="section-title">
            Featured projects &amp; technical case studies.
          </h2>
          <p className="section-subtitle">
            A curated portfolio spanning client-commissioned web platforms, full-stack database architectures, and deep learning vision systems.
          </p>
        </div>

        {/* Featured Projects Stack */}
        <div className="featured-projects-list">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <article key={project.id} className={`project-editorial-card ${isEven ? 'layout-reversed' : ''}`}>
                {/* Visual Representation Frame */}
                <div className="project-image-column">
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                    <div className="project-image-badge">
                      <span className="badge-dot"></span>
                      <span>{project.featuredBadge}</span>
                    </div>

                    {/* Subtle Overlay with Direct Links */}
                    <div className="project-visual-actions">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-pill"
                          title="View Live Website"
                        >
                          <ExternalLink size={13} />
                          <span>Live Site</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-pill"
                          title="View Source Code on GitHub"
                        >
                          <GithubIcon size={13} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {project.editorialQuote && (
                    <p className="project-quote-caption">
                      &ldquo;{project.editorialQuote}&rdquo;
                    </p>
                  )}
                </div>

                {/* Content & Metadata Column */}
                <div className="project-info-column">
                  <div className="project-meta-row">
                    <div className="project-number-tag">
                      <span className="mono-spec">PROJECT {project.number}</span>
                      <span className="project-meta-sep">/</span>
                      <span className="mono-meta">{project.year}</span>
                    </div>
                    <span className="editorial-tag">{project.category}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-headline">{project.headline}</p>

                  <div className="project-description-block">
                    <p>{project.description}</p>
                  </div>

                  {/* Scope of Work */}
                  <div className="project-scope-block">
                    <div className="scope-row">
                      <span className="scope-label mono-meta">Role:</span>
                      <span className="scope-value">{project.role}</span>
                    </div>
                    <div className="scope-row">
                      <span className="scope-label mono-meta">Scope:</span>
                      <span className="scope-value">{project.scope}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="project-tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="editorial-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="project-links-group">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <span>Launch Live Website</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <GithubIcon size={14} />
                        <span>Inspect Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Curated Archive Toggle Section */}
        <div className="archive-section-wrapper">
          <div className="archive-trigger-box">
            <div className="archive-trigger-text">
              <FolderGit2 size={18} className="archive-icon" />
              <div>
                <h4 className="archive-title">Extended Project Archive</h4>
                <p className="archive-subtitle">
                  Additional web applications, management systems, and academic implementations.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowArchive(!showArchive)}
              className="btn-secondary archive-toggle-btn"
              aria-expanded={showArchive}
            >
              <span>{showArchive ? 'Hide Archive' : `Explore Archive (${archiveProjects.length})`}</span>
              {showArchive ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          </div>

          {showArchive && (
            <div className="archive-grid">
              {archiveProjects.map((item) => (
                <div key={item.title} className="archive-card">
                  {item.image && (
                    <div className="archive-image-wrapper">
                      <img src={item.image} alt={item.title} className="archive-thumb" loading="lazy" />
                    </div>
                  )}
                  <div className="archive-card-body">
                    <div className="archive-card-top">
                      <span className="mono-spec">{item.category}</span>
                    </div>
                    <h5 className="archive-item-title">{item.title}</h5>
                    <p className="archive-item-desc">{item.description}</p>
                    <span className="archive-item-tech mono-meta">{item.tech}</span>

                    <div className="archive-links">
                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="archive-link"
                        >
                          <ExternalLink size={12} />
                          <span>Live</span>
                        </a>
                      )}
                      {item.githubUrl && (
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="archive-link"
                        >
                          <GithubIcon size={12} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
