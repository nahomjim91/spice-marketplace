export interface Producer {
  id: string;
  name: string;
  location: string;
  region: string;
  story: string;
  specialties: string[];
  farmingMethod: string;
  generationsInBusiness: number;
  image: string;
  quote: string;
  achievements: string[];
  sustainabilityPractices: string[];
}

export interface HeritageStory {
  id: string;
  title: string;
  period: string;
  location: string;
  story: string;
  significance: string;
  relatedSpices: string[];
  culturalContext: string;
  modernRelevance: string;
}

export interface CulturalTradition {
  id: string;
  name: string;
  description: string;
  region: string;
  occasion: string;
  spicesUsed: string[];
  preparation: string;
  culturalSignificance: string;
  modernAdaptation: string;
}

export const producers: Producer[] = [
  {
    id: 'abebe-family',
    name: 'Abebe Family Farms',
    location: 'Gondar Highlands',
    region: 'Amhara Region, Ethiopia',
    story: 'For over 150 years, the Abebe family has cultivated the finest berbere ingredients in the ancient highlands of Gondar. Starting with great-great-grandfather Abebe Tesema, who first learned the art of spice cultivation from local monks, each generation has refined their methods while preserving traditional techniques.',
    specialties: ['Premium Berbere Chilies', 'Sacred Korarima', 'Mountain Cardamom'],
    farmingMethod: 'Organic highland terracing with traditional crop rotation',
    generationsInBusiness: 6,
    image: '/coffee-ceremony.png',
    quote: 'We do not just grow spices - we preserve the soul of Ethiopian cuisine for future generations.',
    achievements: [
      'Founded Gondar Spice Cooperative in 1987',
      'Winner of Ethiopian Organic Farming Excellence Award',
      'Preserved 12 heritage seed varieties from extinction',
      'Trained over 200 farmers in sustainable practices'
    ],
    sustainabilityPractices: [
      'Rainwater harvesting systems',
      'Composting with traditional methods',
      'Biodiversity conservation corridors',
      'Fair wages for all cooperative members'
    ]
  },
  {
    id: 'meron-collective',
    name: 'Meron Women\'s Collective',
    location: 'Tigray Mountains',
    region: 'Tigray Region, Ethiopia',
    story: 'Founded by visionary leader Weizero Meron Gebremedhin in 1995, this women\'s collective has empowered over 300 women to become master spice processors. Using ancient techniques passed down through maternal lineages, these women transform raw spices into the complex blends that define Ethiopian cuisine.',
    specialties: ['Artisanal Berbere Blending', 'Traditional Spice Processing', 'Women\'s Empowerment'],
    farmingMethod: 'Community-based organic farming with women leadership',
    generationsInBusiness: 3,
    image: '/coffee-ceremony.png',
    quote: 'When women control spice production, families eat better and communities thrive.',
    achievements: [
      'Empowered 300+ women in spice processing',
      'Established 5 community processing centers',
      'International recognition for women\'s empowerment',
      'Preserved traditional female spice knowledge'
    ],
    sustainabilityPractices: [
      'Women-led sustainable agriculture training',
      'Community seed banks managed by women',
      'Solar-powered processing facilities',
      'Microfinance programs for female farmers'
    ]
  },
  {
    id: 'hailu-estates',
    name: 'Hailu Heritage Estates',
    location: 'Kaffa Forest',
    region: 'Southern Nations, Ethiopia',
    story: 'In the mystical forests of Kaffa, where coffee was first discovered, the Hailu family has been the guardian of wild spices for four generations. Ato Hailu Bekele and his sons practice a unique form of forest farming, harvesting wild korarima, long pepper, and rare medicinal spices while protecting the ancient forest ecosystem.',
    specialties: ['Wild Forest Spices', 'Conservation Farming', 'Rare Medicinal Herbs'],
    farmingMethod: 'Wild forest conservation and sustainable wild harvesting',
    generationsInBusiness: 4,
    image: '/coffee-ceremony.png',
    quote: 'The forest provides everything we need - we just need to listen and respect its wisdom.',
    achievements: [
      'Protected 500+ acres of virgin forest',
      'Identified 15 rare spice varieties',
      'Forest conservation leadership award',
      'Traditional knowledge preservation program'
    ],
    sustainabilityPractices: [
      'Zero-impact wild harvesting',
      'Forest regeneration programs',
      'Wildlife corridor maintenance',
      'Traditional ecological knowledge preservation'
    ]
  }
];

export const heritageStories: HeritageStory[] = [
  {
    id: 'ancient-spice-routes',
    title: 'The Ancient Spice Routes of Aksum',
    period: '1st - 8th Century CE',
    location: 'Kingdom of Aksum, Northern Ethiopia',
    story: 'Long before European explorers dreamed of the Indies, the mighty Kingdom of Aksum controlled the ancient world\'s most valuable trade routes. Ethiopian merchants sailed the Red Sea and Indian Ocean, carrying precious spices, gold, and ivory to Rome, Byzantium, and India.',
    significance: 'Established Ethiopia as a major player in global spice trade for over 700 years',
    relatedSpices: ['Berbere components', 'Long pepper', 'Korarima'],
    culturalContext: 'Spice trading created multicultural exchange and established Ethiopian cuisine traditions',
    modernRelevance: 'Today\'s global Ethiopian diaspora continues this trading tradition, sharing authentic flavors worldwide'
  },
  {
    id: 'queen-sheba-spices',
    title: 'The Queen of Sheba\'s Spice Garden',
    period: '10th Century BCE',
    location: 'Legendary Kingdom of Sheba',
    story: 'Ancient texts speak of Queen Makeda of Sheba\'s legendary spice gardens, where the most precious seasonings grew in terraced hillsides tended by master gardeners. When she journeyed to meet King Solomon, her caravan carried not just gold and precious stones, but rare spices unknown in Jerusalem.',
    significance: 'Legendary origin of Ethiopian spice cultivation and royal patronage of spice arts',
    relatedSpices: ['Ancient berbere precursors', 'Royal spice blends'],
    culturalContext: 'Connected Ethiopian spice culture to Biblical history and Middle Eastern trade',
    modernRelevance: 'Inspires modern premium spice collections and royal-quality products'
  }
];

export const culturalTraditions: CulturalTradition[] = [
  {
    id: 'coffee-ceremony',
    name: 'Ethiopian Coffee Ceremony',
    description: 'A sacred daily ritual involving the roasting, grinding, and brewing of coffee beans, always accompanied by aromatic spices',
    region: 'All regions of Ethiopia',
    occasion: 'Daily social gatherings, welcoming guests, special occasions',
    spicesUsed: ['Korarima (Ethiopian cardamom)', 'Cinnamon', 'Cloves'],
    preparation: 'Green coffee beans are roasted over charcoal, ground by hand, and brewed in a clay pot (jebena) while spices infuse the air',
    culturalSignificance: 'Represents hospitality, community bonding, and spiritual connection. The three rounds (abol, tona, baraka) bring blessings',
    modernAdaptation: 'Diaspora communities maintain this tradition worldwide, adapting to modern homes while preserving essential elements'
  },
  {
    id: 'timkat-spicing',
    name: 'Timkat Festival Spicing',
    description: 'Special spice preparation for the Ethiopian Orthodox celebration of Epiphany, featuring elaborate berbere blends',
    region: 'Ethiopian Orthodox communities nationwide',
    occasion: 'Timkat (Ethiopian Epiphany) - January 19th',
    spicesUsed: ['Special ceremonial berbere', 'Blessed spices', 'Korarima'],
    preparation: 'Families prepare extra-complex berbere blends weeks in advance, often blessed by priests, for the post-fasting feast',
    culturalSignificance: 'Marks the end of fasting period with celebration of flavor, community feasting, and spiritual renewal',
    modernAdaptation: 'Ethiopian restaurants worldwide create special Timkat menus, and families maintain traditions in new countries'
  }
];

// Helper functions
export const getProducerById = (id: string) => {
  return producers.find(producer => producer.id === id);
};

export const getHeritageStoryById = (id: string) => {
  return heritageStories.find(story => story.id === id);
};

export const getTraditionById = (id: string) => {
  return culturalTraditions.find(tradition => tradition.id === id);
};