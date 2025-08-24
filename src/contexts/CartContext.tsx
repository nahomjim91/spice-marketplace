import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { products, type Product } from '@/data/products';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  customizations?: {
    gift_wrap?: string;
    message?: string;
    delivery_date?: string;
  };
  addedAt: Date;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  total: number;
  itemCount: number;
  shipping: number;
  tax: number;
  finalTotal: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity: number; customizations?: CartItem['customizations'] } }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'LOAD_CART'; payload: CartState };

const initialState: CartState = {
  items: [],
  isOpen: false,
  total: 0,
  itemCount: 0,
  shipping: 0,
  tax: 0,
  finalTotal: 0,
};

const calculateTotals = (items: CartItem[]): Pick<CartState, 'total' | 'itemCount' | 'shipping' | 'tax' | 'finalTotal'> => {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  // Calculate shipping (free over $75, premium shipping for luxury items)
  const hasLuxuryItems = items.some(item => item.product.price > 50);
  const shipping = subtotal > 75 ? 0 : hasLuxuryItems ? 15 : 10;
  
  // Calculate tax (8.5% standard rate)
  const tax = Math.round(subtotal * 0.085 * 100) / 100;
  
  const finalTotal = subtotal + shipping + tax;

  return {
    total: Math.round(subtotal * 100) / 100,
    itemCount,
    shipping,
    tax,
    finalTotal: Math.round(finalTotal * 100) / 100,
  };
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === action.payload.product.id
      );

      let newItems: CartItem[];
      
      if (existingItemIndex >= 0) {
        // Update existing item
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        // Add new item
        const newItem: CartItem = {
          id: `${action.payload.product.id}-${Date.now()}`,
          product: action.payload.product,
          quantity: action.payload.quantity,
          customizations: action.payload.customizations,
          addedAt: new Date(),
        };
        newItems = [...state.items, newItem];
      }

      const totals = calculateTotals(newItems);
      return { ...state, items: newItems, ...totals, isOpen: true };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload.id);
      const totals = calculateTotals(newItems);
      return { ...state, items: newItems, ...totals };
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);
      
      const totals = calculateTotals(newItems);
      return { ...state, items: newItems, ...totals };
    }

    case 'CLEAR_CART': {
      return { ...initialState };
    }

    case 'TOGGLE_CART': {
      return { ...state, isOpen: !state.isOpen };
    }

    case 'OPEN_CART': {
      return { ...state, isOpen: true };
    }

    case 'CLOSE_CART': {
      return { ...state, isOpen: false };
    }

    case 'LOAD_CART': {
      return action.payload;
    }

    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  addItem: (product: Product, quantity?: number, customizations?: CartItem['customizations']) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('spice-marketplace-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Failed to load cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('spice-marketplace-cart', JSON.stringify(state));
  }, [state]);

  const addItem = (product: Product, quantity = 1, customizations?: CartItem['customizations']) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity, customizations } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const openCart = () => {
    dispatch({ type: 'OPEN_CART' });
  };

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// Helper functions
export const getCartItemTotal = (item: CartItem): number => {
  return Math.round(item.product.price * item.quantity * 100) / 100;
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const getEstimatedDelivery = (): string => {
  const today = new Date();
  const deliveryDate = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000)); // 3 days
  return deliveryDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });
};