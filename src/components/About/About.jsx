import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-heading">
          <span>About Me</span>
          <h2>
            Building ideas into
            <span> functional web experiences.</span>
          </h2>
        </div>

       <div className="about-content">
  <p>
    I'm Bernice Ahuoiza, a React developer passionate about
    building modern and responsive web applications.
  </p>

  <p>
    What I enjoy most about React is how naturally it allows me
    to use JavaScript when building user interfaces. JSX makes it
    easier for me to connect my JavaScript logic with the structure
    of my application, while reusable components help keep my code
    organized and maintainable.
  </p>

  <p>
    I've built projects ranging from SaaS platforms for business
    owners to book discovery platforms and e-commerce applications.
    These projects have given me practical experience turning ideas
    into functional digital experiences.
  </p>
</div>

      </div>
    </section>
  );
};

export default About;