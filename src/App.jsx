
import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Journey from './pages/Journey'
import Contact from './pages/Contact'

// Scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const sections = [
  {
    id: 'home',
    number: '01',
    title: 'Home',
    description: 'Welcome to my portfolio',
    image: '/home.jpeg',
    path: '/home',
  },
  {
    id: 'about',
    number: '02',
    title: 'About Me',
    description: 'A little about myself',
    image: '/about.jpeg',
    path: '/about',
  },
  {
    id: 'skills',
    number: '03',
    title: 'Skills',
    description: 'Technologies I work with',
    image: '/skills.jpeg',
    path: '/skills',
  },
  {
    id: 'projects',
    number: '04',
    title: 'Projects',
    description: 'Things I have built',
    image: '/projects.jpeg',
    path: '/projects',
  },
  {
    id: 'journey',
    number: '05',
    title: 'Learning Journey',
    description: 'My path as a developer',
    image: '/journey.jpeg',
    path: '/journey',
  },
  {
    id: 'contact',
    number: '06',
    title: 'Contact',
    description: "Let's connect",
    image: '/contact.jpeg',
    path: '/contact',
  },
]

function PortfolioHome() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('home')

  return (
    <main className="portfolio">
      {/* Navbar */}
      <header className="navbar">
        <a
          className="brand"
          href="/"
          onClick={(event) => {
            event.preventDefault()
            navigate('/')
          }}
        >
          MS<span>.</span>
        </a>

        <p className="nav-label">MY PORTFOLIO</p>

        <a
          className="contact-btn"
          href="mailto:muhammedsahal.dev@gmail.com"
        >
          Let's talk ↗
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-label">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hello, I'm
            <br />
            <span>Muhammed Sahal</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            I am learning to build modern, creative and user-friendly
            web experiences. Explore my skills, projects and journey.
          </p>

          <a className="hero-button" href="#sections">
            Explore My World <span>↓</span>
          </a>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-decoration"></div>

          <img
            className="hero-image"
            src="/profile.jpeg"
            alt="Muhammed Sahal"
          />

          <div className="image-caption">
            <span className="status-dot"></span>
            <span>Learning · Building · Growing</span>
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="sections-page" id="sections">
        <div className="sections-track">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`section-card ${
                selected === section.id ? 'selected' : ''
              }`}
              style={{
                backgroundImage: `url("${section.image}")`,
              }}
              onClick={() => {
                setSelected(section.id)
                navigate(section.path)
              }}
              aria-label={`Open ${section.title}`}
            >
              <span className="card-number">
                {section.number} / 06
              </span>

              <div className="section-card-info">
                <div>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>

                <span className="card-arrow">↗</span>
              </div>
            </button>
          ))}
        </div>

        <div className="sections-footer">
          <span>SELECT A SECTION</span>
          <span>01 — 06</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <a className="footer-brand" href="/">
            MS<span>.</span>
          </a>

          <p>Learning. Building. Growing.</p>

          <div className="footer-links">
            <a href="mailto:muhammedsahal.dev@gmail.com">
              Email ↗
            </a>

            <a
              href="https://github.com/muhammedsahal3839"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>DESIGNED WITH CURIOSITY · BUILT BY SAHAL</p>
          <p>© 2026 MUHAMMED SAHAL. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  )
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
