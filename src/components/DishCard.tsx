import React from 'react';
import { Dish } from '../types';
import { useCart } from '../context/CartContext';
import { Star, Plus, Eye } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
  onSelect: (dish: Dish) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, onSelect }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(dish, 1);
  };

  const handleCardClick = () => {
    onSelect(dish);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(dish);
    }
  };

  return (
    <div
      className="dish-card"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${dish.name}`}
    >
      <div className="dish-card-image-box">
        <img src={dish.image} alt={dish.name} loading="lazy" />
        
        {/* Quick Add "+" Button */}
        <button
          type="button"
          className="dish-quick-add-btn"
          onClick={handleQuickAdd}
          title={`Quick add ${dish.name} to cart`}
          aria-label={`Add ${dish.name} to cart`}
        >
          <Plus size={20} />
        </button>

        {/* Hover overlay hint */}
        <div className="dish-card-hover-hint">
          <Eye size={16} />
          <span>Click to View Details</span>
        </div>
      </div>

      <div className="dish-card-content">
        <span className="dish-card-category">{dish.category}</span>
        <h4 className="dish-card-title">{dish.name}</h4>
        
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="dish-card-price">${dish.price.toFixed(2)}</div>
          <div className="dish-card-stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={13}
                fill="#e5a93b"
                color="#e5a93b"
              />
            ))}
            <span className="dish-card-rating-num">({dish.rating.toFixed(1)})</span>
          </div>
        </div>

        {/* Action Button: View Details */}
        <button
          type="button"
          className="dish-card-details-btn"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(dish);
          }}
        >
          <Eye size={15} />
          <span>View Details</span>
        </button>
      </div>
    </div>
  );
};
