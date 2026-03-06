import './AboutSection.css'

const coreValues = [
  {
    title: 'Professional Service',
    description: 'We prioritize transparency, efficiency, and reliability in every service we provide.',
  },
  {
    title: 'Industry Expertise',
    description: 'Our experience in the trucking industry allows us to understand the challenges drivers and fleet owners face.',
  },
  {
    title: 'Customer Commitment',
    description: 'We are committed to supporting our clients with fast responses and personalized assistance.',
  },
]

export default function AboutSection() {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <h2 className="section-title">About Our Company</h2>
        <div className="about-section__content">
          <div className="about-section__text">
            <p className="about-section__paragraph">
              We specialize in providing insurance solutions and regulatory compliance services for trucking companies operating across the United States.
            </p>
            <p className="about-section__paragraph">
              Our goal is to simplify the complex world of trucking regulations and insurance coverage so that owner-operators and fleet businesses can focus on growing their operations.
            </p>
            <div className="about-section__values">
              {coreValues.map((value) => (
                <article key={value.title} className="about-section__value card">
                  <h3 className="card-title">{value.title}</h3>
                  <p className="card-description">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="about-section__image">
            <img
              src="/images/about/team-trucking-logistics-office.png"
              alt="Trucking logistics team in office"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
