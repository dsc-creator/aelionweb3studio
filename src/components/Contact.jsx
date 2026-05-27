import { useState } from 'react'
import emailjs from '@emailjs/browser'

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// To activate email sending, follow these 3 steps:
//
// 1. Go to https://www.emailjs.com and create a free account.
//
// 2. Add an Email Service:
//    - Dashboard → Email Services → Add New Service → Gmail
//    - Connect your Gmail account (aelionweb3studio@gmail.com)
//    - Copy the Service ID (looks like "service_xxxxxxx") → paste into EMAILJS_SERVICE_ID below
//
// 3. Create an Email Template:
//    - Dashboard → Email Templates → Create New Template
//    - Set "To Email" to: aelionweb3studio@gmail.com
//    - Use these variables in the template body:
//        From:     {{from_name}} ({{from_email}})
//        Service:  {{project_type}}
//        Message:  {{message}}
//    - Copy the Template ID (looks like "template_xxxxxxx") → paste into EMAILJS_TEMPLATE_ID below
//    - Copy your Public Key from Account → API Keys → paste into EMAILJS_PUBLIC_KEY below
//
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'    // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'   // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'    // e.g. 'abcDEFghiJKL012mn'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    const { firstName, lastName, email, projectType, message } = form

    if (!firstName || !email || !message) {
      alert('Please fill in at least your first name, email, and message.')
      return
    }

    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${firstName} ${lastName}`.trim(),
          from_email: email,
          project_type: projectType || 'Not specified',
          message: message,
          to_email: 'aelionweb3studio@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', projectType: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const buttonStyle = {
    width: '100%',
    justifyContent: 'center',
    fontSize: '1rem',
    padding: 16,
    ...(status === 'success' && { background: 'linear-gradient(135deg,#22c55e,#16a34a)' }),
    ...(status === 'error'   && { background: 'linear-gradient(135deg,#ef4444,#dc2626)' }),
  }

  const buttonLabel =
    status === 'sending' ? '⏳ Sending...' :
    status === 'success' ? "✓ Message Sent! We'll be in touch soon." :
    status === 'error'   ? '✕ Failed to send. Please try again.' :
    'Send Message →'

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-form reveal">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
              Start Your <span className="accent">Dream Project</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: 32, fontSize: '0.9rem' }}>
              Fill out the form and we'll get back to you within 24 hours with a custom proposal.
            </p>

            <div className="form-group">
              <div className="form-row">
                <div>
                  <label>First Name</label>
                  <input
                    type="text" name="firstName" placeholder="John"
                    value={form.firstName} onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Last Name</label>
                  <input
                    type="text" name="lastName" placeholder="Doe"
                    value={form.lastName} onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email" name="email" placeholder="john@company.com"
                value={form.email} onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Project Type</label>
              <select name="projectType" value={form.projectType} onChange={handleChange}>
                <option value="">Select a service...</option>
                <option>Custom Website Development</option>
                <option>Ecommerce Store</option>
                <option>Crypto / Web3 Landing Page</option>
                <option>SaaS / Dashboard</option>
                <option>UI/UX Design</option>
                <option>Website Redesign</option>
              </select>
            </div>

            <div className="form-group">
              <label>Tell Us About Your Project</label>
              <textarea
                name="message"
                placeholder="Describe your project, goals, timeline and budget..."
                value={form.message} onChange={handleChange}
              />
            </div>

            <button
              className="btn-primary"
              style={buttonStyle}
              onClick={handleSubmit}
              disabled={status === 'sending' || status === 'success'}
            >
              {buttonLabel}
            </button>

            {status === 'error' && (
              <p style={{ marginTop: 12, fontSize: '0.82rem', color: '#f87171', textAlign: 'center' }}>
                Something went wrong. Make sure your EmailJS keys are configured, or email us directly at{' '}
                <a href="mailto:aelionweb3studio@gmail.com" style={{ color: '#60a5fa' }}>
                  aelionweb3studio@gmail.com
                </a>
              </p>
            )}
          </div>

          <div className="contact-info reveal reveal-delay-1">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-sub">
              Prefer a direct conversation? Reach out on any of these channels and we'll respond within a few hours.
            </p>
            <div className="contact-links">
              <a href="mailto:aelionweb3studio@gmail.com" className="contact-link">
                <div className="cl-icon cl-blue">📧</div>
                <div className="cl-text">
                  <div className="cl-label">Email</div>
                  <div className="cl-value">aelionweb3studio@gmail.com</div>
                </div>
              </a>
              <a href="https://wa.me/1234567890" className="contact-link" target="_blank" rel="noreferrer">
                <div className="cl-icon cl-green">💬</div>
                <div className="cl-text">
                  <div className="cl-label">WhatsApp</div>
                  <div className="cl-value">+1 (234) 567-8901</div>
                </div>
              </a>
              <a href="https://instagram.com/aelionstudio" className="contact-link" target="_blank" rel="noreferrer">
                <div className="cl-icon cl-pink">📸</div>
                <div className="cl-text">
                  <div className="cl-label">Instagram</div>
                  <div className="cl-value">@aelionstudio</div>
                </div>
              </a>
              <a href="https://t.me/aelionstudio" className="contact-link" target="_blank" rel="noreferrer">
                <div className="cl-icon cl-teal">✈️</div>
                <div className="cl-text">
                  <div className="cl-label">Telegram</div>
                  <div className="cl-value">@aelionstudio</div>
                </div>
              </a>
            </div>
            <div style={{ marginTop: 32, padding: 24, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>Response Time</div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', fontWeight: 800, background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Under 24 Hours
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--muted2)', marginTop: 6 }}>
                We respond to every inquiry quickly with a personalized proposal.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
