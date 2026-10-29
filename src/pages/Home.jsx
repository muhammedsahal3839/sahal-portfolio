
import './Home.css'

function Home() {
  return (
    <main className="home-page">
      <section className="home-container">
        <div className="home-profile">
          <div className="home-photo-frame">
            <img
              src="/my profile.jpeg"
              alt="Muhammed Sahal"
              className="home-profile-photo"
            />
          </div>

          <p className="home-photo-caption">
            A LITTLE INTRODUCTION
          </p>
        </div>

        <div className="home-content">
          <p className="home-label">WELCOME TO MY WORLD</p>

          <h1>
            Hello, I'm
            <span>Muhammed Sahal.</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="home-description">
            I'm a passionate learner exploring the world of web
            development. I enjoy creating modern, clean and
            user-friendly websites while continuously improving
            my skills and building real-world projects.
          </p>

          <div className="home-details">
            <div className="home-detail">
              <span className="detail-number">01</span>
              <div>
                <h3>Based in</h3>
                <p>Kerala, India</p>
              </div>
            </div>

            <div className="home-detail">
              <span className="detail-number">02</span>
              <div>
                <h3>Currently</h3>
                <p>Learning Full Stack Development</p>
              </div>
            </div>

            <div className="home-detail">
              <span className="detail-number">03</span>
              <div>
                <h3>My approach</h3>
                <p>Learn · Build · Improve</p>
              </div>
            </div>
          </div>

          <div className="home-actions">
            <a href="/projects" className="home-primary-btn">
              Explore My Projects <span>↗</span>
            </a>

            <a href="/contact" className="home-secondary-btn">
              Let's Connect
            </a>
          </div>

          <p className="home-note">
            Every day is an opportunity to learn something new.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home
