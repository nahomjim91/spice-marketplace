import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
  Truck,
  Shield,
  Clock,
  CreditCard,
  Gift,
  Star,
  Package,
  ArrowRight,
  Heart
} from 'lucide-react';
import { useCart, getCartItemTotal, formatPrice, getEstimatedDelivery } from '@/contexts/CartContext';

interface ShoppingCartProps {
  onCheckout?: () => void;
}

export default function ShoppingCartComponent({ onCheckout }: ShoppingCartProps) {
  const { state, removeItem, updateQuantity, clearCart, closeCart } = useCart();
  const [isRemoving, setIsRemoving] = useState<string | null>(null);

  const handleRemoveItem = async (id: string) => {
    setIsRemoving(id);
    setTimeout(() => {
      removeItem(id);
      setIsRemoving(null);
    }, 300);
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    closeCart();
    onCheckout?.();
  };

  if (!state.isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          onClick={closeCart}
        />

        {/* Cart Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-6 bg-heritage-blend text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6" />
                  <h2 className="font-luxury text-xl">Your Cart</h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeCart}
                  className="text-white hover:bg-white/20 p-2"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-white/80">
                  {state.itemCount} item{state.itemCount !== 1 ? 's' : ''}
                </span>
                <span className="font-bold text-golden text-lg">
                  {formatPrice(state.total)}
                </span>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {state.items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">🛒</div>
                    <h3 className="font-luxury text-xl text-burgundy mb-2">
                      Your cart is empty
                    </h3>
                    <p className="text-charcoal/60 mb-6">
                      Discover our premium spice collection and start your culinary journey.
                    </p>
                    <Button 
                      onClick={closeCart}
                      className="bg-saffron hover:bg-cinnamon text-white"
                    >
                      Continue Shopping
                    </Button>
                  </motion.div>
                ) : (
                  state.items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 1, height: 'auto' }}
                      animate={{ 
                        opacity: isRemoving === item.id ? 0 : 1,
                        height: isRemoving === item.id ? 0 : 'auto'
                      }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border border-charcoal/10 rounded-lg p-4 bg-warm-beige/10"
                    >
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="w-16 h-16 bg-saffron/10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                          {item.product.category === 'berbere' ? '🌶️' :
                           item.product.category === 'coffee-tea' ? '☕' :
                           item.product.category === 'honey-condiments' ? '🍯' :
                           item.product.category === 'gifts' ? '🎁' : '🌿'}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          {/* Product Info */}
                          <div className="flex items-start justify-between mb-2">
                            <div className="min-w-0 flex-1">
                              <h4 className="font-medium text-burgundy text-sm truncate">
                                {item.product.name}
                              </h4>
                              <p className="text-xs text-copper">{item.product.region}</p>
                              {item.product.weight && (
                                <p className="text-xs text-charcoal/60">{item.product.weight}</p>
                              )}
                            </div>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-charcoal/40 hover:text-traditional-red p-1 ml-2"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                className="w-7 h-7 p-0 border-copper/20"
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              
                              <span className="w-8 text-center text-sm font-medium">
                                {item.quantity}
                              </span>
                              
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                className="w-7 h-7 p-0 border-copper/20"
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            
                            <div className="text-right">
                              <div className="font-medium text-saffron">
                                {formatPrice(getCartItemTotal(item))}
                              </div>
                              {item.quantity > 1 && (
                                <div className="text-xs text-charcoal/60">
                                  {formatPrice(item.product.price)} each
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* Customizations */}
                          {item.customizations && (
                            <div className="mt-2 p-2 bg-golden/10 rounded text-xs">
                              {item.customizations.gift_wrap && (
                                <div className="flex items-center gap-1">
                                  <Gift className="w-3 h-3 text-golden" />
                                  <span className="text-charcoal/70">Gift wrapped</span>
                                </div>
                              )}
                              {item.customizations.message && (
                                <div className="text-charcoal/70 mt-1">
                                  Message: {item.customizations.message.slice(0, 30)}...
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Cart Summary & Checkout */}
            {state.items.length > 0 && (
              <div className="border-t border-charcoal/10 p-6 bg-warm-beige/20">
                {/* Delivery Info */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck className="w-4 h-4 text-ethiopian-green" />
                    <span className="text-sm font-medium text-burgundy">
                      {state.shipping === 0 ? 'Free Delivery' : 'Standard Delivery'}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal/60">
                    Estimated delivery: {getEstimatedDelivery()}
                  </p>
                  {state.total < 75 && state.shipping > 0 && (
                    <p className="text-xs text-saffron mt-1">
                      Add {formatPrice(75 - state.total)} more for free shipping
                    </p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/70">Subtotal</span>
                    <span className="font-medium">{formatPrice(state.total)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/70">Shipping</span>
                    <span className="font-medium">
                      {state.shipping === 0 ? 'Free' : formatPrice(state.shipping)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/70">Tax</span>
                    <span className="font-medium">{formatPrice(state.tax)}</span>
                  </div>
                  
                  <Separator className="my-3" />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-burgundy">Total</span>
                    <span className="text-saffron">{formatPrice(state.finalTotal)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <div className="space-y-3">
                  <Button 
                    onClick={handleCheckout}
                    className="w-full bg-saffron hover:bg-cinnamon text-white py-3 font-medium luxury-shadow"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Secure Checkout
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  
                  <div className="flex items-center justify-center gap-4 text-xs text-charcoal/60">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Package className="w-3 h-3" />
                      <span>Luxury Packaging</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline"
                    onClick={closeCart}
                    className="w-full border-saffron text-saffron hover:bg-saffron hover:text-white"
                  >
                    Continue Shopping
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 pt-4 border-t border-charcoal/10">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="text-xs text-charcoal/60">
                      <Shield className="w-4 h-4 mx-auto mb-1 text-ethiopian-green" />
                      <span>Secure</span>
                    </div>
                    <div className="text-xs text-charcoal/60">
                      <Star className="w-4 h-4 mx-auto mb-1 text-golden" />
                      <span>Authentic</span>
                    </div>
                    <div className="text-xs text-charcoal/60">
                      <Truck className="w-4 h-4 mx-auto mb-1 text-copper" />
                      <span>Fast Ship</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// Cart Icon Component for Navigation
export function CartIcon() {
  const { state, toggleCart } = useCart();

  return (
    <motion.button
      className="relative p-2 text-charcoal hover:text-saffron transition-luxury"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleCart}
    >
      <ShoppingCart className="w-5 h-5" />
      <AnimatePresence>
        {state.itemCount > 0 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-traditional-red hover:bg-traditional-red flex items-center justify-center p-0">
              {state.itemCount > 99 ? '99+' : state.itemCount}
            </Badge>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// Mini Cart Preview Component
export function MiniCartPreview() {
  const { state } = useCart();
  
  if (state.items.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg luxury-shadow border border-charcoal/10 overflow-hidden z-50"
    >
      <div className="p-4 bg-warm-beige/20 border-b border-charcoal/10">
        <div className="flex items-center justify-between">
          <span className="font-medium text-burgundy">Recently Added</span>
          <span className="text-sm text-charcoal/60">
            {state.itemCount} item{state.itemCount !== 1 ? 's' : ''}
          </span>
        </div>
      </div>
      
      <div className="max-h-60 overflow-y-auto">
        {state.items.slice(-3).map((item) => (
          <div key={item.id} className="p-4 border-b border-charcoal/5 last:border-b-0">
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-saffron/10 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                {item.product.category === 'berbere' ? '🌶️' :
                 item.product.category === 'coffee-tea' ? '☕' :
                 item.product.category === 'honey-condiments' ? '🍯' : '🌿'}
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-burgundy text-sm truncate">
                  {item.product.name}
                </h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-charcoal/60">
                    Qty: {item.quantity}
                  </span>
                  <span className="text-sm font-medium text-saffron">
                    {formatPrice(getCartItemTotal(item))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-warm-beige/10">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium text-burgundy">Total</span>
          <span className="font-bold text-saffron">{formatPrice(state.finalTotal)}</span>
        </div>
        
        <Button className="w-full bg-saffron hover:bg-cinnamon text-white text-sm">
          <CreditCard className="w-4 h-4 mr-2" />
          Checkout Now
        </Button>
      </div>
    </motion.div>
  );
}