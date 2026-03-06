import './ProcessSection.css'

const steps = [
  {
    number: '1',
    title: 'Contact Our Team',
    description: 'Reach out to our team through our website or phone and tell us about your needs.',
  },
  {
    number: '2',
    title: 'We Evaluate Your Case',
    description: 'Our specialists review your situation and determine the best insurance or compliance solution.',
  },
  {
    number: '3',
    title: 'Documentation & Processing',
    description: 'We prepare and process all necessary insurance coverage or regulatory filings.',
  },
  {
    number: '4',
    title: 'You Get Back on the Road',
    description: 'Your business is ready to operate safely, legally, and with the protection you need.',
  },
]

export default function ProcessSection() {
  return (
    <section className="process-section section">
      <div className="container">
        <h2 className="section-title">How Our Service Process Works</h2>
        <div className="process-section__steps">
          {steps.map((step, index) => (
            <article key={step.number} className="process-section__step">
              <div className="process-section__number">{step.number}</div>
              <div className="process-section__content">
                <h3 className="process-section__title">{step.title}</h3>
                <p className="process-section__description">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="process-section__connector" aria-hidden="true" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
