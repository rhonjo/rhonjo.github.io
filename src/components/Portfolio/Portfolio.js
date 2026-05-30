import React, { useState } from 'react';

// const projects = [
//   {
//     id: 1,
//     title: 'E-Commerce Platform',
//     category: 'Web App',
//     emoji: '🛒',
//     link: '#',
//   },
//   {
//     id: 2,
//     title: 'Finance Dashboard',
//     category: 'Web App',
//     emoji: '📊',
//     link: '#',
//   },
//   {
//     id: 3,
//     title: 'Travel Mobile App',
//     category: 'Mobile',
//     emoji: '✈️',
//     link: '#',
//   },
//   {
//     id: 4,
//     title: 'Brand Identity System',
//     category: 'Design',
//     emoji: '🎨',
//     link: '#',
//   },
//   {
//     id: 5,
//     title: 'SaaS Analytics Tool',
//     category: 'Web App',
//     emoji: '📈',
//     link: '#',
//   },
//   {
//     id: 6,
//     title: 'Fitness Tracker App',
//     category: 'Mobile',
//     emoji: '🏋️',
//     link: '#',
//   },
//   {
//     id: 7,
//     title: 'Restaurant Website',
//     category: 'Design',
//     emoji: '🍽️',
//     link: '#',
//   },
//   {
//     id: 8,
//     title: 'Real-Time Chat App',
//     category: 'Web App',
//     emoji: '💬',
//     link: '#',
//   },
// ];

const projects = [
  {
    id: 1,
    title: 'Exercise App',
    category: 'Web App',
    emoji: '🏋️',
    link: 'https://rhonjo.github.io/workoutCards/',
  }

];

const categories = ['All', 'Web App'];

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
