import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Spice Particle Waterfall Animation
export const SpiceWaterfall = ({ active = true, particleCount = 50 }: {
  active?: boolean;
  particleCount?: number;
}) => {
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
    x: Math.random() * 100,
    size: 2 + Math.random() * 4,
    opacity: 0.3 + Math.random() * 0.5,
    color: ['#FF8C42', '#FFD700', '#D2691E', '#B87333'][Math.floor(Math.random() * 4)]
  }));

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            opacity: particle.opacity
          }}
          animate={{
            y: ['0vh', '100vh'],
            rotate: [0, 360],
            scale: [1, 0.5, 1]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeIn'
          }}
        />
      ))}
    </div>
  );
};

// Interactive Flavor Wheel
export const FlavorWheel = ({ flavors, onFlavorSelect }: { 
  flavors: string[]; 
  onFlavorSelect?: (flavor: string) => void;
}) => {
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleFlavorClick = (flavor: string) => {
    setSelectedFlavor(flavor);
    setIsSpinning(true);
    onFlavorSelect?.(flavor);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  const angleStep = 360 / flavors.length;

  return (
    <div className="relative w-80 h-80 mx-auto">
      <motion.div
        className="w-full h-full rounded-full relative overflow-hidden border-4 border-golden/30"
        animate={{ rotate: isSpinning ? 360 : 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          background: 'conic-gradient(from 0deg, var(--saffron), var(--golden), var(--cinnamon), var(--copper), var(--saffron))'
        }}
      >
        {/* Center circle */}
        <div className="absolute inset-1/4 bg-background rounded-full border-2 border-burgundy flex items-center justify-center">
          <motion.div
            className="text-center"
            key={selectedFlavor}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-2xl mb-2">🌶️</div>
            <p className="text-xs font-medium text-burgundy">
              {selectedFlavor || 'Select Flavor'}
            </p>
          </motion.div>
        </div>

        {/* Flavor segments */}
        {flavors.map((flavor, index) => {
          const angle = angleStep * index;
          const radius = 120;
          const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
          const y = Math.sin((angle - 90) * Math.PI / 180) * radius;

          return (
            <motion.button
              key={flavor}
              className="absolute w-4 h-4 bg-burgundy rounded-full border-2 border-white shadow-lg cursor-pointer"
              style={{
                left: `calc(50% + ${x}px - 8px)`,
                top: `calc(50% + ${y}px - 8px)`
              }}
              whileHover={{ 
                scale: 1.5,
                backgroundColor: 'var(--traditional-red)'
              }}
              whileTap={{ scale: 1.2 }}
              onClick={() => handleFlavorClick(flavor)}
            >
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-medium text-burgundy bg-white/90 px-2 py-1 rounded shadow">
                  {flavor}
                </span>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};

// Quality Seal Animation
export const QualitySeal = ({ certifications }: { certifications: string[] }) => {
  const [currentCert, setCurrentCert] = useState(0);

  useEffect(() => {
    if (certifications.length > 1) {
      const timer = setInterval(() => {
        setCurrentCert(prev => (prev + 1) % certifications.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [certifications.length]);

  return (
    <div className="relative w-24 h-24">
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-golden bg-gradient-to-br from-golden to-copper flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <div className="text-white text-center">
          <div className="text-xs font-bold mb-1">
            {certifications[currentCert]?.split(' ')[0]}
          </div>
          <div className="text-xs">
            {certifications[currentCert]?.split(' ').slice(1).join(' ')}
          </div>
        </div>
      </motion.div>
      
      {/* Sparkle effects */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 130}%`,
            top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 130}%`
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
        />
      ))}
    </div>
  );
};