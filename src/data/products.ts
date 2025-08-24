export interface Product {
  id: string;
  name: string;
  category: 'berbere' | 'shero' | 'rare-spices' | 'coffee-tea' | 'honey-condiments' | 'specialty' | 'gifts' | 'spice-blends' | 'condiments';
  price: number;
  originalPrice?: number;
  weight: string;
  origin: string;
  region: string;
  description: string;
  story: string;
  flavorProfile: string[];
  usageGuide: string;
  farmingPractice: string;
  harvestSeason: string;
  images: string[];
  badges: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockLevel: 'high' | 'medium' | 'low' | 'limited';
  featured: boolean;
  exclusive: boolean;
  organic: boolean;
  fairtrade: boolean;
  processingMethod: string;
  storageInstructions: string;
  shelfLife: string;
  certifications: string[];
}

export const productCategories = [
  {
    id: 'berbere',
    name: 'Signature Berbere Blends',
    description: 'Hand-crafted, single-origin, aged varieties of our signature spice blend',
    icon: '🌶️',
    color: 'saffron'
  },
  {
    id: 'shero',
    name: 'Shero & Legume Products', 
    description: 'Organic chickpea flour, lentil varieties, premium grains',
    icon: '🫘',
    color: 'cinnamon'
  },
  {
    id: 'rare-spices',
    name: 'Rare Spices',
    description: 'Korarima, long pepper, nigella seeds and other treasures',
    icon: '✨',
    color: 'golden'
  },
  {
    id: 'coffee-tea',
    name: 'Coffee & Tea',
    description: 'Single-origin Ethiopian coffee, traditional tea blends',
    icon: '☕',
    color: 'burgundy'
  },
  {
    id: 'honey-condiments',
    name: 'Honey & Condiments',
    description: 'Wild honey, berbere-infused oils, traditional sauces',
    icon: '🍯',
    color: 'golden'
  },
  {
    id: 'specialty',
    name: 'Specialty Items',
    description: 'Injera starters, traditional cookware, serving vessels',
    icon: '🏺',
    color: 'copper'
  },
  {
    id: 'gifts',
    name: 'Gift Collections',
    description: 'Curated spice sets, cooking starter kits, corporate gifts',
    icon: '🎁',
    color: 'rose-gold'
  }
];

export const products: Product[] = [
  // Eritrean Highland Berbere (shuffled to start)
  {
    id: 'berbere-asmara',
    name: 'Asmara Highland Berbere',
    category: 'berbere',
    price: 48,
    weight: '250g',
    origin: 'Eritrea',
    region: 'Central Highlands',
    description: 'Premium berbere from the cool highlands around Asmara, with unique Italian-influenced notes.',
    story: 'Cultivated in the scenic highlands surrounding Asmara, this berbere reflects Eritrea\'s unique culinary heritage where traditional Horn of Africa spices meet subtle Mediterranean influences from the Italian colonial period.',
    flavorProfile: ['Balanced heat', 'Highland terroir', 'Subtle herb notes', 'Clean finish', 'Aromatic complexity'],
    usageGuide: 'Excellent for zigni, traditional stews, and fusion pasta dishes. Use 1-2 tablespoons per serving.',
    farmingPractice: 'High-altitude organic terracing with stone walls',
    harvestSeason: 'November - January',
    images: ['/berbere-hero.jpg'],
    badges: ['Highland Grown', 'Eritrean Heritage', 'Organic'],
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    stockLevel: 'high',
    featured: true,
    exclusive: false,
    organic: true,
    fairtrade: true,
    processingMethod: 'Traditional stone grinding with Italian-influenced techniques',
    storageInstructions: 'Store in airtight container in cool, dry place',
    shelfLife: '2 years',
    certifications: ['USDA Organic', 'Fair Trade Certified']
  },

  // Ethiopian Berbere
  {
    id: 'berbere-gondar',
    name: 'Single-Origin Berbere',
    category: 'berbere',
    price: 45,
    weight: '250g',
    origin: 'Ethiopia',
    region: 'Gondar Region',
    description: 'Our signature berbere blend from the ancient highlands of Gondar, where the spice trade began centuries ago.',
    story: 'Harvested from the fertile highlands of Gondar, this berbere carries the legacy of Ethiopian royalty. The recipe has been passed down through generations of spice masters, creating a complex blend that captures the essence of Ethiopian cuisine.',
    flavorProfile: ['Complex heat', 'Earthy undertones', 'Sweet paprika', 'Warm cardamom', 'Subtle fenugreek'],
    usageGuide: 'Perfect for traditional doro wat, vegetable stews, and meat marinades. Use 1-2 tablespoons per serving.',
    farmingPractice: 'Organic highland cultivation using traditional methods',
    harvestSeason: 'December - February',
    images: ['/berbere-hero.jpg'],
    badges: ['Single Origin', 'Organic', 'Traditional Recipe'],
    rating: 4.9,
    reviewCount: 127,
    inStock: true,
    stockLevel: 'high',
    featured: true,
    exclusive: false,
    organic: true,
    fairtrade: true,
    processingMethod: 'Sun-dried and stone-ground',
    storageInstructions: 'Store in airtight container in cool, dry place',
    shelfLife: '2 years',
    certifications: ['USDA Organic', 'Fair Trade Certified']
  },

  // Eritrean Red Sea Blend
  {
    id: 'red-sea-blend',
    name: 'Red Sea Spice Fusion',
    category: 'spice-blends',
    price: 52,
    weight: '200g',
    origin: 'Eritrea',
    region: 'Massawa Port',
    description: 'Unique spice blend reflecting centuries of Red Sea trading heritage.',
    story: 'Created by the master spice traders of Massawa port, this blend combines traditional Eritrean spices with aromatic treasures from across the Red Sea - Yemen, Sudan, and beyond.',
    flavorProfile: ['Cross-cultural complexity', 'Arabian influences', 'Maritime spice notes', 'Warm and exotic', 'Trading post heritage'],
    usageGuide: 'Perfect for meat dishes, rice preparations, and creating unique fusion cuisines. Use 1 tablespoon per serving.',
    farmingPractice: 'Coastal trading network with sustainable sourcing',
    harvestSeason: 'Year-round trading blend',
    images: ['/berbere-hero.jpg'],
    badges: ['Trading Heritage', 'Cross-Cultural', 'Port Blend'],
    rating: 4.7,
    reviewCount: 64,
    inStock: true,
    stockLevel: 'medium',
    featured: true,
    exclusive: false,
    organic: false,
    fairtrade: true,
    processingMethod: 'Traditional port blending techniques',
    storageInstructions: 'Store in airtight container away from moisture',
    shelfLife: '18 months',
    certifications: ['Fair Trade Certified', 'Massawa Port Authority']
  },

  // Ethiopian Aged Berbere
  {
    id: 'berbere-aged',
    name: 'Aged Berbere Reserve',
    category: 'berbere',
    price: 85,
    weight: '200g',
    origin: 'Ethiopia',
    region: 'Tigray Mountains',
    description: 'A premium 5-year aged berbere with intensified flavors and remarkable depth.',
    story: 'This exceptional berbere has been carefully aged in traditional clay vessels for five years, developing extraordinary complexity and depth. Only 100 jars are produced annually.',
    flavorProfile: ['Intense complexity', 'Deep earthy notes', 'Concentrated heat', 'Wine-like depth', 'Smoky finish'],
    usageGuide: 'Use sparingly - a little goes a long way. Perfect for special occasion dishes and gourmet preparations.',
    farmingPractice: 'Biodynamic cultivation in mountain terraces',
    harvestSeason: 'Limited harvest - November only',
    images: ['/berbere-hero.jpg'],
    badges: ['5-Year Aged', 'Limited Edition', 'Artisanal'],
    rating: 5.0,
    reviewCount: 23,
    inStock: true,
    stockLevel: 'limited',
    featured: true,
    exclusive: true,
    organic: true,
    fairtrade: true,
    processingMethod: 'Traditional clay vessel aging',
    storageInstructions: 'Store in original clay vessel, cool and dark',
    shelfLife: '5 years (improves with age)',
    certifications: ['USDA Organic', 'Demeter Biodynamic']
  },

  // Eritrean Desert Spices
  {
    id: 'desert-survival-blend',
    name: 'Gash-Barka Desert Blend',
    category: 'spice-blends',
    price: 55,
    weight: '180g',
    origin: 'Eritrea',
    region: 'Gash-Barka Plains',
    description: 'Hardy spice blend from Eritrea\'s challenging desert lowlands.',
    story: 'Developed by the Tekle family in the harsh Gash-Barka plains, this blend features drought-resistant spices that have adapted to extreme conditions, creating intense and concentrated flavors.',
    flavorProfile: ['Concentrated intensity', 'Desert-dried essence', 'Survival spices', 'Hardy and robust', 'Ancient resilience'],
    usageGuide: 'Excellent for preserved meats, long-cooking stews, and dishes requiring intense flavor. Use sparingly.',
    farmingPractice: 'Desert permaculture with traditional water harvesting',
    harvestSeason: 'Dry season - February to May',
    images: ['/berbere-hero.jpg'],
    badges: ['Desert Grown', 'Drought Resistant', 'Survival Spices'],
    rating: 4.6,
    reviewCount: 41,
    inStock: true,
    stockLevel: 'limited',
    featured: false,
    exclusive: true,
    organic: true,
    fairtrade: true,
    processingMethod: 'Solar-concentrated drying methods',
    storageInstructions: 'Extremely shelf-stable, store in dry conditions',
    shelfLife: '3 years',
    certifications: ['Desert Agriculture Certified', 'Water Conservation']
  },

  // Ethiopian Wild Korarima
  {
    id: 'korarima',
    name: 'Wild Korarima Pods',
    category: 'rare-spices',
    price: 75,
    weight: '100g',
    origin: 'Ethiopia',
    region: 'Kaffa Forest',
    description: 'Ethiopian cardamom pods harvested from wild forest trees.',
    story: 'Hand-picked from ancient wild korarima trees in the sacred forests of Kaffa, where coffee was first discovered. This rare spice has been used in Ethiopian cuisine for over 1000 years.',
    flavorProfile: ['Intensely aromatic', 'Citrusy', 'Pine-like', 'Complex cardamom', 'Forest essence'],
    usageGuide: 'Crush pods lightly before use. Essential for coffee ceremonies and premium spice blends. Use 2-3 pods per dish.',
    farmingPractice: 'Wild forest harvesting with conservation practices',
    harvestSeason: 'September - November (limited)',
    images: ['/berbere-hero.jpg'],
    badges: ['Wild Harvested', 'Sacred Forest', 'Ultra Rare'],
    rating: 5.0,
    reviewCount: 15,
    inStock: true,
    stockLevel: 'limited',
    featured: true,
    exclusive: true,
    organic: true,
    fairtrade: false,
    processingMethod: 'Wild forest hand-harvesting',
    storageInstructions: 'Store whole pods in airtight container away from light',
    shelfLife: '3 years (whole pods)',
    certifications: ['Wild Harvested Certified', 'Forest Conservation']
  },

  // Eritrean Coffee
  {
    id: 'eritrean-coffee-blend',
    name: 'Eritrean Highland Coffee',
    category: 'coffee-tea',
    price: 58,
    weight: '500g',
    origin: 'Eritrea',
    region: 'Asmara Highlands',
    description: 'Premium coffee from Eritrea\'s highland plantations with Italian roasting influence.',
    story: 'Grown in the cool highlands around Asmara and roasted using techniques that blend traditional methods with Italian colonial coffee culture, creating Eritrea\'s distinctive coffee character.',
    flavorProfile: ['Medium body', 'Chocolate notes', 'Italian influence', 'Highland brightness', 'Balanced acidity'],
    usageGuide: 'Excellent for espresso, moka pot, or traditional Eritrean coffee ceremony. Medium-dark roast.',
    farmingPractice: 'Highland organic cultivation with Italian-influenced processing',
    harvestSeason: 'November - February',
    images: ['/coffee-ceremony.png'],
    badges: ['Highland Grown', 'Italian Influenced', 'Artisan Roasted'],
    rating: 4.7,
    reviewCount: 118,
    inStock: true,
    stockLevel: 'high',
    featured: true,
    exclusive: false,
    organic: true,
    fairtrade: true,
    processingMethod: 'Washed process with Italian-style roasting',
    storageInstructions: 'Store in airtight container away from light and heat',
    shelfLife: '12 months whole bean, 2 weeks ground',
    certifications: ['USDA Organic', 'Fair Trade Certified']
  },

  // Ethiopian Family Berbere
  {
    id: 'berbere-mild',
    name: 'Mild Family Berbere',
    category: 'berbere',
    price: 35,
    weight: '300g',
    origin: 'Ethiopia',
    region: 'Amhara Province',
    description: 'A gentler berbere blend perfect for families and those new to Ethiopian cuisine.',
    story: 'Created for families wanting to introduce children to Ethiopian flavors, this mild version maintains authenticity while reducing heat intensity.',
    flavorProfile: ['Mild warmth', 'Sweet paprika dominant', 'Gentle spices', 'Family-friendly', 'Aromatic'],
    usageGuide: 'Ideal for beginners, children, and mild palates. Great for vegetables and lighter dishes.',
    farmingPractice: 'Sustainable family farming cooperatives',
    harvestSeason: 'Year-round harvest',
    images: ['/berbere-hero.jpg'],
    badges: ['Family Friendly', 'Mild Heat', 'Cooperative Grown'],
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    stockLevel: 'high',
    featured: false,
    exclusive: false,
    organic: true,
    fairtrade: true,
    processingMethod: 'Careful heat reduction process',
    storageInstructions: 'Store in airtight container away from light',
    shelfLife: '18 months',
    certifications: ['USDA Organic', 'Fair Trade Certified']
  },

  // Eritrean Honey
  {
    id: 'eritrean-highland-honey',
    name: 'Eritrean Highland Honey',
    category: 'honey-condiments',
    price: 45,
    weight: '400g',
    origin: 'Eritrea',
    region: 'Central Highlands',
    description: 'Pure highland honey with distinctive Eritrean floral characteristics.',
    story: 'Harvested from highland apiaries around Asmara, where bees feast on unique mountain wildflowers and Italian-introduced herbs, creating honey with distinctive complexity.',
    flavorProfile: ['Highland floral', 'Herb-influenced', 'Complex sweetness', 'Mountain essence', 'Clean finish'],
    usageGuide: 'Perfect for tea, traditional honey wine, and as a natural sweetener. Contains beneficial mountain flora.',
    farmingPractice: 'Highland beekeeping with sustainable hive management',
    harvestSeason: 'April - June (highland flowering season)',
    images: ['/coffee-ceremony.png'],
    badges: ['Highland Harvested', 'Wildflower', 'Sustainable'],
    rating: 4.8,
    reviewCount: 72,
    inStock: true,
    stockLevel: 'medium',
    featured: true,
    exclusive: false,
    organic: true,
    fairtrade: true,
    processingMethod: 'Cold extraction, minimal filtering',
    storageInstructions: 'Store at room temperature, natural crystallization normal',
    shelfLife: 'Indefinite (improves with age)',
    certifications: ['Highland Honey Certified', 'Sustainable Beekeeping']
  },

  // Ethiopian Yellow Split Pea Flour
  {
    id: 'shero-yellow',
    name: 'Organic Yellow Split Pea Flour',
    category: 'shero',
    price: 25,
    weight: '500g',
    origin: 'Ethiopia',
    region: 'Shewa Province',
    description: 'Premium yellow split pea flour for authentic shero preparation.',
    story: 'Ground from organically grown yellow split peas using traditional stone mills, preserving the authentic texture and nutritional value.',
    flavorProfile: ['Nutty', 'Earthy', 'Protein-rich', 'Creamy when cooked'],
    usageGuide: 'Mix with berbere and water to create traditional shero. Also excellent for protein-rich additions to stews.',
    farmingPractice: 'Organic crop rotation with natural fertilizers',
    harvestSeason: 'March - May',
    images: ['/berbere-hero.jpg'],
    badges: ['Stone Ground', 'High Protein', 'Traditional'],
    rating: 4.6,
    reviewCount: 67,
    inStock: true,
    stockLevel: 'high',
    featured: false,
    exclusive: false,
    organic: true,
    fairtrade: true,
    processingMethod: 'Traditional stone milling',
    storageInstructions: 'Store in airtight container in cool, dry place',
    shelfLife: '12 months',
    certifications: ['USDA Organic']
  },

  // Eritrean Berbere Pasta Sauce
  {
    id: 'berbere-pasta-sauce',
    name: 'Eritrean Berbere Pasta Sauce',
    category: 'condiments',
    price: 28,
    weight: '350g',
    origin: 'Eritrea',
    region: 'Asmara Urban',
    description: 'Ready-to-use pasta sauce blending Italian techniques with Eritrean berbere.',
    story: 'A unique fusion born from Eritrea\'s Italian colonial heritage, this sauce brings together traditional berbere with Italian tomato sauce techniques, representing modern Eritrean cuisine.',
    flavorProfile: ['Tomato-berbere fusion', 'Italian-Eritrean blend', 'Rich and complex', 'Ready-to-use', 'Cultural fusion'],
    usageGuide: 'Use directly with pasta, or as base for meat and vegetable dishes. Heat and serve.',
    farmingPractice: 'Urban artisanal production with sourced ingredients',
    harvestSeason: 'Year-round production',
    images: ['/berbere-hero.jpg'],
    badges: ['Fusion Cuisine', 'Ready-to-Use', 'Cultural Heritage'],
    rating: 4.5,
    reviewCount: 56,
    inStock: true,
    stockLevel: 'high',
    featured: false,
    exclusive: false,
    organic: false,
    fairtrade: true,
    processingMethod: 'Small-batch artisanal sauce making',
    storageInstructions: 'Refrigerate after opening, use within 2 weeks',
    shelfLife: '18 months unopened',
    certifications: ['Artisan Made', 'Cultural Heritage']
  },

  // Ethiopian Chef's Blend
  {
    id: 'berbere-chef',
    name: 'Chef\'s Special Blend',
    category: 'berbere',
    price: 60,
    weight: '250g',
    origin: 'Ethiopia',
    region: 'Multi-region blend',
    description: 'A sophisticated blend crafted in collaboration with renowned Ethiopian chefs.',
    story: 'Developed with master chefs from Addis Ababa\'s finest restaurants, this blend combines spices from multiple regions for ultimate versatility.',
    flavorProfile: ['Chef-balanced', 'Restaurant quality', 'Versatile heat', 'Professional grade', 'Consistent'],
    usageGuide: 'Professional-grade blend suitable for all Ethiopian dishes. Recommended by top chefs worldwide.',
    farmingPractice: 'Multi-region sourcing from premium growers',
    harvestSeason: 'Peak season selection',
    images: ['/berbere-hero.jpg'],
    badges: ['Chef Approved', 'Restaurant Grade', 'Multi-Region'],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    stockLevel: 'medium',
    featured: true,
    exclusive: false,
    organic: true,
    fairtrade: true,
    processingMethod: 'Professional blending techniques',
    storageInstructions: 'Professional storage requirements - airtight and cool',
    shelfLife: '2 years',
    certifications: ['USDA Organic', 'Chef Endorsed']
  },

  // Ethiopian Coffee
  {
    id: 'yirgacheffe-coffee',
    name: 'Single-Origin Yirgacheffe',
    category: 'coffee-tea',
    price: 65,
    weight: '500g',
    origin: 'Ethiopia',
    region: 'Yirgacheffe',
    description: 'Premium single-origin coffee from the birthplace of coffee.',
    story: 'From the legendary coffee region of Yirgacheffe, where the coffee plant was first discovered by a goat herder named Kaldi over 1000 years ago.',
    flavorProfile: ['Floral', 'Wine-like acidity', 'Bright citrus', 'Tea-like body', 'Clean finish'],
    usageGuide: 'Best enjoyed as pour-over or Ethiopian coffee ceremony. Medium roast preserves delicate flavors.',
    farmingPractice: 'Shade-grown organic cultivation at 1800-2000m elevation',
    harvestSeason: 'October - January',
    images: ['/coffee-ceremony.png'],
    badges: ['Birthplace of Coffee', 'Single Estate', 'Shade Grown'],
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
    stockLevel: 'high',
    featured: true,
    exclusive: false,
    organic: true,
    fairtrade: true,
    processingMethod: 'Washed process, sun-dried on raised beds',
    storageInstructions: 'Store in airtight container away from light and heat',
    shelfLife: '12 months whole bean, 2 weeks ground',
    certifications: ['USDA Organic', 'Fair Trade Certified', 'Rainforest Alliance']
  },

  // Eritrean Heritage Collection
  {
    id: 'eritrean-heritage-collection',
    name: 'Eritrean Heritage Collection',
    category: 'gifts',
    price: 165,
    weight: 'Multi-item set',
    origin: 'Eritrea',
    region: 'Multi-regional collection',
    description: 'Curated collection showcasing the unique spice heritage of Eritrea.',
    story: 'A journey through Eritrean spice culture, from highland berbere to Red Sea trading spices, presented in beautiful packaging with cultural stories.',
    flavorProfile: ['Eritrean spice journey', 'Highland to coast', 'Cultural exploration'],
    usageGuide: 'Includes recipes for traditional and fusion dishes. Perfect for discovering Eritrean cuisine.',
    farmingPractice: 'Multiple Eritrean sources with cultural authenticity focus',
    harvestSeason: 'Year-round curation',
    images: ['/coffee-ceremony.png'],
    badges: ['Cultural Heritage', 'Curated Selection', 'Educational'],
    rating: 4.8,
    reviewCount: 43,
    inStock: true,
    stockLevel: 'medium',
    featured: true,
    exclusive: false,
    organic: true,
    fairtrade: true,
    processingMethod: 'Hand-selected cultural curation',
    storageInstructions: 'Individual storage instructions included',
    shelfLife: 'Varies by product (18-30 months)',
    certifications: ['Cultural Heritage Certified', 'Educational Collection']
  },

  // Ethiopian Forest Honey
  {
    id: 'forest-honey',
    name: 'Wild Forest Honey',
    category: 'honey-condiments',
    price: 40,
    weight: '350g',
    origin: 'Ethiopia',
    region: 'Kaffa Forest',
    description: 'Raw, unfiltered honey from ancient forest beehives.',
    story: 'Harvested by traditional beekeepers from wild forest hives, this honey captures the essence of Ethiopia\'s ancient forests with complex floral notes.',
    flavorProfile: ['Complex floral', 'Raw and unfiltered', 'Forest essence', 'Natural enzymes', 'Ancient sweetness'],
    usageGuide: 'Perfect for tea, traditional honey wine (tej), and as a natural sweetener. Contains beneficial enzymes.',
    farmingPractice: 'Wild forest beekeeping with traditional methods',
    harvestSeason: 'May - July (dry season)',
    images: ['/coffee-ceremony.png'],
    badges: ['Wild Harvested', 'Raw & Unfiltered', 'Ancient Forest'],
    rating: 4.8,
    reviewCount: 95,
    inStock: true,
    stockLevel: 'medium',
    featured: true,
    exclusive: false,
    organic: true,
    fairtrade: true,
    processingMethod: 'Traditional extraction, no heating or filtering',
    storageInstructions: 'Store at room temperature, may crystallize naturally',
    shelfLife: 'Indefinite (improves with age)',
    certifications: ['Raw Honey Certified', 'Forest Conservation']
  },

  // Ethiopian Heritage Collection
  {
    id: 'heritage-collection',
    name: 'Heritage Spice Collection',
    category: 'gifts',
    price: 185,
    weight: 'Multi-item set',
    origin: 'Ethiopia',
    region: 'Multi-regional collection',
    description: 'Curated collection of premium Ethiopian spices in luxury presentation.',
    story: 'A carefully curated journey through Ethiopian spice heritage, featuring our finest selections in a beautiful wooden presentation box.',
    flavorProfile: ['Complete spice journey', 'Traditional to rare', 'Educational tasting'],
    usageGuide: 'Includes tasting guide and traditional recipes. Perfect for culinary exploration.',
    farmingPractice: 'Multiple premium sources with sustainability focus',
    harvestSeason: 'Year-round curation',
    images: ['/coffee-ceremony.png'],
    badges: ['Curated Selection', 'Luxury Packaging', 'Educational'],
    rating: 4.9,
    reviewCount: 78,
    inStock: true,
    stockLevel: 'medium',
    featured: true,
    exclusive: false,
    organic: true,
    fairtrade: true,
    processingMethod: 'Hand-selected and packaged',
    storageInstructions: 'Individual storage instructions included',
    shelfLife: 'Varies by product (18-36 months)',
    certifications: ['Gift Collection Certified']
  }
];

// Helper functions
export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getExclusiveProducts = () => {
  return products.filter(product => product.exclusive);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};