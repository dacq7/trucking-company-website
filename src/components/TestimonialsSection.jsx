import { useState } from 'react'
import './TestimonialsSection.css'

const testimonials = [
  {
    quote: "They helped us obtain our DOT registration and insurance coverage quickly. The process was smooth and professional.",
    image: `${import.meta.env.BASE_URL}images/testimonials/testimonial-truck-driver-1.png`,
    name: 'Marcus Delgado',
    role: 'Owner-Operator · 8 trucks · Texas',
  },
  {
    quote: "Excellent service and fast support. Our company needed help with compliance filings and they handled everything perfectly.",
    image: `${import.meta.env.BASE_URL}images/testimonials/testimonial-truck-driver-2.png`,
    name: 'Tony Reinholt',
    role: 'Fleet Manager · Midwest Region',
  },
  {
    quote: "I highly recommend their services to any trucking company looking for reliable insurance and regulatory assistance.",
    image: `${import.meta.env.BASE_URL}images/testimonials/testimonial-truck-driver-3.png`,
    name: 'Sandra Kwon',
    role: 'Independent Carrier · California',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  return (
    <section className="testimonials-section section" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-section__slider">
          <div className="testimonials-section__track" style={{ transform: `translateX(-${active * 100}%)` }}>
            {testimonials.map((t) => (
              <article key={t.name} className="testimonials-section__slide">
                <span className="testimonials-section__quote-mark" aria-hidden="true">"</span>
                <blockquote className="testimonials-section__quote testimonials-section__quote--large">
                  {t.quote}
                </blockquote>
                <div className="testimonials-section__author">
                  <div className="testimonials-section__avatar">
                    <img src={t.image} alt={t.name} />
                  </div>
                  <div>
                    <cite className="testimonials-section__name">{t.name}</cite>
                    <p className="testimonials-section__role">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="testimonials-section__controls">
            <button className="testimonials-section__btn" onClick={prev} aria-label="Previous testimonial">&#8592;</button>
            <div className="testimonials-section__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials-section__dot ${i === active ? 'testimonials-section__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="testimonials-section__btn" onClick={next} aria-label="Next testimonial">&#8594;</button>
          </div>
        </div>
      </div>
    </section>
  )
}
