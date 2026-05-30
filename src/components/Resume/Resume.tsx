import React from 'react';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  desc: string[];
}

interface SkillItem {
  name: string;
  percent: number;
}

const experience: ExperienceItem[] = [
  {
    date: '06/2017 — Present',
    title: 'Full Stack Web Developer',
    company: 'Stanford University – CSLI Openproof',
    desc: [
      'Converted 5 legacy desktop applications into responsive web platforms, launching a centralized website to host the new suite of applications.',
      'Implemented custom Amchart.js graphs and HTML Canvas animations, which increased user engagement on data dashboards by 25%.',
      'Developed over 60 scalable service endpoints in Java and migrated the backend infrastructure to Hibernate, eliminating manual SQL boilerplate and reducing data-access layer complexity.',
      'Collaborated with international UI/UX designers and engineers in Japan to successfully scope and deploy 10+ localized core features according to strict design specifications.',
      'Architected and maintained FileSystem component – Redesigned file management UI with improved performance, accessibility, and keyboard navigation; resolved 100+ related bugs across file operations, dialogs, and sorting.',
      'Audited and upgraded the platform to meet WCAG 2.2 standards, resolving extensive axe-core violations and implementing ARIA attributes for screen reader compatibility.',
      'Engineered a reusable UI component library (combobox, divider, icons) deployed across 5 applications, reducing duplicate frontend code by 20% and ensuring strict design consistency.',
      'Re-engineered the instructor grade report, designing a custom table component with filtering, pagination, and search that cut page load times by 15% and eliminated legacy scrolling lag for large datasets.',
    ],
  },
  {
    date: '12/2018 — 01/2019',
    title: 'Frontend Web Developer',
    company: 'Cheddar Flow',
    desc: [
      'Led the design and development of the initial dashboard prototype, culminating in a successful public beta launch that onboarded 50+ early users within the first month.',
      'Built advanced filtering and search interfaces for massive financial datasets, enabling users to isolate target order flows 10% faster using customizable ticker, premium, expiration, sentiment, and trade-type criteria.',
      'Engineered interactive charting dashboards using Datatables.js to visualize over 500k+ daily options data points, seamlessly mapping complex gamma exposure levels, volume trends, and historical order flows.',
      'Collaborated with international UI/UX designers and engineers in Japan to successfully scope and deploy 10+ localized core features according to strict design specifications.',
    ],
  },
  {
    date: '07/2015 — 01/2017',
    title: 'Full Stack Web Developer',
    company: 'Laplace Systems, Inc.',
    desc: [
      'Developed frontend and backend features for a solar monitoring portal, onboarded 20+ users during the public beta, and diagnosed and resolved user-reported issues to improve platform stability and usability.',
      'Implemented custom Amchart.js graphs and HTML Canvas animations, which increased user engagement on data dashboards by 25%.',
      'Orchestrated the deployment and maintenance of 60+ production environments on AWS EC2, ensuring high availability and optimal server performance across all sites.',
      'Collaborated with international UI/UX designers and engineers in Japan to successfully scope and deploy 10+ localized core features according to strict design specifications.',
    ],
  },
];

const skills: SkillItem[] = [
  { name: 'JavaScript / React', percent: 92 },
  { name: 'Java / Hibernate', percent: 85 },
  { name: 'Data Visualization (Three.js / Amchart.js / Canvas)', percent: 88 },
  { name: 'MySQL / MongoDB', percent: 87 },
  { name: 'AWS / Cloud Infrastructure', percent: 80 },
  { name: 'Accessibility (WCAG / ARIA)', percent: 83 },
];

function Resume() {
  return (
    <article>
      <section className="section-card">

        {/* Experience */}
        <div className="resume-section">
          <h2 className="resume-section-title">
            <span aria-hidden="true">💼</span> Experience
          </h2>
          <ol className="timeline">
            {experience.map((item) => (
              <li key={item.title} className="timeline-item">
                <time className="timeline-date">{item.date}</time>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-subtitle">{item.company}</p>
                <ul className="timeline-desc">
                  {item.desc.map((bullet, i) => (
                    <li key={i}>• {bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        {/* Skills */}
        <div className="resume-section">
          <h2 className="resume-section-title">
            <span aria-hidden="true">⚡</span> Skills
          </h2>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.percent}%</span>
                </div>
                <div className="skill-bar" role="progressbar" aria-valuenow={skill.percent} aria-valuemin={0} aria-valuemax={100} aria-label={skill.name}>
                  <div className="skill-fill" style={{ width: `${skill.percent}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}

export default Resume;
