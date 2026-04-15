import './OperationTypesSection.css'

const operationTypes = [
  {
    name: 'Dry Van',
    description: 'Standard enclosed trailer freight',
    icon: '🚛',
  },
  {
    name: 'Reefer',
    description: 'Temperature-controlled cargo transport',
    icon: '❄️',
  },
  {
    name: 'Flatbed',
    description: 'Open platform for oversized loads',
    icon: '🚚',
  },
  {
    name: 'Step Deck',
    description: 'Low-clearance oversized freight',
    icon: '📦',
  },
  {
    name: 'Hot Shot',
    description: 'Expedited LTL with smaller equipment',
    icon: '⚡',
  },
  {
    name: 'Box Truck',
    description: 'Urban and last-mile delivery',
    icon: '🏙️',
  },
  {
    name: 'Tanker',
    description: 'Liquid and gas bulk transport',
    icon: '🛢️',
  },
  {
    name: 'Intermodal',
    description: 'Container transport, port to rail',
    icon: '🚂',
  },
  {
    name: 'Auto Hauler',
    description: 'Vehicle transport and delivery',
    icon: '🚗',
  },
  {
    name: 'Hazmat',
    description: 'Hazardous materials certified hauling',
    icon: '⚠️',
  },
  {
    name: 'Frac Sand',
    description: 'Oil field and fracking support',
    icon: '🛢️',
  },
  {
    name: 'Sand & Gravel',
    description: 'Construction material hauling',
    icon: '🏗️',
  },
  {
    name: 'Dry Bulk',
    description: 'Pneumatic tanker commodities',
    icon: '🌾',
  },
  {
    name: 'Livestock',
    description: 'Animal transport compliance',
    icon: '🐄',
  },
  {
    name: 'Scrap Metal',
    description: 'Recycling and salvage hauling',
    icon: '♻️',
  },
  {
    name: 'Mixer',
    description: 'Concrete and cement operations',
    icon: '🏛️',
  },
  {
    name: 'Cargo Van',
    description: 'Sprinter and cargo van fleets',
    icon: '🚐',
  },
  {
    name: 'Garbage',
    description: 'Waste management vehicles',
    icon: '🗑️',
  },
  {
    name: 'Bus',
    description: 'Passenger and charter transport',
    icon: '🚌',
  },
]

export default function OperationTypesSection() {
  return (
    <section className="operation-types-section section" id="operations">
      <div className="container">
        <h2 className="section-title">Trucking Operation Types We Support</h2>
        <p className="section-description">
          We tailor insurance and compliance solutions to a wide range of trucking operation types.
        </p>
        <div className="operation-types-section__grid">
          {operationTypes.map((type, index) => (
            <article
              key={type.name}
              className="operation-types-section__card"
              style={{ '--stagger-index': index }}
            >
              <span className="operation-types-section__icon" aria-hidden="true">
                {type.icon}
              </span>
              <h3 className="operation-types-section__name">{type.name}</h3>
              <p className="operation-types-section__desc">{type.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
