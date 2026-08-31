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
            I'm Bernice Ahuoiza, a Frontend Developer passionate about
            building modern, responsive, and user-friendly web applications.
          </p>

          <p>
            I primarily use React and JavaScript to build interactive user
            interfaces. I enjoy turning designs and ideas into functional
            experiences while keeping my code organized, reusable, and
            maintainable.
          </p>

          <p>
            I've built projects ranging from SaaS dashboards and business
            platforms to book discovery and e-commerce applications. These
            projects have given me practical experience translating ideas
            into responsive digital products and solving problems throughout
            the development process.
          </p>

          <p>
            I also make effective use of AI tools in my development workflow
            for research, problem-solving, debugging, and improving
            productivity while maintaining control over the code I write.
          </p>
          
        </div>

      </div>
    </section>
  );
};

export default About;