export interface SubscriptionTier {
  id: string;
  name: string;
  nameAmharic?: string;
  price: number;
  originalPrice?: number;
  interval: 'monthly' | 'quarterly' | 'yearly';
  description: string;
  features: string[];
  benefits: string[];
  products_per_box: number;
  shipping: 'free' | 'premium' | 'express';
  exclusive_access: boolean;
  badge: string;
  badgeColor: string;
  popular?: boolean;
  luxury_level: 'standard' | 'premium' | 'elite';
  cultural_content: boolean;
  personal_concierge: boolean;
  custom_blends: boolean;
  early_access: boolean;
}

export interface MonthlyBox {
  id: string;
  month: string;
  year: number;
  theme: string;
  description: string;
  featured_products: string[];
  cultural_focus: string;
  recipes_included: number;
  story: string;
  estimated_value: number;
  limited_quantity?: number;
  preview_available: boolean;
}

export interface GiftOption {
  id: string;
  name: string;
  type: 'subscription' | 'one_time' | 'corporate';
  description: string;
  price: number;
  duration?: string;
  includes: string[];
  presentation: string;
  customization_available: boolean;
  corporate_features?: string[];
  ideal_for: string[];
  luxury_packaging: boolean;
}

export const subscriptionTiers: SubscriptionTier[] = [
  {
    id: 'spice-explorer',
    name: 'Spice Explorer',
    nameAmharic: 'ቅመም ተጓዥ',
    price: 39,
    originalPrice: 49,
    interval: 'monthly',
    description: 'Perfect introduction to authentic Ethiopian and Eritrean flavors for curious home cooks.',
    features: [
      '3-4 premium spices per box',
      'Recipe cards with cultural stories',
      'Monthly newsletter with heritage tales',
      'Access to online recipe library',
      'Free standard shipping'
    ],
    benefits: [
      'Discover new authentic flavors monthly',
      'Learn traditional cooking techniques',
      'Connect with Ethiopian/Eritrean culture',
      'Build your spice collection gradually'
    ],
    products_per_box: 4,
    shipping: 'free',
    exclusive_access: false,
    badge: 'Popular',
    badgeColor: 'bg-ethiopian-green',
    popular: true,
    luxury_level: 'standard',
    cultural_content: true,
    personal_concierge: false,
    custom_blends: false,
    early_access: false
  },
  {
    id: 'heritage-connoisseur',
    name: 'Heritage Connoisseur',
    nameAmharic: 'ቅርስ ባለዕውቀት',
    price: 79,
    originalPrice: 99,
    interval: 'monthly',
    description: 'Curated selection of rare and premium spices for serious culinary enthusiasts and cultural aficionados.',
    features: [
      '6-8 premium and rare spices',
      'Limited edition and seasonal items',
      'Personal spice consultant access',
      'Exclusive recipe collection',
      'Premium packaging and presentation',
      'Free express shipping',
      'Early access to new products'
    ],
    benefits: [
      'Access to rare and limited spices',
      'Personal consultation with spice experts',
      'Priority customer service',
      'Exclusive community access',
      'Professional-grade ingredient quality'
    ],
    products_per_box: 7,
    shipping: 'express',
    exclusive_access: true,
    badge: 'Premium',
    badgeColor: 'bg-golden',
    luxury_level: 'premium',
    cultural_content: true,
    personal_concierge: true,
    custom_blends: true,
    early_access: true
  },
  {
    id: 'royal-collection',
    name: 'Royal Collection',
    nameAmharic: 'ንጉሥ ስብስብ',
    price: 149,
    originalPrice: 199,
    interval: 'monthly',
    description: 'The ultimate luxury experience for those who demand the finest Ethiopian and Eritrean culinary treasures.',
    features: [
      '10-12 ultra-premium spices and specialty items',
      'Hand-selected by master spice curator',
      'Exclusive aged and reserve blends',
      'Personal video consultation monthly',
      'Custom blend creation service',
      'Luxury presentation box',
      'White-glove delivery service',
      'Private chef recipe consultations',
      'Access to limited artisan collaborations'
    ],
    benefits: [
      'Highest quality spices available',
      'Personalized curation and service',
      'Access to unreleased products',
      'Direct connection to heritage artisans',
      'VIP treatment and recognition',
      'Investment-grade spice collection'
    ],
    products_per_box: 11,
    shipping: 'premium',
    exclusive_access: true,
    badge: 'Elite',
    badgeColor: 'bg-traditional-red',
    luxury_level: 'elite',
    cultural_content: true,
    personal_concierge: true,
    custom_blends: true,
    early_access: true
  }
];

export const monthlyBoxes: MonthlyBox[] = [
  {
    id: 'january-2024',
    month: 'January',
    year: 2024,
    theme: 'New Year, Ancient Flavors',
    description: 'Start the year with traditional blends used in Ethiopian New Year celebrations and blessing ceremonies.',
    featured_products: ['aged-berbere-reserve', 'ceremonial-incense', 'new-year-blend'],
    cultural_focus: 'Enkutatash (Ethiopian New Year) traditions and blessing spices',
    recipes_included: 3,
    story: 'Learn about Enkutatash celebrations and the role of specific spices in blessing ceremonies and traditional feasts.',
    estimated_value: 125,
    preview_available: true
  },
  {
    id: 'february-2024',
    month: 'February',
    year: 2024,
    theme: 'Love & Warmth',
    description: 'Romantic spices and warming blends perfect for cold weather and intimate dinners.',
    featured_products: ['cardamom-love-blend', 'warming-tea-spices', 'romantic-honey'],
    cultural_focus: 'Traditional courtship customs and wedding feast preparations',
    recipes_included: 4,
    story: 'Discover how Ethiopian families use specific spices in wedding preparations and romantic meals.',
    estimated_value: 98,
    preview_available: true
  },
  {
    id: 'march-2024',
    month: 'March',
    year: 2024,
    theme: 'Spring Awakening',
    description: 'Fresh, bright spices that celebrate the renewal of spring and the growing season.',
    featured_products: ['spring-berbere', 'fresh-herbs', 'green-coffee'],
    cultural_focus: 'Spring planting rituals and fresh harvest celebrations',
    recipes_included: 5,
    story: 'Experience the traditional spring blessing ceremonies and the spices used to welcome new growth.',
    estimated_value: 110,
    limited_quantity: 500,
    preview_available: false
  }
];

export const giftOptions: GiftOption[] = [
  {
    id: 'heritage-starter-kit',
    name: 'Heritage Starter Kit',
    type: 'one_time',
    description: 'Perfect introduction to Ethiopian and Eritrean cuisine with essential spices and comprehensive cooking guide.',
    price: 125,
    includes: [
      'Single-Origin Berbere (250g)',
      'Organic Chickpea Flour (500g)',
      'Wild Forest Honey (350g)',
      'Traditional recipe book (40 recipes)',
      'Cultural heritage guide',
      'Luxury storage containers'
    ],
    presentation: 'Handcrafted wooden box with Ethiopian textile lining',
    customization_available: true,
    ideal_for: ['Cooking enthusiasts', 'Cultural explorers', 'Newlyweds', 'College students'],
    luxury_packaging: true
  },
  {
    id: 'corporate-executive-collection',
    name: 'Corporate Executive Collection',
    type: 'corporate',
    description: 'Prestigious corporate gift showcasing Ethiopian heritage and luxury, perfect for international business relationships.',
    price: 350,
    includes: [
      'Aged Berbere Reserve (200g)',
      'Premium coffee selection (1kg)',
      'Wild honey collection (3 varieties)',
      'Luxury spice set (8 rare spices)',
      'Executive cookbook',
      'Cultural heritage documentary',
      'Personalized message options'
    ],
    presentation: 'Mahogany presentation box with gold Ethiopian emblem',
    customization_available: true,
    corporate_features: [
      'Bulk ordering discounts',
      'Corporate branding options',
      'White-glove delivery service',
      'Dedicated account management',
      'Custom messaging and cards'
    ],
    ideal_for: ['Corporate gifts', 'International partnerships', 'Executive appreciation', 'Cultural diplomacy'],
    luxury_packaging: true
  },
  {
    id: 'three-month-subscription-gift',
    name: '3-Month Subscription Gift',
    type: 'subscription',
    description: 'Three months of premium spice discovery, allowing recipients to experience the full range of Ethiopian flavors.',
    price: 189,
    duration: '3 months',
    includes: [
      'Monthly Heritage Connoisseur box',
      'Personal spice consultant access',
      'Exclusive recipe collection',
      'Cultural heritage materials',
      'Premium shipping included'
    ],
    presentation: 'Luxury gift card with personalized message and shipping notifications',
    customization_available: true,
    ideal_for: ['Food lovers', 'Family abroad', 'Special occasions', 'Cultural connection'],
    luxury_packaging: true
  },
  {
    id: 'master-chef-collection',
    name: 'Master Chef Collection',
    type: 'one_time',
    description: 'Professional-grade spice collection designed for serious chefs and culinary professionals.',
    price: 275,
    includes: [
      'Complete berbere spice set (5 regional varieties)',
      'Rare spice collection (12 unique spices)',
      'Professional grinding tools',
      'Master chef recipe collection',
      'Spice storage system',
      'Certificate of authenticity'
    ],
    presentation: 'Professional chef-grade storage case with compartmentalized organization',
    customization_available: false,
    ideal_for: ['Professional chefs', 'Culinary students', 'Restaurant owners', 'Serious home cooks'],
    luxury_packaging: true
  }
];

// Helper functions
export const getSubscriptionTierById = (id: string): SubscriptionTier | undefined => {
  return subscriptionTiers.find(tier => tier.id === id);
};

export const getGiftOptionById = (id: string): GiftOption | undefined => {
  return giftOptions.find(option => option.id === id);
};

export const getGiftOptionsByType = (type: string): GiftOption[] => {
  return giftOptions.filter(option => option.type === type);
};

export const getCurrentMonthBox = (): MonthlyBox | undefined => {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  return monthlyBoxes.find(box => 
    box.month === new Date(currentYear, currentMonth - 1).toLocaleString('default', { month: 'long' }) &&
    box.year === currentYear
  );
};

export const getUpcomingBoxes = (): MonthlyBox[] => {
  const today = new Date();
  return monthlyBoxes.filter(box => {
    const boxDate = new Date(box.year, new Date(`${box.month} 1`).getMonth());
    return boxDate >= today;
  });
};