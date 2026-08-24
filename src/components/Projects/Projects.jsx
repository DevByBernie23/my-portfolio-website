import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Business Management SaaS',
      description:
        'A multipage business management application that helps business owners monitor their progress, activities, customers, orders, and revenue from a centralized dashboard.',
      technologies: [
        'React',
        'JavaScript',
        'Responsive Design',
      ],
      features: [
        'Authentication',
        'Dashboard',
        'Sidebar navigation',
        'Customer monitoring',
        'Order monitoring',
        'Revenue tracking',
      ],
      image: 'src/assets/Screenshot_23-8-2026_203957_localhost.jpeg',
      liveLink: 'https://pulse-saas-product.vercel.app/',
      githubLink: 'https://github.com/DevByBernie23/Pulse-saas-project',
    },

    {
      title: 'FaithShelf',
      description:
        'A digital book platform where readers can discover and filter books, view detailed book information, save books to a personal readlist, and add books to their cart.',
      technologies: [
        'React',
        'JavaScript',
        'Responsive Design',
      ],
      features: [
        'Authentication',
        'Book filtering',
        'Book details',
        'Readlist',
        'Shopping cart',
      ],
      image: 'src/assets/Screenshot_23-8-2026_203639_localhost.jpeg',
      liveLink: 'https://faithshelf.vercel.app/',
      githubLink: 'https://github.com/DevByBernie23/faithshelf',
    },

    {
      title: 'Product Seller Platform',
      description:
        'A responsive e-commerce application designed to provide users with an accessible product browsing and shopping experience.',
      technologies: [
        'React',
        'JavaScript',
        'Responsive Design',
      ],
      features: [
        'Product browsing',
        'Product details',
        'Shopping cart',
      ],
      image: 'src/assets/screenshot-1787515715447.png',
      liveLink: 'https://product-list-with-cart-orpin-sigma.vercel.app/',
      githubLink: 'https://github.com/DevByBernie23/product-list-with-cart',
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <span>My Work</span>

          <h2>
            Projects I've
            <span> built.</span>
          </h2>

          <p>
            Here are some of the applications I've built while
            developing my skills as a React developer.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>

              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features</h4>

                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;