import React from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  return (
    <div className="modal-overlay-custom" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="lightbox-img-wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff' }}
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X size={20} />
        </button>

        {/* Previous and Next arrows */}
        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              style={{
                position: 'absolute',
                top: '45%',
                left: '16px',
                background: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              style={{
                position: 'absolute',
                top: '45%',
                right: '16px',
                background: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <img src={item.image} alt={item.title} />

        {/* Title shown BELOW the image as required by Section 5 */}
        <div className="lightbox-caption-box">
          <h4 className="lightbox-caption-title">{item.title}</h4>
          <p className="lightbox-caption-desc">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};
