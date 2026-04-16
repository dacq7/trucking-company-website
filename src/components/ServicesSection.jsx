import { useState } from 'react'
import './ServicesSection.css'
import './ServiceItemCTA.css'
import './SectionNudge.css'

const services = [
  {
    title: 'Auto Liability (AL)',
    description: 'Auto Liability insurance is required for commercial trucks operating on public highways. This coverage protects your business in case of bodily injury or property damage caused to others in an accident.',
  },
  {
    title: 'Motor Truck Cargo (MTC)',
    description: 'Motor Truck Cargo insurance protects the goods being transported by your truck. It covers losses caused by theft, accidents, or damage during transit.',
  },
  {
    title: 'Physical Damage (APD)',
    description: 'Physical Damage insurance protects your truck against collisions, fire, vandalism, and natural disasters. It helps cover repair or replacement costs.',
  },
  {
    title: 'General Liability (GL)',
    description: 'General Liability insurance protects your business from claims related to third-party injuries or property damage that occur during your operations.',
  },
  {
    title: 'Non Trucking',
    description: 'Non-trucking liability coverage helps protect you when your truck is being used for personal reasons and not under dispatch for business operations.',
  },
  {
    title: 'Bobtail',
    description: 'Bobtail coverage provides liability protection when operating your truck without a trailer, such as when driving between jobs or to and from a terminal.',
  },
  {
    title: 'Workers Compensation',
    description: 'Workers Compensation insurance provides protection for employees in case of workplace injuries, covering medical expenses and lost wages.',
  },
]

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => setOpenIndex((prev) => prev === index ? null : index)

  return (
    <section className="services-section section" id="services">
      <div className="container">
        <h2 className="section-title">Insurance Solutions for Trucking Businesses</h2>
        <p className="section-description">
          We provide specialized insurance coverage designed to protect trucking companies, drivers, and transported cargo.
        </p>
        <div className="services-section__split">
          <div className="services-section__image-col">
            <img
              src={`${import.meta.env.BASE_URL}images/services/insurance-truck-driver-inspection.png`}
              alt="Truck driver inspection for insurance"
            />
          </div>
          <div className="services-section__list">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="services-section__item"
                style={{ '--stagger-index': index }}
                role="button"
                aria-expanded={openIndex === index}
                onClick={() => handleToggle(index)}
              >
                <h3 className="services-section__item-title">{service.title}</h3>
                <p className="services-section__item-desc">{service.description}</p>
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
                    <button
                      className="service-item__cta-call"
                      onClick={(e) => { e.stopPropagation(); window.dispatchEvent(new CustomEvent('openWhatsAppWidget')); }}
                    >
                      Chat on WhatsApp
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
        <div className="section-nudge">
          <p className="section-nudge__text">Looking for the right coverage for your fleet?</p>
          <button
            className="section-nudge__link"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get a free quote <span className="section-nudge__arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
