import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import PaymentForm from '@/components/PaymentForm';
import { 
  CreditCard,
  Lock,
  Truck,
  Shield,
  Check,
  ArrowLeft,
  Package,
  Clock,
  Star,
  Gift,
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  Crown
} from 'lucide-react';
import { useCart, formatPrice, getEstimatedDelivery } from '@/contexts/CartContext';

interface CheckoutProps {
  onBack?: () => void;
  onComplete?: () => void;
}

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  deliveryInstructions: string;
}



export default function Checkout({ onBack, onComplete }: CheckoutProps) {
  const { state, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    deliveryInstructions: ''
  });



  const steps = [
    { number: 1, title: 'Shipping', icon: <Truck className="w-4 h-4" /> },
    { number: 2, title: 'Payment', icon: <CreditCard className="w-4 h-4" /> },
    { number: 3, title: 'Review', icon: <Check className="w-4 h-4" /> }
  ];

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 
    'Australia', 'Sweden', 'Norway', 'Netherlands', 'Ethiopia', 'Eritrea'
  ];

  const handleStepComplete = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      handleCompleteOrder();
    }
  };

  const handleCompleteOrder = async () => {
    setIsProcessing(true);
    
    // Simulate order completion
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear cart and complete
    clearCart();
    setIsProcessing(false);
    onComplete?.();
  };

  const handlePaymentSuccess = (intentId: string) => {
    setPaymentIntentId(intentId);
    setPaymentError(null);
    // Automatically proceed to review step
    setCurrentStep(3);
  };

  const handlePaymentError = (error: string) => {
    setPaymentError(error);
    setPaymentIntentId(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-warm-beige/20 border-b border-charcoal/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {onBack && (
              <Button 
                onClick={onBack}
                variant="ghost"
                className="mb-6 text-burgundy hover:text-saffron"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Cart
              </Button>
            )}
            
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-luxury text-3xl text-burgundy">Secure Checkout</h1>
              <div className="flex items-center gap-2 text-sm text-charcoal/60">
                <Shield className="w-4 h-4 text-ethiopian-green" />
                <span>256-bit SSL Encryption</span>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center gap-3 ${
                    step.number <= currentStep ? 'text-saffron' : 'text-charcoal/40'
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      step.number < currentStep 
                        ? 'bg-saffron border-saffron text-white' 
                        : step.number === currentStep
                        ? 'border-saffron text-saffron'
                        : 'border-charcoal/20 text-charcoal/40'
                    }`}>
                      {step.number < currentStep ? <Check className="w-4 h-4" /> : step.icon}
                    </div>
                    <span className="font-medium">{step.title}</span>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className={`w-20 h-0.5 mx-4 ${
                      step.number < currentStep ? 'bg-saffron' : 'bg-charcoal/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Checkout Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="luxury-shadow border-0">
                    <CardHeader>
                      <h2 className="font-luxury text-xl text-burgundy">Shipping Information</h2>
                      <p className="text-charcoal/70">Where should we deliver your premium spices?</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            First Name *
                          </label>
                          <Input
                            value={shippingInfo.firstName}
                            onChange={(e) => setShippingInfo(prev => ({ ...prev, firstName: e.target.value }))}
                            className="border-copper/20 focus:border-saffron"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            Last Name *
                          </label>
                          <Input
                            value={shippingInfo.lastName}
                            onChange={(e) => setShippingInfo(prev => ({ ...prev, lastName: e.target.value }))}
                            className="border-copper/20 focus:border-saffron"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            value={shippingInfo.email}
                            onChange={(e) => setShippingInfo(prev => ({ ...prev, email: e.target.value }))}
                            className="border-copper/20 focus:border-saffron"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            Phone Number *
                          </label>
                          <Input
                            type="tel"
                            value={shippingInfo.phone}
                            onChange={(e) => setShippingInfo(prev => ({ ...prev, phone: e.target.value }))}
                            className="border-copper/20 focus:border-saffron"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-burgundy mb-2">
                          Street Address *
                        </label>
                        <Input
                          value={shippingInfo.address}
                          onChange={(e) => setShippingInfo(prev => ({ ...prev, address: e.target.value }))}
                          className="border-copper/20 focus:border-saffron"
                          placeholder="123 Main Street, Apt 4B"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            City *
                          </label>
                          <Input
                            value={shippingInfo.city}
                            onChange={(e) => setShippingInfo(prev => ({ ...prev, city: e.target.value }))}
                            className="border-copper/20 focus:border-saffron"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            State *
                          </label>
                          <Input
                            value={shippingInfo.state}
                            onChange={(e) => setShippingInfo(prev => ({ ...prev, state: e.target.value }))}
                            className="border-copper/20 focus:border-saffron"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            ZIP Code *
                          </label>
                          <Input
                            value={shippingInfo.zipCode}
                            onChange={(e) => setShippingInfo(prev => ({ ...prev, zipCode: e.target.value }))}
                            className="border-copper/20 focus:border-saffron"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-burgundy mb-2">
                          Country *
                        </label>
                        <select
                          value={shippingInfo.country}
                          onChange={(e) => setShippingInfo(prev => ({ ...prev, country: e.target.value }))}
                          className="w-full px-3 py-2 border-2 border-copper/20 rounded-md focus:border-saffron bg-white"
                          required
                        >
                          {countries.map(country => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-burgundy mb-2">
                          Delivery Instructions (Optional)
                        </label>
                        <Input
                          value={shippingInfo.deliveryInstructions}
                          onChange={(e) => setShippingInfo(prev => ({ ...prev, deliveryInstructions: e.target.value }))}
                          className="border-copper/20 focus:border-saffron"
                          placeholder="Leave with concierge, ring doorbell twice, etc."
                        />
                      </div>
                      
                      <Button 
                        onClick={handleStepComplete}
                        className="w-full bg-saffron hover:bg-cinnamon text-white py-3 font-medium"
                        disabled={!shippingInfo.firstName || !shippingInfo.lastName || !shippingInfo.email || !shippingInfo.address}
                      >
                        Continue to Payment
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Step 2: Payment Information */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center"
                >
                  <div className="w-full max-w-md">
                    <PaymentForm
                      amount={state.finalTotal}
                      onSuccess={handlePaymentSuccess}
                      onError={handlePaymentError}
                      disabled={isProcessing}
                    />
                    
                    {paymentError && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                      >
                        <p className="text-red-600 dark:text-red-400 text-sm text-center">{paymentError}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Order Review */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Shipping Review */}
                  <Card className="luxury-shadow border-0">
                    <CardHeader>
                      <h3 className="font-medium text-burgundy">Shipping Address</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-warm-beige/20 p-4 rounded-lg">
                        <p className="font-medium text-charcoal">
                          {shippingInfo.firstName} {shippingInfo.lastName}
                        </p>
                        <p className="text-charcoal/70">{shippingInfo.address}</p>
                        <p className="text-charcoal/70">
                          {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
                        </p>
                        <p className="text-charcoal/70">{shippingInfo.country}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Review */}
                  <Card className="luxury-shadow border-0">
                    <CardHeader>
                      <h3 className="font-medium text-burgundy">Payment Method</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 bg-warm-beige/20 dark:bg-charcoal/20 p-4 rounded-lg">
                        <CreditCard className="w-6 h-6 text-saffron" />
                        <div>
                          <p className="font-medium text-charcoal dark:text-ivory">
                            Payment Processed Successfully
                          </p>
                          <p className="text-sm text-charcoal/70 dark:text-ivory/60">
                            Transaction ID: {paymentIntentId?.slice(-8)}
                          </p>
                        </div>
                        <div className="ml-auto">
                          <div className="w-6 h-6 bg-ethiopian-green rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Final Checkout */}
                  <Card className="luxury-shadow border-0">
                    <CardHeader>
                      <h3 className="font-medium text-burgundy">Complete Your Order</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-golden/10 rounded-lg">
                          <Clock className="w-5 h-5 text-golden" />
                          <div>
                            <p className="font-medium text-burgundy">Estimated Delivery</p>
                            <p className="text-sm text-charcoal/70">{getEstimatedDelivery()}</p>
                          </div>
                        </div>
                        
                        <Button 
                          onClick={handleCompleteOrder}
                          className="w-full bg-traditional-red hover:bg-burgundy text-white py-4 text-lg font-medium luxury-shadow"
                          disabled={isProcessing}
                        >
                          {isProcessing ? (
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Processing Order...
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <Shield className="w-5 h-5" />
                              Complete Secure Order
                            </div>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="luxury-shadow border-0 sticky top-8">
                <CardHeader>
                  <h3 className="font-luxury text-xl text-burgundy">Order Summary</h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Cart Items */}
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex gap-3 pb-4 border-b border-charcoal/10 last:border-b-0 last:pb-0">
                        <div className="w-12 h-12 bg-saffron/10 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                          {item.product.category === 'berbere' ? '🌶️' :
                           item.product.category === 'coffee-tea' ? '☕' :
                           item.product.category === 'honey-condiments' ? '🍯' : '🌿'}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-burgundy text-sm truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-charcoal/60">
                            {item.product.weight} • {item.product.region}
                          </p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-charcoal/60">
                              Qty: {item.quantity}
                            </span>
                            <span className="text-sm font-medium text-saffron">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-charcoal/70">Subtotal</span>
                      <span className="font-medium">{formatPrice(state.total)}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-charcoal/70">Shipping</span>
                      <span className="font-medium">
                        {state.shipping === 0 ? (
                          <span className="text-ethiopian-green">Free</span>
                        ) : (
                          formatPrice(state.shipping)
                        )}
                      </span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-charcoal/70">Tax</span>
                      <span className="font-medium">{formatPrice(state.tax)}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-burgundy">Total</span>
                      <span className="text-saffron">{formatPrice(state.finalTotal)}</span>
                    </div>
                  </div>

                  {/* Delivery Info */}
                  <div className="p-4 bg-golden/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Truck className="w-4 h-4 text-golden" />
                      <span className="font-medium text-burgundy text-sm">
                        {state.shipping === 0 ? 'Free Premium Delivery' : 'Standard Delivery'}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal/70">
                      Estimated delivery: {getEstimatedDelivery()}
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-4 border-t border-charcoal/10">
                    <div className="text-xs text-charcoal/60">
                      <Shield className="w-4 h-4 mx-auto mb-1 text-ethiopian-green" />
                      <span>Secure</span>
                    </div>
                    <div className="text-xs text-charcoal/60">
                      <Award className="w-4 h-4 mx-auto mb-1 text-golden" />
                      <span>Authentic</span>
                    </div>
                    <div className="text-xs text-charcoal/60">
                      <Package className="w-4 h-4 mx-auto mb-1 text-copper" />
                      <span>Premium</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}