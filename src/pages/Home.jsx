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
