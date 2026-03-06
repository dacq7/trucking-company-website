import './TrustSection.css'

const trustItems = [
  {
    title: 'Industry Experience',
    description: 'Our team understands the unique needs of trucking companies operating across the United States.',
  },
  {
    title: 'Specialized Trucking Insurance',
    description: 'We offer coverage solutions specifically designed for owner-operators and fleet businesses.',
  },
  {
    title: 'Fast Regulatory Processing',
    description: 'We help you obtain permits, registrations, and compliance filings quickly and efficiently.',
  },
  {
    title: 'Dedicated Customer Support',
    description: 'Our team is available to guide you through every step of the process.',
  },
]

export default function TrustSection() {
  return (
    <section className="trust-section section" id="trust">
      <div className="container">
        <h2 className="section-title">Trusted Support for Trucking Companies Nationwide</h2>
        <p className="section-description">
          Our team specializes in helping trucking companies navigate insurance requirements, federal regulations, and roadside emergencies. We provide reliable support so drivers and fleet owners can focus on what matters most — keeping their trucks moving.
        </p>
        <div className="trust-section__grid grid-3">
          {trustItems.map((item) => (
            <article key={item.title} className="trust-section__card card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
