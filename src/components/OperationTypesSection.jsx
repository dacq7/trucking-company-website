import './OperationTypesSection.css'

const operationTypes = [
  'Hot Shot',
  'Flatbed',
  'Sand & Gravel',
  'Garbage',
  'Boxtruck',
  'Frac Sand',
  'Auto Hauler',
  'Mixer',
  'Intermodal Container',
  'Livestock',
  'Hazmat',
  'Scrap Metal',
  'Bus',
  'Cargo Van',
  'Dry Bulk',
]

export default function OperationTypesSection() {
  return (
    <section className="operation-types-section section" id="operations">
      <div className="container">
        <h2 className="section-title">Trucking Operation Types We Support</h2>
        <p className="section-description">
          We tailor insurance and compliance solutions to a wide range of trucking operation types.
        </p>
        <ul className="operation-types-section__tags" aria-label="Operation types">
          {operationTypes.map((type, index) => (
            <li
              key={type}
              className="operation-types-section__tag"
              style={{ '--stagger-index': index }}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
