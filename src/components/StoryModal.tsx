import React from 'react';
import { X, ArrowRight, Heart, Sparkles, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BotanicalLeaf } from './BotanicalLeaf';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-custom" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog-custom story-modal-dialog"
        style={{
          width: '94%',
          maxWidth: '850px',
          background: 'var(--color-cream-bg)',
          borderRadius: '24px',
          border: '1.5px solid var(--color-gold)',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
          boxSizing: 'border-box',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            background: 'var(--color-emerald-deep)',
            color: '#ffffff',
            padding: '24px 32px',
            position: 'relative',
            borderBottom: '1px solid var(--color-gold-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ position: 'absolute', top: 8, left: 10, width: '60px', opacity: 0.25, pointerEvents: 'none' }}>
            <BotanicalLeaf color="#d4af37" />
          </div>

          <div>
            <span className="eyebrow-text" style={{ color: 'var(--color-gold-bright)', marginBottom: '4px' }}>
              Our Heritage & Philosophy
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', color: '#ffffff', margin: 0 }}>
              The Story of The Olive Grove
            </h3>
          </div>

          <button
            className="modal-close-btn"
            style={{
              position: 'static',
              width: '36px',
              height: '36px',
              flexShrink: 0,
            }}
            onClick={onClose}
            aria-label="Close story dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '36px 32px', maxHeight: '75vh', overflowY: 'auto' }}>
          {/* Top Two Column Story Section */}
          <div className="row g-4 align-items-center mb-4">
            <div className="col-md-5">
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.1)',
                  border: '2px solid #ebd9c2',
                  height: '270px',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=70"
                  alt="Culinary craftsmanship at The Olive Grove"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="col-md-7">
              <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '1.45rem', marginBottom: '12px' }}>
                Born from an Ancient Mediterranean Grove
              </h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '12px' }}>
                In the spring of 2014, Chef Daniel Carter stood among a forgotten stand of century-old olive trees with a vision: to strip away pretension and return fine dining to its purest roots — honesty of ingredients, warmth of company, and respect for nature.
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                What began as a quiet 10-table bistro with an open hearth has flourished into an award-winning sanctuary. Every morning, our team receives freshly harvested organic herbs, heritage olive oils, and line-caught seafood from local family fishermen.
              </p>
            </div>
          </div>

          {/* Pull Quote Box */}
          <div
            style={{
              background: 'var(--color-emerald-deep)',
              color: '#ffffff',
              borderRadius: '16px',
              padding: '20px 24px',
              margin: '24px 0',
              borderLeft: '4px solid var(--color-gold)',
            }}
          >
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.1rem', color: '#fbf7ee', margin: '0 0 6px 0' }}>
              “Food is an invitation to pause, breathe, and gather together. When people break bread at our tables, they enter as guests and leave as family.”
            </p>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              — Chef Daniel Carter, Founder & Culinary Director
            </span>
          </div>

          {/* Milestone Badges Timeline */}
          <div className="mt-4">
            <h5 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '1.25rem', marginBottom: '16px' }}>
              Key Milestones in Our Journey
            </h5>

            <div className="row g-3">
              <div className="col-sm-6 col-lg-3">
                <div style={{ background: '#ffffff', padding: '16px', borderRadius: '14px', border: '1px solid #ebd9c2' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-gold)' }}>
                    2014
                  </span>
                  <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--color-emerald-deep)', margin: '2px 0' }}>
                    First Hearth Lit
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    Opened 10-table bistro in the countryside
                  </span>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div style={{ background: '#ffffff', padding: '16px', borderRadius: '14px', border: '1px solid #ebd9c2' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-gold)' }}>
                    2018
                  </span>
                  <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--color-emerald-deep)', margin: '2px 0' }}>
                    Organic Cooperative
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    100% farm-to-table certified sourcing
                  </span>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div style={{ background: '#ffffff', padding: '16px', borderRadius: '14px', border: '1px solid #ebd9c2' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-gold)' }}>
                    2022
                  </span>
                  <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--color-emerald-deep)', margin: '2px 0' }}>
                    Grand Wine Cellar
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    Expanded cellar to 400+ reserve vintages
                  </span>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div style={{ background: '#ffffff', padding: '16px', borderRadius: '14px', border: '1px solid #ebd9c2' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-gold)' }}>
                    2026
                  </span>
                  <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--color-emerald-deep)', margin: '2px 0' }}>
                    Michelin Honor
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    Michelin Guide recommended dining
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row — Responsive Stacking on Mobile */}
          <div className="story-modal-actions-row">
            <Link
              to="/reservation"
              onClick={onClose}
              className="btn-primary-gold story-modal-book-btn"
            >
              <span>Book Your Table</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/about"
              onClick={onClose}
              className="story-modal-about-link"
            >
              <span>Explore Full Story on About Page</span>
              <ArrowRight size={15} color="var(--color-gold)" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
