import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-label">
            Frontend Developer
          </span>

          <h1>
            Hi, I'm <span>Bernice Ahuoiza Ojo</span>
          </h1>

          <p className="hero-description">
            I build modern, responsive web applications with React and
            JavaScript, focusing on clean interfaces, great user experiences,
            and practical solutions to real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary">
              View My Work
            </a>

            <a href="#contact" className="hero-btn secondary">
              Contact Me
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="code-card">
            <span>{'<'}</span>
            <p>Frontend Developer</p>
            <span>{'/>'}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;