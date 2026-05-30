import React from 'react';
import memojiRH from '../../img/memoji_rh.png';

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Avatar */}
      <div className="sidebar-avatar-placeholder" aria-label="Profile photo">
        <img className="img-avatar" src={memojiRH} alt="RH" />
      </div>

      <h1 className="sidebar-name">Ryota Honjo</h1>
      <p className="sidebar-title">Full-Stack Web Developer</p>

      <hr className="sidebar-divider" />

      {/* Contact Info */}
      <ul className="sidebar-contacts">
        <li className="contact-item">
          <span className="contact-icon" aria-hidden="true">📧</span>
          <div className="contact-info">
            <p className="contact-label">Email</p>
            <a href="mailto:rhonjo(at)gmail.com" className="contact-value">
              rhonjo(at)gmail.com
            </a>
          </div>
        </li>

        <li className="contact-item">
          <span className="contact-icon" aria-hidden="true">📍</span>
          <div className="contact-info">
            <p className="contact-label">Location</p>
            <address className="contact-value" style={{ fontStyle: 'normal' }}>
              Irvine, United States
            </address>
          </div>
        </li>
      </ul>

      <hr className="sidebar-divider" />

      {/* Social Links */}
      <ul className="sidebar-socials">
        <li>
          <a
            href="https://github.com/rhonjo"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/ryotahonjo"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
