
import './Journey.css'

const journeySteps = [
  {
    number: '01',
    period: 'THE BEGINNING',
    title: 'An Unexpected Pause',
    description:
      'Health challenges led me to take a break from my studies. Although my educational journey took an unexpected turn, my desire to learn, grow and build a career remained strong.',
    tag: 'A New Perspective',
  },
  {
    number: '02',
    period: 'FINDING MY DIRECTION',
    title: 'Discovering Web Development',
    description:
      'I began exploring web development through online learning. What started as an opportunity to learn something new gradually became a clear goal: to become a Full Stack Developer.',
    tag: 'Learning Online',
  },
  {
    number: '03',
    period: 'LEARNING BY BUILDING',
    title: 'Turning Knowledge into Projects',
    description:
      'I started applying what I learned through practical projects, including Velora, a full-stack e-commerce application, CRM interfaces and Next.js applications. Each project helps me understand concepts more deeply and improve my problem-solving skills.',
    tag: 'Practice & Progress',
  },
  {
    number: '04',
    period: 'THE JOURNEY CONTINUES',
    title: 'Building My Future',
    description:
      'My focus is to strengthen my technical foundation, build useful real-world applications and continue growing as a developer. I believe consistent effort and a willingness to learn can create meaningful opportunities.',
    tag: 'Focused on Growth',
  },
]

function Journey() {
  return (
    <main className="journey-page">
      <section className="journey-heading">
        <p className="journey-eyebrow">MY STORY, MY PROGRESS</p>

        <h1>
          The Journey <span>So Far.</span>
        </h1>

        <p className="journey-intro">
          Every journey has its own pace. Mine is about
          overcoming challenges, learning new skills and
          taking small steps towards a bigger goal.
        </p>

        <div className="journey-heading-line" />
      </section>

      <section className="journey-story">
        <div className="journey-story-content">
          <p className="journey-eyebrow">A LITTLE ABOUT MY PATH</p>

          <h2>
            Progress isn't always <span>a straight line.</span>
          </h2>

          <p>
            My journey has not followed a traditional path.
            Health challenges required me to step away from
            my studies for a period of time. Instead of
            allowing that pause to define my future, I chose
            to explore new possibilities through online
            learning and practical development.
          </p>

          <p>
            Today, I am working towards becoming a Full Stack
            Developer, learning through coding practice,
            assignments and personal projects. Every new
            concept I understand and every problem I solve
            brings me one step closer to my goal.
          </p>

          <div className="journey-quote">
            <span className="journey-quote-mark">“</span>
            <p>
              Your path doesn't have to be perfect to lead
              you somewhere meaningful.
            </p>
          </div>
        </div>

        <div className="journey-image-wrap">
          <img
            src="/journey.jpeg"
            alt="A personal visual representing my learning journey"
          />
          <div className="journey-image-caption">
            <span>MY JOURNEY</span>
            <span>STILL IN PROGRESS ↗</span>
          </div>
        </div>
      </section>

      <section className="journey-timeline-section">
        <div className="journey-section-heading">
          <p className="journey-eyebrow">THE ROAD SO FAR</p>
          <h2>
            One step at a <span>time.</span>
          </h2>
          <p>
            From an unexpected pause to discovering a new
            direction, every stage has taught me something.
          </p>
        </div>

        <div className="journey-timeline">
          {journeySteps.map((step) => (
            <article className="journey-step" key={step.number}>
              <div className="journey-step-number">
                {step.number}
              </div>

              <div className="journey-step-content">
                <p className="journey-step-period">
                  {step.period}
                </p>

                <h3>{step.title}</h3>

                <p className="journey-step-description">
                  {step.description}
                </p>

                <span className="journey-step-tag">
                  {step.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="journey-values">
        <p className="journey-eyebrow">WHAT KEEPS ME GOING</p>

        <h2>
          Learn. Build. <span>Improve.</span>
        </h2>

        <div className="journey-values-grid">
          <article>
            <span>01</span>
            <h3>Curiosity</h3>
            <p>
              Staying open to new ideas and learning how
              things work.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Consistency</h3>
            <p>
              Making progress through regular practice and
              small, meaningful steps.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Growth</h3>
            <p>
              Learning from mistakes and becoming better
              with every project.
            </p>
          </article>
        </div>
      </section>

      <section className="journey-future">
        <p className="journey-eyebrow">WHAT COMES NEXT</p>

        <h2>
          The best part is <span>still ahead.</span>
        </h2>

        <p>
          I am continuing to learn, build and prepare for
          opportunities where I can contribute my skills,
          solve real problems and grow as a developer.
        </p>

        <a href="/projects" className="journey-project-button">
          Explore My Projects ↗
        </a>
      </section>

      <footer className="journey-footer">
        EVERY STEP COUNTS · THE JOURNEY CONTINUES
      </footer>
    </main>
  )
}

export default Journey
