import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarousel'
import TrustSection from '../components/TrustSection'
import ServicesSection from '../components/ServicesSection'
import RegulatorySection from '../components/RegulatorySection'
import RoadsideSection from '../components/RoadsideSection'
import ProcessSection from '../components/ProcessSection'
import AboutSection from '../components/AboutSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        <TrustSection />
        <ServicesSection />
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
