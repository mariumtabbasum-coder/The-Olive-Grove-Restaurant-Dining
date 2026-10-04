import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BotanicalLeaf } from './BotanicalLeaf';

interface AmbienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AmbiencePhoto {
  url: string;
  title: string;
  tag: string;
  desc: string;
}

const AMBIENCE_PHOTOS: AmbiencePhoto[] = [
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
    title: 'The Main Dining Sanctuary',
    tag: 'Interior Ambience',
    desc: 'Warm candlelit dining spaces with reclaimed rustic timber, handcrafted wrought iron chandeliers, and intimate seating.',
  },
  {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
    title: 'The Open Hearth Kitchen',
    tag: 'Culinary Craft',
    desc: 'Watch our brigade of culinary artisans grill over aged olive wood and hand-roll fresh pastas daily.',
  },
  {
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=85',
    title: 'The Private Tasting Chamber',
    tag: 'Private Dining',
    desc: 'An exclusive alcove for celebrations, family reunions, and executive gatherings with bespoke 7-course tastings.',
  },
  {
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=85',
    title: 'The Subterranean Wine Cellar',
    tag: 'Vintage Terroir',
    desc: 'Over 400 carefully curated labels from Piedmont, Rioja, Tuscany, and Aegean coastal vineyards.',
  },
  {
    url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1400&q=85',
    title: 'Artisanal Hand-Crafted Pasta',
    tag: 'Signature Plates',
    desc: 'Fettuccine with wild forest mushrooms, Parmigiano-Reggiano, and infused black summer truffle emulsion.',
  },
  {
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85',
    title: 'The Courtyard Garden Patio',
    tag: 'Al Fresco Dining',
    desc: 'Breathe the fragrant evening breeze under century-old olive trees and ambient fairy lights.',
  },
  {
    url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1400&q=85',
    title: 'Line-Caught Atlantic Salmon',
    tag: 'Fresh Harvest',
    desc: 'Pan-seared salmon fillet over tender garden asparagus and golden herb butter.',
  },
  {
    url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1400&q=85',
    title: 'Belgian Molten Chocolate Finale',
    tag: 'Artisan Patisserie',
    desc: 'Velvety dark chocolate cake with warm molten ganache and Madagascar vanilla bean gelato.',
  },
];

export const AmbienceModal: React.FC<AmbienceModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? AMBIENCE_PHOTOS.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === AMBIENCE_PHOTOS.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, prevSlide, nextSlide]);

  if (!isOpen) return null;

  const currentPhoto = AMBIENCE_PHOTOS[currentIndex];

  return (
    <div className="modal-overlay-custom" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog-custom ambience-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="ambience-modal-header">
          <div className="ambience-header-leaf">
            <BotanicalLeaf color="#d4af37" />
          </div>

          <div className="d-flex align-items-center gap-2 min-w-0">
            <div className="ambience-header-icon">
              <ImageIcon size={16} />
            </div>
            <div className="min-w-0">
              <span className="eyebrow-text d-none d-sm-inline-block" style={{ color: 'var(--color-gold-bright)', marginBottom: 0, fontSize: '0.70rem' }}>
                Atmosphere & Gastronomy
              </span>
              <h3 className="ambience-header-title">
                Restaurant Ambience
              </h3>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2 flex-shrink-0">
            <span className="ambience-counter-badge">
              {currentIndex + 1} / {AMBIENCE_PHOTOS.length}
            </span>
            <button
              onClick={onClose}
              className="ambience-close-btn"
              aria-label="Close ambience gallery"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Main Stage with Responsive Height and Clean Edge Arrows */}
        <div className="ambience-stage-box">
          <img
            src={currentPhoto.url}
            alt={currentPhoto.title}
            className="ambience-stage-img"
          />

          {/* Previous Arrow Button cleanly on left edge */}
          <button
            onClick={prevSlide}
            aria-label="Previous photo"
            className="ambience-nav-arrow ambience-nav-prev"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next Arrow Button cleanly on right edge */}
          <button
            onClick={nextSlide}
            aria-label="Next photo"
            className="ambience-nav-arrow ambience-nav-next"
          >
            <ChevronRight size={22} />
          </button>

          {/* Category Tag Overlay */}
          <div className="ambience-tag-overlay">
            <Sparkles size={11} />
            <span>{currentPhoto.tag}</span>
          </div>
        </div>

        {/* Footer Info & Thumbnails */}
        <div className="ambience-modal-footer">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2">
            <div className="min-w-0">
              <h4 className="ambience-photo-title">
                {currentPhoto.title}
              </h4>
              <p className="ambience-photo-desc">
                {currentPhoto.desc}
              </p>
            </div>

            <Link
              to="/gallery"
              onClick={onClose}
              className="btn-outline-gold ambience-gallery-link"
            >
              <span>Full Gallery</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Thumbnail Strip */}
          <div className="ambience-thumb-strip">
            {AMBIENCE_PHOTOS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to photo ${idx + 1}: ${item.title}`}
                className={`ambience-thumb-btn ${idx === currentIndex ? 'active' : ''}`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
