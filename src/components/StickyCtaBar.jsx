import { useEffect, useState } from 'react'
import './StickyCtaBar.css'

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('home')
    const contact = document.getElementById('contact')
    if (!hero || !contact) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === 'home') {
            if (!entry.isIntersecting) setVisible(true)
            else setVisible(false)
          }
          if (entry.target.id === 'contact') {
            if (entry.isIntersecting) setVisible(false)
          }
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(hero)
    observer.observe(contact)
    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={`sticky-cta-bar ${visible ? 'sticky-cta-bar--visible' : ''}`}
      aria-hidden={!visible}
    >
      <button
        className="sticky-cta-bar__quote"
        onClick={scrollToContact}
      >
        Get a Quote
      </button>
      <a
        href="https://wa.me/18325809402"
        className="sticky-cta-bar__call"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
      </a>
    </div>
  )
}
