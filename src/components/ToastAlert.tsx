import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ToastAlert: React.FC = () => {
  const { toastMessage, dismissToast } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="floating-toast-alert" role="status" aria-live="polite">
      <CheckCircle2 size={18} color="var(--color-gold-bright)" />
      <span>{toastMessage}</span>
      <Link
        to="/cart"
        style={{
          color: 'var(--color-gold-bright)',
          fontWeight: 700,
          textDecoration: 'underline',
          fontSize: '0.86rem',
          marginLeft: '4px',
        }}
      >
        View Cart
      </Link>
      <button
        type="button"
        onClick={dismissToast}
        style={{
          background: 'none',
          border: 'none',
          color: '#c0d0c6',
          cursor: 'pointer',
          padding: '2px',
          marginLeft: '6px',
          display: 'flex',
          alignItems: 'center',
        }}
        aria-label="Dismiss message"
      >
        <X size={15} />
      </button>
    </div>
  );
};
