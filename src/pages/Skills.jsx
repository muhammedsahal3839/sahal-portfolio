
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaTools,
  FaCloud,
  FaServer,
} from 'react-icons/fa'

import './Skills.css'

const skillGroups = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building clean and responsive user interfaces.',
    icon: <FaCode />,
    skills: [
      { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'JavaScript', icon: <FaJs />, color: '#D6B400' },
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    ],
  },
  {
    number: '02',
    title: 'Backend Development',
    description: 'Learning server-side logic and application development.',
    icon: <FaServer />,
    skills: [
      { name: 'Python', icon: <FaPython />, color: '#3776AB' },
      { name: 'Django', icon: <FaServer />, color: '#092E20' },
    ],
  },
  {
    number: '03',
    title: 'Database',
    description: 'Working with data storage and management.',
    icon: <FaDatabase />,
    skills: [
      { name: 'PostgreSQL', icon: <FaDatabase />, color: '#4169E1' },
      { name: 'SQL', icon: <FaDatabase />, color: '#68866C' },
    ],
  },
  {
    number: '04',
    title: 'Tools & Workflow',
    description: 'Tools I use while building and managing projects.',
    icon: <FaTools />,
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'GitHub', icon: <FaGithub />, color: '#263B30' },
      { name: 'Vercel', icon: <FaCloud />, color: '#263B30' },
    ],
  },
]

function Skills() {
  return (
    <main className="skills-page">
      <section className="skills-heading">
        <p className="skills-eyebrow">WHAT I WORK WITH</p>

        <h1>
          My Skills<span>.</span>
        </h1>

        <p className="skills-intro">
          The technologies and tools I'm learning and using
          on my journey to becoming a Full Stack Developer.
        </p>

        <div className="skills-heading-line"></div>
      </section>

      <section className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.number}>
            <div className="skill-card-top">
              <span className="skill-number">
                {group.number}
              </span>

              <span className="skill-card-icon">
                {group.icon}
              </span>
            </div>

            <h2>{group.title}</h2>

            <p className="skill-description">
              {group.description}
            </p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill.name}>
                  <span
                    className="skill-tech-icon"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </span>

                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="skills-bottom">
        <div>
          <p className="skills-eyebrow">MY APPROACH</p>

          <h2>
            Skills grow through
            <span> practice and patience.</span>
          </h2>
        </div>

        <p className="skills-bottom-description">
          I'm continuously improving my knowledge through
          coding practice, assignments and personal projects.
          My goal is to understand the fundamentals and use
          them to build useful web applications.
        </p>
      </section>

      <div className="skills-footer-note">
        LEARNING IN PROGRESS · BUILDING STEP BY STEP
      </div>
    </main>
  )
}

export default Skills
