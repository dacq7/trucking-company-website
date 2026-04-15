import { useState } from 'react'
import './MobileWeldingSection.css'
import './ServiceItemCTA.css'
import './SectionNudge.css'

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
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => setOpenIndex((prev) => prev === index ? null : index)

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
                role="button"
                aria-expanded={openIndex === index}
                onClick={() => handleToggle(index)}
              >
                <h3 className="mobile-welding-section__item-title">{service.title}</h3>
                <p className="mobile-welding-section__item-desc">{service.description}</p>
                {openIndex === index && (
                  <div className="service-item__cta">
                    <button
                      className="service-item__cta-quote"
                      onClick={(e) => {
                        e.stopPropagation()
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                        window.dispatchEvent(new CustomEvent('selectService', { detail: { service: 'Insurance Services' } }))
                      }}
                    >
                      Get a Quote
                    </button>
                    <a
                      href="tel:+18325809402"
                      className="service-item__cta-call"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Speak with an Agent
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
        <div className="section-nudge">
          <p className="section-nudge__text">Need mobile welding for your truck or trailer?</p>
          <button
            className="section-nudge__link"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact our team <span className="section-nudge__arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
