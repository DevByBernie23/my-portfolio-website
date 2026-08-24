import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      title: 'Frontend',
      technologies: [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'Responsive Design',
      ],
    },
    {
      title: 'React Ecosystem',
      technologies: [
        'React Router',
        'React Hooks',
        'Component Design',
        'State Management',
        'API Integration',
      ],
    },
    {
      title: 'Tools',
      technologies: [
        'Git',
        'GitHub',
        'VS Code',
        'Vite',
      ],
    },
  ];

  return (
    <section className="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <span>My Skills</span>

          <h2>
            Technologies I use to
            <span> build web applications.</span>
          </h2>

          <p>
            I use modern web technologies to create responsive,
            interactive, and user-friendly applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <h3>{skill.title}</h3>

              <div className="technology-list">
                {skill.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;