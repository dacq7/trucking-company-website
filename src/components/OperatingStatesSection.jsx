import './OperatingStatesSection.css'

const operatingStates = [
  'Arizona',
  'California',
  'Florida',
  'Illinois',
  'New Mexico',
  'North Carolina',
  'South Carolina',
  'Texas',
]

export default function OperatingStatesSection() {
  return (
    <section className="operating-states-section section" id="states">
      <div className="container">
        <h2 className="section-title">Operating States</h2>
        <p className="section-description">
          We currently support trucking companies operating across the following states.
        </p>
        <div className="operating-states-section__grid grid-3">
          {operatingStates.map((state) => (
            <article key={state} className="operating-states-section__card card">
              <h3 className="card-title operating-states-section__state">{state}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
