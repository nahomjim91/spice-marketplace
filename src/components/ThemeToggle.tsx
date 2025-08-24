import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-warm-beige/20 dark:bg-charcoal/20 border border-golden/20 dark:border-golden/30 hover:bg-saffron/10 dark:hover:bg-saffron/20 transition-luxury"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 0.8 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="w-5 h-5"
      >
        {theme === 'light' ? (
          <Sun className="w-5 h-5 text-saffron" />
        ) : (
          <Moon className="w-5 h-5 text-golden" />
        )}
      </motion.div>
    </motion.button>
  );
}