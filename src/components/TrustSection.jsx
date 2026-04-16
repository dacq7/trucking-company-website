import { useState } from 'react'
import './TrustSection.css'

const trustItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "We Already Know Trucking",
    description: "You won't spend time explaining your operation to us. We understand owner-operators, fleets, DOT requirements, and what coverage you actually need.",
    cta: {
      label: 'See the operation types we cover',
      action: 'scroll',
      target: 'coverage',
    },
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Coverage Built for Your Operation",
    description: "No generic policies. Whether you run a single flatbed or a mixed fleet, we match your coverage to your specific operation type and risk profile.",
    cta: {
      label: 'Explore our insurance solutions',
      action: 'scroll',
      target: 'services',
    },
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Most Filings Done Within 48 Hours",
    description: "We process DOT registrations, permits, and compliance filings fast — so your trucks stay on the road instead of waiting on paperwork.",
    cta: {
      label: 'See our compliance services',
      action: 'scroll',
      target: 'compliance',
    },
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: "A Real Person Answers",
    description: "No bots, no queues. When you reach out, you talk to someone who knows your file and can give you a straight answer.",
    cta: {
      label: 'Talk to our team',
      action: 'whatsapp',
      target: 'https://wa.me/18325809402',
    },
  },
]

export default function TrustSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (index) => setOpenIndex((prev) => prev === index ? null : index)

  return (
    <section className="trust-section section" id="trust">
      <div className="container">
        <h2 className="section-title">Trusted Support for Trucking Companies Nationwide</h2>
        <p className="section-description">
          Our team specializes in helping trucking companies navigate insurance requirements, federal regulations, and roadside emergencies. We provide reliable support so drivers and fleet owners can focus on what matters most — keeping their trucks moving.
        </p>
        <div className="trust-section__grid">
          {trustItems.map((item, index) => (
            <article
              key={item.title}
              className="trust-section__item"
              onClick={() => handleClick(index)}
              role="button"
              aria-expanded={openIndex === index}
              style={{ '--stagger-index': index, cursor: 'pointer' }}
            >
              <div className="trust-section__icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="trust-section__title">{item.title}</h3>
              <p className="trust-section__description">{item.description}</p>
              {openIndex === index && (
                <div className="trust-section__micro-cta">
                  {item.cta.action === 'scroll' ? (
                    <button
                      className="trust-section__micro-link"
                      onClick={(e) => {
                        e.stopPropagation()
                        document.getElementById(item.cta.target)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      {item.cta.label} <span className="trust-section__micro-arrow">→</span>
                    </button>
                  ) : (
                    <a
                      href={item.cta.target}
                      className="trust-section__micro-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.cta.label} <span className="trust-section__micro-arrow">→</span>
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
