import { useEffect } from 'react'
import PrivacyPolicyContent from './PrivacyPolicyContent'

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="contact-section__modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Privacy Policy"
      onClick={onClose}
    >
      <div className="contact-section__modal card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="contact-section__modal-close"
          aria-label="Close privacy policy"
          onClick={onClose}
        >
          ×
        </button>
        <div className="contact-section__modal-body">
          <PrivacyPolicyContent />
        </div>
      </div>
    </div>
  )
}
