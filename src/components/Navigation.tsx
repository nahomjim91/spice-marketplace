import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Spices', path: '/spices' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Heritage', path: '/heritage' },
    { name: 'VIP', path: '/subscriptions' },
    { name: 'Gifts', path: '/gifts' },
    { name: 'Concierge', path: '/concierge' }
  ];

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-luxury border-b border-golden/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Logo size="md" />
              <div className="hidden sm:block">
                <h1 className="font-luxury text-xl text-burgundy dark:text-saffron tracking-tight">
                  Berbere & Beyond
                </h1>
                <p className="text-xs text-copper -mt-1 tracking-wider">
                  AUTHENTIC HERITAGE
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-luxury ${
                    location.pathname === item.path 
                      ? 'text-saffron' 
                      : 'text-charcoal dark:text-ivory hover:text-saffron'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
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
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/dashboard"
                className="p-2 text-charcoal dark:text-ivory hover:text-saffron transition-luxury block"
              >
                <User className="w-5 h-5" />
              </Link>
            </motion.div>

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
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleMenuClose}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-luxury ${
                    location.pathname === item.path 
                      ? 'text-saffron bg-saffron/10' 
                      : 'text-charcoal hover:text-saffron hover:bg-warm-beige/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Link to="/subscriptions" onClick={handleMenuClose}>
                  <Button className="w-full bg-spice-sunset hover:bg-heritage-blend">
                    VIP Membership
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}