import React, { useState } from 'react';
import { Dish } from '../types';
import { useCart } from '../context/CartContext';
import { Star, Clock, Users, X, ShoppingBag } from 'lucide-react';

interface DishModalProps {
  dish: Dish | null;
  onClose: () => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!dish) return null;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(dish, quantity);
    onClose();
  };

  const totalPrice = (dish.price * quantity).toFixed(2);

  return (
    <div className="modal-overlay-custom" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog-custom dish-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ width: '94%', maxWidth: '780px', margin: '0 auto', boxSizing: 'border-box' }}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="dish-modal-grid">
          {/* Left Column: Dish Image */}
          <div className="dish-modal-img-col">
            <img src={dish.image} alt={dish.name} loading="lazy" decoding="async" />
          </div>

          {/* Right Column: Dish Info */}
          <div className="dish-modal-content-col">
            <div className="eyebrow-text mb-1">{dish.category}</div>
            <h2 className="dish-modal-title">{dish.name}</h2>
            <div className="dish-modal-price">${dish.price.toFixed(2)}</div>

            {/* Stars & Reviews */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="d-flex align-items-center text-warning">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#e5a93b" color="#e5a93b" />
                ))}
              </div>
              <span className="fw-bold" style={{ fontSize: '0.88rem' }}>{dish.rating.toFixed(1)}</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                ({dish.reviewsCount} reviews)
              </span>
            </div>

            {/* Meta: Prep Time and Servings */}
            <div className="dish-modal-meta-row">
              <div className="dish-modal-meta-badge">
                <Clock size={16} color="var(--color-gold)" />
                <span>Prep: <strong>{dish.prepTime}</strong></span>
              </div>
              <div className="dish-modal-meta-badge">
                <Users size={16} color="var(--color-gold)" />
                <span>Serves: <strong>{dish.serves}</strong></span>
              </div>
              {dish.calories && (
                <div className="dish-modal-meta-badge">
                  <span>{dish.calories}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="dish-modal-description">{dish.description}</p>

            {/* Ingredients */}
            <div className="dish-modal-ingredients">
              <strong>Ingredients:</strong>
              {dish.ingredients}
            </div>

            {/* Action Row — Clean, Uncluttered & Fully Mobile Responsive */}
            <div className="dish-modal-actions-container">
              <div className="dish-modal-total-bar">
                <span className="dish-modal-total-label">Subtotal:</span>
                <span className="dish-modal-total-amount">${totalPrice}</span>
              </div>

              <div className="dish-modal-actions-row">
                <div className="quantity-stepper">
                  <button
                    type="button"
                    className="stepper-btn"
                    onClick={handleDecrement}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="stepper-val">{quantity}</span>
                  <button
                    type="button"
                    className="stepper-btn"
                    onClick={handleIncrement}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="btn-primary-gold dish-modal-add-cart-btn"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={17} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
