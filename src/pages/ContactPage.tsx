import React, { useState } from 'react';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ExternalLink, Plus, Minus } from 'lucide-react';

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
  const [mapZoom, setMapZoom] = useState(16);

  const deltaLon = 0.005 * Math.pow(2, 16 - mapZoom);
  const deltaLat = deltaLon * 0.7;
  const mapBbox = `${(-122.0320 - deltaLon).toFixed(4)}%2C${(37.3235 - deltaLat).toFixed(4)}%2C${(-122.0320 + deltaLon).toFixed(4)}%2C${(37.3235 + deltaLat).toFixed(4)}`;

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

      case 'phone': {
        const trimmed = value.trim();
        if (!trimmed) return 'Phone number is required.';
        const digitsOnly = trimmed.replace(/\D/g, '');
        if (!/^[\d\s\-]+$/.test(trimmed) || digitsOnly.length !== 11) {
          return 'Please enter a valid 11-digit phone number.';
        }
        return undefined;
      }

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
      <section className="page-hero-banner">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1100&q=65"
          alt=""
          className="page-hero-bg-img"
          fetchPriority="high"
          decoding="async"
          aria-hidden="true"
        />
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

              {/* Interactive Location Map Container with Zero Overlap */}
              <div className="contact-map-card">
                {/* 1. Header Bar: Location Identity & Get Directions Button */}
                <div className="contact-map-header">
                  <div className="contact-map-brand">
                    <span className="contact-map-dot" />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span className="contact-map-title">
                        THE OLIVE GROVE
                      </span>
                      <span className="contact-map-sub">
                        Valet Parking Available • 123 Green Valley Road
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=123+Green+Valley+Road"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-map-directions-btn"
                  >
                    <span>Get Directions</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* 2. Interactive Map Canvas with Unobstructed Zoom Controls & Restored Location Pin */}
                <div className="contact-map-canvas">
                  <iframe
                    title="The Olive Grove Interactive Location Map"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${mapBbox}&amp;layer=mapnik&amp;marker=37.3235%2C-122.0320`}
                    className="contact-map-iframe"
                    loading="lazy"
                  />

                  {/* Restored Restaurant Location Pin Marker (Gold & Green themed) */}
                  <div className="map-location-marker-anchor" aria-label="The Olive Grove Location Pin">
                    <div className="map-marker-pulse-ring" />
                    <div className="map-marker-pin-head" title="The Olive Grove Restaurant (123 Green Valley Road)">
                      <MapPin size={18} color="#ffffff" fill="var(--color-emerald-deep)" />
                    </div>
                    <div className="map-marker-callout">
                      <span>The Olive Grove</span>
                    </div>
                  </div>

                  {/* Independent Zoom Controls in Top-Right Corner */}
                  <div className="map-custom-zoom-controls" aria-label="Map Zoom Controls">
                    <button
                      type="button"
                      onClick={() => setMapZoom((z) => Math.min(18, z + 1))}
                      className="map-zoom-btn"
                      aria-label="Zoom in on map"
                      title="Zoom in (+)"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setMapZoom((z) => Math.max(13, z - 1))}
                      className="map-zoom-btn"
                      aria-label="Zoom out on map"
                      title="Zoom out (-)"
                    >
                      <Minus size={16} />
                    </button>
                  </div>
                </div>

                {/* 3. Mandatory Provider Attribution Strip (Always 100% visible & clickable) */}
                <div className="contact-map-footer">
                  <span className="contact-map-coords">37.3235° N, 122.0320° W</span>
                  <a
                    href="https://www.openstreetmap.org/?mlat=37.3235&amp;mlon=-122.0320#map=16/37.3235/-122.0320"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-map-attr-link"
                  >
                    Map data © OpenStreetMap contributors
                  </a>
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
                        placeholder="0300 1234567"
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
