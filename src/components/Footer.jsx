import { useState } from 'react'
import './Footer.css'
import PrivacyPolicyModal from './PrivacyPolicyModal'

const footerLinks = [
  { href: '#services', label: 'Insurance Services' },
  { href: '#compliance', label: 'DOT Compliance' },
  { href: '#roadside', label: 'Roadside Assistance' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__description">
            <p>
              We provide insurance, compliance, and roadside support services for trucking companies operating across the United States.
            </p>
          </div>
          <nav className="footer__nav" aria-label="Footer navigation">
            <ul className="footer__links">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="footer__link footer__privacy-button"
                  onClick={() => setIsPrivacyOpen(true)}
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__bottom">
          <p>© 2026 Elite Platinum Multiservices. All rights reserved.</p>
        </div>
      </div>

      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </footer>
  )
}
