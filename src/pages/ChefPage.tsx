import React, { useState } from 'react';
import { CHEFS } from '../data/chefs';
import { Chef } from '../types';
import { ChefModal } from '../components/ChefModal';
import { BotanicalLeaf, ActiveLeafOrnament } from '../components/BotanicalLeaf';
import { Star, Sparkles, ArrowRight, Quote } from 'lucide-react';

export const ChefPage: React.FC = () => {
  const [selectedChef, setSelectedChef] = useState<Chef | null>(null);

  return (
    <main className="section-cream pb-5">
      {/* Elevated Header Banner with Background Image & Dark Overlay */}
      <section className="page-hero-banner">
        <img
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1100&q=65"
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
          <span className="eyebrow-text">Culinary Masters</span>
          <h1 className="page-hero-title">Meet Our Chefs</h1>
          <p className="page-hero-desc">
            Passionate Chefs, Exceptional Cuisine. Driven by meticulous technique, regional authenticity, and respect for natural ingredients.
          </p>
        </div>
      </section>

      {/* Chefs Grid */}
      <div className="content-container pt-5">
        <div className="row g-4 justify-content-center mb-5">
          {CHEFS.map((chef) => (
            <div key={chef.id} className="col-lg-4 col-md-6">
              <div
                className="chef-card"
                onClick={() => setSelectedChef(chef)}
                role="button"
                tabIndex={0}
                aria-label={`View bio of ${chef.name}`}
                style={{
                  background: '#ffffff',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: '1px solid #ebd9c2',
                  boxShadow: '0 10px 28px rgba(0, 0, 0, 0.06)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Chef Photo with Overlapping Experience Badge */}
                <div style={{ position: 'relative', width: '100%', height: '360px', overflow: 'hidden' }}>
                  <img
                    src={chef.image}
                    alt={chef.name}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: chef.objectPosition || 'center 25%' }}
                  />
                  {/* Experience Badge overlapping bottom-right corner of photo */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      right: '14px',
                      background: 'rgba(9, 32, 23, 0.92)',
                      border: '1px solid var(--color-gold)',
                      borderRadius: '9999px',
                      padding: '5px 14px',
                      color: 'var(--color-gold-bright)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                    }}
                  >
                    <Sparkles size={13} color="var(--color-gold)" />
                    <span>{chef.experience}</span>
                  </div>
                </div>

                {/* Chef Info Content */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--color-emerald-deep)',
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      margin: '0 0 4px 0',
                    }}
                  >
                    {chef.name}
                  </h4>

                  <div
                    style={{
                      color: 'var(--color-gold)',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      letterSpacing: '0.02em',
                      marginBottom: '10px',
                    }}
                  >
                    {chef.role}
                  </div>

                  {/* Star Rating with Numeric Rating in Parentheses */}
                  <div className="d-flex align-items-center mb-3">
                    <div className="d-flex align-items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="#e5a93b" color="#e5a93b" />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', marginLeft: '8px', fontWeight: 600 }}>
                      ({chef.rating.toFixed(1)})
                    </span>
                  </div>

                  {/* Short Specialty Line */}
                  <p
                    style={{
                      color: 'var(--color-text-muted)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      marginBottom: '18px',
                    }}
                  >
                    <strong style={{ color: 'var(--color-emerald-deep)', display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>
                      Specialty:
                    </strong>
                    {chef.specialty}
                  </p>

                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '12px',
                      borderTop: '1px solid #ebd9c2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: 'var(--color-emerald-deep)',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                    }}
                  >
                    <span>View Biography & Accolades</span>
                    <ArrowRight size={16} color="var(--color-gold)" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Polished Quote / Testimonial Section matching Reference 6 */}
        <section
          style={{
            position: 'relative',
            background: 'linear-gradient(145deg, #092017 0%, #0d2f22 100%)',
            borderRadius: '28px',
            border: '1.5px solid var(--color-gold)',
            padding: '65px 36px',
            margin: '40px 0 20px 0',
            textAlign: 'center',
            color: '#ffffff',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
          }}
        >
          {/* Decorative Corner Leaves */}
          <div style={{ position: 'absolute', top: 12, left: 12, width: '90px', height: '90px', opacity: 0.22, pointerEvents: 'none' }}>
            <BotanicalLeaf color="#d4af37" />
          </div>
          <div style={{ position: 'absolute', bottom: 12, right: 12, width: '90px', height: '90px', opacity: 0.22, transform: 'scaleX(-1) scaleY(-1)', pointerEvents: 'none' }}>
            <BotanicalLeaf color="#d4af37" />
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <Quote size={38} color="var(--color-gold)" style={{ opacity: 0.8, marginBottom: '16px' }} />
            
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
                fontStyle: 'italic',
                lineHeight: 1.45,
                color: '#f8f4ec',
                margin: '0 auto 20px auto',
              }}
            >
              “Great food is not just about taste, it's about emotion, memory, and bringing people together around one table.”
            </p>

            <div
              style={{
                fontSize: '0.95rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-gold-bright)',
                fontWeight: 700,
              }}
            >
              — Chef Daniel Carter, Head Chef & Culinary Director
            </div>
          </div>
        </section>
      </div>

      {/* Chef Details Modal */}
      <ChefModal chef={selectedChef} onClose={() => setSelectedChef(null)} />
    </main>
  );
};
