import { Link } from 'react-router-dom'
import './Footer.css'

const footerLinks = [
  { path: '/#insurance', label: 'Insurance Services' },
  { path: '/#compliance', label: 'DOT Compliance' },
  { path: '/#road-assistance', label: 'Roadside Assistance' },
  { path: '/#contact', label: 'Contact' },
  { path: '/privacy-policy', label: 'Privacy Policy' },
]

export default function Footer() {
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
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer__bottom">
          <p>© 2026 Trucking Compliance Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
