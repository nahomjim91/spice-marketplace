import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './contexts/CartContext.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { StripeProvider } from './contexts/StripeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <StripeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </StripeProvider>
    </ThemeProvider>
  </StrictMode>,
)
