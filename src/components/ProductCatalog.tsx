import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import ProductDetail from '@/components/ProductDetail';
import { useCart } from '@/contexts/CartContext';
import { 
  Star,
  Heart,
  ShoppingCart,
  Search,
  Filter,
  ArrowUpDown,
  Leaf,
  Award,
  Crown,
  Clock
} from 'lucide-react';
import { products, productCategories, type Product } from '@/data/products';

interface ProductCatalogProps {
  showHeader?: boolean;
}

export default function ProductCatalog({ showHeader = true }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addItem } = useCart();

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.flavorProfile.some(flavor => 
          flavor.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        });
        break;
    }

    return filtered;
  }, [activeCategory, searchTerm, sortBy, priceRange]);

  const ProductCard = ({ product }: { product: Product }) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="group cursor-pointer"
        onClick={() => setSelectedProduct(product)}
      >
        <Card className="overflow-hidden border-0 luxury-shadow hover:spice-glow transition-luxury bg-white h-full">
          <CardContent className="p-0">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden bg-warm-beige/30">
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                {product.category === 'berbere' && '🌶️'}
                {product.category === 'shero' && '🫘'}
                {product.category === 'rare-spices' && '✨'}
                {product.category === 'coffee-tea' && '☕'}
                {product.category === 'honey-condiments' && '🍯'}
                {product.category === 'specialty' && '🏺'}
                {product.category === 'gifts' && '🎁'}
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1">
                {product.exclusive && (
                  <Badge className="bg-burgundy hover:bg-burgundy text-white text-xs">
                    <Crown className="w-3 h-3 mr-1" />
                    Exclusive
                  </Badge>
                )}
                {product.organic && (
                  <Badge className="bg-ethiopian-green hover:bg-ethiopian-green text-white text-xs">
                    <Leaf className="w-3 h-3 mr-1" />
                    Organic
                  </Badge>
                )}
                {product.stockLevel === 'limited' && (
                  <Badge className="bg-traditional-red hover:bg-traditional-red text-white text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    Limited
                  </Badge>
                )}
              </div>

              {/* Wishlist Button */}
              <motion.button
                className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-luxury ${
                  isLiked 
                    ? 'bg-traditional-red/20 text-traditional-red' 
                    : 'bg-white/20 text-charcoal hover:bg-white/40'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked(!isLiked);
                }}
              >
                <Heart 
                  className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} 
                />
              </motion.button>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-saffron/10 opacity-0 group-hover:opacity-100 transition-luxury" />
            </div>

            {/* Product Info */}
            <div className="p-6">
              {/* Region & Origin */}
              <p className="text-xs text-copper mb-2 tracking-wide uppercase">
                {product.region}, {product.origin}
              </p>

              {/* Product Name */}
              <h3 className="font-luxury text-lg text-burgundy mb-2 group-hover:text-saffron transition-luxury">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-charcoal/70 mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) 
                          ? 'fill-golden text-golden' 
                          : 'text-border'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-charcoal/60">
                  ({product.reviewCount})
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1 mb-4">
                {product.badges.slice(0, 2).map((badge) => (
                  <Badge 
                    key={badge} 
                    variant="outline" 
                    className="text-xs border-golden text-golden"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* Price & Actions */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-luxury text-2xl text-saffron">
                    ${product.price}
                  </span>
                  <span className="text-xs text-charcoal/60">
                    {product.weight}
                  </span>
                </div>

                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 border border-saffron text-saffron hover:bg-saffron hover:text-white rounded-lg transition-luxury"
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem(product, 1);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </motion.button>
                  <Button 
                    size="sm" 
                    className="bg-saffron hover:bg-cinnamon text-white opacity-0 group-hover:opacity-100 transition-luxury"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  // Show product detail if a product is selected
  if (selectedProduct) {
    return (
      <ProductDetail 
        product={selectedProduct} 
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {showHeader && (
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-luxury text-luxury-lg text-burgundy mb-4">
            Premium Spice Collection
          </h1>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            Discover authentic Ethiopian and Eritrean spices, from signature berbere blends 
            to rare forest treasures, each carrying centuries of culinary tradition.
          </p>
        </motion.div>
      )}

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/50 w-4 h-4" />
          <Input
            placeholder="Search spices, origins, flavor profiles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-warm-beige/30 border-golden/20 focus:border-saffron"
          />
        </div>

        {/* Sort */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full lg:w-48 bg-warm-beige/30 border-golden/20">
            <ArrowUpDown className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured First</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="name">Name A-Z</SelectItem>
          </SelectContent>
        </Select>

        {/* Filters Toggle */}
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="lg:w-auto border-golden/20 hover:bg-saffron/10"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Category Tabs */}
      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
        <TabsList className="w-full justify-start overflow-x-auto bg-warm-beige/30">
          <TabsTrigger value="all" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
            All Products
          </TabsTrigger>
          {productCategories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="data-[state=active]:bg-saffron data-[state=active]:text-white whitespace-nowrap"
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeCategory} className="mt-8">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-charcoal/70">
              Showing {filteredAndSortedProducts.length} products
              {activeCategory !== 'all' && (
                <span className="ml-1">
                  in {productCategories.find(cat => cat.id === activeCategory)?.name}
                </span>
              )}
            </p>
          </div>

          {/* Products Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredAndSortedProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-luxury text-xl text-burgundy mb-2">
                No products found
              </h3>
              <p className="text-charcoal/70">
                Try adjusting your search terms or filters
              </p>
            </motion.div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}