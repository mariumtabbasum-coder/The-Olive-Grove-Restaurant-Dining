import React from 'react';
import { Link } from 'react-router-dom';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { Compass, BookOpen, Utensils, HelpCircle, ArrowRight } from 'lucide-react';

export const SitemapPage: React.FC = () => {
  const sections = [
    {
      title: 'Main Navigation',
      icon: <Compass size={20} color="var(--color-gold)" />,
      links: [
        { name: 'Home Page', path: '/', desc: 'Welcome, signatures & overview' },
        { name: 'Our Menu', path: '/menu', desc: 'Browse all appetizers, mains, pasta, pizza & desserts' },
        { name: 'About Us', path: '/about', desc: 'Our heritage, philosophy, mission & timeline' },
        { name: 'Photo Gallery', path: '/gallery', desc: 'Gourmet plates, interior rooms & celebration memories' },
      ],
    },
    {
      title: 'Dining & Culinary Team',
      icon: <Utensils size={20} color="var(--color-gold)" />,
      links: [
        { name: 'Meet Our Chefs', path: '/chefs', desc: 'Chef Daniel Carter, Chef Maria Lopez & culinary masters' },
        { name: 'Private Events', path: '/events', desc: 'Weddings, corporate dining & sommelier tastings' },
        { name: 'Menu Price List', path: '/price-list', desc: 'Itemized transparent pricing & downloadable menu' },
      ],
    },
    {
      title: 'Guest Services & Ordering',
      icon: <BookOpen size={20} color="var(--color-gold)" />,
      links: [
        { name: 'Table Reservation', path: '/reservation', desc: 'Book your dining table online with special requests' },
        { name: 'Your Cart', path: '/cart', desc: 'Review dishes, quantities & order checkout' },
        { name: 'Contact & Location', path: '/contact', desc: 'Address, hours, directions & direct message form' },
      ],
    },
    {
      title: 'Support & Community',
      icon: <HelpCircle size={20} color="var(--color-gold)" />,
      links: [
        { name: 'Support & FAQs', path: '/support', desc: 'Hours, parking, dietary menus & group dining policies' },
        { name: 'Epicurean Newsletter', path: '/newsletter', desc: 'Subscribe for invitations, discounts & wine events' },
        { name: 'Site Map', path: '/sitemap', desc: 'Structured index of all site directories and sections' },
      ],
    },
  ];

  return (
    <main className="section-cream pb-5">
      {/* Elevated Header Banner with Background Image & Dark Overlay */}
      <section
        className="page-hero-banner"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80')`,
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
          <span className="eyebrow-text">Directory Index</span>
          <h1 className="page-hero-title">Site Map</h1>
          <p className="page-hero-desc">
            Quick Access to All Sections. Explore pages, menus, reservations, and culinary resources across The Olive Grove.
          </p>
        </div>
      </section>

      {/* Grouped Columns Grid */}
      <div className="content-container pt-5">
        <div className="row g-4">
          {sections.map((sec, idx) => (
            <div key={idx} className="col-lg-6">
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '30px 26px',
                  border: '1px solid #ebd9c2',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                  height: '100%',
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                  {sec.icon}
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      color: 'var(--color-emerald-deep)',
                      margin: 0,
                    }}
                  >
                    {sec.title}
                  </h3>
                </div>

                <div className="d-flex flex-column gap-3">
                  {sec.links.map((link, lIdx) => (
                    <Link
                      key={lIdx}
                      to={link.path}
                      style={{
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        background: 'var(--color-cream-bg)',
                        border: '1px solid #ebd9c2',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-gold)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#ebd9c2';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div style={{ minWidth: 0, flex: 1, paddingRight: '8px' }}>
                        <strong style={{ color: 'var(--color-emerald-deep)', fontSize: '0.98rem', display: 'block' }}>
                          {link.name}
                        </strong>
                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
                          {link.desc}
                        </span>
                      </div>
                      <ArrowRight size={16} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
