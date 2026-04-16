import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarousel'
import TrustSection from '../components/TrustSection'
import CoverageSection from '../components/CoverageSection'
import ServicesSection from '../components/ServicesSection'
import MobileWeldingSection from '../components/MobileWeldingSection'
import RegulatorySection from '../components/RegulatorySection'
import RoadsideSection from '../components/RoadsideSection'
import ProcessSection from '../components/ProcessSection'
import AboutSection from '../components/AboutSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import StickyCtaBar from '../components/StickyCtaBar'

export default function Home() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      [
        '.hero__title',
        '.hero__subtitle',
        '.hero__highlights',
        '.hero__buttons',
        // Section titles
        '.section-title',
        // Service-type split sections
        '.services-section__item',
        '.mobile-welding-section__item',
        '.regulatory-section__item',
        '.roadside-section__item',
        // Trust 2×2 grid
        '.trust-section__item',
        // Testimonials
        '.testimonials-section__featured',
        '.testimonials-section__card-sm',
        // About values
        '.about-section__value',
        // Process steps
        '.process-section__step',
      ].join(','),
    )

    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 },
    )

    targets.forEach((el) => {
      el.classList.add('reveal')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <StickyCtaBar />
      <main>
        <HeroCarousel />
        <TrustSection />
        <ServicesSection />
        <MobileWeldingSection />
        <RegulatorySection />
        <RoadsideSection />
        <ProcessSection />
        <CoverageSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
