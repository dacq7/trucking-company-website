import './TestimonialsSection.css'

const testimonials = [
  {
    quote: "They helped us obtain our DOT registration and insurance coverage quickly. The process was smooth and professional.",
    image: `${import.meta.env.BASE_URL}images/testimonials/testimonial-truck-driver-1.png`,
    name: 'Client 1',
  },
  {
    quote: "Excellent service and fast support. Our company needed help with compliance filings and they handled everything perfectly.",
    image: `${import.meta.env.BASE_URL}images/testimonials/testimonial-truck-driver-2.png`,
    name: 'Client 2',
  },
  {
    quote: "I highly recommend their services to any trucking company looking for reliable insurance and regulatory assistance.",
    image: `${import.meta.env.BASE_URL}images/testimonials/testimonial-truck-driver-3.png`,
    name: 'Client 3',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section section" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-section__grid grid-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonials-section__card card">
              <div className="testimonials-section__image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <blockquote className="testimonials-section__quote">
                "{testimonial.quote}"
              </blockquote>
              <cite className="testimonials-section__name">— {testimonial.name}</cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
