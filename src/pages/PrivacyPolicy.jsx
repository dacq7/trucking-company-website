import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="privacy-policy">
        <div className="container">
          <article className="privacy-policy__content">
            <h1>Privacy Policy</h1>
            <p className="privacy-policy__updated">Last updated: March 2026</p>

            <section>
              <h2>1. Introduction</h2>
              <p>
                Trucking Compliance Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <p>
                We may collect information that you provide directly to us, including:
              </p>
              <ul>
                <li>Full name and contact information</li>
                <li>Company name and business details</li>
                <li>Phone number and email address</li>
                <li>Service preferences and inquiries</li>
                <li>Any other information you choose to provide through our contact forms</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Respond to your inquiries and provide requested services</li>
                <li>Process insurance quotes and compliance filings</li>
                <li>Communicate with you about our services</li>
                <li>Improve our website and customer service</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2>4. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with trusted third parties who assist us in operating our business, such as insurance carriers and regulatory agencies, only as necessary to provide the services you request.
              </p>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2>6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. To exercise these rights or for any privacy-related questions, please contact us.
              </p>
            </section>

            <section>
              <h2>7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us through our website or by phone.
              </p>
            </section>

            <div className="privacy-policy__back">
              <Link to="/" className="btn-primary">Back to Home</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
