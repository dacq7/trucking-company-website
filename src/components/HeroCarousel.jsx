import { useState, useEffect } from 'react'
import './HeroCarousel.css'

const heroImages = [
  `${import.meta.env.BASE_URL}images/hero/hero-truck-highway-sunrise.png`,
  `${import.meta.env.BASE_URL}images/hero/hero-truck-fleet-yard.png`,
  `${import.meta.env.BASE_URL}images/hero/hero-truck-desert-highway.png`,
  `${import.meta.env.BASE_URL}images/hero/hero-truck-driver-documents.png`,
  `${import.meta.env.BASE_URL}images/hero/hero-heavy-duty-tow-truck.png`,
]

const CAROUSEL_INTERVAL = 5000

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, CAROUSEL_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" aria-label="Hero carousel">
      <div className="hero__carousel">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`hero__slide ${index === currentIndex ? 'hero__slide--active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
            role="img"
            aria-label={`Slide ${index + 1} of ${heroImages.length}`}
          />
        ))}
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      <div className="hero__content">
        <div className="container">
          <h1 className="hero__title">
            Trucking Insurance & Compliance Services Across the United States
          </h1>
          <p className="hero__subtitle">
            We help owner-operators and fleet companies stay compliant, protected, and on the road with reliable insurance and regulatory support.
          </p>
          <div className="hero__highlights">
            <span className="hero__highlight">Insurance Solutions</span>
            <span className="hero__highlight">DOT Compliance Services</span>
            <span className="hero__highlight">24/7 Road Assistance</span>
          </div>
          <div className="hero__buttons">
            <a href="#contact" className="btn-primary hero__btn" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>
              Get a Quote
            </a>
            <a href="tel:+18001234567" className="btn-secondary hero__btn">
              Speak With an Agent
            </a>
          </div>
        </div>
      </div>

      <div className="hero__indicators" role="tablist" aria-label="Carousel slides">
        {heroImages.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to slide ${index + 1}`}
            className={`hero__indicator ${index === currentIndex ? 'hero__indicator--active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}
