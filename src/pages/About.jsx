
import './About.css'

function About() {
  return (
    <main className="about-page">
      <section className="about-container">
        <div className="about-visual">
          <div className="about-photo-frame">
            <img
              src="/my profile.jpeg"
              alt="Muhammed Sahal"
              className="about-profile-photo"
            />
          </div>

          <div className="about-photo-label">
            <span className="about-label-dot"></span>
            ALWAYS LEARNING, ALWAYS GROWING
          </div>

          <div className="about-side-note">
            MY STORY <span>— 01</span>
          </div>
        </div>

        <div className="about-content">
          <p className="about-eyebrow">GET TO KNOW ME</p>

          <h1>
            A little about
            <span>who I am.</span>
          </h1>

          <p className="about-intro">
            Hello! I'm Muhammed Sahal, an aspiring Full Stack
            Developer from Kerala, India.
          </p>

          <p className="about-description">
            I'm on a journey to turn my interest in technology
            into practical skills. I enjoy learning how websites
            work, building user interfaces, and understanding
            how the frontend and backend come together to create
            useful digital experiences.
          </p>

          <p className="about-description">
            For me, development is a continuous process of
            learning, experimenting, solving problems, and
            improving one step at a time. Every project gives
            me a chance to learn something new and become a
            better developer.
          </p>

          <div className="about-values">
            <div className="about-value">
              <span>01</span>
              <h3>Curiosity</h3>
              <p>Always exploring new ideas and technologies.</p>
            </div>

            <div className="about-value">
              <span>02</span>
              <h3>Consistency</h3>
              <p>Learning step by step and practising regularly.</p>
            </div>

            <div className="about-value">
              <span>03</span>
              <h3>Growth</h3>
              <p>Improving through projects and feedback.</p>
            </div>
          </div>

          <div className="about-goal">
            <span className="about-goal-icon">✳</span>
            <div>
              <h3>My goal</h3>
              <p>
                To become a skilled Full Stack Developer and
                build meaningful, reliable web applications.
              </p>
            </div>
          </div>

          <a href="/projects" className="about-button">
            Discover My Projects <span>↗</span>
          </a>
        </div>
      </section>

      <section className="about-bottom">
        <p>MY MINDSET</p>
        <h2>
          Small steps.
          <span>Real progress.</span>
        </h2>
        <div className="about-bottom-line"></div>
        <p className="about-bottom-caption">
          Building my future, one project at a time.
        </p>
      </section>
    </main>
  )
}

export default About
