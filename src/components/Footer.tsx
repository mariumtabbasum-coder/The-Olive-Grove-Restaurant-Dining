import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone } from 'lucide-react';
import { BotanicalLeaf } from './BotanicalLeaf';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper">
      <div className="content-container">
        <div className="row g-4 justify-content-between">
          {/* Col 1: Brand & Bio */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-2">
              <svg
                style={{ width: '28px', height: '28px', color: 'var(--color-gold)', marginRight: '10px' }}
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M12 28 C18 20, 26 14, 34 8"
                  stroke="#d4af37"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M17 21 C12 16, 14 10, 20 14 C24 18, 21 23, 17 21 Z"
                  fill="#d4af37"
                />
                <circle cx="21" cy="24" r="2.8" fill="#d4af37" />
              </svg>
              <span className="footer-brand-title m-0">The Olive Grove</span>
            </div>
            <p className="footer-brand-desc">
              Good food, fresh ingredients, and a warm atmosphere. We look forward to welcoming you to an unforgettable dining experience.
            </p>
            <div className="footer-social-row">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                <Instagram size={17} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                <Facebook size={17} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Twitter">
                <Twitter size={17} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="YouTube">
                <Youtube size={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5 className="footer-col-title">Quick Links</h5>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/chefs">Our Chefs</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Explore */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5 className="footer-col-title">Explore</h5>
            <ul className="footer-links-list">
              <li><Link to="/reservation">Reservation</Link></li>
              <li><Link to="/cart">My Cart</Link></li>
              <li><Link to="/price-list">Price List</Link></li>
              <li><Link to="/support">Support & FAQ</Link></li>
              <li><Link to="/newsletter">Newsletter</Link></li>
              <li><Link to="/sitemap">Site Map</Link></li>
            </ul>
          </div>

          {/* Col 4: Opening Hours */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-col-title">Opening Hours</h5>
            <div className="footer-hours-row">
              <span>Mon – Thu</span>
              <span className="text-white">10:00 AM – 11:00 PM</span>
            </div>
            <div className="footer-hours-row">
              <span>Fri – Sat</span>
              <span className="text-white">10:00 AM – 12:00 AM</span>
            </div>
            <div className="footer-hours-row">
              <span>Sunday</span>
              <span className="text-white">10:00 AM – 10:00 PM</span>
            </div>
            <div className="mt-3 d-flex flex-column gap-2" style={{ fontSize: '0.86rem', color: '#d2ddd7' }}>
              <div className="d-flex align-items-center gap-2">
                <MapPin size={15} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <span>123 Green Valley Road, Olive District</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Phone size={15} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <span>+92 300 1234567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 The Olive Grove. All Rights Reserved.
          </div>
          <div className="d-flex align-items-center gap-2">
            <BotanicalLeaf style={{ width: '20px', height: '20px' }} color="#c5a059" />
            <span style={{ color: 'var(--color-gold-light)', fontStyle: 'italic', letterSpacing: '0.04em' }}>
              Fresh Food • Cozy Vibes • Great Moments
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
