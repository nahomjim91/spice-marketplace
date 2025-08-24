import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Crown,
  Star,
  Check,
  Gift,
  Truck,
  Users,
  Heart,
  Coffee,
  Calendar,
  Package,
  Sparkles,
  Shield,
  Award,
  Clock,
  Globe,
  MessageCircle,
  ChefHat,
  Scissors
} from 'lucide-react';
import { 
  subscriptionTiers, 
  monthlyBoxes, 
  giftOptions,
  getGiftOptionsByType,
  type SubscriptionTier,
  type MonthlyBox,
  type GiftOption 
} from '@/data/subscriptions';

export default function SubscriptionService() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [selectedInterval, setSelectedInterval] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');

  const upcomingBoxes = monthlyBoxes.slice(0, 3);
  const oneTimeGifts = getGiftOptionsByType('one_time');
  const corporateGifts = getGiftOptionsByType('corporate');

  const getShippingIcon = (shipping: string) => {
    switch (shipping) {
      case 'express': return <Truck className="w-4 h-4 text-golden" />;
      case 'premium': return <Crown className="w-4 h-4 text-traditional-red" />;
      default: return <Package className="w-4 h-4 text-ethiopian-green" />;
    }
  };

  const getLuxuryIcon = (level: string) => {
    switch (level) {
      case 'elite': return <Crown className="w-5 h-5 text-traditional-red" />;
      case 'premium': return <Star className="w-5 h-5 text-golden" />;
      default: return <Heart className="w-5 h-5 text-ethiopian-green" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative py-20 bg-heritage-blend overflow-hidden">
        <div className="absolute inset-0 pattern-traditional opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-burgundy/10 border border-burgundy/20 rounded-full">
              <Crown className="w-4 h-4 text-burgundy" />
              <span className="text-sm font-medium text-burgundy tracking-wider">PREMIUM MEMBERSHIPS</span>
            </div>
            
            <h1 className="font-luxury text-luxury-xl text-white mb-6">
              Subscription &
              <br />
              <span className="text-golden">Luxury Services</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join our exclusive community of spice connoisseurs and receive hand-curated monthly collections
              of the finest Ethiopian and Eritrean spices, delivered to your door with white-glove service.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="subscriptions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-warm-beige/30 h-14">
            <TabsTrigger 
              value="subscriptions" 
              className="data-[state=active]:bg-saffron data-[state=active]:text-white text-lg py-3"
            >
              <Crown className="w-5 h-5 mr-2" />
              Subscriptions
            </TabsTrigger>
            <TabsTrigger 
              value="gifts" 
              className="data-[state=active]:bg-saffron data-[state=active]:text-white text-lg py-3"
            >
              <Gift className="w-5 h-5 mr-2" />
              Gift Collections
            </TabsTrigger>
            <TabsTrigger 
              value="monthly-boxes" 
              className="data-[state=active]:bg-saffron data-[state=active]:text-white text-lg py-3"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Monthly Boxes
            </TabsTrigger>
          </TabsList>

          {/* Subscription Tiers */}
          <TabsContent value="subscriptions" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="font-luxury text-luxury-lg text-burgundy mb-4">
                Choose Your Heritage Journey
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-8">
                Each tier offers a progressively more exclusive and personalized experience,
                from curious beginner to ultimate connoisseur.
              </p>
              
              {/* Interval Selector */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-sm text-charcoal/60">Billing:</span>
                {(['monthly', 'quarterly', 'yearly'] as const).map((interval) => (
                  <Button
                    key={interval}
                    variant={selectedInterval === interval ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedInterval(interval)}
                    className={selectedInterval === interval ? 'bg-saffron hover:bg-cinnamon' : ''}
                  >
                    {interval.charAt(0).toUpperCase() + interval.slice(1)}
                    {interval === 'yearly' && (
                      <Badge className="ml-2 bg-traditional-red hover:bg-traditional-red text-xs">
                        Save 20%
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {subscriptionTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                  className={`relative group ${tier.popular ? 'lg:scale-105' : ''}`}
                >
                  <Card className={`overflow-hidden border-0 luxury-shadow hover:spice-glow transition-luxury h-full ${
                    tier.popular ? 'ring-2 ring-saffron ring-opacity-50' : ''
                  }`}>
                    <CardHeader className="text-center pb-6 relative">
                      {tier.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-saffron hover:bg-saffron text-white px-6 py-1">
                          Most Popular
                        </Badge>
                      )}
                      
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto ${tier.badgeColor} text-white`}>
                        {getLuxuryIcon(tier.luxury_level)}
                      </div>
                      
                      <h3 className="font-luxury text-2xl text-burgundy mb-2">
                        {tier.name}
                      </h3>
                      
                      {tier.nameAmharic && (
                        <p className="text-lg text-copper/80 mb-4">
                          {tier.nameAmharic}
                        </p>
                      )}
                      
                      <div className="mb-4">
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-4xl font-bold text-saffron">
                            ${tier.price}
                          </span>
                          <span className="text-charcoal/60">/{selectedInterval}</span>
                        </div>
                        {tier.originalPrice && (
                          <div className="text-sm text-charcoal/50 line-through">
                            Was ${tier.originalPrice}
                          </div>
                        )}
                      </div>
                      
                      <p className="text-charcoal/70 text-sm leading-relaxed">
                        {tier.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Key Stats */}
                      <div className="grid grid-cols-2 gap-4 p-4 bg-warm-beige/20 rounded-lg">
                        <div className="text-center">
                          <div className="text-xl font-bold text-saffron">{tier.products_per_box}</div>
                          <div className="text-xs text-charcoal/60">Items per box</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            {getShippingIcon(tier.shipping)}
                            <span className="text-xs text-charcoal/60 capitalize">{tier.shipping}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-ethiopian-green mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-charcoal/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Premium Services */}
                      {(tier.personal_concierge || tier.custom_blends || tier.early_access) && (
                        <div className="pt-4 border-t border-charcoal/10">
                          <h4 className="font-medium text-burgundy mb-3 text-sm">Premium Services</h4>
                          <div className="grid grid-cols-3 gap-2">
                            {tier.personal_concierge && (
                              <div className="text-center">
                                <MessageCircle className="w-4 h-4 text-golden mx-auto mb-1" />
                                <span className="text-xs text-charcoal/60">Concierge</span>
                              </div>
                            )}
                            {tier.custom_blends && (
                              <div className="text-center">
                                <ChefHat className="w-4 h-4 text-copper mx-auto mb-1" />
                                <span className="text-xs text-charcoal/60">Custom Blends</span>
                              </div>
                            )}
                            {tier.early_access && (
                              <div className="text-center">
                                <Clock className="w-4 h-4 text-traditional-red mx-auto mb-1" />
                                <span className="text-xs text-charcoal/60">Early Access</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <Button 
                        className={`w-full py-3 font-medium transition-luxury ${
                          tier.luxury_level === 'elite' 
                            ? 'bg-traditional-red hover:bg-burgundy text-white' 
                            : tier.luxury_level === 'premium'
                            ? 'bg-golden hover:bg-copper text-charcoal'
                            : 'bg-saffron hover:bg-cinnamon text-white'
                        }`}
                        onClick={() => setSelectedTier(tier.id)}
                      >
                        {selectedTier === tier.id ? (
                          <span className="flex items-center justify-center gap-2">
                            <Check className="w-4 h-4" />
                            Selected
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Crown className="w-4 h-4" />
                            Choose {tier.name}
                          </span>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Value Propositions */}
            <div className="grid lg:grid-cols-3 gap-8 mt-16 pt-16 border-t border-charcoal/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-saffron" />
                </div>
                <h3 className="font-luxury text-xl text-burgundy mb-4">Authenticity Guaranteed</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Every spice is sourced directly from Ethiopian and Eritrean farmers,
                  with certificates of authenticity and origin documentation.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-golden" />
                </div>
                <h3 className="font-luxury text-xl text-burgundy mb-4">Expert Curation</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Our team of spice masters and cultural experts hand-select each item,
                  ensuring the highest quality and educational value.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-traditional-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-traditional-red" />
                </div>
                <h3 className="font-luxury text-xl text-burgundy mb-4">Cultural Connection</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Beyond spices, you're supporting farming communities and preserving
                  culinary traditions for future generations.
                </p>
              </motion.div>
            </div>
          </TabsContent>

          {/* Gift Collections */}
          <TabsContent value="gifts" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="font-luxury text-luxury-lg text-burgundy mb-4">
                Luxury Gift Collections
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Perfect for special occasions, corporate gifts, or introducing someone special
                to the rich heritage of Ethiopian and Eritrean cuisine.
              </p>
            </div>

            {/* One-Time Gifts */}
            <div className="mb-16">
              <h3 className="font-luxury text-2xl text-burgundy mb-8 text-center">
                Signature Gift Collections
              </h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {oneTimeGifts.map((gift, index) => (
                  <motion.div
                    key={gift.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden border-0 luxury-shadow hover:spice-glow transition-luxury h-full">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-luxury text-xl text-burgundy">
                            {gift.name}
                          </h3>
                          <div className="text-2xl font-bold text-saffron">
                            ${gift.price}
                          </div>
                        </div>
                        <p className="text-charcoal/70 leading-relaxed">
                          {gift.description}
                        </p>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          <h4 className="font-medium text-burgundy text-sm">Includes:</h4>
                          {gift.includes.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3">
                              <Gift className="w-4 h-4 text-golden mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-charcoal/70">{item}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="p-4 bg-golden/10 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Package className="w-4 h-4 text-golden" />
                            <span className="font-medium text-burgundy text-sm">Presentation</span>
                          </div>
                          <p className="text-sm text-charcoal/70">{gift.presentation}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {gift.ideal_for.map((audience, audienceIndex) => (
                            <Badge 
                              key={audienceIndex}
                              variant="outline" 
                              className="text-xs text-copper border-copper"
                            >
                              {audience}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button className="w-full bg-saffron hover:bg-cinnamon text-white">
                          <Gift className="w-4 h-4 mr-2" />
                          Order Gift Collection
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Corporate Gifts */}
            <div className="pt-16 border-t border-charcoal/10">
              <h3 className="font-luxury text-2xl text-burgundy mb-8 text-center">
                Corporate & Executive Gifts
              </h3>
              <div className="grid gap-8">
                {corporateGifts.map((gift, index) => (
                  <motion.div
                    key={gift.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden border-0 luxury-shadow bg-gradient-to-r from-heritage-blend to-burgundy text-white">
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                                <Crown className="w-6 h-6 text-burgundy" />
                              </div>
                              <div>
                                <h3 className="font-luxury text-2xl text-white">
                                  {gift.name}
                                </h3>
                                <p className="text-golden">${gift.price}</p>
                              </div>
                            </div>
                            
                            <p className="text-white/90 leading-relaxed mb-6">
                              {gift.description}
                            </p>
                            
                            <div className="space-y-3">
                              <h4 className="font-medium text-golden">Corporate Features:</h4>
                              {gift.corporate_features?.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-start gap-3">
                                  <Award className="w-4 h-4 text-golden mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-white/80">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                              <h4 className="font-medium text-golden mb-4">Collection Includes:</h4>
                              <div className="space-y-2">
                                {gift.includes.map((item, itemIndex) => (
                                  <div key={itemIndex} className="flex items-start gap-3">
                                    <Sparkles className="w-3 h-3 text-golden mt-1 flex-shrink-0" />
                                    <span className="text-sm text-white/80">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <Button className="w-full bg-golden hover:bg-copper text-burgundy font-medium">
                              Request Corporate Quote
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Monthly Boxes Preview */}
          <TabsContent value="monthly-boxes" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="font-luxury text-luxury-lg text-burgundy mb-4">
                Upcoming Monthly Themes
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Each month features a carefully curated theme that explores different aspects
                of Ethiopian and Eritrean culture, cuisine, and traditions.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {upcomingBoxes.map((box, index) => (
                <motion.div
                  key={box.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="overflow-hidden border-0 luxury-shadow hover:spice-glow transition-luxury h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-saffron hover:bg-saffron text-white">
                          {box.month} {box.year}
                        </Badge>
                        {box.limited_quantity && (
                          <Badge variant="outline" className="text-traditional-red border-traditional-red">
                            Limited: {box.limited_quantity}
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="font-luxury text-xl text-burgundy mb-2">
                        {box.theme}
                      </h3>
                      
                      <p className="text-charcoal/70 leading-relaxed">
                        {box.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 p-4 bg-warm-beige/20 rounded-lg">
                        <div className="text-center">
                          <div className="text-lg font-bold text-saffron">${box.estimated_value}</div>
                          <div className="text-xs text-charcoal/60">Estimated Value</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-copper">{box.recipes_included}</div>
                          <div className="text-xs text-charcoal/60">Recipes Included</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-burgundy mb-2 text-sm">Cultural Focus:</h4>
                        <p className="text-sm text-charcoal/70">{box.cultural_focus}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-burgundy mb-2 text-sm">Heritage Story:</h4>
                        <p className="text-sm text-charcoal/70">{box.story}</p>
                      </div>
                      
                      {box.preview_available ? (
                        <Button variant="outline" className="w-full border-saffron text-saffron hover:bg-saffron hover:text-white">
                          <Coffee className="w-4 h-4 mr-2" />
                          Preview This Box
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full" disabled>
                          <Clock className="w-4 h-4 mr-2" />
                          Coming Soon
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Preview Benefits */}
            <div className="mt-16 pt-16 border-t border-charcoal/10">
              <div className="text-center mb-12">
                <h3 className="font-luxury text-2xl text-burgundy mb-4">
                  What Makes Our Monthly Boxes Special
                </h3>
              </div>
              
              <div className="grid lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Scissors className="w-6 h-6" />,
                    title: 'Hand-Curated',
                    description: 'Every item personally selected by our spice masters'
                  },
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: 'Cultural Stories',
                    description: 'Deep dive into traditions and heritage with each delivery'
                  },
                  {
                    icon: <ChefHat className="w-6 h-6" />,
                    title: 'Expert Recipes',
                    description: 'Traditional and modern recipes from master chefs'
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: 'Premium Quality',
                    description: 'Only the finest spices that meet our strict standards'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4 text-saffron">
                      {benefit.icon}
                    </div>
                    <h4 className="font-medium text-burgundy mb-2">{benefit.title}</h4>
                    <p className="text-sm text-charcoal/70">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}