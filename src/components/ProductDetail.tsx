import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { 
  Star,
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Shield,
  Truck,
  MapPin,
  Calendar,
  Award,
  Leaf,
  Users,
  Crown,
  BookOpen,
  Coffee,
  Clock,
  Package
} from 'lucide-react';
import { type Product } from '@/data/products';

interface ProductDetailProps {
  product: Product;
  onBack?: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  const flavorStrengths = [
    { name: 'Heat Level', value: product.category === 'berbere' ? 85 : 20, color: 'traditional-red' },
    { name: 'Complexity', value: product.exclusive ? 95 : 70, color: 'saffron' },
    { name: 'Aromatic', value: product.category === 'rare-spices' ? 90 : 75, color: 'golden' },
    { name: 'Earthiness', value: product.organic ? 80 : 60, color: 'cinnamon' }
  ];

  const certificationIcons = {
    'USDA Organic': <Leaf className="w-4 h-4" />,
    'Fair Trade Certified': <Users className="w-4 h-4" />,
    'Demeter Biodynamic': <Award className="w-4 h-4" />,
    'Wild Harvested Certified': <Crown className="w-4 h-4" />
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        {onBack && (
          <motion.button
            onClick={onBack}
            className="mb-8 text-burgundy hover:text-saffron transition-luxury"
            whileHover={{ x: -5 }}
          >
            ← Back to Products
          </motion.button>
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="aspect-square bg-warm-beige/30 rounded-lg overflow-hidden luxury-shadow mb-4 relative">
              <div className="absolute inset-0 flex items-center justify-center text-9xl">
                {product.category === 'berbere' && '🌶️'}
                {product.category === 'shero' && '🫘'}
                {product.category === 'rare-spices' && '✨'}
                {product.category === 'coffee-tea' && '☕'}
                {product.category === 'honey-condiments' && '🍯'}
                {product.category === 'specialty' && '🏺'}
                {product.category === 'gifts' && '🎁'}
              </div>
              
              {/* Premium Badge Overlay */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.exclusive && (
                  <Badge className="bg-burgundy hover:bg-burgundy text-white">
                    <Crown className="w-3 h-3 mr-1" />
                    Exclusive
                  </Badge>
                )}
                {product.organic && (
                  <Badge className="bg-ethiopian-green hover:bg-ethiopian-green text-white">
                    <Leaf className="w-3 h-3 mr-1" />
                    Organic
                  </Badge>
                )}
              </div>
            </div>

            {/* Product Badges */}
            <div className="flex flex-wrap gap-2">
              {product.badges.map((badge) => (
                <Badge 
                  key={badge} 
                  variant="outline" 
                  className="border-golden text-golden"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <p className="text-sm text-copper tracking-wide uppercase mb-2">
                {product.region}, {product.origin}
              </p>
              <h1 className="font-luxury text-luxury-lg text-burgundy mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) 
                        ? 'fill-golden text-golden' 
                        : 'text-border'
                    }`} 
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal/60">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="font-luxury text-4xl text-saffron">
                ${product.price}
              </span>
              <div className="text-sm text-charcoal/60">
                <p>{product.weight}</p>
                <p>Free shipping worldwide</p>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-golden/20 rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-warm-beige/50 transition-luxury"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-warm-beige/50 transition-luxury"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <Button 
                size="lg" 
                className="flex-1 bg-spice-sunset hover:bg-heritage-blend text-white"
                onClick={() => addItem(product, quantity)}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>

              <motion.button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 rounded-lg border transition-luxury ${
                  isLiked 
                    ? 'border-traditional-red bg-traditional-red/10 text-traditional-red' 
                    : 'border-golden/20 hover:border-golden text-charcoal'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </motion.button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-warm-beige/30 rounded-lg">
                <Truck className="w-5 h-5 mx-auto mb-2 text-saffron" />
                <p className="text-xs font-medium">Free Shipping</p>
                <p className="text-xs text-charcoal/60">Worldwide</p>
              </div>
              <div className="p-3 bg-warm-beige/30 rounded-lg">
                <Shield className="w-5 h-5 mx-auto mb-2 text-ethiopian-green" />
                <p className="text-xs font-medium">Authentic</p>
                <p className="text-xs text-charcoal/60">Guaranteed</p>
              </div>
              <div className="p-3 bg-warm-beige/30 rounded-lg">
                <Package className="w-5 h-5 mx-auto mb-2 text-copper" />
                <p className="text-xs font-medium">Premium</p>
                <p className="text-xs text-charcoal/60">Packaging</p>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                product.stockLevel === 'high' ? 'bg-ethiopian-green' :
                product.stockLevel === 'medium' ? 'bg-golden' :
                product.stockLevel === 'low' ? 'bg-cinnamon' : 'bg-traditional-red'
              }`} />
              <span className="text-sm">
                {product.stockLevel === 'limited' ? 'Limited availability' : 
                 product.stockLevel === 'low' ? 'Low stock' :
                 product.stockLevel === 'medium' ? 'In stock' : 'In stock'}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Detailed Information Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Tabs defaultValue="story" className="w-full">
            <TabsList className="grid w-full grid-cols-6 bg-warm-beige/30">
              <TabsTrigger value="story" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
                <BookOpen className="w-4 h-4 mr-2" />
                Story
              </TabsTrigger>
              <TabsTrigger value="flavor" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
                <Coffee className="w-4 h-4 mr-2" />
                Flavor
              </TabsTrigger>
              <TabsTrigger value="origin" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
                <MapPin className="w-4 h-4 mr-2" />
                Origin
              </TabsTrigger>
              <TabsTrigger value="usage" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
                <Users className="w-4 h-4 mr-2" />
                Usage
              </TabsTrigger>
              <TabsTrigger value="harvest" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Harvest
              </TabsTrigger>
              <TabsTrigger value="care" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
                <Package className="w-4 h-4 mr-2" />
                Care
              </TabsTrigger>
            </TabsList>

            {/* Story Tab */}
            <TabsContent value="story" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-luxury text-xl text-burgundy">
                    Heritage Story
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed text-lg mb-6">
                    {product.story}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-burgundy mb-3">Farming Practice</h4>
                      <p className="text-charcoal/70">{product.farmingPractice}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-burgundy mb-3">Processing Method</h4>
                      <p className="text-charcoal/70">{product.processingMethod}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Flavor Profile Tab */}
            <TabsContent value="flavor" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-luxury text-xl text-burgundy">
                    Flavor Profile & Intensity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-burgundy mb-4">Flavor Notes</h4>
                      <div className="space-y-2">
                        {product.flavorProfile.map((flavor, index) => (
                          <motion.div
                            key={flavor}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2 p-2 bg-warm-beige/20 rounded"
                          >
                            <div className="w-2 h-2 bg-saffron rounded-full" />
                            <span>{flavor}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-burgundy mb-4">Intensity Levels</h4>
                      <div className="space-y-4">
                        {flavorStrengths.map((strength) => (
                          <div key={strength.name}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">{strength.name}</span>
                              <span className="text-sm font-medium">{strength.value}%</span>
                            </div>
                            <Progress 
                              value={strength.value} 
                              className="h-2"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Origin Tab */}
            <TabsContent value="origin" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-luxury text-xl text-burgundy">
                    Origin & Terroir
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-warm-beige/20 rounded-lg">
                      <MapPin className="w-8 h-8 mx-auto mb-2 text-saffron" />
                      <h4 className="font-semibold text-burgundy">{product.region}</h4>
                      <p className="text-sm text-charcoal/70">{product.origin}</p>
                    </div>
                    <div className="text-center p-4 bg-warm-beige/20 rounded-lg">
                      <Calendar className="w-8 h-8 mx-auto mb-2 text-golden" />
                      <h4 className="font-semibold text-burgundy">Harvest Season</h4>
                      <p className="text-sm text-charcoal/70">{product.harvestSeason}</p>
                    </div>
                    <div className="text-center p-4 bg-warm-beige/20 rounded-lg">
                      <Leaf className="w-8 h-8 mx-auto mb-2 text-ethiopian-green" />
                      <h4 className="font-semibold text-burgundy">Organic</h4>
                      <p className="text-sm text-charcoal/70">{product.organic ? 'Certified' : 'Traditional'}</p>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="font-semibold text-burgundy mb-3">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.map((cert) => (
                        <Badge 
                          key={cert} 
                          variant="outline" 
                          className="border-ethiopian-green text-ethiopian-green"
                        >
                          {certificationIcons[cert as keyof typeof certificationIcons]}
                          <span className="ml-1">{cert}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Usage Tab */}
            <TabsContent value="usage" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-luxury text-xl text-burgundy">
                    Culinary Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-charcoal/80 leading-relaxed mb-6">
                      {product.usageGuide}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-burgundy mb-3">Traditional Uses</h4>
                        <ul className="space-y-2 text-charcoal/70">
                          <li>• Ethiopian doro wat (chicken stew)</li>
                          <li>• Vegetable and lentil dishes</li>
                          <li>• Meat marinades and rubs</li>
                          <li>• Traditional coffee ceremonies</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-burgundy mb-3">Modern Applications</h4>
                        <ul className="space-y-2 text-charcoal/70">
                          <li>• Fusion cuisine spice blends</li>
                          <li>• Artisanal condiment creation</li>
                          <li>• International fine dining</li>
                          <li>• Specialty beverage infusions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Harvest Tab */}
            <TabsContent value="harvest" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-luxury text-xl text-burgundy">
                    Harvest & Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-burgundy mb-3">Harvest Information</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 bg-warm-beige/20 rounded">
                          <Calendar className="w-5 h-5 text-saffron" />
                          <div>
                            <p className="font-medium">Season</p>
                            <p className="text-sm text-charcoal/70">{product.harvestSeason}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-warm-beige/20 rounded">
                          <Clock className="w-5 h-5 text-golden" />
                          <div>
                            <p className="font-medium">Shelf Life</p>
                            <p className="text-sm text-charcoal/70">{product.shelfLife}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold text-burgundy mb-3">Processing Method</h4>
                      <p className="text-charcoal/70 leading-relaxed">
                        {product.processingMethod}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Care Tab */}
            <TabsContent value="care" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-luxury text-xl text-burgundy">
                    Storage & Care Instructions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-burgundy mb-3">Optimal Storage</h4>
                      <p className="text-charcoal/70 leading-relaxed mb-4">
                        {product.storageInstructions}
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-warm-beige/20 rounded-lg">
                          <div className="w-12 h-12 mx-auto mb-2 bg-burgundy/10 rounded-full flex items-center justify-center">
                            <Package className="w-6 h-6 text-burgundy" />
                          </div>
                          <h5 className="font-medium text-burgundy">Airtight Container</h5>
                          <p className="text-xs text-charcoal/60 mt-1">Essential for freshness</p>
                        </div>
                        <div className="text-center p-4 bg-warm-beige/20 rounded-lg">
                          <div className="w-12 h-12 mx-auto mb-2 bg-saffron/10 rounded-full flex items-center justify-center">
                            <Shield className="w-6 h-6 text-saffron" />
                          </div>
                          <h5 className="font-medium text-burgundy">Cool & Dry Place</h5>
                          <p className="text-xs text-charcoal/60 mt-1">Away from heat and light</p>
                        </div>
                        <div className="text-center p-4 bg-warm-beige/20 rounded-lg">
                          <div className="w-12 h-12 mx-auto mb-2 bg-golden/10 rounded-full flex items-center justify-center">
                            <Clock className="w-6 h-6 text-golden" />
                          </div>
                          <h5 className="font-medium text-burgundy">Best Before</h5>
                          <p className="text-xs text-charcoal/60 mt-1">{product.shelfLife}</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold text-burgundy mb-3">Freshness Tips</h4>
                      <ul className="space-y-2 text-charcoal/70">
                        <li>• Store in original packaging until opened</li>
                        <li>• Use clean, dry spoon when measuring</li>
                        <li>• Avoid direct sunlight and humidity</li>
                        <li>• Grind whole spices fresh for best flavor</li>
                        <li>• Keep away from strong odors</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}