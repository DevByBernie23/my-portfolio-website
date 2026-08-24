import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <span>Get In Touch</span>

          <h2>
            Let's build something
            <span> great together.</span>
          </h2>

          <p>
            Have a project in mind or looking for a React developer?
            I'd love to hear from you. Feel free to reach out and
            let's discuss how I can help bring your idea to life.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <a
              href="mailto:your-email@example.com"
              className="contact-item"
            >
              <span className="contact-icon">✉</span>

              <div>
                <span className="contact-label">Email</span>
                <p>ojobernice14@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/DevByBernie23"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">Git</span>

              <div>
                <span className="contact-label">GitHub</span>
                <p>View my GitHub</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/bernice-ojo"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">in</span>

              <div>
                <span className="contact-label">LinkedIn</span>
                <p>Connect with me</p>
              </div>
            </a>

          </div>

          <div className="contact-message">
            <p>
              I'm currently open to freelance opportunities,
              collaborations, and junior React developer roles.
            </p>

            <a
              href="mailto:ojobernice14@gmail.com"
              className="contact-button"
            >
              Send Me a Message
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;