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
        <ul className="operating-states-section__tags" aria-label="Operating states">
          {operatingStates.map((state, index) => (
            <li
              key={state}
              className="operating-states-section__tag"
              style={{ '--stagger-index': index }}
            >
              {state}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
