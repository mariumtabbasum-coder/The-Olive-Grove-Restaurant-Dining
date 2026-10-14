import React, { useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { DISHES } from '../data/dishes';
import { Dish } from '../types';
import { DishCard } from '../components/DishCard';
import { WaveDivider } from '../components/WaveDivider';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import {
  Sparkles,
  Award,
  Coffee,
  Heart,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

// Performance Optimization: Modals are lazily imported only when requested by user interaction
const DishModal = lazy(() => import('../components/DishModal').then((m) => ({ default: m.DishModal })));
const AmbienceModal = lazy(() => import('../components/AmbienceModal').then((m) => ({ default: m.AmbienceModal })));
const StoryModal = lazy(() => import('../components/StoryModal').then((m) => ({ default: m.StoryModal })));

export const HomePage: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [ambienceOpen, setAmbienceOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);

  // Filter 4 signature dishes
  const signatureDishes = DISHES.filter((d) => d.isSignature).slice(0, 4);

  return (
    <main>
      {/* 1. HERO SECTION — CLEAN FULL BACKGROUND WITH ELEGANT OVERLAY */}
      <section className="hero-home-wrapper">
        {/* Maximum LCP Optimization: Local compressed WebP, eager loading, high priority, explicit dimensions */}
        <img
          src="/assets/images/hero-home.webp"
          alt="The Olive Grove dining room and warm candlelight atmosphere"
          className="hero-home-bg-img"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          width="1280"
          height="800"
          aria-hidden="true"
        />
        <div className="hero-home-overlay" />

        {/* Decorative Gold Leaf in Top-Left Corner */}
        <div className="page-hero-leaf-left">
          <BotanicalLeaf color="#d4af37" />
        </div>

        {/* Decorative Gold Leaf in Top-Right Corner */}
        <div className="page-hero-leaf-right">
          <BotanicalLeaf color="#d4af37" />
        </div>

        <div className="content-container">
          <div className="hero-home-content">
            <span className="eyebrow-text">Welcome to The Olive Grove</span>
            <h1 className="hero-title-main">
              Good Food Brings People Together
            </h1>
            <p className="hero-desc-main">
              At The Olive Grove, we serve more than just food — we craft unforgettable experiences. Fresh organic ingredients, timeless Mediterranean recipes, and an inviting warm atmosphere.
            </p>
            <div className="hero-buttons-row">
              <Link to="/menu" className="btn-primary-gold">
                <span>Explore Our Menu</span>
                <ArrowRight size={17} />
              </Link>
              <button
                type="button"
                className="btn-outline-gold"
                onClick={() => setAmbienceOpen(true)}
              >
                <Sparkles size={16} color="var(--color-gold-bright)" />
                <span>View Our Ambience</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ROW OF 4 FEATURE BOXES */}
      <section className="features-section-bar" aria-labelledby="features-heading">
        <div className="content-container">
          {/* Accessibility: Semantic H2 establishes sequential hierarchy after H1 */}
          <h2 id="features-heading" className="visually-hidden">
            Why Choose The Olive Grove
          </h2>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6">
              <div className="feature-box-card">
                <div className="feature-icon-circle">
                  <Sparkles size={22} />
                </div>
                {/* Accessibility: H3 correctly nests under H2 */}
                <h3 className="feature-box-title">Fresh Ingredients Always</h3>
                <p className="feature-box-desc">
                  Sourced daily from certified organic farmers and local artisan growers.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="feature-box-card">
                <div className="feature-icon-circle">
                  <Award size={22} />
                </div>
                <h3 className="feature-box-title">Expert Chefs & Masters</h3>
                <p className="feature-box-desc">
                  Internationally trained culinary artisans passionate about authentic taste.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="feature-box-card">
                <div className="feature-icon-circle">
                  <Coffee size={22} />
                </div>
                <h3 className="feature-box-title">Cozy Ambience & Vibes</h3>
                <p className="feature-box-desc">
                  Intimate candlelit dining spaces, lush botanicals, and warm acoustic soul.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="feature-box-card">
                <div className="feature-icon-circle">
                  <Heart size={22} />
                </div>
                <h3 className="feature-box-title">Unforgettable Moments</h3>
                <p className="feature-box-desc">
                  Every celebration and quiet dinner is treated like family hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SIGNATURE DISHES */}
      <section className="section-cream py-5" aria-labelledby="signature-dishes-heading">
        <div className="content-container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <span className="eyebrow-text">Handcrafted Selections</span>
              <h2 id="signature-dishes-heading" className="display-heading" style={{ fontSize: '2.4rem', color: 'var(--color-emerald-deep)' }}>
                Our Signature Dishes
              </h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '520px', margin: 0 }}>
                A perfect blend of taste, tradition, and culinary creativity designed by Chef Daniel Carter.
              </p>
            </div>
            {/* Contrast Optimization: High contrast amber-gold (>= 4.5:1 WCAG AA) */}
            <Link
              to="/menu"
              className="mt-3 mt-md-0 fw-bold d-inline-flex align-items-center gap-1"
              style={{ color: 'var(--color-gold-text-dark)', textDecoration: 'none' }}
            >
              <span>View Full Menu</span>
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="row g-4">
            {signatureDishes.map((dish) => (
              <div key={dish.id} className="col-xl-3 col-lg-4 col-sm-6">
                <DishCard dish={dish} onSelect={(d) => setSelectedDish(d)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAVE CURVE TRANSITION: Cream to Dark Emerald Green */}
      <WaveDivider type="cream-to-green" />

      {/* 4. A PLACE FOR EVERY OCCASION */}
      <section className="occasion-section" aria-labelledby="occasion-heading">
        <div className="content-container">
          <div className="occasion-content-box">
            <span className="eyebrow-text">Memorable Atmosphere</span>
            <h2 id="occasion-heading" className="occasion-heading">A Place for Every Occasion</h2>
            <p className="occasion-desc">
              Whether it's a romantic dinner under candlelight, a joyous family celebration, or an executive luncheon, we make every second memorable with personalized attention.
            </p>
            <div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
              <Link to="/reservation" className="btn-primary-gold">
                <span>Book a Table</span>
                <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                className="btn-outline-gold"
                onClick={() => setStoryOpen(true)}
              >
                <BookOpen size={16} />
                <span>See Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE CURVE TRANSITION: Dark Emerald to Cream */}
      <WaveDivider type="green-to-cream" />

      {/* 5. STATS BAR */}
      <section className="stats-bar-wrapper" aria-labelledby="stats-heading">
        <div className="content-container">
          <h2 id="stats-heading" className="visually-hidden">
            Restaurant Milestones and Guest Satisfaction
          </h2>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-3 col-6">
              <div className="stat-item">
                <div className="stat-number">12+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="stat-item">
                <div className="stat-number">50k+</div>
                <div className="stat-label">Happy Guests</div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">Expert Chefs</div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="stat-item">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Average Guest Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAZY LOADED MODALS — Evaluated & rendered on-demand only */}
      {selectedDish && (
        <Suspense fallback={null}>
          <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
        </Suspense>
      )}

      {ambienceOpen && (
        <Suspense fallback={null}>
          <AmbienceModal
            isOpen={ambienceOpen}
            onClose={() => setAmbienceOpen(false)}
          />
        </Suspense>
      )}

      {storyOpen && (
        <Suspense fallback={null}>
          <StoryModal isOpen={storyOpen} onClose={() => setStoryOpen(false)} />
        </Suspense>
      )}
    </main>
  );
};
