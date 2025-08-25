// pages/CheckoutPage.tsx
import { useNavigate } from 'react-router-dom';
import Checkout from '@/components/Checkout';

export default function CheckoutPage() {
  const navigate = useNavigate();
  
  return (
    <Checkout 
      onBack={() => navigate(-1)} 
      onComplete={() => navigate('/')} 
    />
  );
}