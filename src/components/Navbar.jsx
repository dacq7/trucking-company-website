import { useState } from 'react'
import './Navbar.css'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#compliance', label: 'Compliance' },
  { href: '#roadside', label: 'Road Assistance' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar" role="banner">
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          Elite Platinum Multiservices
        </a>

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
              <li key={link.href} className="navbar__item">
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="navbar__cta btn-primary"
            onClick={closeMenu}
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  )
}
