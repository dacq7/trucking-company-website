import '../pages/PrivacyPolicy.css'

const sections = [
  { id: 'pp-intro', number: '1', title: 'Introduction' },
  { id: 'pp-collect', number: '2', title: 'Information We Collect' },
  { id: 'pp-use', number: '3', title: 'How We Use Your Information' },
  { id: 'pp-sharing', number: '4', title: 'Information Sharing' },
  { id: 'pp-security', number: '5', title: 'Data Security' },
  { id: 'pp-rights', number: '6', title: 'Your Rights' },
  { id: 'pp-contact', number: '7', title: 'Contact Us' },
  { id: 'pp-cookies', number: '8', title: 'Cookies and Tracking Technologies' },
  { id: 'pp-ccpa', number: '9', title: 'California Privacy Rights (CCPA)' },
]

export default function PrivacyPolicyContent({ showToc = false }) {
  return (
    <article className="privacy-policy__content" id="pp-top">
      <h1>Privacy Policy</h1>
      <p className="privacy-policy__updated">Last updated: March 2026</p>

      {showToc && (
        <nav className="privacy-modal__toc" aria-label="Table of contents">
          <p className="privacy-modal__toc-title">Contents</p>
          <ol className="privacy-modal__toc-list">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="privacy-modal__toc-link">
                  {s.number}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <section id="pp-intro">
        <h2>1. Introduction</h2>
        <p>
          Elite Platinum Multiservices ("we," "our," or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, with whom we share it, and the choices you have regarding your personal data.
        </p>
        <p>
          This policy applies to all information collected through our website and any related services, communications, or transactions. By using our website or submitting information through our contact forms, you agree to the terms of this Privacy Policy.
        </p>
        <p>
          We operate primarily in the United States and our services are directed toward trucking companies, owner-operators, and fleet businesses operating under US federal and state regulations. If you are accessing our website from outside the United States, please be aware that your information may be transferred to and processed in the United States.
        </p>
      </section>

      <section id="pp-collect">
        <h2>2. Information We Collect</h2>
        <p>
          We collect information you voluntarily provide to us when you submit a contact form, request a quote, or communicate with us directly. The categories of personal information we may collect include:
        </p>
        <ul>
          <li><strong>Identifiers:</strong> Full name, email address, phone number, and mailing address.</li>
          <li><strong>Business Information:</strong> Company name, fleet size, type of trucking operation, and US DOT or MC numbers where provided.</li>
          <li><strong>Service Inquiry Data:</strong> Details about the insurance coverage or compliance services you are requesting.</li>
          <li><strong>Communications:</strong> Messages, questions, or other content you submit through our contact forms or by phone.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, and device information collected automatically when you visit our website.</li>
        </ul>
        <p>
          We do not collect sensitive personal information such as Social Security numbers, financial account details, or payment card information through our website. Any such information required to complete a service transaction is collected through secure, dedicated channels.
        </p>
      </section>

      <section id="pp-use">
        <h2>3. How We Use Your Information</h2>
        <p>
          We use the personal information we collect for legitimate business purposes, including:
        </p>
        <ul>
          <li>Responding to your service inquiries and providing insurance quotes or compliance consultations.</li>
          <li>Processing DOT registrations, permits, filings, and other regulatory services on your behalf.</li>
          <li>Communicating with you about the status of your requests, renewals, or compliance deadlines.</li>
          <li>Maintaining records as required by federal and state insurance regulations.</li>
          <li>Improving our website functionality and customer service quality.</li>
          <li>Complying with applicable laws, regulations, and legal processes.</li>
          <li>Preventing fraud, unauthorized activity, and other potential misuse of our services.</li>
        </ul>
        <p>
          We do not use your personal information for automated decision-making or profiling that produces legal or similarly significant effects.
        </p>
      </section>

      <section id="pp-sharing">
        <h2>4. Information Sharing</h2>
        <p>
          We do not sell, rent, or trade your personal information to third parties for their own marketing purposes. We may share your information in the following limited circumstances:
        </p>
        <ul>
          <li><strong>Insurance Carriers:</strong> To obtain quotes, bind coverage, or process claims on your behalf, we may share relevant business and contact information with licensed insurance carriers.</li>
          <li><strong>Regulatory Agencies:</strong> When processing DOT registrations, FMCSA filings, UCR registrations, or other compliance services, we submit required information to the appropriate federal or state agencies.</li>
          <li><strong>Service Providers:</strong> We may share information with trusted third-party vendors who assist us in operating our website or business, subject to confidentiality agreements and only to the extent necessary to perform their services.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information when required by law, subpoena, court order, or to protect the rights, property, or safety of our company, our clients, or the public.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your information becomes subject to a different privacy policy.</li>
        </ul>
      </section>

      <section id="pp-security">
        <h2>5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
        </p>
        <ul>
          <li>Encrypted transmission of data submitted through our website using HTTPS/TLS protocols.</li>
          <li>Restricted access to personal information on a need-to-know basis among our staff.</li>
          <li>Regular review of our data collection, storage, and processing practices.</li>
          <li>Use of reputable, security-audited third-party platforms for data storage and communications.</li>
        </ul>
        <p>
          While we take reasonable steps to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, and you provide information at your own risk. If you believe your information has been compromised, please contact us immediately.
        </p>
      </section>

      <section id="pp-rights">
        <h2>6. Your Rights</h2>
        <p>
          Depending on your state of residence, you may have the following rights with respect to your personal information:
        </p>
        <ul>
          <li><strong>Right to Know:</strong> You may request information about the categories and specific pieces of personal data we have collected about you.</li>
          <li><strong>Right to Correct:</strong> You may request that we correct inaccurate personal information we hold about you.</li>
          <li><strong>Right to Delete:</strong> You may request deletion of your personal information, subject to certain exceptions required by law or legitimate business purposes.</li>
          <li><strong>Right to Opt Out:</strong> You have the right to opt out of the sale or sharing of your personal information. We do not sell personal information, but you may contact us to confirm this at any time.</li>
          <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your privacy rights.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the information in Section 7. We will respond to verifiable requests within 45 days, as required by applicable law.
        </p>
      </section>

      <section id="pp-contact">
        <h2>7. Contact Us</h2>
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us through our website contact form or by phone. We will make reasonable efforts to address your inquiry promptly.
        </p>
        <p>
          For privacy-specific requests — including requests to access, correct, or delete your personal information — please identify yourself and describe your request clearly so we can verify your identity and respond appropriately.
        </p>
        <p>
          We reserve the right to update this Privacy Policy at any time. When we make material changes, we will update the "Last updated" date at the top of this page. Your continued use of our website after any changes constitutes your acceptance of the revised policy.
        </p>
      </section>

      <section id="pp-cookies">
        <h2>8. Cookies and Tracking Technologies</h2>
        <p>
          Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site usage. Cookies are small data files stored on your device that help us recognize returning visitors and understand how our site is used.
        </p>
        <p>
          We may use the following types of cookies:
        </p>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled without affecting site functionality.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website, such as which pages are most visited and how users navigate the site. This data is aggregated and anonymized.</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences to improve your experience on return visits.</li>
        </ul>
        <p>
          Most web browsers allow you to control cookies through their settings. You can configure your browser to refuse cookies or to alert you when cookies are being set. Please note that disabling certain cookies may affect the functionality of our website. We do not respond to "Do Not Track" browser signals at this time, as there is no uniform standard for such signals.
        </p>
      </section>

      <section id="pp-ccpa">
        <h2>9. California Privacy Rights (CCPA)</h2>
        <p>
          If you are a resident of California, the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), provides you with specific rights regarding your personal information. This section describes those rights and explains how to exercise them.
        </p>
        <p>
          <strong>Categories of Personal Information Collected:</strong> In the past 12 months, we have collected the following categories of personal information: identifiers (name, email, phone number), commercial information (service inquiries and transaction records), internet or electronic network activity (browsing data), and professional or employment-related information (business and fleet details).
        </p>
        <p>
          <strong>Your California Rights:</strong>
        </p>
        <ul>
          <li><strong>Right to Know:</strong> You may request disclosure of the categories and specific pieces of personal information we have collected, the sources from which we collected it, the business or commercial purposes for collecting it, and the categories of third parties with whom we share it.</li>
          <li><strong>Right to Delete:</strong> You may request deletion of personal information we have collected from you, subject to certain exceptions.</li>
          <li><strong>Right to Correct:</strong> You may request that we correct inaccurate personal information we maintain about you.</li>
          <li><strong>Right to Opt Out of Sale or Sharing:</strong> We do not sell or share personal information as defined under the CCPA. If this practice changes, we will update this policy and provide an opt-out mechanism.</li>
          <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> We do not use or disclose sensitive personal information for purposes beyond those permitted by the CCPA.</li>
          <li><strong>Right to Non-Discrimination:</strong> We will not deny you services, charge you different prices, or provide a lower quality of service because you exercised your California privacy rights.</li>
        </ul>
        <p>
          To submit a California privacy rights request, please contact us through our website or by phone. We will verify your identity before processing your request and will respond within 45 days of receipt. You may designate an authorized agent to submit a request on your behalf by providing written authorization.
        </p>
      </section>
      <div className="privacy-policy__back-to-top">
        <a href="#pp-top" className="privacy-policy__back-to-top-link">
          ↑ Back to contents
        </a>
      </div>
    </article>
  )
}
