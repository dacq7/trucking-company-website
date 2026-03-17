import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PrivacyPolicyContent from '../components/PrivacyPolicyContent'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="privacy-policy">
        <div className="container">
          <PrivacyPolicyContent />
        </div>
      </main>
      <Footer />
    </>
  )
}
