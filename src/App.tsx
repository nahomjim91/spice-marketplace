import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import ProductCatalog from '@/components/ProductCatalog';
import RecipeHub from '@/components/RecipeHub';
import CulturalHeritage from '@/components/CulturalHeritage';
import SubscriptionService from '@/components/SubscriptionService';
import GiftCenter from '@/components/GiftCenter';
import ConciergeService from '@/components/ConciergeService';
import ShoppingCartComponent from '@/components/ShoppingCart';
import Checkout from '@/components/Checkout';
import UserDashboard from '@/components/UserDashboard';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import { 
  ArrowRight, 
  Star, 
  Award, 
  Coffee, 
  Leaf, 
  Crown, 
  Globe,
  Heart,
  Sparkles,
  ShoppingCart,
  Clock,
  Users
} from 'lucide-react';

type AppPage = 'home' | 'catalog' | 'recipes' | 'heritage' | 'subscriptions' | 'gifts' | 'concierge' | 'checkout' | 'dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const { addItem } = useCart();

  useEffect(() => {
    setIsVisible(true);
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    });
  }, [controls]);

  // Use fewer particles on mobile for better performance
  const particleCount = window.innerWidth < 768 ? 8 : 20;
  const spiceParticles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  // Get first few featured products from database for homepage
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  const heritageStories = [
    {
      title: "Ancient Spice Routes",
      description: "Discover the millennium-old trading paths that brought Ethiopian spices to the world.",
      icon: Globe,
      accent: "text-saffron"
    },
    {
      title: "Artisan Farmers",
      description: "Meet the families who have perfected spice cultivation across generations.",
      icon: Users,
      accent: "text-ethiopian-green"
    },
    {
      title: "Sacred Blends",
      description: "Experience berbere recipes passed down through Ethiopian royal courts.",
      icon: Crown,
      accent: "text-burgundy"
    }
  ];

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'catalog':
        return <ProductCatalog />;
      case 'recipes':
        return <RecipeHub onBackToHub={() => setCurrentPage('home')} />;
      case 'heritage':
        return <CulturalHeritage />;
      case 'subscriptions':
        return <SubscriptionService />;
      case 'gifts':
        return <GiftCenter />;
      case 'concierge':
        return <ConciergeService />;
      case 'checkout':
        return <Checkout onBack={() => setCurrentPage('home')} onComplete={() => setCurrentPage('home')} />;
      case 'dashboard':
        return <UserDashboard />;
      default:
        return (
          <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-spice-sunset opacity-5" />
        <div className="absolute inset-0 pattern-traditional opacity-20" />
        
        {/* Floating Spice Particles */}
        {spiceParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-saffron rounded-full opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="max-w-4xl mx-auto"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-6 py-2 bg-burgundy/10 border border-burgundy/20 rounded-full"
            >
              <Crown className="w-4 h-4 text-burgundy" />
              <span className="text-sm font-medium text-burgundy tracking-wider">LUXURY HERITAGE COLLECTION</span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-luxury text-luxury-xl font-light text-heritage-gradient mb-6"
            >
              Authentic Ethiopian
              <br />
              <span className="text-spice-gradient">Spice Mastery</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-xl md:text-2xl text-charcoal/80 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Premium berbere blends, rare spices, and artisanal products
              <br className="hidden md:block" />
              from the birthplace of coffee and ancient spice routes.
            </motion.p>
            
            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="bg-spice-sunset hover:bg-heritage-blend text-white px-8 py-4 text-lg font-medium luxury-shadow group"
                onClick={() => setCurrentPage('catalog')}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Explore Collection
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white px-8 py-4 text-lg font-medium transition-luxury"
                onClick={() => setCurrentPage('subscriptions')}
              >
                <Crown className="w-5 h-5 mr-2" />
                VIP Membership
              </Button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-charcoal/60"
            >
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-golden" />
                <span>Certified Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-ethiopian-green" />
                <span>Sustainably Sourced</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>Free Global Shipping</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-warm-beige/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-luxury text-luxury-lg text-burgundy mb-4">
              Signature Collection
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Hand-selected premium spices from the highlands of Ethiopia and Eritrea,
              each with its own story of heritage and craftsmanship.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 luxury-shadow hover:spice-glow transition-luxury bg-white">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <div className="text-6xl mb-4 text-center">
                        {product.category === 'berbere' && '🌶️'}
                        {product.category === 'honey-condiments' && '🍯'}
                        {product.category === 'rare-spices' && '✨'}
                        {product.category === 'coffee-tea' && '☕'}
                        {product.category === 'shero' && '🫘'}
                        {product.category === 'gifts' && '🎁'}
                      </div>
                      {product.exclusive && (
                        <Badge className="absolute top-0 right-0 bg-traditional-red hover:bg-traditional-red text-white">
                          Exclusive
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="font-luxury text-xl text-burgundy mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-copper mb-3">
                      {product.region}, {product.origin}
                    </p>
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(Math.floor(product.rating))].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-luxury text-2xl text-saffron">
                        ${product.price}
                      </span>
                      <Button 
                        className="bg-saffron hover:bg-cinnamon text-white opacity-0 group-hover:opacity-100 transition-luxury"
                        onClick={() => addItem(product, 1)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Heritage Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-luxury text-luxury-lg text-burgundy mb-4">
              Our Heritage
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Every spice tells a story of tradition, culture, and the passionate
              artisans who have preserved these flavors for generations.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {heritageStories.map((story, index) => {
              const IconComponent = story.icon;
              return (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-warm-beige/50 mb-6 group-hover:scale-110 transition-luxury ${story.accent}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-luxury text-xl text-burgundy mb-4">
                    {story.title}
                  </h3>
                  
                  <p className="text-charcoal/70 leading-relaxed">
                    {story.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
            {/* Product Catalog Section */}
            <section id="catalog" className="py-20 bg-background">
              <ProductCatalog />
            </section>
            
            {/* CTA Section */}
            <section className="py-20 bg-heritage-blend relative overflow-hidden">
              <div className="absolute inset-0 pattern-traditional opacity-10" />
              <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-3xl mx-auto"
                >
                  <h2 className="font-luxury text-luxury-lg text-white mb-6">
                    Begin Your Culinary Journey
                  </h2>
                  
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Join thousands of culinary enthusiasts who trust us to deliver
                    the finest Ethiopian and Eritrean spices to their kitchens worldwide.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-golden hover:bg-copper text-charcoal px-8 py-4 text-lg font-medium"
                      onClick={() => setCurrentPage('catalog')}
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Start Shopping
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 text-lg font-medium"
                      onClick={() => setCurrentPage('recipes')}
                    >
                      <Coffee className="w-5 h-5 mr-2" />
                      Explore Recipes
                    </Button>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderCurrentPage()}
      <ShoppingCartComponent onCheckout={() => setCurrentPage('checkout')} />
    </div>
  );
}
