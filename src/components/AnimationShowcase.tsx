import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FlavorWheel, SpiceWaterfall, QualitySeal } from './SpiceAnimations';

export default function AnimationShowcase() {
  const [showWaterfall, setShowWaterfall] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);

  const flavors = [
    'Spicy Heat',
    'Earthy Deep',
    'Citrus Bright',
    'Sweet Warm',
    'Smoky Rich',
    'Floral Light',
    'Nutty Complex',
    'Peppery Sharp'
  ];

  const certifications = [
    'USDA Organic',
    'Fair Trade Certified',
    'Rainforest Alliance',
    'Non-GMO Project'
  ];

  return (
    <div className="min-h-screen bg-background py-20 relative">
      {/* Spice Waterfall */}
      <SpiceWaterfall active={showWaterfall} particleCount={30} />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-luxury text-luxury-lg text-burgundy mb-4">
            Animation Showcase
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Experience the magical animations that bring Ethiopian spice culture to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Spice Waterfall Demo */}
          <Card className="luxury-shadow">
            <CardHeader>
              <CardTitle className="font-luxury text-xl text-burgundy">
                Spice Waterfall Effect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-charcoal/70 mb-6">
                Watch beautiful spice particles cascade down the screen like a gentle waterfall of berbere.
              </p>
              <Button
                onClick={() => setShowWaterfall(!showWaterfall)}
                className={showWaterfall ? 'bg-traditional-red hover:bg-burgundy' : 'bg-saffron hover:bg-cinnamon'}
              >
                {showWaterfall ? 'Stop Waterfall' : 'Start Spice Waterfall'}
              </Button>
            </CardContent>
          </Card>

          {/* Quality Seal Demo */}
          <Card className="luxury-shadow">
            <CardHeader>
              <CardTitle className="font-luxury text-xl text-burgundy">
                Quality Certification Seals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-charcoal/70 mb-6">
                Rotating certification badges with sparkle effects that showcase our quality standards.
              </p>
              <div className="flex justify-center">
                <QualitySeal certifications={certifications} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Flavor Wheel Demo */}
        <Card className="luxury-shadow mb-16">
          <CardHeader>
            <CardTitle className="font-luxury text-xl text-burgundy text-center">
              Interactive Flavor Wheel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-charcoal/70 mb-8 text-center max-w-2xl mx-auto">
              Click on any point around the wheel to explore different flavor profiles. 
              The wheel spins to highlight your selection.
            </p>
            
            <FlavorWheel 
              flavors={flavors} 
              onFlavorSelect={setSelectedFlavor}
            />
            
            {selectedFlavor && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center"
              >
                <Card className="max-w-md mx-auto bg-warm-beige/20 border-golden/20">
                  <CardContent className="p-4">
                    <h4 className="font-luxury text-lg text-burgundy mb-2">
                      {selectedFlavor} Profile
                    </h4>
                    <p className="text-sm text-charcoal/70">
                      This flavor brings a unique character to our berbere blends, 
                      creating depth and complexity in traditional Ethiopian dishes.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </CardContent>
        </Card>

        {/* Animation Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="text-center p-6 bg-warm-beige/20 rounded-lg border border-golden/20"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-spice-sunset rounded-full flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-luxury text-lg text-burgundy mb-2">
              Particle Effects
            </h3>
            <p className="text-sm text-charcoal/70">
              Dynamic spice particles that react to user interactions and create immersive experiences.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="text-center p-6 bg-warm-beige/20 rounded-lg border border-golden/20"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-heritage-blend rounded-full flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-luxury text-lg text-burgundy mb-2">
              Interactive Elements
            </h3>
            <p className="text-sm text-charcoal/70">
              Hover effects, click animations, and responsive feedback that enhance user engagement.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="text-center p-6 bg-warm-beige/20 rounded-lg border border-golden/20"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold rounded-full flex items-center justify-center">
              <span className="text-2xl">🌀</span>
            </div>
            <h3 className="font-luxury text-lg text-burgundy mb-2">
              Cultural Patterns
            </h3>
            <p className="text-sm text-charcoal/70">
              Traditional Ethiopian geometric patterns that animate subtly in the background.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}