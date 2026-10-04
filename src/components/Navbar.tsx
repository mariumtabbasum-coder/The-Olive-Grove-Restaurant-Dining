import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Menu, X, ChevronDown, Tag, HelpCircle, Mail, Map } from 'lucide-react';
import { BotanicalLeaf, ActiveLeafOrnament } from './BotanicalLeaf';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { totalItemsCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const currentPath = location.pathname;

  const isMoreActive = [
    '/price-list',
    '/support',
    '/newsletter',
    '/sitemap',
  ].includes(currentPath);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cleanup hover timer on unmount
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [currentPath]);

  // Hover handlers for "More" dropdown on desktop
  const handleDropdownMouseEnter = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setMoreDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    hoverTimerRef.current = setTimeout(() => {
      setMoreDropdownOpen(false);
    }, 180);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Chefs', path: '/chefs' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className="navbar-wrapper-outer"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1050,
      }}
    >
      <div className="navbar-pill-container">
        {/* Subtle decorative gold leaf in left corner */}
        <div className="nav-botanical-left">
          <BotanicalLeaf color="#d4af37" />
        </div>

        {/* Subtle decorative gold leaf in right corner */}
        <div className="nav-botanical-right">
          <BotanicalLeaf color="#d4af37" />
        </div>

        {/* LEFT: Brand Logo & Wordmark */}
        <Link to="/" className="nav-brand-section" onClick={() => setMobileMenuOpen(false)}>
          {/* Olive branch logo symbol */}
          <svg
            className="nav-brand-icon"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
            <path
              d="M24 16 C22 9, 27 5, 31 10 C34 14, 30 18, 24 16 Z"
              fill="#d4af37"
            />
            <circle cx="21" cy="24" r="2.8" fill="#d4af37" />
            <circle cx="28" cy="18" r="2.4" fill="#d4af37" />
          </svg>

          <div className="nav-brand-text">
            <span className="nav-brand-title">THE OLIVE GROVE</span>
            <span className="nav-brand-subtitle">RESTAURANT & DINING</span>
          </div>
        </Link>

        {/* Thin vertical divider line */}
        <div className="nav-vertical-divider d-none d-lg-block" />

        {/* CENTER: Navigation Links (Desktop Only) */}
        <nav className="nav-links-center d-none d-lg-flex">
          {navLinks.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
              >
                <span>{item.name}</span>
                {isActive && <ActiveLeafOrnament />}
              </Link>
            );
          })}

          {/* "More" Dropdown for secondary pages with hover support */}
          <div
            className="nav-dropdown-wrapper"
            ref={dropdownRef}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button
              type="button"
              className={`nav-dropdown-btn ${isMoreActive ? 'active' : ''}`}
              onClick={() => setMoreDropdownOpen((prev) => !prev)}
              aria-expanded={moreDropdownOpen}
              aria-haspopup="true"
            >
              <span>More</span>
              <ChevronDown size={14} />
            </button>
            {isMoreActive && <ActiveLeafOrnament />}

            <div className={`nav-dropdown-menu ${moreDropdownOpen ? 'show' : ''}`}>
              <Link
                to="/price-list"
                className={`nav-dropdown-link ${currentPath === '/price-list' ? 'active' : ''}`}
                onClick={() => setMoreDropdownOpen(false)}
              >
                <Tag size={16} className="nav-dropdown-icon" />
                <span>Price List</span>
              </Link>
              <Link
                to="/support"
                className={`nav-dropdown-link ${currentPath === '/support' ? 'active' : ''}`}
                onClick={() => setMoreDropdownOpen(false)}
              >
                <HelpCircle size={16} className="nav-dropdown-icon" />
                <span>Support & FAQ</span>
              </Link>
              <Link
                to="/newsletter"
                className={`nav-dropdown-link ${currentPath === '/newsletter' ? 'active' : ''}`}
                onClick={() => setMoreDropdownOpen(false)}
              >
                <Mail size={16} className="nav-dropdown-icon" />
                <span>Newsletter</span>
              </Link>
              <Link
                to="/sitemap"
                className={`nav-dropdown-link ${currentPath === '/sitemap' ? 'active' : ''}`}
                onClick={() => setMoreDropdownOpen(false)}
              >
                <Map size={16} className="nav-dropdown-icon" />
                <span>Sitemap</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* RIGHT: Cart and Reserve Buttons (Desktop Only) */}
        <div className="nav-actions-right d-none d-lg-flex">
          {/* Outlined Pill Button: Cart with live item count */}
          <Link to="/cart" className="nav-cart-btn" title="View Cart">
            <ShoppingBag size={17} />
            <span>Cart</span>
            {totalItemsCount > 0 && (
              <span className="nav-cart-badge">{totalItemsCount}</span>
            )}
          </Link>

          {/* Solid Gold Pill Button: Reserve a Table */}
          <Link to="/reservation" className="nav-reserve-btn">
            <span>Reserve a Table</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button (Mobile Only: <= 991px) */}
        <button
          type="button"
          className="mobile-nav-toggle d-lg-none"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation (Slide-down / drawer cleanly containing all links, Cart & Reserve) */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'show' : ''} d-lg-none`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-links-group">
            {navLinks.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`mobile-menu-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="mobile-active-dot" />}
                </Link>
              );
            })}
          </div>

          <div className="mobile-menu-divider" />

          <div className="mobile-menu-more-section">
            <span className="mobile-menu-section-label">More Resources</span>
            <div className="mobile-menu-more-grid">
              <Link
                to="/price-list"
                className={`mobile-menu-sublink ${currentPath === '/price-list' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Tag size={15} />
                <span>Price List</span>
              </Link>
              <Link
                to="/support"
                className={`mobile-menu-sublink ${currentPath === '/support' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <HelpCircle size={15} />
                <span>Support & FAQ</span>
              </Link>
              <Link
                to="/newsletter"
                className={`mobile-menu-sublink ${currentPath === '/newsletter' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Mail size={15} />
                <span>Newsletter</span>
              </Link>
              <Link
                to="/sitemap"
                className={`mobile-menu-sublink ${currentPath === '/sitemap' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Map size={15} />
                <span>Sitemap</span>
              </Link>
            </div>
          </div>

          <div className="mobile-menu-divider" />

          {/* Mobile Actions: Cart & Reserve a Table */}
          <div className="mobile-menu-actions">
            <Link
              to="/cart"
              className="mobile-cart-action-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="d-flex align-items-center gap-2">
                <ShoppingBag size={18} />
                <span>Your Dining Cart</span>
              </div>
              <span className="nav-cart-badge">{totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'}</span>
            </Link>

            <Link
              to="/reservation"
              className="btn-primary-gold w-100 justify-content-center py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Reserve a Table</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
