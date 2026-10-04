import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollReveal } from './components/ScrollReveal';
import { ToastAlert } from './components/ToastAlert';

import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ChefPage } from './pages/ChefPage';
import { EventsPage } from './pages/EventsPage';
import { PriceListPage } from './pages/PriceListPage';
import { ReservationPage } from './pages/ReservationPage';
import { ContactPage } from './pages/ContactPage';
import { SupportPage } from './pages/SupportPage';
import { NewsletterPage } from './pages/NewsletterPage';
import { SitemapPage } from './pages/SitemapPage';
import { CartPage } from './pages/CartPage';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollReveal />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* Shared Global Navbar (Pixel-close to Reference 2) */}
          <Navbar />

          {/* Main Route Content */}
          <div style={{ flex: '1 0 auto' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/chefs" element={<ChefPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/price-list" element={<PriceListPage />} />
              <Route path="/reservation" element={<ReservationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/newsletter" element={<NewsletterPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          {/* Shared Global Footer (Reference 14) */}
          <Footer />

          {/* Live Notification Popups */}
          <ToastAlert />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
