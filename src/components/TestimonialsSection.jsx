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
  return (
    <section className="testimonials-section section" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-section__layout">
          <article className="testimonials-section__featured">
            <span className="testimonials-section__quote-mark" aria-hidden="true">"</span>
            <blockquote className="testimonials-section__quote testimonials-section__quote--large">
              {testimonials[0].quote}
            </blockquote>
            <div className="testimonials-section__author">
              <div className="testimonials-section__avatar">
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </div>
              <div>
                <cite className="testimonials-section__name">{testimonials[0].name}</cite>
                <p className="testimonials-section__role">{testimonials[0].role}</p>
              </div>
            </div>
          </article>
          <div className="testimonials-section__secondary">
            {testimonials.slice(1).map((testimonial) => (
              <article key={testimonial.name} className="testimonials-section__card-sm">
                <blockquote className="testimonials-section__quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="testimonials-section__author">
                  <div className="testimonials-section__avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div>
                    <cite className="testimonials-section__name">{testimonial.name}</cite>
                    <p className="testimonials-section__role">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
