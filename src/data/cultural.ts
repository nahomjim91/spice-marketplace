export interface Producer {
  id: string;
  name: string;
  location: string;
  region: string;
  country: string; // Added country field
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
  country: string; // Added country field
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
  country: string; // Added country field
  occasion: string;
  spicesUsed: string[];
  preparation: string;
  culturalSignificance: string;
  modernAdaptation: string;
}

export const producers: Producer[] = [
  // Ethiopian Producers
  {
    id: 'abebe-family',
    name: 'Abebe Family Farms',
    location: 'Gondar Highlands',
    region: 'Amhara Region',
    country: 'Ethiopia',
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
    region: 'Tigray Region',
    country: 'Ethiopia',
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
    region: 'Southern Nations',
    country: 'Ethiopia',
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
  },

  // Eritrean Producers
  {
    id: 'berhane-highlands',
    name: 'Berhane Highland Spices',
    location: 'Asmara Highlands',
    region: 'Central Region',
    country: 'Eritrea',
    story: 'The Berhane family has been cultivating premium spices in the cool highlands around Asmara for over 80 years. Known for their exceptional berbere and unique Eritrean spice blends that reflect Italian colonial influences, they maintain traditional methods while incorporating modern organic practices.',
    specialties: ['Highland Berbere', 'Zigni Spice Blends', 'Eritrean Cardamom'],
    farmingMethod: 'High-altitude organic farming with Italian-influenced terracing',
    generationsInBusiness: 4,
    image: '/coffee-ceremony.png',
    quote: 'Our spices carry the soul of Eritrea - proud, resilient, and uniquely flavorful.',
    achievements: [
      'First certified organic spice farm in Eritrea',
      'Developed unique Eritrean-Italian fusion spice blends',
      'Established Highland Spice Cooperative in 2008',
      'Preserved traditional Tigrinya spice knowledge'
    ],
    sustainabilityPractices: [
      'High-altitude water conservation',
      'Traditional stone terracing restoration',
      'Heritage seed preservation program',
      'Community-based organic certification'
    ]
  },
  {
    id: 'semere-coastal',
    name: 'Semere Coastal Traders',
    location: 'Massawa Port',
    region: 'Northern Red Sea',
    country: 'Eritrea',
    story: 'For three generations, the Semere family has operated from the historic port of Massawa, importing and blending spices that arrive from across the Red Sea. Their unique position allows them to create distinctive blends combining local Eritrean spices with imported treasures from Yemen, Sudan, and beyond.',
    specialties: ['Red Sea Spice Blends', 'Import Trading', 'Cross-Cultural Spice Fusion'],
    farmingMethod: 'Coastal trading and artisanal blending operations',
    generationsInBusiness: 3,
    image: '/coffee-ceremony.png',
    quote: 'Massawa has always been where the spices of the world meet the flavors of home.',
    achievements: [
      'Established Red Sea Spice Trading Network',
      'Created unique Eritrean-Yemeni spice blends',
      'Preserved Ottoman-era spice recipes',
      'Built sustainable spice supply chains across Red Sea'
    ],
    sustainabilityPractices: [
      'Fair trade partnerships with regional suppliers',
      'Traditional solar drying methods',
      'Minimal packaging using local materials',
      'Support for small-scale spice farmers'
    ]
  },
  {
    id: 'tekle-lowlands',
    name: 'Tekle Lowland Farms',
    location: 'Gash-Barka Plains',
    region: 'Gash-Barka',
    country: 'Eritrea',
    story: 'In the fertile lowlands of Gash-Barka, the Tekle family has mastered the art of cultivating spices in challenging semi-arid conditions. Their innovative irrigation techniques and deep understanding of desert farming have made them pioneers in sustainable spice production in harsh environments.',
    specialties: ['Desert-Adapted Spices', 'Drought-Resistant Varieties', 'Innovative Irrigation'],
    farmingMethod: 'Desert permaculture with traditional water harvesting',
    generationsInBusiness: 5,
    image: '/coffee-ceremony.png',
    quote: 'The desert teaches patience - every spice we grow is a victory over the harsh land.',
    achievements: [
      'Developed drought-resistant spice varieties',
      'Pioneer in desert permaculture techniques',
      'Winner of Sustainable Agriculture Innovation Award',
      'Trained farmers across Sahel region'
    ],
    sustainabilityPractices: [
      'Traditional fogwater collection systems',
      'Desert soil rehabilitation programs',
      'Drought-resistant crop development',
      'Water-efficient irrigation innovation'
    ]
  }
];

export const heritageStories: HeritageStory[] = [
  // Ethiopian Stories
  {
    id: 'ancient-spice-routes',
    title: 'The Ancient Spice Routes of Aksum',
    period: '1st - 8th Century CE',
    location: 'Kingdom of Aksum, Northern Ethiopia',
    country: 'Ethiopia',
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
    country: 'Ethiopia',
    story: 'Ancient texts speak of Queen Makeda of Sheba\'s legendary spice gardens, where the most precious seasonings grew in terraced hillsides tended by master gardeners. When she journeyed to meet King Solomon, her caravan carried not just gold and precious stones, but rare spices unknown in Jerusalem.',
    significance: 'Legendary origin of Ethiopian spice cultivation and royal patronage of spice arts',
    relatedSpices: ['Ancient berbere precursors', 'Royal spice blends'],
    culturalContext: 'Connected Ethiopian spice culture to Biblical history and Middle Eastern trade',
    modernRelevance: 'Inspires modern premium spice collections and royal-quality products'
  },

  // Eritrean Stories
  {
    id: 'massawa-spice-port',
    title: 'Massawa: The Spice Gateway of the Red Sea',
    period: '16th - 19th Century',
    location: 'Massawa Port, Eritrea',
    country: 'Eritrea',
    story: 'The ancient port of Massawa served as the crucial gateway where Arabian, Indian, and African spices converged. Ottoman, Egyptian, and later Italian merchants established spice warehouses in this strategic Red Sea port, creating a unique culinary fusion that still defines Eritrean cuisine today.',
    significance: 'Established Eritrea as a crucial link in global spice networks and created unique fusion cuisine',
    relatedSpices: ['Red Sea berbere blends', 'Imported cardamom', 'Yemeni spice combinations'],
    culturalContext: 'Multiple colonial influences created distinctive Eritrean spice traditions different from Ethiopian',
    modernRelevance: 'Modern Eritrean cuisine reflects this historical spice trading heritage in its unique flavor profiles'
  },
  {
    id: 'italian-spice-fusion',
    title: 'The Italian-Eritrean Culinary Marriage',
    period: '1890 - 1941',
    location: 'Asmara and surrounding highlands',
    country: 'Eritrea',
    story: 'During the Italian colonial period, a unique culinary fusion emerged as Italian settlers adapted their cooking to local ingredients while Eritreans incorporated Mediterranean herbs into traditional spice blends. This created distinctive dishes like zigni with Italian influences and berbere-spiced pasta.',
    significance: 'Created a unique branch of Horn of Africa cuisine with European influences',
    relatedSpices: ['Berbere-oregano blends', 'Rosemary-korarima combinations', 'Mediterranean-berbere fusions'],
    culturalContext: 'Colonial period created lasting culinary innovations that became part of Eritrean identity',
    modernRelevance: 'Eritrean restaurants worldwide feature this unique fusion, distinguishing Eritrean from Ethiopian cuisine'
  },
  {
    id: 'independence-spice-revival',
    title: 'The Spice Revival of Independent Eritrea',
    period: '1991 - Present',
    location: 'Throughout Eritrea',
    country: 'Eritrea',
    story: 'Following independence in 1991, Eritrean communities worldwide began a deliberate revival of traditional spice knowledge, documenting family recipes and establishing cultural centers where elders taught traditional spice preparation to younger generations.',
    significance: 'Preserved and revitalized Eritrean spice culture in the modern era',
    relatedSpices: ['Traditional berbere varieties', 'Regional spice blends', 'Ceremonial spice preparations'],
    culturalContext: 'Independence movement included cultural preservation as part of national identity',
    modernRelevance: 'Strong diaspora communities maintain and spread authentic Eritrean spice traditions globally'
  }
];

export const culturalTraditions: CulturalTradition[] = [
  // Ethiopian Traditions
  {
    id: 'coffee-ceremony',
    name: 'Ethiopian Coffee Ceremony',
    description: 'A sacred daily ritual involving the roasting, grinding, and brewing of coffee beans, always accompanied by aromatic spices',
    region: 'All regions',
    country: 'Ethiopia',
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
    country: 'Ethiopia',
    occasion: 'Timkat (Ethiopian Epiphany) - January 19th',
    spicesUsed: ['Special ceremonial berbere', 'Blessed spices', 'Korarima'],
    preparation: 'Families prepare extra-complex berbere blends weeks in advance, often blessed by priests, for the post-fasting feast',
    culturalSignificance: 'Marks the end of fasting period with celebration of flavor, community feasting, and spiritual renewal',
    modernAdaptation: 'Ethiopian restaurants worldwide create special Timkat menus, and families maintain traditions in new countries'
  },

  // Eritrean Traditions
  {
    id: 'eritrean-coffee-ceremony',
    name: 'Eritrean Coffee Ceremony (Bunna)',
    description: 'Similar to Ethiopian tradition but with distinctive Eritrean elements including specific spice combinations and Tigrinya ceremonial words',
    region: 'All regions',
    country: 'Eritrea',
    occasion: 'Daily hospitality ritual, important meetings, celebrating guests',
    spicesUsed: ['Eritrean cardamom', 'Cinnamon bark', 'Traditional herbs'],
    preparation: 'Coffee roasted in menkeshkesh (roasting pan), ground in mukecha (mortar), brewed in jebena with distinctive Eritrean spicing',
    culturalSignificance: 'Central to Eritrean hospitality, community bonding, and cultural identity preservation',
    modernAdaptation: 'Eritrean diaspora communities use this ceremony to maintain cultural connections and teach traditions'
  },
  {
    id: 'meskel-celebration',
    name: 'Meskel Festival Preparations',
    description: 'Annual Orthodox celebration of the Finding of the True Cross, featuring special spice preparations and traditional foods',
    region: 'Orthodox communities nationwide',
    country: 'Eritrea',
    occasion: 'Meskel Festival - September 27th',
    spicesUsed: ['Festival berbere', 'Blessed ceremonial spices', 'Special cardamom blends'],
    preparation: 'Families prepare elaborate spice blends for the post-fasting feast, including special berbere blessed at church services',
    culturalSignificance: 'Combines religious devotion with culinary tradition, strengthening community bonds',
    modernAdaptation: 'Eritrean Orthodox churches worldwide organize community Meskel celebrations with traditional foods'
  },
  {
    id: 'marriage-spice-ceremony',
    name: 'Eritrean Marriage Spice Blessing',
    description: 'Traditional wedding ceremony where families exchange specially prepared spice blends as symbols of unity and prosperity',
    region: 'Highland communities',
    country: 'Eritrea',
    occasion: 'Wedding ceremonies',
    spicesUsed: ['Bridal berbere blend', 'Prosperity spice mix', 'Family heritage spices'],
    preparation: 'Both families prepare signature spice blends representing their lineage, exchanged during wedding ceremony',
    culturalSignificance: 'Symbolizes joining of families, sharing of culinary knowledge, and blessing for prosperous marriage',
    modernAdaptation: 'Eritrean weddings globally include this tradition, with spices often shipped from home communities'
  },
  {
    id: 'italian-eritrean-fusion-sunday',
    name: 'Sunday Pasta with Berbere',
    description: 'Unique Eritrean tradition of Sunday family meals featuring pasta dishes with berbere-based sauces, reflecting Italian colonial influence',
    region: 'Urban communities, especially Asmara',
    country: 'Eritrea',
    occasion: 'Sunday family gatherings',
    spicesUsed: ['Berbere', 'Italian herbs adapted with local spices', 'Fusion spice blends'],
    preparation: 'Traditional pasta preparation with berbere-spiced meat sauces, creating unique Eritrean-Italian fusion dishes',
    culturalSignificance: 'Represents cultural adaptation and resilience, creating new traditions from colonial experience',
    modernAdaptation: 'Eritrean restaurants worldwide feature these fusion dishes as signature Eritrean specialties'
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

// Additional helper functions for filtering by country
export const getProducersByCountry = (country: string) => {
  return producers.filter(producer => producer.country === country);
};

export const getHeritageStoriesByCountry = (country: string) => {
  return heritageStories.filter(story => story.country === country);
};

export const getTraditionsByCountry = (country: string) => {
  return culturalTraditions.filter(tradition => tradition.country === country);
};