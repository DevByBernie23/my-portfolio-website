import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            Bernice.
          </a>

          <p>
            React Developer building modern web applications.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/DevByBernie23"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/bernice-ojo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:ojobernice14@gmail.com">
            Email
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Bernice Ahuoiza. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;