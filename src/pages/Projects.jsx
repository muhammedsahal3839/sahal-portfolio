
import './Projects.css'

const projects = [
  {
    number: '01',
    name: 'VELORA',
    category: 'FULL STACK E-COMMERCE',
    description:
      'A modern fashion e-commerce application designed with a clean interface, elegant product categories and a premium shopping experience.',
    technologies: ['React', 'Django', 'Python', 'PostgreSQL'],
    live: 'https://velora-nu-wine.vercel.app/',
    github: 'https://github.com/muhammedsahal3839/velora',
  },
  {
    number: '02',
    name: 'CRM Application',
    category: 'FRONTEND DEVELOPMENT',
    description:
      'A CRM interface focused on managing leads, organizing information and providing a structured user experience.',
    technologies: ['React', 'JavaScript', 'Material UI'],
    live: '',
    github: '',
  },
  {
    number: '03',
    name: 'Next.js E-commerce',
    category: 'WEB DEVELOPMENT',
    description:
      'An e-commerce project exploring Next.js routing, product pages and reusable user interface components.',
    technologies: ['Next.js', 'React', 'JavaScript'],
    live: 'https://nextjs-ecommerce-app-router-3bcw.vercel.app/',
    github: 'https://github.com/muhammedsahal3839/nextjs-ecommerce-app-router',
  },
]

function Projects() {
  const velora = projects[0]

  return (
    <main className="projects-page">
      <section className="projects-heading">
        <p className="projects-eyebrow">A SELECTION OF MY WORK</p>
        <h1>
          Things I've <span>Built.</span>
        </h1>
        <p className="projects-intro">
          A collection of projects where I turn what I learn
          into practical web experiences.
        </p>
        <div className="projects-heading-line" />
      </section>

      {/* Featured Velora Project */}
      <section className="featured-project">
        <div className="featured-image">
          <img
            src="/velora-02.png"
            alt="Velora e-commerce homepage"
          />
          <span className="image-label">
            FEATURED PROJECT · 01
          </span>
        </div>

        <div className="featured-content">
          <p className="projects-eyebrow">
            FULL STACK PROJECT
          </p>

          <h2>
            Velora<span>.</span>
          </h2>

          <p className="featured-description">
            A fashion e-commerce experience built around
            timeless style, elegant visuals and a clean
            shopping interface. This project combines
            frontend development with backend integration.
          </p>

          <div className="backend-status-note">
            <span className="backend-status-dot" />
            <div>
              <strong>Backend Integration Notice</strong>
              <p>
                Velora fetches product data dynamically from
                a Django backend connected to a database.
                The backend service is currently inactive,
                so product cards may not load in the live
                demo. The screenshots showcase the frontend
                design and shopping interface.
              </p>
            </div>
          </div>

          <div className="project-technologies">
            {velora.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="project-actions">
            <a
              href={velora.live}
              target="_blank"
              rel="noreferrer"
              className="project-button primary"
            >
              Live Demo ↗
            </a>

            <a
              href={velora.github}
              target="_blank"
              rel="noreferrer"
              className="project-button secondary"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Velora Screenshots */}
      <section className="velora-gallery">
        <div>
          <p className="projects-eyebrow">A CLOSER LOOK</p>
          <h2>
            Designed with <span>detail.</span>
          </h2>
        </div>

        <img
          src="/velora-01.png"
          alt="Velora product categories page"
        />
      </section>

      {/* Other Projects */}
      <section className="other-projects">
        <div className="other-projects-heading">
          <div>
            <p className="projects-eyebrow">
              MORE FROM MY WORKSPACE
            </p>
            <h2>
              Other Projects<span>.</span>
            </h2>
          </div>

          <p>
            Learning, experimenting and building step by step.
          </p>
        </div>

        <div className="other-projects-grid">
          {projects.slice(1).map((project) => (
            <article
              className="other-project-card"
              key={project.number}
            >
              <div className="other-project-top">
                <span>{project.number}</span>
                <span className="project-arrow">↗</span>
              </div>

              <p className="projects-eyebrow">
                {project.category}
              </p>

              <h3>{project.name}</h3>

              <p className="other-project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="other-project-links">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="projects-bottom">
        <p className="projects-eyebrow">ALWAYS IN PROGRESS</p>

        <h2>
          More ideas. More building. <span>More growth.</span>
        </h2>

        <p>
          Every project is another step forward in my
          development journey.
        </p>
      </section>

      <footer className="projects-footer-note">
        DESIGNED WITH CARE · BUILT STEP BY STEP
      </footer>
    </main>
  )
}

export default Projects
