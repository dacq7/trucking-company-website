import { useEffect, useRef, useState } from 'react'
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
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const isMenuOpenRef = useRef(isMenuOpen)
  const prevScrollYRef = useRef(0)
  const lastShowYRef = useRef(0)
  const isScrolledRef = useRef(isScrolled)
  const isVisibleRef = useRef(isVisible)

  useEffect(() => {
    isScrolledRef.current = isScrolled
  }, [isScrolled])

  useEffect(() => {
    isVisibleRef.current = isVisible
  }, [isVisible])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen
  }, [isMenuOpen])

  useEffect(() => {
    let prevScrollY = window.scrollY
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY
        const safeTopZone = 80
        const directionThreshold = 8
        const hideAfterDownPx = 65

        // Init on first run
        if (!prevScrollYRef.current) {
          prevScrollYRef.current = currentY
          lastShowYRef.current = currentY
          ticking = false
          return
        }

        const prevY = prevScrollYRef.current
        const delta = currentY - prevY

        // Avoid toggling on tiny jitter.
        if (Math.abs(delta) < directionThreshold) {
          ticking = false
          return
        }

        prevScrollYRef.current = currentY

        // Safe top zone: never hide, never shrink.
        if (currentY <= safeTopZone) {
          if (isScrolledRef.current) setIsScrolled(false)
          if (!isVisibleRef.current) setIsVisible(true)
          lastShowYRef.current = currentY
          ticking = false
          return
        }

        const nextScrolled = currentY > safeTopZone
        if (isScrolledRef.current !== nextScrolled) setIsScrolled(nextScrolled)

        if (isMenuOpenRef.current) {
          if (!isVisibleRef.current) setIsVisible(true)
          lastShowYRef.current = currentY
          ticking = false
          return
        }

        const scrollingUp = delta < 0
        const scrollingDown = delta > 0

        if (scrollingUp) {
          if (!isVisibleRef.current) setIsVisible(true)
          lastShowYRef.current = currentY
        } else if (scrollingDown) {
          const allowedToHide = currentY - lastShowYRef.current >= hideAfterDownPx
          if (allowedToHide && isVisibleRef.current) setIsVisible(false)
          if (!allowedToHide && !isVisibleRef.current) setIsVisible(true)
        }

        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isScrolled && !isVisible ? 'navbar--hidden' : ''}`}
      role="banner"
    >
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          <img
            src={`${import.meta.env.BASE_URL}images/logo/logo.svg`}
            alt="Elite Platinum Multiservices"
            className="navbar__logo-img"
          />
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
