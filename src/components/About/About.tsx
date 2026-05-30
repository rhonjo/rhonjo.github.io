import React from 'react';

interface Service {
  icon: string;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    icon: '💻',
    title: 'Web Design',
    desc: 'Crafting clean, modern, and responsive interfaces with Javascript.',
  },
  {
    icon: '🛠️',
    title: 'Backend Dev',
    desc: 'Scalable APIs and server-side solutions with Node.js and Java.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'Deploying and managing apps on AWS and architecting relational databases with MySQL.',
  },
];

function About() {
  return (
    <article>
      {/* Bio */}
      <section className="section-card">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          Hi, I'm <strong>Ryota Honjo</strong> — a passionate Full Stack Web Developer with 10+ years of experience modernizing legacy architectures into high-performance web
applications. Expert in Javascript, Java/Hibernate, AWS cloud infrastructure, and with 60+ production services deployed.
Specialized in WCAG 2.2 accessibility remediation and leading cross-functional teams through the full web development
life cycle.
        </p>
      </section>

      {/* Services */}
      <section className="section-card">
        <h2 className="section-title">What I Do</h2>
        <ul className="services-grid">
          {services.map((s) => (
            <li key={s.title} className="service-card">
              <div className="service-icon" aria-hidden="true">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default About;
