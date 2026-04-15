import { useEffect } from 'react'
import './PrivacyPolicyModal.css'
import PrivacyPolicyContent from './PrivacyPolicyContent'

export default function PrivacyPolicyModal({ isOpen, onClose, onAccept }) {
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="privacy-modal__overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Privacy Policy"
      onClick={onClose}
    >
      <div
        className="privacy-modal__box"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="privacy-modal__header">
          <span className="privacy-modal__header-title">Privacy Policy</span>
          <button
            type="button"
            className="privacy-modal__close"
            aria-label="Close privacy policy"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="privacy-modal__body">
          <PrivacyPolicyContent showToc={true} />
        </div>
        <div className="privacy-modal__footer">
          <button
            type="button"
            className="privacy-modal__footer-close"
            onClick={onClose}
          >
            Close
          </button>
          <button
            type="button"
            className="privacy-modal__footer-accept"
            onClick={onAccept}
          >
            I Accept
          </button>
        </div>
      </div>
    </div>
  )
}
