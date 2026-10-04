import React, { useState } from 'react';
import { DISHES } from '../data/dishes';
import { Dish } from '../types';
import { DishCard } from '../components/DishCard';
import { DishModal } from '../components/DishModal';
import { BotanicalLeaf } from '../components/BotanicalLeaf';

type CategoryFilter = 'All' | 'Starters' | 'Main Course' | 'Pasta' | 'Pizza' | 'Desserts' | 'Drinks';

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Starters',
    'Main Course',
    'Pasta',
    'Pizza',
    'Desserts',
    'Drinks',
  ];

  const filteredDishes =
    activeCategory === 'All'
      ? DISHES
      : DISHES.filter((d) => d.category === activeCategory);

  return (
    <main className="section-cream pb-5">
      {/* Elevated Header Banner with Background Image & Dark Overlay */}
      <section
        className="page-hero-banner"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80')`,
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
          <span className="eyebrow-text">Artisanal Gastronomy</span>
          <h1 className="page-hero-title">Our Menu</h1>
          <p className="page-hero-desc">
            Fresh Flavors. Timeless Recipes. Every plate is handcrafted to honor coastal Mediterranean culinary traditions with organic seasonal harvests.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="content-container pt-5">
        {/* Working Filter Pills */}
        <div className="filter-pills-row">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dish Grid */}
        <div className="row g-4">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="col-xl-3 col-lg-4 col-md-6">
              <DishCard dish={dish} onSelect={(d) => setSelectedDish(d)} />
            </div>
          ))}
        </div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-5">
            <h4 style={{ color: 'var(--color-emerald-deep)' }}>No items found</h4>
            <p className="text-muted">Please select another category.</p>
          </div>
        )}
      </div>

      {/* Shared Dish Details Popup */}
      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </main>
  );
};
