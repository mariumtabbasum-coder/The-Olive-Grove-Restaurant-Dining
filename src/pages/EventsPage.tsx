import React from 'react';
import { Link } from 'react-router-dom';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { GlassWater, Users, Calendar, ArrowRight, Sparkles, CheckCircle2, Music, Wine, Gift, Heart, Briefcase, Utensils } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const eventTypes = [
    {
      title: 'Private Dining',
      subtitle: '8 to 24 Guests',
      desc: 'Secluded dining chambers with custom candlelight ambiance, private waitstaff, and bespoke tasting menus crafted exclusively for your party.',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
      features: ['Dedicated private sommelier', 'Customized 5-course degustation', 'Private outdoor garden terrace access'],
      buttonText: 'Inquire Private Dining',
      buttonLink: '/reservation',
    },
    {
      title: 'Birthday Celebrations',
      subtitle: '10 to 45 Guests',
      desc: 'Celebrate milestones with customized festive dessert platters, signature cocktail punchbowls, and a dedicated banquet table adorned with floral centerpieces.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
      features: ['Personalized artisan birthday cake', 'Family-style sharing feasts', 'Custom festive cocktail pairing'],
      buttonText: 'Reserve Birthday Party',
      buttonLink: '/reservation',
    },
    {
      title: 'Anniversary Dinners',
      subtitle: '2 to 12 Guests',
      desc: 'An intimate romantic sanctuary surrounded by olive branches, featuring vintage champagne toasts, rose petal decor, and a candlelit chef degustation.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      features: ['Complimentary vintage prosecco toast', 'Prime romantic table placement', "Chef's handwritten keepsake menu"],
      buttonText: 'Book Anniversary Table',
      buttonLink: '/reservation',
    },
    {
      title: 'Corporate Dinners',
      subtitle: '15 to 60 Guests',
      desc: 'Seamless executive dining equipped with high-speed AV presentation capability, fixed-price tasting menus, and discreet white-glove hospitality.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      features: ['Full AV, projector & microphone setup', 'Fixed-price executive business menus', 'Flexible corporate invoicing'],
      buttonText: 'Plan Corporate Event',
      buttonLink: '/contact',
    },
    {
      title: 'Family Gatherings',
      subtitle: '12 to 50 Guests',
      desc: 'Generous Mediterranean sharing feasts with artisan wood-fired roasts, hand-pulled pastas, and cozy seating arrangements perfect for reunions.',
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
      features: ['Large communal table arrangements', 'Kids artisanal menus & mocktails', 'Courtyard outdoor lounge access'],
      buttonText: 'Reserve Family Gathering',
      buttonLink: '/reservation',
    },
    {
      title: 'Live Music & Wine Tasting Evenings',
      subtitle: 'Open to All Guests',
      desc: 'Bi-weekly acoustic jazz and classical Spanish guitar performances paired with guided uncorking flights led by Master Sommelier Elena Rostova.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      features: ['Flight of 5 rare vintage reserves', 'Artisanal cheese & charcuterie board', 'Live acoustic jazz & guitar sessions'],
      buttonText: 'Reserve Wine Tasting Table',
      buttonLink: '/reservation',
    },
  ];

  return (
    <main className="section-cream pb-5">
      {/* Elevated Header Banner with Background Image & Dark Overlay */}
      <section
        className="page-hero-banner"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80')`,
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
          <span className="eyebrow-text">Exclusive Occasions</span>
          <h1 className="page-hero-title">Private Dining & Events</h1>
          <p className="page-hero-desc">
            Celebrate Life’s Greatest Milestones with bespoke multi-course menus, dedicated sommelier cellar pairings, and timeless Mediterranean elegance.
          </p>
        </div>
      </section>

      {/* Events Grid with All 6 Cards */}
      <div className="content-container pt-5">
        <div className="text-center mb-5">
          <span className="eyebrow-text">Unforgettable Celebrations</span>
          <h2 className="display-heading" style={{ fontSize: '2.4rem', color: 'var(--color-emerald-deep)' }}>
            Curated Experiences for Every Gathering
          </h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
            From candlelit anniversary dinners to executive corporate galas, our dedicated banquet coordinators and culinary brigade tailor every detail to perfection.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {eventTypes.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="event-card">
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  />
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase' }}>
                    {item.subtitle}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '1.4rem', margin: '4px 0 10px 0' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '18px' }}>
                    {item.desc}
                  </p>
                  <div style={{ marginTop: 'auto' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ fontSize: '0.84rem', color: '#405247', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                          <CheckCircle2 size={15} color="var(--color-gold)" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={item.buttonLink} className="btn-primary-gold w-100 justify-content-center">
                      <span>{item.buttonText}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sommelier & Private Wine Tasting Banner */}
        <div
          style={{
            background: 'var(--color-emerald-deep)',
            borderRadius: '24px',
            padding: '45px 35px',
            color: '#ffffff',
            border: '1px solid var(--color-gold-border)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', opacity: 0.15, pointerEvents: 'none' }}>
            <BotanicalLeaf color="#d4af37" />
          </div>

          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="eyebrow-text" style={{ color: 'var(--color-gold-bright)' }}>
                Bespoke Sommelier Consultations
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '10px' }}>
                Need a Custom Event Package or Full Venue Buyout?
              </h3>
              <p style={{ color: '#c4d7cd', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
                Our event directors will tailor every detail: from customized printed menus, personalized floral arrangements, wine pairings from our subterranean cellar, to live string quartets.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end text-start">
              <Link to="/contact" className="btn-primary-gold">
                <span>Contact Event Director</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
