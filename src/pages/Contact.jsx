import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      {/* Heading */}
      <section className="contact-heading">
        <p className="contact-eyebrow">HAVE A PROJECT IN MIND?</p>

        <h1>
          Let's Connect<span>.</span>
        </h1>

        <p className="contact-intro">
          I'm always interested in learning, building new things and exploring
          opportunities to grow as a developer. Feel free to explore my work and
          connect with me.
        </p>

        <div className="contact-heading-line" />
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="contact-message">
          <p className="contact-eyebrow">A LITTLE ABOUT ME</p>

          <h2>
            Good things begin with a <span>conversation.</span>
          </h2>

          <p>
            I'm currently working towards becoming a Full Stack Developer
            through online learning, coding practice and personal projects.
          </p>

          <p>
            I'm focused on improving my skills, building useful applications and
            finding opportunities to learn from real-world development.
          </p>

          {/* GitHub and Email Buttons */}
          <div className="contact-actions">
            <a
              className="contact-github-button"
              href="https://github.com/muhammedsahal3839"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              Visit My GitHub
              <FaArrowUpRightFromSquare />
            </a>

            <a
              className="contact-github-button"
              href="mailto:muhammedsahal.dev@gmail.com"
            >
              Send Me an Email ↗
            </a>
          </div>

          <p className="contact-email-address">muhammedsahal.dev@gmail.com</p>
        </div>

        {/* Contact Information Card */}
        <div className="contact-card">
          <div className="contact-card-top">
            <span className="contact-card-number">01 / CONNECT</span>

            <span className="contact-card-icon">↗</span>
          </div>

          <div className="contact-card-content">
            <p className="contact-eyebrow">CURRENTLY FOCUSED ON</p>

            <h3>Learning. Building. Growing.</h3>

            <p>
              Exploring full-stack development and turning new knowledge into
              practical projects.
            </p>
          </div>

          <div className="contact-card-bottom">
            <span>FULL STACK DEVELOPER</span>
            <span>KERALA, INDIA</span>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="contact-bottom">
        <p className="contact-eyebrow">THE JOURNEY CONTINUES</p>

        <h2>
          Every connection is a chance to <span>grow.</span>
        </h2>

        <p>Thanks for taking the time to explore my portfolio.</p>

        <a href="/projects" className="contact-project-link">
          Explore My Projects ↗
        </a>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        DESIGNED WITH CARE · BUILT STEP BY STEP
      </footer>
    </main>
  );
}

export default Contact;
