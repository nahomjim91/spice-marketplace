export interface Recipe {
  id: string;
  name: string;
  nameAmharic?: string;
  nameTigrinya?: string;
  type: 'traditional' | 'modern' | 'fusion';
  category: 'meat' | 'vegetarian' | 'beverages' | 'desserts' | 'condiments';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  cookTime: number; // minutes
  prepTime: number; // minutes
  servings: number;
  description: string;
  culturalContext: string;
  region: string;
  featuredSpices: string[]; // IDs matching products.ts
  ingredients: Ingredient[];
  instructions: Instruction[];
  tips: string[];
  variations: string[];
  nutritionalBenefits: string[];
  chef?: {
    name: string;
    title: string;
    bio: string;
  };
  images: string[];
  video?: string;
  difficulty_description: string;
  traditional_significance: string;
  modern_adaptations: string[];
  pairing_suggestions: string[];
  seasonal_notes?: string;
  featured: boolean;
  rating: number;
  reviews: number;
}

export interface Ingredient {
  item: string;
  amount: string;
  notes?: string;
  substitute?: string;
  spiceProduct?: string; // Link to product ID
}

export interface Instruction {
  step: number;
  action: string;
  tips?: string;
  timeEstimate?: string;
  technique?: string;
}

export const recipeCategories = [
  { id: 'all', name: 'All Recipes', icon: '🍽️' },
  { id: 'meat', name: 'Meat Dishes', icon: '🥩' },
  { id: 'vegetarian', name: 'Vegetarian', icon: '🌱' },
  { id: 'beverages', name: 'Beverages', icon: '☕' },
  { id: 'desserts', name: 'Desserts', icon: '🍯' },
  { id: 'condiments', name: 'Condiments', icon: '🌶️' }
];

export const difficultyLevels = [
  { id: 'beginner', name: 'Beginner', icon: '👨‍🍳', color: 'text-ethiopian-green' },
  { id: 'intermediate', name: 'Intermediate', icon: '👨‍🍳', color: 'text-golden' },
  { id: 'advanced', name: 'Advanced', icon: '👨‍🍳', color: 'text-traditional-red' }
];

export const recipes: Recipe[] = [
  {
    id: 'doro-wat',
    name: 'Doro Wat',
    nameAmharic: 'ዶሮ ወጥ',
    type: 'traditional',
    category: 'meat',
    difficulty: 'advanced',
    cookTime: 180,
    prepTime: 45,
    servings: 6,
    description: 'The crown jewel of Ethiopian cuisine, a rich and complex chicken stew that embodies the essence of berbere spice mastery.',
    culturalContext: 'Doro Wat is the national dish of Ethiopia, traditionally served during special occasions and religious holidays. It represents the pinnacle of Ethiopian culinary artistry and is often the centerpiece of the coffee ceremony.',
    region: 'Central Ethiopia',
    featuredSpices: ['single-origin-berbere', 'aged-berbere-reserve'],
    ingredients: [
      { item: 'Whole chicken', amount: '3-4 lbs', notes: 'Cut into 12 pieces', spiceProduct: '' },
      { item: 'Single-Origin Berbere', amount: '4-6 tablespoons', notes: 'Adjust to taste', spiceProduct: 'single-origin-berbere' },
      { item: 'Red onions', amount: '6 large', notes: 'Finely chopped' },
      { item: 'Garlic cloves', amount: '8-10', notes: 'Minced' },
      { item: 'Fresh ginger', amount: '2 inches', notes: 'Minced' },
      { item: 'Ethiopian butter (niter kibbeh)', amount: '1/2 cup', notes: 'Or clarified butter' },
      { item: 'Tomato paste', amount: '2 tablespoons' },
      { item: 'Chicken stock', amount: '2 cups' },
      { item: 'Hard-boiled eggs', amount: '6', notes: 'Optional but traditional' },
      { item: 'Salt', amount: 'To taste' },
      { item: 'Black pepper', amount: '1 teaspoon', notes: 'Freshly ground' }
    ],
    instructions: [
      { step: 1, action: 'Slowly cook chopped onions in a dry pan for 45 minutes until golden and caramelized, stirring frequently.', timeEstimate: '45 min', technique: 'Traditional slow caramelization' },
      { step: 2, action: 'Add niter kibbeh to caramelized onions and cook for 5 minutes until fragrant.', timeEstimate: '5 min' },
      { step: 3, action: 'Stir in berbere spice and cook for 2-3 minutes, being careful not to burn.', tips: 'This is crucial for developing deep flavor', timeEstimate: '3 min' },
      { step: 4, action: 'Add minced garlic and ginger, cook for another 2 minutes until aromatic.', timeEstimate: '2 min' },
      { step: 5, action: 'Mix in tomato paste and cook for 5 minutes, stirring constantly.', timeEstimate: '5 min' },
      { step: 6, action: 'Gradually add chicken stock while stirring to create a smooth sauce.', technique: 'Slow incorporation prevents lumps' },
      { step: 7, action: 'Add chicken pieces and bring to a gentle simmer. Cover and cook for 1 hour.', timeEstimate: '60 min' },
      { step: 8, action: 'Add hard-boiled eggs and simmer for another 30 minutes until chicken is tender.', timeEstimate: '30 min' },
      { step: 9, action: 'Season with salt and pepper, let rest for 10 minutes before serving.', tips: 'Resting allows flavors to meld' }
    ],
    tips: [
      'The key to authentic Doro Wat is patience - slow cooking develops the complex flavors',
      'Use aged berbere for deeper, more nuanced taste',
      'Traditional preparation involves hand-grinding spices with a mukecha (mortar and pestle)',
      'Serve with injera bread to soak up the rich sauce'
    ],
    variations: [
      'Vegetarian version using mushrooms or lentils instead of chicken',
      'Spicy version with additional berbere and fresh chilies',
      'Mild family version with reduced berbere for children'
    ],
    nutritionalBenefits: [
      'Rich in protein from chicken and eggs',
      'Berbere spices provide antioxidants and anti-inflammatory compounds',
      'Onions and garlic support immune system health',
      'Traditional spices aid digestion and metabolism'
    ],
    chef: {
      name: 'Chef Almaz Teshome',
      title: 'Master of Traditional Ethiopian Cuisine',
      bio: 'Born in Addis Ababa, Chef Almaz learned this recipe from her grandmother and has perfected it over 30 years of cooking.'
    },
    images: ['doro-wat-1.jpg', 'doro-wat-cooking.jpg'],
    difficulty_description: 'Requires patience and technique to properly caramelize onions and layer flavors',
    traditional_significance: 'Served during major holidays like Easter and Timkat, symbolizing abundance and celebration',
    modern_adaptations: ['Slow cooker version for busy families', 'Pre-made berbere paste for convenience', 'Portion-controlled meal prep versions'],
    pairing_suggestions: ['Ethiopian honey wine (tej)', 'Bold red wines like Syrah', 'Traditional Ethiopian coffee', 'Fresh yogurt to cool the palate'],
    seasonal_notes: 'Best made with fresh berbere during harvest season (October-December)',
    featured: true,
    rating: 4.9,
    reviews: 127
  },
  {
    id: 'shiro-wat',
    name: 'Shiro Wat',
    nameAmharic: 'ሽሮ ወጥ',
    type: 'traditional',
    category: 'vegetarian',
    difficulty: 'intermediate',
    cookTime: 45,
    prepTime: 15,
    servings: 4,
    description: 'A beloved Ethiopian comfort food made from ground chickpeas or lentils, richly spiced and deeply satisfying.',
    culturalContext: 'Shiro is a staple during Ethiopian Orthodox fasting periods and is considered the ultimate comfort food. It represents the soul of Ethiopian vegetarian cuisine.',
    region: 'Throughout Ethiopia and Eritrea',
    featuredSpices: ['organic-chickpea-flour', 'mild-berbere'],
    ingredients: [
      { item: 'Organic Chickpea Flour (Shiro)', amount: '2 cups', spiceProduct: 'organic-chickpea-flour' },
      { item: 'Mild Berbere', amount: '2-3 tablespoons', spiceProduct: 'mild-berbere' },
      { item: 'Red onions', amount: '2 medium', notes: 'Finely chopped' },
      { item: 'Garlic cloves', amount: '4-5', notes: 'Minced' },
      { item: 'Fresh ginger', amount: '1 inch', notes: 'Minced' },
      { item: 'Olive oil', amount: '1/4 cup' },
      { item: 'Vegetable stock', amount: '3-4 cups', notes: 'Warm' },
      { item: 'Tomatoes', amount: '2 medium', notes: 'Diced' },
      { item: 'Salt', amount: 'To taste' }
    ],
    instructions: [
      { step: 1, action: 'Sauté onions in olive oil until golden and soft, about 15 minutes.', timeEstimate: '15 min' },
      { step: 2, action: 'Add garlic, ginger, and berbere. Cook for 2-3 minutes until fragrant.', timeEstimate: '3 min' },
      { step: 3, action: 'Add diced tomatoes and cook until they break down, about 8 minutes.', timeEstimate: '8 min' },
      { step: 4, action: 'Slowly whisk in shiro flour, stirring constantly to prevent lumps.', technique: 'Gradual incorporation is key' },
      { step: 5, action: 'Gradually add warm stock while whisking continuously until smooth.', timeEstimate: '5 min' },
      { step: 6, action: 'Simmer on low heat for 20-25 minutes, stirring frequently, until thick and creamy.', timeEstimate: '25 min' },
      { step: 7, action: 'Season with salt and adjust consistency with more stock if needed.' }
    ],
    tips: [
      'Toast shiro flour lightly before cooking for deeper flavor',
      'Add stock gradually to avoid lumps',
      'Consistency should be like thick porridge',
      'Serve immediately while hot for best texture'
    ],
    variations: [
      'Shiro Fitfit - Mixed with pieces of injera bread',
      'Shiro with vegetables - Add carrots, potatoes, or greens',
      'Rich shiro - Add niter kibbeh for extra richness'
    ],
    nutritionalBenefits: [
      'High in plant-based protein from chickpeas',
      'Rich in fiber and complex carbohydrates',
      'Berbere spices boost metabolism and provide antioxidants',
      'Vegan and naturally gluten-free'
    ],
    images: ['shiro-wat-1.jpg', 'shiro-cooking.jpg'],
    difficulty_description: 'Requires attention to prevent lumps and achieve proper consistency',
    traditional_significance: 'Essential during fasting periods in Ethiopian Orthodox tradition, representing nourishment and community',
    modern_adaptations: ['Quick 20-minute version using pre-ground shiro', 'Slow cooker preparation', 'Protein-enhanced version with added legumes'],
    pairing_suggestions: ['Injera bread', 'Ethiopian honey wine', 'Fresh vegetables', 'Spiced tea'],
    featured: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 'berbere-spice-blend',
    name: 'Homemade Berbere Spice Blend',
    type: 'traditional',
    category: 'condiments',
    difficulty: 'intermediate',
    cookTime: 30,
    prepTime: 20,
    servings: 1, // Makes about 1 cup
    description: 'The soul of Ethiopian cuisine - a complex, aromatic spice blend that forms the foundation of countless traditional dishes.',
    culturalContext: 'Berbere is more than a spice blend; it is the heart of Ethiopian identity. Each family guards their own secret recipe, passed down through generations.',
    region: 'Various regions, each with unique variations',
    featuredSpices: ['dried-chilies', 'korarima', 'nigella-seeds', 'long-pepper'],
    ingredients: [
      { item: 'Dried red chilies', amount: '20-30', notes: 'Seeds removed for milder heat', spiceProduct: 'dried-chilies' },
      { item: 'Korarima (Ethiopian cardamom)', amount: '1 tablespoon', spiceProduct: 'korarima' },
      { item: 'Coriander seeds', amount: '2 tablespoons' },
      { item: 'Fenugreek seeds', amount: '1 tablespoon' },
      { item: 'Nigella seeds', amount: '1 teaspoon', spiceProduct: 'nigella-seeds' },
      { item: 'Ethiopian long pepper', amount: '1 teaspoon', spiceProduct: 'long-pepper' },
      { item: 'Black peppercorns', amount: '1 teaspoon' },
      { item: 'Cloves', amount: '1/2 teaspoon' },
      { item: 'Cinnamon stick', amount: '1 inch' },
      { item: 'Nutmeg', amount: '1/4 teaspoon' },
      { item: 'Allspice berries', amount: '1/2 teaspoon' },
      { item: 'Garlic powder', amount: '1 tablespoon' },
      { item: 'Ginger powder', amount: '1 tablespoon' },
      { item: 'Turmeric', amount: '1 teaspoon' },
      { item: 'Salt', amount: '1 teaspoon' }
    ],
    instructions: [
      { step: 1, action: 'Dry roast each whole spice separately in a pan until fragrant, 2-3 minutes each.', technique: 'Individual roasting preserves unique flavors', timeEstimate: '15 min' },
      { step: 2, action: 'Let all roasted spices cool completely to room temperature.', tips: 'Cooling prevents moisture in the blend' },
      { step: 3, action: 'Remove seeds from dried chilies and discard stems.', tips: 'Keep some seeds for heat if desired' },
      { step: 4, action: 'Grind all spices together in a spice grinder or mortar and pestle until fine.', technique: 'Traditional mukecha grinding preferred', timeEstimate: '10 min' },
      { step: 5, action: 'Sift through fine mesh to ensure uniform consistency.', tips: 'Re-grind any large pieces' },
      { step: 6, action: 'Store in airtight glass container away from light and heat.', timeEstimate: 'Stores for 6 months' }
    ],
    tips: [
      'Toast spices just until fragrant - over-roasting creates bitterness',
      'Cool completely before grinding to prevent moisture',
      'Adjust chili quantity for desired heat level',
      'Fresh berbere is always better than store-bought',
      'Make in small batches for maximum freshness'
    ],
    variations: [
      'Mild berbere - Reduce chilies and add more sweet spices',
      'Hot berbere - Include seeds and add more long pepper',
      'Sweet berbere - Increase cinnamon and allspice',
      'Regional variations from Gondar, Tigray, or Eritrea'
    ],
    nutritionalBenefits: [
      'Capsaicin from chilies boosts metabolism',
      'Turmeric provides anti-inflammatory properties',
      'Antioxidants from mixed spices support immune system',
      'Natural preservative properties extend food freshness'
    ],
    images: ['berbere-making-1.jpg', 'berbere-spices.jpg'],
    difficulty_description: 'Requires precise timing and technique for proper roasting and grinding',
    traditional_significance: 'Central to Ethiopian identity, each family recipe is a closely guarded secret',
    modern_adaptations: ['Electric spice grinder method', 'Oven roasting technique', 'Batch preparation for meal prep'],
    pairing_suggestions: ['Store with bay leaves to prevent insects', 'Use within 6 months for best flavor', 'Essential for authentic Ethiopian cooking'],
    featured: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'kitfo',
    name: 'Kitfo',
    nameAmharic: 'ክትፎ',
    type: 'traditional',
    category: 'meat',
    difficulty: 'intermediate',
    cookTime: 0,
    prepTime: 20,
    servings: 4,
    description: 'Ethiopian steak tartare seasoned with mitmita spice and niter kibbeh, a delicacy for special occasions.',
    culturalContext: 'Kitfo is considered the ultimate Ethiopian delicacy, often served to honor special guests and during important celebrations. It showcases the quality of both the meat and the spices.',
    region: 'Gurage Region',
    featuredSpices: ['mitmita-spice'],
    ingredients: [
      { item: 'Very fresh beef tenderloin', amount: '1 lb', notes: 'Highest quality, finely minced' },
      { item: 'Mitmita spice blend', amount: '1-2 teaspoons', notes: 'Traditional hot spice', spiceProduct: 'mitmita-spice' },
      { item: 'Niter kibbeh', amount: '3-4 tablespoons', notes: 'Ethiopian spiced butter' },
      { item: 'Korarima', amount: '1/4 teaspoon', notes: 'Freshly ground', spiceProduct: 'korarima' },
      { item: 'Fresh garlic', amount: '2 cloves', notes: 'Very finely minced' },
      { item: 'Salt', amount: 'To taste' }
    ],
    instructions: [
      { step: 1, action: 'Ensure beef is extremely fresh and cold. Mince very finely with sharp knife.', tips: 'Quality of meat is paramount for safety', technique: 'Hand mincing preferred over grinding' },
      { step: 2, action: 'Warm niter kibbeh slightly until just liquid but not hot.', timeEstimate: '2 min' },
      { step: 3, action: 'Mix mitmita with a small amount of niter kibbeh to form a paste.', technique: 'Creates even distribution' },
      { step: 4, action: 'Gently fold spice paste into minced meat with hands or wooden spoon.', tips: 'Handle minimally to preserve texture' },
      { step: 5, action: 'Add remaining niter kibbeh, korarima, and garlic. Mix gently.', timeEstimate: '3 min' },
      { step: 6, action: 'Season with salt and serve immediately with injera and ayib (cottage cheese).', tips: 'Serve within 30 minutes of preparation' }
    ],
    tips: [
      'Only use the freshest, highest-quality beef from trusted sources',
      'Keep everything cold during preparation',
      'Serve immediately - do not store leftovers',
      'Traditional accompaniments include ayib and gomen'
    ],
    variations: [
      'Leb leb kitfo - Lightly warmed version',
      'Gored gored - Cubed rather than minced',
      'Kitfo with vegetables - Served with traditional sides'
    ],
    nutritionalBenefits: [
      'High-quality protein and essential amino acids',
      'Iron and B-vitamins from fresh beef',
      'Digestive spices aid nutrient absorption',
      'Traditional preparation preserves natural enzymes'
    ],
    images: ['kitfo-1.jpg', 'kitfo-plated.jpg'],
    difficulty_description: 'Requires exceptional meat quality and careful spice balancing',
    traditional_significance: 'Reserved for special occasions and honored guests, represents hospitality and celebration',
    modern_adaptations: ['Food processor mincing (though not traditional)', 'Sous vide preparation for safety', 'Vegetarian versions using mushrooms'],
    pairing_suggestions: ['Ethiopian honey wine (tej)', 'Light red wines', 'Traditional coffee ceremony', 'Fresh ayib cheese'],
    featured: false,
    rating: 4.7,
    reviews: 43
  },
  {
    id: 'injera-bread',
    name: 'Traditional Injera',
    nameAmharic: 'እንጀራ',
    type: 'traditional',
    category: 'condiments',
    difficulty: 'advanced',
    cookTime: 120,
    prepTime: 30,
    servings: 8,
    description: 'The spongy, tangy flatbread that is the foundation of every Ethiopian meal, made from fermented teff flour.',
    culturalContext: 'Injera is more than bread - it serves as plate, utensil, and food. The communal sharing of injera represents unity and family bonds in Ethiopian culture.',
    region: 'Highland Ethiopia',
    featuredSpices: ['teff-flour'],
    ingredients: [
      { item: 'Teff flour', amount: '4 cups', notes: 'Traditional Ethiopian grain', spiceProduct: 'teff-flour' },
      { item: 'Water', amount: '5 cups', notes: 'Room temperature' },
      { item: 'Active dry yeast', amount: '1 teaspoon', notes: 'Optional for faster fermentation' }
    ],
    instructions: [
      { step: 1, action: 'Mix teff flour with 4 cups water until smooth. Cover and let ferment for 3 days at room temperature.', timeEstimate: '3 days', technique: 'Natural fermentation' },
      { step: 2, action: 'After fermentation, the batter should be bubbly and smell tangy.', tips: 'Proper fermentation is crucial for flavor' },
      { step: 3, action: 'Pour off any liquid on top and whisk batter until smooth.', timeEstimate: '2 min' },
      { step: 4, action: 'Cook 1 cup of batter with 1 cup water until thick, stirring constantly. Cool.', technique: 'Creates starter for binding', timeEstimate: '10 min' },
      { step: 5, action: 'Mix cooled starter back into fermented batter until well combined.', timeEstimate: '3 min' },
      { step: 6, action: 'Heat non-stick pan or clay mitad until very hot. Pour batter in spiral from outside to center.', technique: 'Traditional mitad clay pan preferred' },
      { step: 7, action: 'Cover and cook until surface is covered with holes and edges lift, about 2-3 minutes.', tips: 'Do not flip - cook only one side' },
      { step: 8, action: 'Remove and stack between clean towels to steam and soften.', timeEstimate: 'Cool 10 min' }
    ],
    tips: [
      'Fermentation time depends on temperature - warmer climates ferment faster',
      'Properly fermented batter will have a pleasant sour smell',
      'Traditional clay mitad gives best flavor and texture',
      'Stack and wrap in towels to keep soft and pliable'
    ],
    variations: [
      'Mixed grain injera - Combine teff with wheat or barley',
      'Quick injera - Using commercial injera starter',
      'Gluten-free version - Pure teff for celiac diets'
    ],
    nutritionalBenefits: [
      'Complete protein from teff grain',
      'Rich in iron, calcium, and fiber',
      'Naturally gluten-free and probiotic from fermentation',
      'Low glycemic index supports blood sugar control'
    ],
    images: ['injera-making.jpg', 'injera-holes.jpg'],
    difficulty_description: 'Requires patience for fermentation and skill to achieve proper consistency and texture',
    traditional_significance: 'Central to Ethiopian dining culture, represents sharing, community, and sustenance',
    modern_adaptations: ['Non-stick pan method', 'Commercial injera starter', 'Portion-controlled individual servings'],
    pairing_suggestions: ['All Ethiopian stews and vegetables', 'Honey wine', 'Traditional coffee', 'Fresh cheese'],
    seasonal_notes: 'Best made during cooler months when fermentation is easier to control',
    featured: true,
    rating: 4.6,
    reviews: 78
  },
  {
    id: 'ethiopian-coffee',
    name: 'Traditional Ethiopian Coffee Ceremony',
    nameAmharic: 'ቡና',
    type: 'traditional',
    category: 'beverages',
    difficulty: 'intermediate',
    cookTime: 45,
    prepTime: 15,
    servings: 6,
    description: 'An ancient ritual that transforms green coffee beans into aromatic perfection, representing hospitality and community.',
    culturalContext: 'The coffee ceremony is the heart of Ethiopian social life, performed daily to bring family and friends together. It embodies respect, friendship, and spiritual connection.',
    region: 'Kaffa Province - Birthplace of Coffee',
    featuredSpices: ['yirgacheffe-coffee', 'wild-honey'],
    ingredients: [
      { item: 'Green coffee beans', amount: '1/2 cup', notes: 'Single-origin Ethiopian', spiceProduct: 'yirgacheffe-coffee' },
      { item: 'Wild forest honey', amount: '2-3 tablespoons', notes: 'Optional sweetener', spiceProduct: 'wild-honey' },
      { item: 'Frankincense resin', amount: '1 small piece', notes: 'For ceremonial incense' },
      { item: 'Water', amount: '3 cups', notes: 'Filtered or spring water' }
    ],
    instructions: [
      { step: 1, action: 'Burn frankincense resin to create aromatic smoke, waving it around the room.', technique: 'Traditional blessing', timeEstimate: '5 min' },
      { step: 2, action: 'Wash green coffee beans and remove any debris or broken beans.', timeEstimate: '3 min' },
      { step: 3, action: 'Roast beans in pan over medium heat, stirring constantly until dark brown and fragrant.', technique: 'Even roasting crucial', timeEstimate: '15 min' },
      { step: 4, action: 'Walk around with roasted beans to share the aroma with guests.', tips: 'Traditional hospitality gesture' },
      { step: 5, action: 'Grind roasted beans in mortar and pestle (mukecha) until fine.', technique: 'Hand grinding preferred', timeEstimate: '8 min' },
      { step: 6, action: 'Boil water in traditional clay pot (jebena) over charcoal or gas flame.', timeEstimate: '5 min' },
      { step: 7, action: 'Add ground coffee to boiling water and simmer for 5 minutes.', timeEstimate: '5 min' },
      { step: 8, action: 'Pour coffee into small cups from height to create foam. Serve with honey.', technique: 'Pouring height creates traditional foam' }
    ],
    tips: [
      'Use traditional clay jebena for authentic flavor',
      'Roast beans to your preferred darkness - Ethiopians prefer medium-dark',
      'The ceremony has three rounds: abol, tona, and baraka',
      'Share the aroma of roasted beans with all participants'
    ],
    variations: [
      'Spiced coffee - Add korarima or cinnamon during brewing',
      'Honey coffee - Sweeten with wild forest honey',
      'Salt coffee - Traditional in some regions instead of sugar'
    ],
    nutritionalBenefits: [
      'Rich in antioxidants from fresh-roasted beans',
      'Natural caffeine for energy and focus',
      'Minimal processing preserves coffee nutrients',
      'Honey provides natural sugars and minerals'
    ],
    images: ['coffee-ceremony-1.jpg', 'coffee-roasting.jpg'],
    difficulty_description: 'Requires patience and attention to achieve proper roast and brewing technique',
    traditional_significance: 'Sacred ritual representing respect, friendship, and community bonds',
    modern_adaptations: ['Electric roasting methods', 'Coffee grinder substitution', 'Simplified single-cup versions'],
    pairing_suggestions: ['Roasted barley', 'Popcorn', 'Traditional sweets', 'Light pastries'],
    seasonal_notes: 'Year-round tradition, especially important during holidays and special occasions',
    featured: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: 'misir-wat',
    name: 'Misir Wat',
    nameAmharic: 'ምስር ወጥ',
    type: 'traditional',
    category: 'vegetarian',
    difficulty: 'beginner',
    cookTime: 60,
    prepTime: 15,
    servings: 6,
    description: 'Spicy red lentil stew that exemplifies the rich, complex flavors of Ethiopian vegetarian cuisine.',
    culturalContext: 'A staple during Ethiopian Orthodox fasting periods, Misir Wat showcases how plant-based dishes can be deeply satisfying and flavorful.',
    region: 'Throughout Ethiopia',
    featuredSpices: ['traditional-lentil-flour', 'single-origin-berbere'],
    ingredients: [
      { item: 'Red lentils', amount: '2 cups', notes: 'Picked and rinsed', spiceProduct: 'traditional-lentil-flour' },
      { item: 'Single-Origin Berbere', amount: '3-4 tablespoons', spiceProduct: 'single-origin-berbere' },
      { item: 'Red onions', amount: '2 large', notes: 'Finely chopped' },
      { item: 'Garlic cloves', amount: '6', notes: 'Minced' },
      { item: 'Fresh ginger', amount: '1 inch', notes: 'Minced' },
      { item: 'Olive oil', amount: '1/4 cup' },
      { item: 'Tomato paste', amount: '2 tablespoons' },
      { item: 'Vegetable stock', amount: '4 cups' },
      { item: 'Salt', amount: 'To taste' }
    ],
    instructions: [
      { step: 1, action: 'Rinse lentils thoroughly until water runs clear, removing any debris.', timeEstimate: '5 min' },
      { step: 2, action: 'Sauté onions in olive oil until golden and soft, about 15 minutes.', timeEstimate: '15 min' },
      { step: 3, action: 'Add berbere spice and cook for 2 minutes until fragrant.', tips: 'Blooming spices releases essential oils' },
      { step: 4, action: 'Add garlic, ginger, and tomato paste. Cook for 3 minutes.', timeEstimate: '3 min' },
      { step: 5, action: 'Add lentils and stock, bring to boil then reduce to simmer.', timeEstimate: '5 min' },
      { step: 6, action: 'Cover and cook for 30-40 minutes until lentils are soft and creamy.', timeEstimate: '40 min' },
      { step: 7, action: 'Stir occasionally and add water if needed to prevent sticking.', tips: 'Consistency should be like thick soup' },
      { step: 8, action: 'Season with salt and let rest 5 minutes before serving.', timeEstimate: '5 min' }
    ],
    tips: [
      'Red lentils cook quickly - watch to prevent overcooking',
      'Adjust liquid for desired consistency',
      'Taste and adjust berbere for heat preference',
      'Serve with injera and other vegetable dishes'
    ],
    variations: [
      'Mild misir - Reduce berbere and add turmeric',
      'Rich misir - Add coconut milk for creaminess',
      'Vegetable misir - Add carrots, potatoes, or greens'
    ],
    nutritionalBenefits: [
      'High in plant-based protein and fiber',
      'Rich in folate, iron, and potassium',
      'Low in fat and naturally gluten-free',
      'Berbere spices provide antioxidants and metabolism boost'
    ],
    images: ['misir-wat-1.jpg', 'lentils-cooking.jpg'],
    difficulty_description: 'Simple technique but requires attention to prevent overcooking lentils',
    traditional_significance: 'Essential fasting food that demonstrates how restrictions can lead to culinary creativity',
    modern_adaptations: ['Pressure cooker method', 'One-pot meal versions', 'Meal prep friendly portions'],
    pairing_suggestions: ['Injera bread', 'Gomen (collard greens)', 'Fresh cheese', 'Ethiopian beer'],
    featured: false,
    rating: 4.7,
    reviews: 92
  },
  {
    id: 'modern-berbere-fusion-pasta',
    name: 'Berbere-Spiced Fusion Pasta',
    type: 'modern',
    category: 'meat',
    difficulty: 'intermediate',
    cookTime: 25,
    prepTime: 15,
    servings: 4,
    description: 'A contemporary fusion dish that brings Ethiopian berbere flavors to Italian pasta, creating an exciting East-meets-West experience.',
    culturalContext: 'This modern creation represents the evolution of Ethiopian cuisine as it travels the world, adapting to new ingredients while preserving essential flavors.',
    region: 'Diaspora Innovation',
    featuredSpices: ['chef-special-blend', 'korarima'],
    ingredients: [
      { item: 'Penne or rigatoni pasta', amount: '1 lb', notes: 'Bronze-cut preferred' },
      { item: 'Chef\'s Special Berbere', amount: '2-3 tablespoons', spiceProduct: 'chef-special-blend' },
      { item: 'Chicken breast', amount: '1 lb', notes: 'Cut into strips' },
      { item: 'Heavy cream', amount: '1 cup' },
      { item: 'Red onion', amount: '1 medium', notes: 'Sliced' },
      { item: 'Bell peppers', amount: '2', notes: 'Mixed colors, sliced' },
      { item: 'Garlic cloves', amount: '4', notes: 'Minced' },
      { item: 'Korarima', amount: '1/2 teaspoon', notes: 'Freshly ground', spiceProduct: 'korarima' },
      { item: 'Olive oil', amount: '3 tablespoons' },
      { item: 'Parmesan cheese', amount: '1/2 cup', notes: 'Freshly grated' },
      { item: 'Fresh basil', amount: '1/4 cup', notes: 'Chopped' },
      { item: 'Salt and pepper', amount: 'To taste' }
    ],
    instructions: [
      { step: 1, action: 'Cook pasta according to package directions until al dente. Reserve 1 cup pasta water.', timeEstimate: '12 min' },
      { step: 2, action: 'Season chicken with salt, pepper, and 1 tablespoon berbere. Sear until golden.', timeEstimate: '8 min' },
      { step: 3, action: 'Remove chicken and sauté onions and peppers until softened, 5 minutes.', timeEstimate: '5 min' },
      { step: 4, action: 'Add garlic, remaining berbere, and korarima. Cook until fragrant, 1 minute.', timeEstimate: '1 min' },
      { step: 5, action: 'Pour in cream and simmer until slightly thickened, 3-4 minutes.', timeEstimate: '4 min' },
      { step: 6, action: 'Return chicken to pan and add drained pasta. Toss to combine.', timeEstimate: '2 min' },
      { step: 7, action: 'Add pasta water as needed for proper consistency. Remove from heat.', tips: 'Sauce should coat pasta nicely' },
      { step: 8, action: 'Stir in Parmesan and fresh basil. Serve immediately.', timeEstimate: '1 min' }
    ],
    tips: [
      'Don\'t let berbere burn - it becomes bitter',
      'Adjust spice level with berbere quantity',
      'Fresh herbs balance the warm spices beautifully',
      'Serve with extra Parmesan and berbere on the side'
    ],
    variations: [
      'Vegetarian version - Use mushrooms instead of chicken',
      'Seafood version - Replace chicken with shrimp or salmon',
      'Vegan version - Use coconut cream and nutritional yeast'
    ],
    nutritionalBenefits: [
      'Balanced protein from chicken and pasta',
      'Berbere spices aid digestion and metabolism',
      'Antioxidants from colorful bell peppers',
      'Complex carbohydrates for sustained energy'
    ],
    chef: {
      name: 'Chef Marcus Samuelsson',
      title: 'James Beard Award Winner',
      bio: 'Swedish-Ethiopian chef known for innovative fusion cuisine that honors traditional flavors while embracing modern techniques.'
    },
    images: ['berbere-pasta-1.jpg', 'pasta-cooking.jpg'],
    difficulty_description: 'Balancing traditional spices with Italian techniques requires attention to timing',
    traditional_significance: 'Represents the global journey of Ethiopian flavors and cultural adaptation',
    modern_adaptations: ['Whole wheat pasta option', 'Dairy-free cream alternatives', 'Meal prep friendly portions'],
    pairing_suggestions: ['Medium-bodied red wine', 'Ethiopian honey wine', 'Garlic bread', 'Mixed green salad'],
    featured: true,
    rating: 4.5,
    reviews: 67
  },
  {
    id: 'tej-honey-wine',
    name: 'Traditional Tej (Honey Wine)',
    nameAmharic: 'ጠጅ',
    type: 'traditional',
    category: 'beverages',
    difficulty: 'advanced',
    cookTime: 0,
    prepTime: 30,
    servings: 8,
    description: 'Ancient Ethiopian mead made from wild honey and hops, the ceremonial drink of royalty and special celebrations.',
    culturalContext: 'Tej has been the drink of Ethiopian royalty for over 1000 years. It is served in special round flasks called berele and represents prosperity and celebration.',
    region: 'Ancient Abyssinia',
    featuredSpices: ['wild-honey', 'hops-gesho'],
    ingredients: [
      { item: 'Wild forest honey', amount: '3 cups', notes: 'Raw, unprocessed', spiceProduct: 'wild-honey' },
      { item: 'Gesho (Ethiopian hops)', amount: '1/4 cup', notes: 'Dried and ground', spiceProduct: 'hops-gesho' },
      { item: 'Spring water', amount: '8 cups', notes: 'Chlorine-free' },
      { item: 'Wine yeast', amount: '1 packet', notes: 'Optional for controlled fermentation' }
    ],
    instructions: [
      { step: 1, action: 'Dissolve honey in warm (not hot) water, stirring until completely combined.', technique: 'Temperature affects yeast activity', timeEstimate: '10 min' },
      { step: 2, action: 'Add gesho and mix well. Let cool to room temperature.', timeEstimate: '20 min' },
      { step: 3, action: 'Transfer to fermentation vessel, leaving space for expansion.', tips: 'Use glass or food-grade plastic' },
      { step: 4, action: 'Cover with cloth and ferment at room temperature for 7-21 days.', technique: 'Traditional wild fermentation', timeEstimate: '7-21 days' },
      { step: 5, action: 'Taste daily - fermentation complete when pleasantly alcoholic and not too sweet.', tips: 'Flavor develops over time' },
      { step: 6, action: 'Strain through fine cloth to remove sediment.', timeEstimate: '15 min' },
      { step: 7, action: 'Age for additional 2-4 weeks for smoother flavor.', technique: 'Aging improves taste' },
      { step: 8, action: 'Serve chilled in traditional berele flasks or wine glasses.' }
    ],
    tips: [
      'Wild fermentation creates unique flavors but is less predictable',
      'Taste regularly to monitor fermentation progress',
      'Traditional tej is cloudy and slightly effervescent',
      'Serve at special occasions and celebrations'
    ],
    variations: [
      'Quick tej - Using commercial wine yeast for faster fermentation',
      'Spiced tej - Adding korarima or other aromatic spices',
      'Sweet tej - Stopping fermentation early for lower alcohol'
    ],
    nutritionalBenefits: [
      'Probiotics from natural fermentation',
      'Antioxidants and enzymes from raw honey',
      'B-vitamins from natural yeast',
      'Lower alcohol content than most wines'
    ],
    images: ['tej-ceremony.jpg', 'tej-glass.jpg'],
    difficulty_description: 'Requires patience for fermentation and experience to judge readiness',
    traditional_significance: 'Royal drink of ancient Ethiopian emperors, essential for major celebrations and religious holidays',
    modern_adaptations: ['Controlled fermentation with wine yeast', 'Bottled versions for aging', 'Flavored varieties with spices'],
    pairing_suggestions: ['Spicy Ethiopian dishes', 'Rich meat stews', 'Celebration feasts', 'Traditional music and dance'],
    seasonal_notes: 'Best made during cooler months when fermentation is easier to control',
    featured: false,
    rating: 4.4,
    reviews: 23
  },
  {
    id: 'gomen-collards',
    name: 'Gomen (Ethiopian Collard Greens)',
    nameAmharic: 'ጎመን',
    type: 'traditional',
    category: 'vegetarian',
    difficulty: 'beginner',
    cookTime: 45,
    prepTime: 15,
    servings: 6,
    description: 'Slow-cooked collard greens with aromatic spices, a beloved side dish that accompanies almost every Ethiopian meal.',
    culturalContext: 'Gomen represents the Ethiopian mastery of vegetable preparation, transforming simple greens into a flavorful and nutritious dish that complements spicy stews.',
    region: 'Highland Ethiopia',
    featuredSpices: ['mild-berbere', 'korarima'],
    ingredients: [
      { item: 'Fresh collard greens', amount: '2 lbs', notes: 'Stems removed, chopped' },
      { item: 'Mild Berbere', amount: '1-2 tablespoons', spiceProduct: 'mild-berbere' },
      { item: 'Red onions', amount: '2 medium', notes: 'Chopped' },
      { item: 'Garlic cloves', amount: '6', notes: 'Minced' },
      { item: 'Fresh ginger', amount: '1 inch', notes: 'Minced' },
      { item: 'Korarima', amount: '1/2 teaspoon', notes: 'Ground', spiceProduct: 'korarima' },
      { item: 'Olive oil', amount: '1/4 cup' },
      { item: 'Vegetable stock', amount: '1 cup' },
      { item: 'Salt', amount: 'To taste' }
    ],
    instructions: [
      { step: 1, action: 'Wash collard greens thoroughly and remove thick stems. Chop into bite-sized pieces.', timeEstimate: '10 min' },
      { step: 2, action: 'Sauté onions in olive oil until translucent, about 8 minutes.', timeEstimate: '8 min' },
      { step: 3, action: 'Add garlic, ginger, and berbere. Cook until fragrant, 2 minutes.', timeEstimate: '2 min' },
      { step: 4, action: 'Add chopped collards and toss to coat with spices.', timeEstimate: '3 min' },
      { step: 5, action: 'Add stock and korarima, cover and simmer for 30 minutes.', timeEstimate: '30 min' },
      { step: 6, action: 'Stir occasionally and add water if needed to prevent sticking.', tips: 'Greens should be tender but not mushy' },
      { step: 7, action: 'Season with salt and cook uncovered for final 5 minutes to reduce liquid.', timeEstimate: '5 min' }
    ],
    tips: [
      'Remove tough stems completely for better texture',
      'Cook low and slow for best flavor development',
      'Adjust berbere to family\'s heat preference',
      'Pairs beautifully with all Ethiopian stews'
    ],
    variations: [
      'Gomen besiga - With small pieces of beef',
      'Quick gomen - Faster cooking with pre-blanched greens',
      'Spicy gomen - Extra berbere and fresh chilies'
    ],
    nutritionalBenefits: [
      'Excellent source of vitamins A, C, and K',
      'High in calcium, iron, and folate',
      'Rich in antioxidants and fiber',
      'Low calorie, nutrient-dense vegetable dish'
    ],
    images: ['gomen-1.jpg', 'collards-cooking.jpg'],
    difficulty_description: 'Simple preparation but timing is important for proper texture',
    traditional_significance: 'Represents Ethiopian resourcefulness and the ability to create delicious dishes from simple ingredients',
    modern_adaptations: ['Power greens mix', 'Pressure cooker version', 'Raw kale salad with berbere dressing'],
    pairing_suggestions: ['All Ethiopian stews', 'Injera bread', 'Rice pilaf', 'Grilled meats'],
    featured: false,
    rating: 4.6,
    reviews: 78
  }
];

// Helper functions
export const getRecipesByCategory = (category: string): Recipe[] => {
  if (category === 'all') return recipes;
  return recipes.filter(recipe => recipe.category === category);
};

export const getRecipesByDifficulty = (difficulty: string): Recipe[] => {
  return recipes.filter(recipe => recipe.difficulty === difficulty);
};

export const getFeaturedRecipes = (): Recipe[] => {
  return recipes.filter(recipe => recipe.featured);
};

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

export const getRecipesByType = (type: string): Recipe[] => {
  return recipes.filter(recipe => recipe.type === type);
};

export const searchRecipes = (query: string): Recipe[] => {
  const lowercaseQuery = query.toLowerCase();
  return recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(lowercaseQuery) ||
    recipe.description.toLowerCase().includes(lowercaseQuery) ||
    recipe.culturalContext.toLowerCase().includes(lowercaseQuery) ||
    recipe.featuredSpices.some(spice => spice.toLowerCase().includes(lowercaseQuery))
  );
};