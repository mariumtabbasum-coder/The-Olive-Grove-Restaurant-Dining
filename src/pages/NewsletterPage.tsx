import React, { useState } from 'react';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { Mail, CheckCircle, ArrowRight, Sparkles, Gift, Wine, Bell } from 'lucide-react';

export const NewsletterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (val: string) => {
    if (!val.trim()) {
      return 'Email address is required.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())) {
      return 'Please enter a valid email address.';
    }
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    const err = validateEmail(val);
    if (!err) {
      setError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateEmail(email);
    if (err) {
      setError(err);
      setIsSuccess(false);
      return;
    }

    setError(null);
    setIsSuccess(true);
    setEmail('');
  };

  return (
    <main className="section-cream pb-5">
      {/* Elevated Header Banner with Background Image & Dark Overlay */}
      <section className="page-hero-banner">
        <img
          src="/assets/images/newsletter-header.jpg"
          alt="VIP table setting with wine and culinary welcome privileges"
          className="page-hero-bg-img newsletter-hero-bg"
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
          <span className="eyebrow-text">Epicurean Privileges</span>
          <h1 className="page-hero-title">Subscribe to Our Newsletter</h1>
          <p className="page-hero-desc">
            Join The Olive Grove Club for private tasting invitations, secret seasonal menus, and members-only culinary experiences.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="content-container pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="newsletter-hero-card">
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '180px',
                  opacity: 0.15,
                  pointerEvents: 'none',
                }}
              >
                <BotanicalLeaf color="#d4af37" />
              </div>

              <span className="eyebrow-text" style={{ color: 'var(--color-gold-bright)' }}>
                Complimentary Welcome Gift
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  color: '#ffffff',
                  marginBottom: '14px',
                }}
              >
                Unlock 15% Off Your Next Dine-In
              </h2>
              <p
                style={{
                  color: '#c4d7cd',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  maxWidth: '540px',
                  margin: '0 auto 36px auto',
                }}
              >
                Sign up today to receive an instant welcome perk, monthly cellar releases, and priority reservations for holiday banquets.
              </p>

              {isSuccess && (
                <div
                  className="form-success-banner mb-4 text-start"
                  style={{ maxWidth: '520px', margin: '0 auto 24px auto' }}
                >
                  <CheckCircle size={22} color="#155724" />
                  <div>
                    <strong>Thank you for subscribing!</strong>
                    <div style={{ fontSize: '0.84rem' }}>
                      Check your inbox for your 15% welcome dining voucher.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate style={{ maxWidth: '520px', margin: '0 auto' }}>
                <div style={{ position: 'relative', textAlign: 'left' }}>
                  <div className={`newsletter-input-group ${error ? 'has-error' : ''}`}>
                    <div className="newsletter-field-box">
                      <Mail size={18} color="#8a9990" className="newsletter-field-icon" />
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={handleChange}
                        className="newsletter-field-input"
                        aria-label="Email address for newsletter"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary-gold newsletter-submit-btn"
                    >
                      <span>Subscribe</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                  {error && (
                    <span
                      className="form-error-msg"
                      style={{
                        color: '#ff7373',
                        fontSize: '0.82rem',
                        marginTop: '8px',
                        display: 'block',
                        paddingLeft: '16px',
                      }}
                    >
                      {error}
                    </span>
                  )}
                </div>
              </form>

              <p style={{ fontSize: '0.8rem', color: '#97ab9f', marginTop: '24px', marginBottom: 0 }}>
                We respect your privacy. No spam ever. Unsubscribe at any time with one click.
              </p>
            </div>
          </div>
        </div>

        {/* Subscriber Perks Row */}
        <div className="row g-4 mt-5">
          <div className="col-md-4">
            <div className="newsletter-benefit-card">
              <div className="newsletter-benefit-icon-box">
                <Wine size={26} color="var(--color-emerald-deep)" />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '8px' }}>
                Private Cellar Tastings
              </h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', margin: 0 }}>
                First access to reserve rare vintage uncorking sessions with our master sommelier.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="newsletter-benefit-card">
              <div className="newsletter-benefit-icon-box">
                <Gift size={26} color="var(--color-emerald-deep)" />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '8px' }}>
                Birthday & Anniversary Gifts
              </h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', margin: 0 }}>
                Complimentary dessert platters and celebratory champagne for your milestones.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="newsletter-benefit-card">
              <div className="newsletter-benefit-icon-box">
                <Bell size={26} color="var(--color-emerald-deep)" />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '8px' }}>
                Seasonal Menu Previews
              </h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', margin: 0 }}>
                Sample Chef Daniel Carter's upcoming seasonal releases before the public launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
