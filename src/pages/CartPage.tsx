import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Utensils, CheckCircle2 } from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    tax,
    total,
    totalItemsCount,
  } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 4000);
  };

  return (
    <main className="section-cream pb-5">
      {/* Elevated Header Banner with Background Image & Dark Overlay */}
      <section
        className="page-hero-banner"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')`,
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
          <span className="eyebrow-text">Your Selections</span>
          <h1 className="page-hero-title">Dining Cart</h1>
          <p className="page-hero-desc">
            Review your selected gourmet dishes for takeaway dining or pre-ordered reservation service.
          </p>
        </div>
      </section>

      {/* Main Cart Content */}
      <div className="content-container pt-5">
        {orderPlaced ? (
          <div
            style={{
              maxWidth: '650px',
              margin: '40px auto',
              background: '#ffffff',
              borderRadius: '24px',
              padding: '48px 36px',
              textAlign: 'center',
              border: '1px solid #ebd9c2',
              boxShadow: '0 12px 36px rgba(0,0,0,0.06)',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--color-gold-light)',
                color: 'var(--color-emerald-deep)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <CheckCircle2 size={36} color="var(--color-gold)" />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '2.2rem', marginBottom: '12px' }}>
              Order Received!
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px' }}>
              Your order ticket has been forwarded to our kitchen. We've dispatched an electronic confirmation receipt with dining preparation details.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/reservation" className="btn-primary-gold">
                <span>Reserve Table for Order</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/menu" className="btn-outline-gold" style={{ color: 'var(--color-emerald-deep)', borderColor: 'var(--color-emerald-deep)' }}>
                <span>Back to Menu</span>
              </Link>
            </div>
          </div>
        ) : cart.length === 0 ? (
          /* Empty Cart State */
          <div
            style={{
              maxWidth: '550px',
              margin: '40px auto',
              background: '#ffffff',
              borderRadius: '24px',
              padding: '48px 32px',
              textAlign: 'center',
              border: '1px solid #ebd9c2',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            }}
          >
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'var(--color-gold-light)',
                color: 'var(--color-emerald-deep)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <ShoppingBag size={32} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '1.8rem', marginBottom: '10px' }}>
              Your cart is currently empty
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '28px' }}>
              Explore our chef's hand-crafted menu and discover delicious appetizers, pastas, pizzas, and desserts.
            </p>
            <Link to="/menu" className="btn-primary-gold" style={{ margin: '0 auto' }}>
              <span>Explore Our Menu</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        ) : (
          /* Populated Cart Items + Summary */
          <div className="row g-5">
            {/* Left Col: Items List */}
            <div className="col-lg-8">
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '30px',
                  border: '1px solid #ebd9c2',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
                  <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '1.6rem', margin: 0 }}>
                    Selected Dishes ({totalItemsCount})
                  </h3>
                  <button
                    type="button"
                    onClick={clearCart}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#b85b40',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <Trash2 size={15} />
                    <span>Clear Cart</span>
                  </button>
                </div>

                <div className="d-flex flex-column gap-3">
                  {cart.map((item) => (
                    <div
                      key={item.dish.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px',
                        borderRadius: '16px',
                        background: 'var(--color-cream-bg)',
                        border: '1px solid #ebd9c2',
                        flexWrap: 'wrap',
                        gap: '16px',
                      }}
                    >
                      {/* Image + Info */}
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={item.dish.image}
                          alt={item.dish.name}
                          style={{
                            width: '74px',
                            height: '74px',
                            borderRadius: '14px',
                            objectFit: 'cover',
                            border: '1px solid #ebd9c2',
                          }}
                        />
                        <div>
                          <span style={{ fontSize: '0.78rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase' }}>
                            {item.dish.category}
                          </span>
                          <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '1.2rem', margin: '2px 0 4px 0' }}>
                            {item.dish.name}
                          </h4>
                          <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                            ${item.dish.price.toFixed(2)} each
                          </span>
                        </div>
                      </div>

                      {/* Stepper + Total + Remove */}
                      <div className="d-flex align-items-center gap-3 ms-auto">
                        <div className="quantity-stepper">
                          <button
                            type="button"
                            className="stepper-btn"
                            onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="stepper-val">{item.quantity}</span>
                          <button
                            type="button"
                            className="stepper-btn"
                            onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>

                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'var(--color-gold)',
                            minWidth: '70px',
                            textAlign: 'right',
                          }}
                        >
                          ${(item.dish.price * item.quantity).toFixed(2)}
                        </span>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.dish.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#a0aeb2',
                            cursor: 'pointer',
                            padding: '6px',
                            borderRadius: '50%',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#dc3545')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#a0aeb2')}
                          title="Remove item"
                          aria-label={`Remove ${item.dish.name}`}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
                  <Link
                    to="/menu"
                    style={{
                      color: 'var(--color-emerald-deep)',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span>← Continue Exploring Menu</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Col: Order Summary */}
            <div className="col-lg-4">
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '32px 28px',
                  border: '1px solid #ebd9c2',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-emerald-deep)', fontSize: '1.6rem', marginBottom: '20px' }}>
                  Order Summary
                </h3>

                <div className="d-flex justify-content-between mb-3 text-muted" style={{ fontSize: '0.94rem' }}>
                  <span>Subtotal ({totalItemsCount} items)</span>
                  <span className="text-dark fw-bold">${subtotal.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-3 text-muted" style={{ fontSize: '0.94rem' }}>
                  <span>Estimated Tax (8%)</span>
                  <span className="text-dark fw-bold">${tax.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-3 text-muted" style={{ fontSize: '0.94rem' }}>
                  <span>Dining Service / Packaging</span>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>Complimentary</span>
                </div>

                <div
                  style={{
                    height: '1px',
                    background: '#ebd9c2',
                    margin: '18px 0',
                  }}
                />

                <div className="d-flex justify-content-between mb-4 align-items-center">
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-emerald-deep)' }}>Total</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                    }}
                  >
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="d-flex flex-column gap-3">
                  <button
                    type="button"
                    className="btn-primary-gold w-100 justify-content-center py-3"
                    onClick={handleCheckout}
                  >
                    <span>Place Takeaway Order</span>
                    <ArrowRight size={17} />
                  </button>

                  <Link
                    to="/reservation"
                    className="btn-outline-gold w-100 justify-content-center py-2"
                    style={{
                      color: 'var(--color-emerald-deep)',
                      borderColor: 'var(--color-emerald-deep)',
                    }}
                  >
                    <Utensils size={15} />
                    <span>Proceed to Reservation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
