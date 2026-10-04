import React, { useState } from 'react';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

export const ReservationPage: React.FC = () => {
  const [formData, setFormData] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ReservationForm | null>(null);

  // Field validation helpers
  const validateField = (field: keyof ReservationForm, value: string): string | undefined => {
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

      case 'date':
        if (!value.trim()) return 'Date is required.';
        return undefined;

      case 'time':
        if (!value.trim()) return 'Time is required.';
        return undefined;

      case 'guests':
        if (!value.trim() || isNaN(Number(value)) || Number(value) < 1) {
          return 'Number of guests must be a positive number (at least 1).';
        }
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Instant validation removal when valid
    const errorMsg = validateField(name as keyof ReservationForm, value);
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

    const dateErr = validateField('date', formData.date);
    if (dateErr) newErrors.date = dateErr;

    const timeErr = validateField('time', formData.time);
    if (timeErr) newErrors.time = timeErr;

    const guestsErr = validateField('guests', formData.guests);
    if (guestsErr) newErrors.guests = guestsErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSuccess(false);
      return;
    }

    // Success
    setErrors({});
    setIsSuccess(true);
    setSubmittedData({ ...formData });

    // Reset the form as strictly required
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: '',
    });
  };

  return (
    <main className="section-cream pb-5">
      {/* Elevated Header Banner with Background Image & Dark Overlay */}
      <section
        className="page-hero-banner"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80')`,
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
          <span className="eyebrow-text">Fine Dining Bookings</span>
          <h1 className="page-hero-title">Reserve Your Table</h1>
          <p className="page-hero-desc">
            Good food, great company. Always a good idea. Join us for an enchanting candlelit evening under the olive trees.
          </p>
        </div>
      </section>

      {/* Main Reservation Section */}
      <div className="content-container pt-5">
        <div className="row g-5 align-items-stretch">
          {/* Left Column: Form with Strict Validation Display */}
          <div className="col-lg-7">
            <div
              className="reservation-form-card"
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '36px 32px',
                border: '1px solid #ebd9c2',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                height: '100%',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '1.8rem', marginBottom: '8px' }}>
                Table Reservation Form
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                Please fill in the details below. We look forward to setting your table.
              </p>

              {/* Success Notification Alert */}
              {isSuccess && (
                <div className="form-success-banner" role="alert">
                  <CheckCircle size={22} color="#155724" />
                  <div>
                    <div><strong>Your reservation has been submitted successfully!</strong></div>
                    {submittedData && (
                      <div style={{ fontSize: '0.84rem', marginTop: '4px' }}>
                        Confirmation sent to {submittedData.email} for {submittedData.guests} guests on {submittedData.date} at {submittedData.time}.
                      </div>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* Name Field */}
                <div className="custom-form-group">
                  <label className="custom-form-label" htmlFor="res-name">
                    Full Name *
                  </label>
                  <input
                    id="res-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name (e.g. Eleanor Vance)"
                    className={`custom-form-control ${errors.name ? 'has-error' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="form-error-msg">{errors.name}</span>}
                </div>

                <div className="row g-3">
                  {/* Email Field */}
                  <div className="col-md-6">
                    <div className="custom-form-group">
                      <label className="custom-form-label" htmlFor="res-email">
                        Email Address *
                      </label>
                      <input
                        id="res-email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        className={`custom-form-control ${errors.email ? 'has-error' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="form-error-msg">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="col-md-6">
                    <div className="custom-form-group">
                      <label className="custom-form-label" htmlFor="res-phone">
                        Phone Number *
                      </label>
                      <input
                        id="res-phone"
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
                </div>

                <div className="row g-3">
                  {/* Date Field */}
                  <div className="col-md-6">
                    <div className="custom-form-group">
                      <label className="custom-form-label" htmlFor="res-date">
                        Reservation Date *
                      </label>
                      <input
                        id="res-date"
                        name="date"
                        type="date"
                        className={`custom-form-control ${errors.date ? 'has-error' : ''}`}
                        value={formData.date}
                        onChange={handleChange}
                      />
                      {errors.date && <span className="form-error-msg">{errors.date}</span>}
                    </div>
                  </div>

                  {/* Time Field */}
                  <div className="col-md-6">
                    <div className="custom-form-group">
                      <label className="custom-form-label" htmlFor="res-time">
                        Preferred Time *
                      </label>
                      <select
                        id="res-time"
                        name="time"
                        className={`custom-form-control ${errors.time ? 'has-error' : ''}`}
                        value={formData.time}
                        onChange={handleChange}
                      >
                        <option value="">Select a dining slot</option>
                        <option value="12:00 PM">12:00 PM (Lunch)</option>
                        <option value="01:30 PM">01:30 PM (Lunch)</option>
                        <option value="06:00 PM">06:00 PM (Early Dinner)</option>
                        <option value="07:30 PM">07:30 PM (Prime Dinner)</option>
                        <option value="08:30 PM">08:30 PM (Prime Dinner)</option>
                        <option value="09:30 PM">09:30 PM (Late Dinner)</option>
                      </select>
                      {errors.time && <span className="form-error-msg">{errors.time}</span>}
                    </div>
                  </div>
                </div>

                {/* Number of Guests */}
                <div className="custom-form-group">
                  <label className="custom-form-label" htmlFor="res-guests">
                    Number of Guests *
                  </label>
                  <input
                    id="res-guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="20"
                    placeholder="e.g. 2"
                    className={`custom-form-control ${errors.guests ? 'has-error' : ''}`}
                    value={formData.guests}
                    onChange={handleChange}
                  />
                  {errors.guests && <span className="form-error-msg">{errors.guests}</span>}
                </div>

                {/* Special Requests (Optional) */}
                <div className="custom-form-group">
                  <label className="custom-form-label" htmlFor="res-special">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="res-special"
                    name="specialRequests"
                    rows={3}
                    placeholder="E.g. anniversary celebration, booth preference, food allergy..."
                    className="custom-form-control"
                    value={formData.specialRequests}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-gold w-100 justify-content-center py-3 mt-2"
                >
                  <span>Book Now</span>
                  <ArrowRight size={17} />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Restaurant Image & "We'll Make It Special" Caption */}
          <div className="col-lg-5">
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
                border: '2px solid #ebd9c2',
                height: '100%',
                minHeight: '440px',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80"
                alt="The Olive Grove Candlelit Table Setting"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Caption Overlay at Bottom */}
              <div
                style={{
                  position: 'absolute',
                  inset: 'auto 0 0 0',
                  background: 'linear-gradient(to top, rgba(9, 32, 23, 0.94), rgba(9, 32, 23, 0.5) 80%, transparent)',
                  padding: '36px 28px 28px 28px',
                  color: '#ffffff',
                }}
              >
                <span className="eyebrow-text" style={{ color: 'var(--color-gold-bright)', marginBottom: '4px' }}>
                  Our Promise
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', color: '#ffffff', marginBottom: '8px' }}>
                  We'll Make It Special
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#d3e2da', lineHeight: 1.6, margin: 0 }}>
                  Let us know if you have any dietary requirements or celebration wishes. From hand-written calligraphy cards to customized dessert candles, every detail matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
