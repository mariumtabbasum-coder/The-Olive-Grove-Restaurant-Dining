import React from 'react';
import { Chef } from '../types';
import { X, Award, Star, Utensils } from 'lucide-react';

interface ChefModalProps {
  chef: Chef | null;
  onClose: () => void;
}

export const ChefModal: React.FC<ChefModalProps> = ({ chef, onClose }) => {
  if (!chef) return null;

  return (
    <div className="modal-overlay-custom" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog-custom chef-modal-dialog"
        style={{ maxWidth: '780px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close chef details">
          <X size={20} />
        </button>

        <div className="chef-modal-grid">
          <div className="chef-modal-img-col">
            <img
              src={chef.image}
              alt={chef.name}
              className={`chef-modal-photo chef-photo-${chef.id}`}
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: chef.objectPosition || 'center 25%',
              }}
            />
          </div>

          <div className="dish-modal-content-col">
            <div className="eyebrow-text mb-1">{chef.role}</div>
            <h2 className="dish-modal-title">{chef.name}</h2>
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge" style={{ background: 'var(--color-gold-light)', color: 'var(--color-emerald-deep)', fontWeight: 600 }}>
                {chef.experience}
              </span>
              <div className="d-flex align-items-center ms-2 text-warning">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#e5a93b" color="#e5a93b" />
                ))}
                <span className="text-muted ms-1" style={{ fontSize: '0.8rem' }}>({chef.rating})</span>
              </div>
            </div>

            <p className="dish-modal-description mb-3">{chef.bio}</p>

            <div className="p-3 mb-3" style={{ background: 'var(--color-cream-bg)', borderRadius: '12px', border: '1px solid #ebd9c2' }}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <Utensils size={16} color="var(--color-gold)" />
                <strong style={{ fontSize: '0.85rem', color: 'var(--color-emerald-deep)' }}>
                  Signature Masterpiece:
                </strong>
              </div>
              <div style={{ fontSize: '0.9rem', color: '#405247' }}>
                {chef.signatureDish}
              </div>
            </div>

            {chef.awards.length > 0 && (
              <div>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <Award size={16} color="var(--color-gold)" />
                  <strong style={{ fontSize: '0.85rem', color: 'var(--color-emerald-deep)' }}>
                    Accolades & Honors:
                  </strong>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {chef.awards.map((award, i) => (
                    <span
                      key={i}
                      className="badge rounded-pill"
                      style={{ background: 'rgba(197, 160, 89, 0.15)', color: 'var(--color-emerald-deep)', border: '1px solid rgba(197, 160, 89, 0.3)', padding: '6px 12px', fontSize: '0.78rem' }}
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
