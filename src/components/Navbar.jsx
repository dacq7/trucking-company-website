import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/#insurance', label: 'Insurance' },
  { path: '/#compliance', label: 'Compliance' },
  { path: '/#road-assistance', label: 'Road Assistance' },
  { path: '/#about', label: 'About' },
  { path: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar" role="banner">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          Trucking Compliance
        </Link>

        <button
          className="navbar__hamburger"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          aria-controls="navbar-menu"
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>

        <nav
          id="navbar-menu"
          className={`navbar__nav ${isMenuOpen ? 'navbar__nav--open' : ''}`}
          role="navigation"
        >
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.path} className="navbar__item">
                <Link
                  to={link.path}
                  className="navbar__link"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/#contact"
            className="navbar__cta btn-primary"
            onClick={closeMenu}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  )
}
