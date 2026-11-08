import React, { useState } from 'react';
import { Layers, Database, Cpu, Wrench, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconsMap = {
    frontend: <Layers size={16} />,
    backend: <Database size={16} />,
    ai: <Cpu size={16} />,
    tools: <Wrench size={16} />
  };

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-number">02</span>
            <span className="section-label-line"></span>
            <span className="section-label-text">TECHNICAL REPERTOIRE</span>
          </div>
          <h2 className="section-title">
            Organized proficiencies across the stack.
          </h2>
          <p className="section-subtitle">
            A balanced toolset spanning semantic web frontends, relational backend engineering, and applied computer vision.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="skills-filter-bar">
          <button
            className={`skills-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <span>All Domains ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})</span>
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {iconsMap[cat.id]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-categories-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-title-wrap">
                  <span className="category-icon-box">{iconsMap[category.id]}</span>
                  <div>
                    <h3 className="category-title">{category.title}</h3>
                    <p className="category-subtitle">{category.subtitle}</p>
                  </div>
                </div>
                <span className="category-count mono-spec">
                  {category.skills.length} SKILLS
                </span>
              </div>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-row">
                    <div className="skill-item-main">
                      <div className="skill-name-wrap">
                        <span className="skill-bullet">/</span>
                        <h4 className="skill-name">{skill.name}</h4>
                      </div>
                      <span className="skill-level-desc">{skill.level}</span>
                    </div>
                    <span className="editorial-tag">{skill.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Architecture Note */}
        <div className="skills-bottom-note">
          <div className="skills-note-left">
            <Terminal size={14} className="skills-note-icon" />
            <span className="mono-spec">ENGINEERING PHILOSOPHY</span>
          </div>
          <p className="skills-note-text">
            I prioritize foundational language fluency (JavaScript, PHP, Python) and web standards over fleeting framework churn. This enables quick adaptation to evolving project specifications.
          </p>
        </div>
      </div>
    </section>
  );
}
