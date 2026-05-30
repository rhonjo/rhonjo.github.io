import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  emoji: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Exercise App',
    category: 'Web App',
    emoji: '🏋️',
    link: 'https://rhonjo.github.io/workoutCards/',
  },
];

const categories = ['All', 'Web App'] as const;

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <article>
      <section className="section-card">
        <h2 className="section-title">Portfolio</h2>

        {/* Filter */}
        <ul className="filter-list" role="tablist" aria-label="Portfolio filter">
          {categories.map((cat) => (
            <li key={cat} role="presentation">
              <button
                role="tab"
                aria-selected={activeFilter === cat}
                className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        {/* Grid */}
        <ul className="portfolio-grid">
          {filtered.map((project) => (
            <li key={project.id}>
              <a
                href={project.link}
                className="portfolio-card"
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} — ${project.category}`}
                style={{ display: 'block' }}
              >
                <div className="portfolio-img-placeholder" aria-hidden="true">
                  {project.emoji}
                </div>
                <div className="portfolio-info">
                  <p className="portfolio-category">{project.category}</p>
                  <h3 className="portfolio-title">{project.title}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Portfolio;
