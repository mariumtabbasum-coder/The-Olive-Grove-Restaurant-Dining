import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';
import { LightboxModal } from '../components/LightboxModal';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { Maximize2 } from 'lucide-react';

type GalleryFilter = 'All' | 'Food' | 'Interior' | 'Events';

export const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filters: GalleryFilter[] = ['All', 'Food', 'Interior', 'Events'];

  const filteredItems =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <main className="section-cream pb-5">
      {/* Elevated Header Banner with Background Image & Dark Overlay */}
      <section
        className="page-hero-banner"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=80')`,
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
          <span className="eyebrow-text">Visual Feast</span>
          <h1 className="page-hero-title">Our Gallery</h1>
          <p className="page-hero-desc">
            Moments, Flavors, Atmosphere. Glimpses into our culinary artistry, private banquet galas, and enchanting dining chambers.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <div className="content-container pt-5">
        {/* Working Filter Pills */}
        <div className="filter-pills-row">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-pill-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setActiveItem(item)}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${item.title}`}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-card-overlay">
                <Maximize2 size={28} color="var(--color-gold-bright)" style={{ marginBottom: '8px' }} />
                <h5 style={{ fontFamily: 'var(--font-serif)', margin: '0 0 4px 0', fontSize: '1.15rem' }}>
                  {item.title}
                </h5>
                <span style={{ fontSize: '0.8rem', color: '#c3d3cb' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Title Below Image */}
      <LightboxModal
        item={activeItem}
        items={filteredItems}
        onClose={() => setActiveItem(null)}
        onNavigate={(newItem) => setActiveItem(newItem)}
      />
    </main>
  );
};
