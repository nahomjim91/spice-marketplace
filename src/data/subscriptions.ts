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
  type: 'subscription' | 'one_time' | 'corporate' | 'ceremony';
  description: string;
  price: number;
  duration?: string;
  includes: string[];
  presentation: string;
  customization_available: boolean;
  corporate_features?: string[];
  ideal_for: string[];
  luxury_packaging: boolean;
  ceremonial_features?: string[];
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
    id: 'spice-navigator',
    name: 'Spice Navigator',
    nameAmharic: 'ቅመማት መራሒ',
    price: 39,
    originalPrice: 49,
    interval: 'monthly',
    description: 'Perfect introduction to authentic Eritrean flavors from the Red Sea coast to the highlands.',
    features: [
      '3-4 traditional Eritrean spices per box',
      'Recipe cards with coastal and highland dishes',
      'Monthly newsletter with liberation stories',
      'Access to online Eritrean recipe library',
      'Free standard shipping'
    ],
    benefits: [
      'Discover authentic Eritrean flavors monthly',
      'Learn traditional Habesha cooking methods',
      'Connect with Eritrean diaspora culture',
      'Build authentic spice pantry gradually'
    ],
    products_per_box: 4,
    shipping: 'free',
    exclusive_access: false,
    badge: 'Popular',
    badgeColor: 'bg-eritrean-blue',
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
    id: 'highland-master',
    name: 'Highland Master',
    nameAmharic: 'ደጋዊ ኣቦ ጥበብ',
    price: 79,
    originalPrice: 99,
    interval: 'monthly',
    description: 'Curated selection of rare highland spices and Red Sea coast specialties for serious Eritrean cuisine enthusiasts.',
    features: [
      '6-8 premium highland and coastal spices',
      'Limited edition seasonal harvests',
      'Personal Eritrean spice expert access',
      'Exclusive traditional recipe collection',
      'Premium Red Sea salt packaging',
      'Free express shipping',
      'Early access to new regional products'
    ],
    benefits: [
      'Access to rare highland spices',
      'Personal consultation with Eritrean experts',
      'Priority diaspora community service',
      'Exclusive homeland connection access',
      'Restaurant-quality ingredient standards'
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
  ,{
    id: 'independence-legacy',
    name: 'Independence Legacy',
    nameAmharic: 'ናጽነት ቅድመት',
    price: 149,
    originalPrice: 199,
    interval: 'monthly',
    description: 'The ultimate luxury collection celebrating Eritrean independence and culinary sovereignty.',
    features: [
      '10-12 ultra-premium spices from all nine ethnic groups',
      'Hand-selected by master Eritrean culinarians',
      'Exclusive aged berbere and traditional blends',
      'Monthly video consultation with homeland chefs',
      'Custom blend creation honoring family recipes',
      'Handcrafted Eritrean textile packaging',
      'White-glove delivery with cultural materials',
      'Access to traditional coffee ceremony supplies',
      'Limited artisan collaborations from Asmara'
    ],
    benefits: [
      'Highest quality Eritrean spices available',
      'Personalized homeland connection service',
      'Access to pre-release traditional products',
      'Direct link to Eritrean master artisans',
      'VIP diaspora community recognition',
      'Heritage preservation contribution'
    ],
    products_per_box: 11,
    shipping: 'premium',
    exclusive_access: true,
    badge: 'Elite',
    badgeColor: 'bg-eritrean-red',
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
    id: 'february-2024-eritrea',
    month: 'February',
    year: 2024,
    theme: 'Red Sea Romance',
    description: 'Coastal spices and warming blends inspired by Red Sea trading routes and romantic traditions.',
    featured_products: ['red-sea-salt-blend', 'coastal-cardamom', 'romantic-honey-spice'],
    cultural_focus: 'Traditional coastal courtship customs and wedding preparations',
    recipes_included: 4,
    story: 'Discover how Eritrean coastal communities use specific spices in wedding celebrations and romantic meals by the Red Sea.',
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
  }, {
    id: 'april-2024-eritrea',
    month: 'April',
    year: 2024,
    theme: 'Easter Highland Celebration',
    description: 'Traditional Orthodox Easter spices from the Eritrean highlands for Fasika celebrations.',
    featured_products: ['fasika-berbere', 'holy-week-incense', 'easter-celebration-blend'],
    cultural_focus: 'Orthodox Easter traditions and highland monastery customs',
    recipes_included: 4,
    story: 'Explore the sacred spices used in Eritrean Orthodox Easter preparations and monastery blessing ceremonies.',
    estimated_value: 115,
    preview_available: true
  },
  {
    id: 'may-2024-eritrea',
    month: 'May',
    year: 2024,
    theme: 'Independence Day Glory',
    description: 'Celebrate Eritrean Independence Day (May 24) with patriotic spice blends and national pride flavors.',
    featured_products: ['independence-berbere', 'national-pride-blend', 'victory-coffee-spice'],
    cultural_focus: 'Independence Day celebrations and national unity traditions',
    recipes_included: 6,
    story: 'Honor Independence Day with the traditional spices used in national celebrations and freedom festival feasts.',
    estimated_value: 135,
    limited_quantity: 300,
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
    id: 'homeland-connection-kit',
    name: 'Homeland Connection Kit',
    type: 'one_time',
    description: 'Perfect introduction to authentic Eritrean cuisine connecting diaspora families to their homeland flavors.',
    price: 125,
    includes: [
      'Traditional Eritrean Berbere (250g)',
      'Red Sea Salt blend (300g)',
      'Highland Wild Honey (350g)',
      'Eritrean recipe collection (50 traditional dishes)',
      'Cultural heritage guide with nine ethnic groups',
      'Handwoven storage containers'
    ],
    presentation: 'Traditional Eritrean basket with hand-woven textile lining',
    customization_available: true,
    ideal_for: ['Diaspora families', 'Cultural preservationists', 'Young Eritreans abroad', 'Heritage learners'],
    luxury_packaging: true
  },
  {
    id: 'diplomatic-excellence-collection',
    name: 'Diplomatic Excellence Collection',
    type: 'corporate',
    description: 'Prestigious diplomatic gift showcasing Eritrean sovereignty and culinary independence, perfect for international relations.',
    price: 350,
    includes: [
      'Premium Highland Berbere Reserve (200g)',
      'Eritrean coffee ceremony set (complete)',
      'Red Sea honey collection (3 coastal varieties)',
      'Nine ethnic groups spice representation',
      'Independence history cookbook',
      'Cultural documentary about Eritrean resilience',
      'Personalized diplomatic messaging'
    ],
    presentation: 'Mahogany box with Eritrean national emblem and independence symbols',
    customization_available: true,
    corporate_features: [
      'Embassy and consulate bulk pricing',
      'Official diplomatic packaging',
      'Cultural attaché delivery service',
      'International relations account management',
      'Custom diplomatic messaging'
    ],
    ideal_for: ['Diplomatic missions', 'International partnerships', 'Embassy gifts', 'Cultural ambassadors'],
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
    id: 'diaspora-connection-subscription',
    name: '3-Month Diaspora Connection',
    type: 'subscription',
    description: 'Three months of premium homeland spice connection, perfect for maintaining cultural ties across continents.',
    price: 189,
    duration: '3 months',
    includes: [
      'Monthly Highland Master subscription box',
      'Personal Eritrean heritage consultant access',
      'Exclusive homeland recipe collection',
      'Cultural connection materials',
      'International premium shipping included'
    ],
    presentation: 'Luxury gift certificate with Eritrean flag colors and cultural messaging',
    customization_available: true,
    ideal_for: ['Diaspora community', 'Family connections', 'Cultural education', 'Heritage preservation'],
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
  , {
    id: 'master-habesha-collection',
    name: 'Master Habesha Collection',
    type: 'one_time',
    description: 'Professional-grade Eritrean spice collection honoring traditional Habesha culinary mastery.',
    price: 275,
    includes: [
      'Complete regional berbere set (6 provincial varieties)',
      'Rare highland spice collection (15 unique spices)',
      'Traditional grinding stone (mukecha)',
      'Master chef Eritrean recipe compilation',
      'Professional spice storage system',
      'Authenticity certificate from homeland'
    ],
    presentation: 'Professional chef-grade case with traditional Eritrean compartment design',
    customization_available: false,
    ideal_for: ['Professional Eritrean chefs', 'Culinary heritage students', 'Restaurant authenticity', 'Master home cooks'],
    luxury_packaging: true
  },
  {
    id: 'wedding-blessing-collection',
    name: 'Wedding Blessing Collection',
    type: 'ceremony',
    description: 'Traditional Eritrean wedding spices and ceremonial blends for authentic cultural celebrations.',
    price: 200,
    includes: [
      'Bridal berbere blessing blend',
      'Wedding ceremony incense collection',
      'Traditional honey wine spices',
      'Seven-day celebration spice set',
      'Wedding feast recipe guide',
      'Ceremonial presentation vessels'
    ],
    presentation: 'Traditional wedding basket with ceremonial textile wrapping',
    customization_available: true,
    ideal_for: ['Eritrean weddings', 'Cultural ceremonies', 'Traditional celebrations', 'Heritage preservation'],
    luxury_packaging: true,
    ceremonial_features: [
      'Traditional blessing ceremony guide',
      'Seven-day celebration planning',
      'Cultural wedding consultant access',
      'Ceremonial vessel rental options'
    ]
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