import './RoadsideSection.css'

const roadsideServices = [
  {
    title: 'Heavy Duty Towing',
    description: 'Professional towing services for semi trucks and heavy-duty vehicles in case of breakdowns or accidents.',
  },
  {
    title: 'Tire Replacement',
    description: 'Emergency tire replacement services to get trucks back on the road quickly.',
  },
  {
    title: 'Emergency Road Support',
    description: 'Immediate assistance for mechanical issues and unexpected roadside problems.',
  },
]

export default function RoadsideSection() {
  return (
    <section className="roadside-section section" id="roadside">
      <div className="container">
        <h2 className="section-title">Emergency Roadside Assistance</h2>
        <p className="section-description">
          Unexpected situations happen on the road. Our roadside support services help truck drivers resolve emergencies quickly and safely.
        </p>
        <div className="roadside-section__split">
          <div className="roadside-section__image-col">
            <img
              src={`${import.meta.env.BASE_URL}images/roadside/roadside-heavy-tow-service.png`}
              alt="Heavy duty tow service for trucks"
            />
          </div>
          <div className="roadside-section__services">
            {roadsideServices.map((service, index) => (
              <article
                key={service.title}
                className="roadside-section__item"
                style={{ '--stagger-index': index }}
              >
                <h3 className="roadside-section__item-title">{service.title}</h3>
                <p className="roadside-section__item-desc">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
