import { useState, useEffect } from 'react'
import './ContactSection.css'
import PrivacyPolicyModal from './PrivacyPolicyModal'

const SERVICE_OPTIONS = [
  'Insurance Services',
  'DOT Registration',
  'Regulatory Compliance',
  'Permits and Filings',
  'Roadside Assistance',
]

const PRIVACY_CHECKBOX_TEXT = 'I accept the privacy policy'

const initialFormState = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  serviceNeeded: '',
  message: '',
  privacyAccepted: false,
}

const initialErrors = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  serviceNeeded: '',
  message: '',
  privacyAccepted: '',
}

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState(initialErrors)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      setFormData((prev) => ({ ...prev, serviceNeeded: e.detail.service }))
    }
    window.addEventListener('selectService', handler)
    return () => window.removeEventListener('selectService', handler)
  }, [])

  const validateForm = () => {
    const newErrors = { ...initialErrors }
    let isValid = true

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
      isValid = false
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
      isValid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
      isValid = false
    } else if (!/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    if (!formData.serviceNeeded) {
      newErrors.serviceNeeded = 'Please select a service'
      isValid = false
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = 'You must accept the Privacy Policy'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    let finalValue = type === 'checkbox' ? checked : value

    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 10)
      if (digits.length <= 3) {
        finalValue = digits.length ? `(${digits}` : ''
      } else if (digits.length <= 6) {
        finalValue = `(${digits.slice(0, 3)}) ${digits.slice(3)}`
      } else {
        finalValue = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
      }
    }

    setFormData((prev) => ({ ...prev, [name]: finalValue }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    const newErrors = { ...initialErrors }

    if (name === 'fullName' && !formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (name === 'companyName' && !formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    } else if (name === 'phone') {
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required'
      } else if (!/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number'
      }
    } else if (name === 'email') {
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    } else if (name === 'serviceNeeded' && !formData.serviceNeeded) {
      newErrors.serviceNeeded = 'Please select a service'
    } else if (name === 'privacyAccepted' && !formData.privacyAccepted) {
      newErrors.privacyAccepted = 'You must accept the Privacy Policy'
    }

    if (newErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError('')

    const url =
      'https://script.google.com/macros/s/AKfycbw0ca6v6tqV16xeAS2oOOUlRfnaXBabHU3M7I9LxrnY7bqv5KJVwARw8dOSVXgO9jyW/exec'

    const formPayload = new FormData()
    formPayload.append('fullName', formData.fullName)
    formPayload.append('companyName', formData.companyName)
    formPayload.append('phone', formData.phone)
    formPayload.append('email', formData.email)
    formPayload.append('service', formData.serviceNeeded)
    formPayload.append('message', formData.message)

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formPayload,
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      setIsSubmitted(true)
      setFormData(initialFormState)
      setErrors(initialErrors)
    } catch (error) {
      console.error('Contact form submission failed', error)
      setSubmitError('Submission failed. Please try again.')
    }

    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <section className="contact-section section" id="contact">
        <div className="container">
          <h2 className="section-title">Request Information or Get a Quote</h2>
          <div className="contact-section__success card">
            <div className="contact-section__success-icon" aria-hidden="true">✓</div>
            <h3>Thank you for your request!</h3>
            <p>One of our specialists will contact you shortly to discuss your needs.</p>
            <button
              type="button"
              className="btn-secondary contact-section__submit-another"
                onClick={() => {
                  setIsSubmitted(false)
                  setSubmitError('')
                }}
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <h2 className="section-title">Request Information or Get a Quote</h2>
        <p className="section-description">
          Fill out the form below and one of our specialists will contact you shortly to discuss your needs.
        </p>
        <div className="contact-section__content">
          <div className="contact-section__info">
            <div className="contact-section__image">
              <img
                src={`${import.meta.env.BASE_URL}images/contact/contact-truck-night-highway.png`}
                alt="Truck on highway at night"
              />
            </div>
            <div className="contact-section__whatsapp">
              <div className="contact-section__whatsapp-text">
                <p className="contact-section__whatsapp-title">Prefer to talk directly?</p>
                <p className="contact-section__whatsapp-desc">
                  Chat with our team on WhatsApp and get an answer right away — no forms, no wait.
                </p>
              </div>
              <a
                href="https://wa.me/18325809402"
                className="contact-section__whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <form className="contact-section__form card" onSubmit={handleSubmit} noValidate>
            <div className="contact-section__field">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your full name"
                className={errors.fullName ? 'contact-section__input--error' : ''}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <span id="fullName-error" className="contact-section__error" role="alert">
                  {errors.fullName}
                </span>
              )}
            </div>

            <div className="contact-section__field">
              <label htmlFor="companyName">Company Name *</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your company name"
                className={errors.companyName ? 'contact-section__input--error' : ''}
                aria-invalid={!!errors.companyName}
                aria-describedby={errors.companyName ? 'companyName-error' : undefined}
              />
              {errors.companyName && (
                <span id="companyName-error" className="contact-section__error" role="alert">
                  {errors.companyName}
                </span>
              )}
            </div>

            <div className="contact-section__field">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="(555) 123-4567"
                className={errors.phone ? 'contact-section__input--error' : ''}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <span id="phone-error" className="contact-section__error" role="alert">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="contact-section__field">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="your@email.com"
                className={errors.email ? 'contact-section__input--error' : ''}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="contact-section__error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="contact-section__field">
              <label htmlFor="serviceNeeded">Service Needed *</label>
              <select
                id="serviceNeeded"
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.serviceNeeded ? 'contact-section__input--error' : ''}
                aria-invalid={!!errors.serviceNeeded}
                aria-describedby={errors.serviceNeeded ? 'serviceNeeded-error' : undefined}
              >
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.serviceNeeded && (
                <span id="serviceNeeded-error" className="contact-section__error" role="alert">
                  {errors.serviceNeeded}
                </span>
              )}
            </div>

            <div className="contact-section__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us about your needs..."
                rows={4}
                className={errors.message ? 'contact-section__input--error' : ''}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <span id="message-error" className="contact-section__error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <div className="contact-section__field contact-section__checkbox">
              <input
                type="checkbox"
                id="privacyAccepted"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.privacyAccepted ? 'contact-section__input--error' : ''}
                aria-invalid={!!errors.privacyAccepted}
                aria-describedby={errors.privacyAccepted ? 'privacy-error' : undefined}
              />
              <label htmlFor="privacyAccepted">
                {PRIVACY_CHECKBOX_TEXT}{' '}
                <button
                  type="button"
                  className="contact-section__privacy-link"
                  onClick={() => setIsPrivacyOpen(true)}
                >
                  Privacy Policy
                </button>
              </label>
              {errors.privacyAccepted && (
                <span id="privacy-error" className="contact-section__error" role="alert">
                  {errors.privacyAccepted}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn-primary contact-section__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="contact-section__submit-spinner" aria-hidden="true" />
                  Submitting...
                </>
              ) : (
                'Submit Request'
              )}
            </button>

            {submitError && (
              <p className="contact-section__submit-error" role="alert">
                {submitError}
              </p>
            )}
          </form>
        </div>
      </div>

      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        onAccept={() => {
          setFormData((prev) => ({ ...prev, privacyAccepted: true }))
          setErrors((prev) => ({ ...prev, privacyAccepted: '' }))
          setIsPrivacyOpen(false)
        }}
      />
    </section>
  )
}
