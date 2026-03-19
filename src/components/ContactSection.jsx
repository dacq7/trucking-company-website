import { useState } from 'react'
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
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
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

      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </section>
  )
}
