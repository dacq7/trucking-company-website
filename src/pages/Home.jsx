import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarousel'
import TrustSection from '../components/TrustSection'
import OperatingStatesSection from '../components/OperatingStatesSection'
import OperationTypesSection from '../components/OperationTypesSection'
import ServicesSection from '../components/ServicesSection'
import MobileWeldingSection from '../components/MobileWeldingSection'
import RegulatorySection from '../components/RegulatorySection'
import RoadsideSection from '../components/RoadsideSection'
import ProcessSection from '../components/ProcessSection'
import AboutSection from '../components/AboutSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      [
        '.hero__title',
        '.hero__subtitle',
        '.hero__highlights',
        '.hero__buttons',
        '.hero__btn',
        '.section-title',
        '.card',
        '.services-section__card',
        '.regulatory-section__card',
        '.roadside-section__card',
        '.trust-section__card',
        '.mobile-welding-section__card',
        '.operating-states-section__tag',
        '.operation-types-section__tag',
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
      { threshold: 0.15 },
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
      <main>
        <HeroCarousel />
        <TrustSection />
        <OperatingStatesSection />
        <OperationTypesSection />
        <ServicesSection />
        <MobileWeldingSection />
        <RegulatorySection />
        <RoadsideSection />
        <ProcessSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
