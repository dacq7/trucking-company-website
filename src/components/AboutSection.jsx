import { useEffect, useRef, useState } from 'react'
import './AboutSection.css'
import './SectionNudge.css'

const stats = [
  { value: 100, suffix: '+', label: 'Businesses Served' },
  { value: 11, suffix: '', label: 'States Covered' },
  { value: 48, suffix: '-hr', label: 'Avg. Processing Time' },
  { value: 19, suffix: '+', label: 'Operation Types Supported' },
]

const coreValues = [
  {
    number: '01',
    title: 'Transparency First',
    description: 'Clear communication and honest guidance at every step — no hidden fees, no surprises.',
  },
  {
    number: '02',
    title: 'Trucking Expertise',
    description: 'We know the regulations, the filings, and the coverage that owner-operators and fleets actually need.',
  },
  {
    number: '03',
    title: 'Fast Turnaround',
    description: 'We process filings and coverage requests quickly so you spend less time on paperwork and more time on the road.',
  },
]

function AnimatedStat({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 1200
          const steps = 40
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="about-section__stat">
      <span className="about-section__stat-value">
        {count}{suffix}
      </span>
      <span className="about-section__stat-label">{label}</span>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <h2 className="section-title">About Our Company</h2>

        <div className="about-section__stats">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>

        <div className="about-section__content">
          <div className="about-section__text">
            <p className="about-section__paragraph">
              We specialize in insurance solutions and regulatory compliance services for trucking companies operating across the United States. From owner-operators running a single truck to fleet businesses managing dozens of vehicles, we provide the coverage and filings that keep operations legal and protected.
            </p>
            <p className="about-section__paragraph">
              Our team understands the real challenges of the trucking industry — tight deadlines, complex federal requirements, and the need for fast, reliable support. We simplify the process so you can focus on what matters most: keeping your trucks moving.
            </p>
            <div className="about-section__values">
              {coreValues.map((value) => (
                <article key={value.title} className="about-section__value">
                  <span className="about-section__value-number" aria-hidden="true">
                    {value.number}
                  </span>
                  <div>
                    <h3 className="about-section__value-title">{value.title}</h3>
                    <p className="about-section__value-desc">{value.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="about-section__image">
            <img
              src={`${import.meta.env.BASE_URL}images/about/team-trucking-logistics-office.png`}
              alt="Trucking logistics team in office"
            />
          </div>
        </div>

        <div className="section-nudge">
          <p className="section-nudge__text">Want to work with a team that knows trucking inside out?</p>
          <button
            className="section-nudge__link"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in touch <span className="section-nudge__arrow">→</span>
          </button>
        </div>

      </div>
    </section>
  )
}
