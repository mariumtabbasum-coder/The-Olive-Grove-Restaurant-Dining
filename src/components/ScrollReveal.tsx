import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollReveal: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    // Target elements for reveal animation without synchronous layout thrashing
    const rafId = requestAnimationFrame(() => {
      const targets = document.querySelectorAll(
        'section:not(.page-hero-banner):not(.hero-home-wrapper), .dish-card, .chef-card, .feature-box-card, .value-card, .faq-accordion-item, .price-list-category-card'
      );

      targets.forEach((el) => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};
