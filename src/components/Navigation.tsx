import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CartIcon } from '@/components/ShoppingCart';
import ThemeToggle from '@/components/ThemeToggle';
import Logo from '@/components/Logo';
import { 
  User, 
  Search, 
  Heart, 
  Menu, 
  X
} from 'lucide-react';

type AppPage = 'home' | 'catalog' | 'recipes' | 'heritage' | 'subscriptions' | 'gifts' | 'concierge' | 'checkout' | 'dashboard';

interface NavigationProps {
  currentPage?: AppPage;
  onNavigate?: (page: AppPage) => void;
}

export default function Navigation({ currentPage = 'home', onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home' as AppPage },
    { name: 'Spices', page: 'catalog' as AppPage },
    { name: 'Recipes', page: 'recipes' as AppPage },
    { name: 'Heritage', page: 'heritage' as AppPage },
    { name: 'VIP', page: 'subscriptions' as AppPage },
    { name: 'Gifts', page: 'gifts' as AppPage },
    { name: 'Concierge', page: 'concierge' as AppPage }
  ];

  const handleNavClick = (page: AppPage) => {
    onNavigate?.(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-luxury border-b border-golden/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => handleNavClick('home')}
          >
            <Logo size="md" />
            <div className="hidden sm:block">
              <h1 className="font-luxury text-xl text-burgundy dark:text-saffron tracking-tight">
                Berbere & Beyond
              </h1>
              <p className="text-xs text-copper -mt-1 tracking-wider">
                AUTHENTIC HERITAGE
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-luxury ${
                  currentPage === item.page 
                    ? 'text-saffron' 
                    : 'text-charcoal dark:text-ivory hover:text-saffron'
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <motion.button
              className="p-2 text-charcoal dark:text-ivory hover:text-saffron transition-luxury"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Wishlist */}
            <motion.button
              className="p-2 text-charcoal dark:text-ivory hover:text-traditional-red transition-luxury"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
            </motion.button>

            {/* Cart */}
            <CartIcon />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Account */}
            <motion.button
              className="p-2 text-charcoal dark:text-ivory hover:text-saffron transition-luxury"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('dashboard')}
            >
              <User className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-charcoal dark:text-ivory hover:text-saffron transition-luxury"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-golden/20 bg-background/95 backdrop-blur-sm"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-luxury ${
                    currentPage === item.page 
                      ? 'text-saffron bg-saffron/10' 
                      : 'text-charcoal hover:text-saffron hover:bg-warm-beige/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-4">
                <Button className="w-full bg-spice-sunset hover:bg-heritage-blend">
                  VIP Membership
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}