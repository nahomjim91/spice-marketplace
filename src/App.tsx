import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ShoppingCartComponent from '@/components/ShoppingCart';
import HomePage from '@/pages/HomePage';
import SpicesPage from '@/pages/SpicesPage';
import RecipesPage from '@/pages/RecipesPage';
import HeritagePage from '@/pages/HeritagePage';
import SubscriptionsPage from '@/pages/SubscriptionsPage';
import GiftsPage from '@/pages/GiftsPage';
import ConciergePage from '@/pages/ConciergePage';
import CheckoutPage from '@/pages/CheckoutPage';
import DashboardPage from '@/pages/DashboardPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className='pt-16'></div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/spices" element={<SpicesPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/heritage" element={<HeritagePage />} />
          <Route path="/subscriptions" element={<SubscriptionsPage />} />
          <Route path="/gifts" element={<GiftsPage />} />
          <Route path="/concierge" element={<ConciergePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        
        <ShoppingCartComponent />
      </div>
    </Router>
  );
}