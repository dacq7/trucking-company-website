import './RegulatorySection.css'

const regulatoryServices = [
  {
    title: 'DOT Number Registration',
    description: 'We assist trucking companies in obtaining their official DOT Number required by the Federal Motor Carrier Safety Administration.',
  },
  {
    title: 'MC Number (Motor Carrier Authority)',
    description: 'Motor Carrier Authority allows companies to transport goods across state lines legally.',
  },
  {
    title: 'Unified Carrier Registration (UCR)',
    description: 'UCR is an annual registration required for interstate motor carriers operating in the United States.',
  },
  {
    title: 'BOC-3 Filing',
    description: 'BOC-3 filing designates legal agents in every state to receive official legal documents on behalf of your trucking company.',
  },
  {
    title: 'IRP Registration',
    description: 'International Registration Plan (IRP) allows commercial vehicles to operate across multiple states with a single registration.',
  },
  {
    title: 'IFTA Registration',
    description: 'International Fuel Tax Agreement (IFTA) simplifies fuel tax reporting for trucking companies operating in multiple jurisdictions.',
  },
  {
    title: 'DOT Number Updates',
    description: 'We help update company information associated with your DOT Number when business details change.',
  },
  {
    title: 'Biennial Update (MCS-150)',
    description: 'The FMCSA requires companies to update their registration information every two years through the MCS-150 form.',
  },
  {
    title: 'Operating Authority Reinstatement',
    description: 'If your operating authority has been suspended, we assist in restoring it quickly so you can continue operating.',
  },
  {
    title: 'Drug & Alcohol Consortium Enrollment',
    description: 'Commercial drivers must participate in a federally approved drug and alcohol testing program. We help companies enroll and remain compliant.',
  },
]

export default function RegulatorySection() {
  return (
    <section className="regulatory-section section" id="compliance">
      <div className="container">
        <h2 className="section-title">DOT Compliance & Regulatory Services</h2>
        <p className="section-description">
          Operating a trucking company requires compliance with several federal regulations. Our team helps ensure that your business remains fully compliant with all required filings and registrations.
        </p>
        <div className="regulatory-section__content">
          <div className="regulatory-section__image">
            <img
              src={`${import.meta.env.BASE_URL}images/regulatory/dot-inspection-weigh-station.png`}
              alt="DOT inspection at weigh station"
            />
          </div>
          <div className="regulatory-section__grid grid-3">
            {regulatoryServices.map((service) => (
              <article key={service.title} className="regulatory-section__card card">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
