import React, { createContext, useContext, useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';

// Replace with your actual Stripe publishable key
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51HvjdeLKIhAhGTY0example'; // Demo key for development

interface StripeContextType {
  stripe: Stripe | null;
  processPayment: (amount: number, currency: string) => Promise<{ success: boolean; error?: string; paymentIntentId?: string }>;
}

const StripeContext = createContext<StripeContextType | undefined>(undefined);

// Initialize Stripe
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

export function StripeProvider({ children }: { children: React.ReactNode }) {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  React.useEffect(() => {
    stripePromise.then(setStripe);
  }, []);

  const processPayment = async (
    amount: number, 
    currency: string = 'usd'
  ): Promise<{ success: boolean; error?: string; paymentIntentId?: string }> => {
    if (!stripe) {
      return { success: false, error: 'Stripe not initialized' };
    }

    try {
      // In a real app, you would call your backend to create a payment intent
      // For demo purposes, we'll simulate the payment process
      const simulatedPaymentIntent = {
        id: `pi_${Math.random().toString(36).substr(2, 9)}`,
        amount: amount * 100, // Convert to cents
        currency,
        status: 'succeeded'
      };

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate 95% success rate for demo
      const success = Math.random() > 0.05;
      
      if (success) {
        return {
          success: true,
          paymentIntentId: simulatedPaymentIntent.id
        };
      } else {
        return {
          success: false,
          error: 'Payment was declined. Please try a different payment method.'
        };
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      return {
        success: false,
        error: 'An unexpected error occurred. Please try again.'
      };
    }
  };

  return (
    <StripeContext.Provider value={{ stripe, processPayment }}>
      {children}
    </StripeContext.Provider>
  );
}

export function useStripe() {
  const context = useContext(StripeContext);
  if (context === undefined) {
    throw new Error('useStripe must be used within a StripeProvider');
  }
  return context;
}

// Mock card data for demo purposes
export const mockCardData = {
  cardNumber: '4242 4242 4242 4242',
  expiryDate: '12/25',
  cvc: '123',
  postalCode: '12345'
};

// Utility to format card number
export const formatCardNumber = (value: string) => {
  return value
    .replace(/\s/g, '')
    .replace(/(\d{4})(?=\d)/g, '$1 ')
    .trim();
};

// Utility to format expiry date
export const formatExpiryDate = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(?=\d)/, '$1/')
    .substring(0, 5);
};