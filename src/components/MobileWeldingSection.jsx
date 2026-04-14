import './MobileWeldingSection.css'

const mobileWeldingServices = [
  {
    title: 'Trailer Repair',
    description: 'On-site trailer repairs including hinges, doors, brackets, crossmembers, and general metalwork.',
  },
  {
    title: 'Structural Welding',
    description: 'Structural welding for frames and heavy-duty equipment components, focused on safety and durability.',
  },
  {
    title: 'Emergency Mobile Service',
    description: 'Fast response welding support to reduce downtime and help you get back to work quickly.',
  },
  {
    title: 'On-Site Fabrication',
    description: 'Custom metal fabrication and reinforcement for trucking and heavy equipment needs at your location.',
  },
  {
    title: 'Heavy-Duty Equipment',
    description: 'Welding solutions for heavy-duty equipment wear points, mounts, and structural repairs.',
  },
  {
    title: 'Fleet Support',
    description: 'Repeat service options for fleets: maintenance welding, reinforcement, and repair scheduling.',
  },
]

export default function MobileWeldingSection() {
  return (
    <section className="mobile-welding-section section" id="mobile-welding">
      <div className="container">
        <h2 className="section-title">Mobile Welding</h2>
        <p className="section-description">
          Mobile welding for trucks and heavy-duty equipment, including trailer repair and structural welding.
        </p>
        <div className="mobile-welding-section__split">
          <div className="mobile-welding-section__image-col">
            <img
              src={`${import.meta.env.BASE_URL}images/services/mobile-welding-truck-trailer-repair.png`}
              alt="Mobile welding service for trucks and trailers"
            />
          </div>
          <div className="mobile-welding-section__list">
            {mobileWeldingServices.map((service, index) => (
              <article
                key={service.title}
                className="mobile-welding-section__item"
                style={{ '--stagger-index': index }}
              >
                <h3 className="mobile-welding-section__item-title">{service.title}</h3>
                <p className="mobile-welding-section__item-desc">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
