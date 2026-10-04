import React, { useState } from 'react';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ExternalLink } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (field: keyof ContactForm, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required.';
        if (!/^[A-Za-z\s]+$/.test(value.trim())) {
          return 'Name can only contain letters and spaces.';
        }
        return undefined;

      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address.';
        }
        return undefined;

      case 'phone':
        if (!value.trim()) return 'Phone number is required.';
        if (!/^[\d\+\-\(\)\s]{7,18}$/.test(value.trim())) {
          return 'Please enter a valid phone number.';
        }
        return undefined;

      case 'subject':
        if (!value.trim()) return 'Subject is required.';
        return undefined;

      case 'message':
        if (!value.trim()) return 'Message is required.';
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const errorMsg = validateField(name as keyof ContactForm, value);
    setErrors((prev) => {
      const updated = { ...prev };
      if (!errorMsg) {
        delete updated[name as keyof FormErrors];
      } else {
        updated[name as keyof FormErrors] = errorMsg;
      }
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    const nameErr = validateField('name', formData.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateField('email', formData.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validateField('phone', formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const subjectErr = validateField('subject', formData.subject);
    if (subjectErr) newErrors.subject = subjectErr;

    const messageErr = validateField('message', formData.message);
    if (messageErr) newErrors.message = messageErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSuccess(false);
      return;
    }

    setErrors({});
    setIsSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <main className="section-cream pb-5">
      {/* Elevated Header Banner with Background Image & Dark Overlay */}
      <section
        className="page-hero-banner"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-leaf-left">
          <BotanicalLeaf color="#d4af37" />
        </div>
        <div className="page-hero-leaf-right">
          <BotanicalLeaf color="#d4af37" />
        </div>

        <div className="page-hero-content">
          <span className="eyebrow-text">Connect With Us</span>
          <h1 className="page-hero-title">Get In Touch</h1>
          <p className="page-hero-desc">
            We'd love to hear from you. Inquire about reservations, private banquets, corporate dining, or culinary collaborations.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <div className="content-container pt-5">
        <div className="row g-5 align-items-stretch">
          {/* Left Column: Contact Details + Styled Map Visual */}
          <div className="col-lg-5">
            <div
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '36px 30px',
                border: '1px solid #ebd9c2',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.04)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '1.7rem', marginBottom: '20px' }}>
                Contact Information
              </h3>

              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="feature-icon-circle" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--color-emerald-deep)' }}>Our Location</strong>
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    123 Green Valley Road, Olive District, Karachi, Pakistan
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="feature-icon-circle" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                  <Phone size={18} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--color-emerald-deep)' }}>Phone</strong>
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    +92 300 1234567
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="feature-icon-circle" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                  <Mail size={18} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--color-emerald-deep)' }}>Email Address</strong>
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    hello@theolivegrove.com
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="feature-icon-circle" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                  <Clock size={18} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--color-emerald-deep)' }}>Opening Hours</strong>
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    Mon – Sun : 10:00 AM – 11:00 PM
                  </div>
                </div>
              </div>

              {/* Real Interactive Location Map Section */}
              <div
                style={{
                  marginTop: 'auto',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1.5px solid #e0d0bc',
                  height: '270px',
                  position: 'relative',
                  background: '#f4ede1',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
                }}
              >
                {/* Real Interactive OpenStreetMap Embed */}
                <iframe
                  title="The Olive Grove Interactive Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-122.0370%2C37.3200%2C-122.0270%2C37.3270&amp;layer=mapnik&amp;marker=37.3235%2C-122.0320"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block',
                  }}
                  loading="lazy"
                />

                {/* Styled Restaurant Pin Overlay Header */}
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    right: '10px',
                    background: 'rgba(9, 32, 23, 0.94)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    border: '1px solid var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '6px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                    zIndex: 2,
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0 }}>
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'var(--color-gold-bright)',
                        boxShadow: '0 0 8px var(--color-gold-bright)',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                      THE OLIVE GROVE
                    </span>
                  </div>

                  <a
                    href="https://maps.google.com/?q=123+Green+Valley+Road"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'var(--color-gold)',
                      color: 'var(--color-emerald-deep)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      flexShrink: 0,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                      transition: 'background 0.2s ease',
                      marginLeft: 'auto',
                    }}
                  >
                    <span>Get Directions</span>
                    <ExternalLink size={11} />
                  </a>
                </div>

                {/* Map Bottom Metadata Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '10px',
                    right: '10px',
                    background: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(6px)',
                    padding: '5px 10px',
                    borderRadius: '8px',
                    border: '1px solid #ebd9c2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.70rem',
                    color: 'var(--color-emerald-deep)',
                    fontWeight: 600,
                    zIndex: 2,
                    boxSizing: 'border-box',
                    gap: '4px',
                  }}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Valet Parking Available</span>
                  <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>37.3235° N, 122.0320° W</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Strict Validation Display */}
          <div className="col-lg-7">
            <div
              className="contact-form-card"
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '36px 32px',
                border: '1px solid #ebd9c2',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.04)',
                height: '100%',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '1.8rem', marginBottom: '8px' }}>
                Send Us a Message
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                Whether you have an event query or want to share feedback, we'll respond within 24 hours.
              </p>

              {isSuccess && (
                <div className="form-success-banner" role="alert">
                  <CheckCircle size={22} color="#155724" />
                  <div>
                    <strong>Your message has been submitted successfully!</strong>
                    <div style={{ fontSize: '0.84rem', marginTop: '2px' }}>
                      Our concierge team will review your note and respond promptly.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="custom-form-group">
                      <label className="custom-form-label" htmlFor="contact-name">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className={`custom-form-control ${errors.name ? 'has-error' : ''}`}
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <span className="form-error-msg">{errors.name}</span>}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="custom-form-group">
                      <label className="custom-form-label" htmlFor="contact-email">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className={`custom-form-control ${errors.email ? 'has-error' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="form-error-msg">{errors.email}</span>}
                    </div>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="custom-form-group">
                      <label className="custom-form-label" htmlFor="contact-phone">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+92 300 1234567"
                        className={`custom-form-control ${errors.phone ? 'has-error' : ''}`}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="custom-form-group">
                      <label className="custom-form-label" htmlFor="contact-subject">
                        Subject *
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        placeholder="e.g. Private Dining Query"
                        className={`custom-form-control ${errors.subject ? 'has-error' : ''}`}
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && <span className="form-error-msg">{errors.subject}</span>}
                    </div>
                  </div>
                </div>

                <div className="custom-form-group">
                  <label className="custom-form-label" htmlFor="contact-message">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Write your message here..."
                    className={`custom-form-control ${errors.message ? 'has-error' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="form-error-msg">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn-primary-gold w-100 justify-content-center py-3 mt-2"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
