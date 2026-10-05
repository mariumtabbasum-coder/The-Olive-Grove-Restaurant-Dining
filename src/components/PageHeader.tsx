import React from 'react';
import { BotanicalLeaf } from './BotanicalLeaf';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  bgImage: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  bgImage,
  children,
}) => {
  return (
    <section className="page-hero-banner">
      <img
        src={bgImage}
        alt=""
        className="page-hero-bg-img"
        fetchPriority="high"
        decoding="async"
        aria-hidden="true"
      />
      {/* Dark Emerald Gradient Overlay */}
      <div className="page-hero-overlay" />

      {/* Decorative Gold Leaf in Top-Left Corner */}
      <div className="page-hero-leaf-left">
        <BotanicalLeaf color="#d4af37" />
      </div>

      {/* Decorative Gold Leaf in Top-Right Corner */}
      <div className="page-hero-leaf-right">
        <BotanicalLeaf color="#d4af37" />
      </div>

      {/* Center Content Matching Reference Image Exactly */}
      <div className="page-hero-content">
        <span className="eyebrow-text">{eyebrow}</span>
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-desc">{description}</p>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </section>
  );
};
