import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useStripe, formatCardNumber, formatExpiryDate, mockCardData } from '@/contexts/StripeContext';
import { CreditCard, Lock, Shield, Info, Loader2 } from 'lucide-react';

interface PaymentFormProps {
  amount: number;
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
  disabled?: boolean;
}

export default function PaymentForm({ amount, onSuccess, onError, disabled = false }: PaymentFormProps) {
  const { processPayment } = useStripe();
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    postalCode: '',
    cardholderName: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateCard = () => {
    const newErrors: { [key: string]: string } = {};

    if (!cardData.cardNumber || cardData.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }

    if (!cardData.expiryDate || cardData.expiryDate.length < 5) {
      newErrors.expiryDate = 'Please enter a valid expiry date';
    }

    if (!cardData.cvc || cardData.cvc.length < 3) {
      newErrors.cvc = 'Please enter a valid CVC';
    }

    if (!cardData.postalCode || cardData.postalCode.length < 5) {
      newErrors.postalCode = 'Please enter a valid postal code';
    }

    if (!cardData.cardholderName.trim()) {
      newErrors.cardholderName = 'Please enter the cardholder name';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;

    if (field === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (field === 'expiryDate') {
      formattedValue = formatExpiryDate(value);
    } else if (field === 'cvc') {
      formattedValue = value.replace(/\D/g, '').substring(0, 4);
    } else if (field === 'postalCode') {
      formattedValue = value.replace(/[^a-zA-Z0-9\s]/g, '').substring(0, 10);
    }

    setCardData(prev => ({ ...prev, [field]: formattedValue }));
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCard() || isProcessing || disabled) {
      return;
    }

    setIsProcessing(true);

    try {
      const result = await processPayment(amount, 'usd');
      
      if (result.success && result.paymentIntentId) {
        onSuccess(result.paymentIntentId);
      } else {
        onError(result.error || 'Payment failed');
      }
    } catch (error) {
      onError('An unexpected error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  const fillDemoData = () => {
    setCardData({
      cardNumber: mockCardData.cardNumber,
      expiryDate: mockCardData.expiryDate,
      cvc: mockCardData.cvc,
      postalCode: mockCardData.postalCode,
      cardholderName: 'John Doe'
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center pb-2">
        <CardTitle className="flex items-center justify-center gap-2 text-burgundy dark:text-saffron">
          <CreditCard className="w-5 h-5" />
          Payment Details
        </CardTitle>
        <div className="flex items-center justify-center text-sm text-charcoal/60 dark:text-ivory/60">
          <Shield className="w-4 h-4 mr-1" />
          Secured by 256-bit SSL encryption
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <Alert className="border-saffron/20 bg-saffron/5">
          <Info className="w-4 h-4" />
          <AlertDescription className="flex items-center justify-between">
            <span className="text-sm">Demo Mode - Use test card data</span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={fillDemoData}
              className="text-xs"
            >
              Fill Demo Data
            </Button>
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-charcoal dark:text-ivory">
              Cardholder Name
            </label>
            <Input
              value={cardData.cardholderName}
              onChange={(e) => handleInputChange('cardholderName', e.target.value)}
              placeholder="John Doe"
              className={errors.cardholderName ? 'border-red-500' : ''}
              disabled={disabled || isProcessing}
            />
            {errors.cardholderName && (
              <p className="text-red-500 text-xs mt-1">{errors.cardholderName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-charcoal dark:text-ivory">
              Card Number
            </label>
            <Input
              value={cardData.cardNumber}
              onChange={(e) => handleInputChange('cardNumber', e.target.value)}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className={errors.cardNumber ? 'border-red-500' : ''}
              disabled={disabled || isProcessing}
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-charcoal dark:text-ivory">
                Expiry Date
              </label>
              <Input
                value={cardData.expiryDate}
                onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                placeholder="MM/YY"
                maxLength={5}
                className={errors.expiryDate ? 'border-red-500' : ''}
                disabled={disabled || isProcessing}
              />
              {errors.expiryDate && (
                <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-charcoal dark:text-ivory">
                CVC
              </label>
              <Input
                value={cardData.cvc}
                onChange={(e) => handleInputChange('cvc', e.target.value)}
                placeholder="123"
                maxLength={4}
                className={errors.cvc ? 'border-red-500' : ''}
                disabled={disabled || isProcessing}
              />
              {errors.cvc && (
                <p className="text-red-500 text-xs mt-1">{errors.cvc}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-charcoal dark:text-ivory">
              Postal Code
            </label>
            <Input
              value={cardData.postalCode}
              onChange={(e) => handleInputChange('postalCode', e.target.value)}
              placeholder="12345"
              className={errors.postalCode ? 'border-red-500' : ''}
              disabled={disabled || isProcessing}
            />
            {errors.postalCode && (
              <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>
            )}
          </div>

          <motion.div
            whileHover={{ scale: isProcessing ? 1 : 1.02 }}
            whileTap={{ scale: isProcessing ? 1 : 0.98 }}
          >
            <Button
              type="submit"
              className="w-full bg-spice-sunset hover:bg-heritage-blend text-white font-medium py-3"
              disabled={disabled || isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing Payment...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Pay ${amount.toFixed(2)}
                </>
              )}
            </Button>
          </motion.div>

          <div className="text-center text-xs text-charcoal/60 dark:text-ivory/60 mt-4">
            <div className="flex items-center justify-center gap-1">
              <Shield className="w-3 h-3" />
              Your payment information is encrypted and secure
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}