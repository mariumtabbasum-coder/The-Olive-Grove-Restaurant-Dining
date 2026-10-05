import React from 'react';
import { Link } from 'react-router-dom';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { Target, Compass, Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Leaf } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <main className="section-cream pb-5">
      {/* Elevated Header Banner with Background Image & Dark Overlay */}
      <section className="page-hero-banner">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=65"
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
          <span className="eyebrow-text">Heritage & Passion</span>
          <h1 className="page-hero-title">Our Story</h1>
          <p className="page-hero-desc">
            A Journey of Flavor, Passion and People. From an intimate countryside olive grove to an acclaimed culinary destination for epicures.
          </p>
        </div>
      </section>

      {/* Our Story Narrative Section */}
      <section className="py-5">
        <div className="content-container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="eyebrow-text">Where It All Began</span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  color: 'var(--color-emerald-deep)',
                  marginBottom: '20px',
                }}
              >
                Rooted in Tradition, Inspired by Modern Elegance
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                The Olive Grove was founded with a simple belief — that great food brings people together. What started as an intimate dream fueled by a passion for slow Mediterranean cooking has now grown into a beloved culinary landmark, celebrated for its farm-fresh ingredients, creative menu, and heartwarming hospitality.
              </p>
              <p style={{ lineHeight: 1.7, color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                Under the visionary guidance of Chef Daniel Carter and his brigade of culinary artisans, each dish pays homage to centuries-old coastal traditions while infusing refined modern techniques. From our hand-rolled pasta to our estate-pressed olive oil, authenticity is our guiding compass.
              </p>
              <div className="d-flex align-items-center gap-3">
                <Link to="/menu" className="btn-primary-gold">
                  <span>Explore Menu</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/chefs" className="btn-outline-gold" style={{ color: 'var(--color-emerald-deep)', borderColor: 'var(--color-emerald-deep)' }}>
                  <span>Meet The Chefs</span>
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    borderRadius: '28px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.12)',
                    border: '3px solid #eedec9',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=70"
                    alt="Chef Daniel Carter crafting dishes"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                  />
                </div>
                {/* Floating Quote Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '20px',
                    background: 'var(--color-emerald-deep)',
                    color: '#ffffff',
                    padding: '16px 22px',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    border: '1px solid var(--color-gold)',
                    maxWidth: '240px',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.05rem', margin: 0, color: 'var(--color-gold-light)' }}>
                    "Good Food, Good Mood"
                  </p>
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: 600 }}>
                    Chef Daniel Carter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="stats-bar-wrapper my-4">
        <div className="content-container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-3 col-6">
              <div className="stat-item">
                <div className="stat-number">12+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="stat-item">
                <div className="stat-number">50k+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">Signature Dishes</div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="stat-item">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Avg Guest Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values Cards */}
      <section className="py-5">
        <div className="content-container">
          <div className="text-center mb-5">
            <span className="eyebrow-text">Our Pillars</span>
            <h2 className="display-heading" style={{ fontSize: '2.4rem', color: 'var(--color-emerald-deep)' }}>
              Mission, Vision & Core Values
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="value-card">
                <div className="feature-icon-circle mb-3">
                  <Target size={24} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '1.4rem' }}>
                  Our Mission
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  To craft authentic, memorable culinary moments using locally sourced, honest ingredients prepared with reverence and passion.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="value-card">
                <div className="feature-icon-circle mb-3">
                  <Compass size={24} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '1.4rem' }}>
                  Our Vision
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  To be the most cherished gathering place where families celebrate, conversations flourish, and gastronomy creates lasting joy.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="value-card">
                <div className="feature-icon-circle mb-3">
                  <Sparkles size={24} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '1.4rem' }}>
                  Our Values
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Zero compromises on fresh ingredients, sustainable eco-conscious practices, genuine culinary curiosity, and welcoming hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-5" style={{ background: '#f5efe4' }}>
        <div className="content-container">
          <div className="text-center mb-5">
            <span className="eyebrow-text">Milestones</span>
            <h2 className="display-heading" style={{ fontSize: '2.4rem', color: 'var(--color-emerald-deep)' }}>
              A Decade of Taste & Passion
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '500px', margin: '0 auto' }}>
              From a modest countryside bistro to an award-winning dining sanctuary.
            </p>
          </div>

          <div className="timeline-track">
            <div className="timeline-node left">
              <div className="timeline-dot" />
              <div className="timeline-year">2014</div>
              <div className="timeline-title">The Humble Beginning</div>
              <p className="timeline-desc">
                Chef Daniel opens a 10-table bistro with an open hearth and a garden of olive trees.
              </p>
            </div>

            <div className="timeline-node right">
              <div className="timeline-dot" />
              <div className="timeline-year">2017</div>
              <div className="timeline-title">First Culinary Recognition</div>
              <p className="timeline-desc">
                Awarded "Best Regional Mediterranean Restaurant" by the National Dining Guild.
              </p>
            </div>

            <div className="timeline-node left">
              <div className="timeline-dot" />
              <div className="timeline-year">2020</div>
              <div className="timeline-title">Farm-to-Table Revolution</div>
              <p className="timeline-desc">
                Partnered with 14 local organic cooperatives to ensure 100% seasonal and sustainable sourcing.
              </p>
            </div>

            <div className="timeline-node right">
              <div className="timeline-dot" />
              <div className="timeline-year">2023</div>
              <div className="timeline-title">Grand Expansion & Cellar</div>
              <p className="timeline-desc">
                Opened our subterranean wine cellar with over 400 European vintages and private dining booths.
              </p>
            </div>

            <div className="timeline-node left">
              <div className="timeline-dot" />
              <div className="timeline-year">2026</div>
              <div className="timeline-title">Michelin Recommended</div>
              <p className="timeline-desc">
                Honored with a Michelin Guide recommendation for creative Mediterranean excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section matching Chefs Page Card Treatment */}
      <section className="py-5 text-center">
        <div className="content-container">
          <div
            style={{
              position: 'relative',
              background: 'linear-gradient(145deg, #092017 0%, #0d2f22 100%)',
              borderRadius: '28px',
              border: '1.5px solid var(--color-gold)',
              padding: '65px 36px',
              margin: '20px 0',
              color: '#ffffff',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
              overflow: 'hidden',
            }}
          >
            {/* Decorative Corner Leaves matching Chefs Page Reference */}
            <div style={{ position: 'absolute', top: 12, left: 12, width: '90px', height: '90px', opacity: 0.22, pointerEvents: 'none' }}>
              <BotanicalLeaf color="#d4af37" />
            </div>
            <div style={{ position: 'absolute', bottom: 12, right: 12, width: '90px', height: '90px', opacity: 0.22, transform: 'scaleX(-1) scaleY(-1)', pointerEvents: 'none' }}>
              <BotanicalLeaf color="#d4af37" />
            </div>

            <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
              <span className="eyebrow-text" style={{ color: 'var(--color-gold-bright)' }}>Join Us</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.8vw, 2.6rem)', color: '#ffffff', marginBottom: '14px' }}>
                Be Part of Our Next Chapter
              </h2>
              <p style={{ color: '#bed1c7', maxWidth: '520px', margin: '0 auto 28px auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
                We invite you to savor our passion, share an intimate table, and create unforgettable memories with us.
              </p>
              <Link to="/reservation" className="btn-primary-gold">
                <span>Reserve Your Table Today</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
