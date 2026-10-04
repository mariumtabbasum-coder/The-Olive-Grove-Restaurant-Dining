import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dish, CartItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (dish: Dish, quantity?: number) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  removeFromCart: (dishId: string) => void;
  clearCart: () => void;
  totalItemsCount: number;
  subtotal: number;
  tax: number;
  total: number;
  lastAddedDish: Dish | null;
  toastMessage: string | null;
  dismissToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'the_olive_grove_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // localStorage may fail or be restricted
    }
    return [
      // Preload 2 classic items so the cart has initial realistic flair if first time visited, or start empty
      // Let's check user requirement: cart should reflect live items added. Starting with 1 signature item gives immediate richness, but let's make it standard.
    ];
  });

  const [lastAddedDish, setLastAddedDish] = useState<Dish | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (dish: Dish, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.dish.id === dish.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [...prevCart, { dish, quantity }];
      }
    });

    setLastAddedDish(dish);
    setToastMessage(`Added ${quantity}x "${dish.name}" to your cart!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.dish.id === dishId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (dishId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.dish.id !== dishId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const dismissToast = () => {
    setToastMessage(null);
  };

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  const tax = Number((subtotal * 0.08).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItemsCount,
        subtotal,
        tax,
        total,
        lastAddedDish,
        toastMessage,
        dismissToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
