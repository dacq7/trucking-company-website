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
        <div className="operation-types-section__grid grid-3">
          {operationTypes.map((type) => (
            <article key={type} className="operation-types-section__card card">
              <h3 className="card-title operation-types-section__type">{type}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
