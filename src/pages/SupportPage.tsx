import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQS } from '../data/faqs';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { ChevronDown, Plus, Minus, ArrowRight, HelpCircle } from 'lucide-react';

export const SupportPage: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="section-cream pb-5">
      {/* Elevated Header Banner with Background Image & Dark Overlay */}
      <section className="page-hero-banner">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1100&q=65"
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
          <span className="eyebrow-text">Guest Concierge & Help</span>
          <h1 className="page-hero-title">Support Center</h1>
          <p className="page-hero-desc">
            We're here to help. Find answers to common questions about reservations, dietary accommodations, private parties, and dining policies.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <div className="content-container pt-5">
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="text-center mb-4">
            <span className="eyebrow-text">Frequently Asked Questions</span>
            <h2 className="display-heading" style={{ fontSize: '2.2rem', color: 'var(--color-emerald-deep)' }}>
              Everything You Need to Know
            </h2>
          </div>

          {/* Accordion */}
          <div className="mb-5">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="faq-accordion-item">
                  <button
                    type="button"
                    className="faq-header-btn"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center' }}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && <div className="faq-body-text">{faq.answer}</div>}
                </div>
              );
            })}
          </div>

          {/* CTA Box matching Reference 10 */}
          <div
            className="support-cta-box"
            style={{
              background: 'var(--color-emerald-deep)',
              borderRadius: '24px',
              padding: '36px 32px',
              color: '#ffffff',
              border: '1px solid var(--color-gold-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <div className="d-flex align-items-center gap-4">
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '2px solid var(--color-gold)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&q=80"
                  alt="Delicious food"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: '#ffffff', margin: '0 0 6px 0' }}>
                  Still Have Questions?
                </h4>
                <p style={{ color: '#c4d4cc', margin: 0, fontSize: '0.9rem' }}>
                  Feel free to reach out directly to our dining concierge desk.
                </p>
              </div>
            </div>

            <Link to="/contact" className="btn-primary-gold">
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
