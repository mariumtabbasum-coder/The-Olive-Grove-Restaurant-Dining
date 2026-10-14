import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollReveal } from './components/ScrollReveal';
import { ToastAlert } from './components/ToastAlert';

import { HomePage } from './pages/HomePage';

const MenuPage = lazy(() => import('./pages/MenuPage').then(m => ({ default: m.MenuPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const ChefPage = lazy(() => import('./pages/ChefPage').then(m => ({ default: m.ChefPage })));
const EventsPage = lazy(() => import('./pages/EventsPage').then(m => ({ default: m.EventsPage })));
const PriceListPage = lazy(() => import('./pages/PriceListPage').then(m => ({ default: m.PriceListPage })));
const ReservationPage = lazy(() => import('./pages/ReservationPage').then(m => ({ default: m.ReservationPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const SupportPage = lazy(() => import('./pages/SupportPage').then(m => ({ default: m.SupportPage })));
const NewsletterPage = lazy(() => import('./pages/NewsletterPage').then(m => ({ default: m.NewsletterPage })));
const SitemapPage = lazy(() => import('./pages/SitemapPage').then(m => ({ default: m.SitemapPage })));
const CartPage = lazy(() => import('./pages/CartPage').then(m => ({ default: m.CartPage })));

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
            <Suspense fallback={<div className="page-route-fallback-loader" />}>
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
            </Suspense>
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
