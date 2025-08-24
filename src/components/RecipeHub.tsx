import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search,
  Clock,
  Users,
  ChefHat,
  Star,
  Heart,
  BookOpen,
  Globe,
  Utensils,
  Timer,
  Award,
  Leaf,
  Crown,
  ArrowLeft,
  Share2
} from 'lucide-react';
import { 
  recipes, 
  recipeCategories, 
  difficultyLevels,
  getRecipesByCategory,
  getFeaturedRecipes,
  searchRecipes,
  type Recipe 
} from '@/data/recipes';

interface RecipeHubProps {
  selectedRecipe?: string;
  onRecipeSelect?: (recipe: Recipe | null) => void;
  onBackToHub?: () => void;
}

export default function RecipeHub({ selectedRecipe, onRecipeSelect, onBackToHub }: RecipeHubProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid');
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);

  // Filter recipes based on search and category
  const filteredRecipes = useMemo(() => {
    let filtered = recipes;
    
    if (searchQuery) {
      filtered = searchRecipes(searchQuery);
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory);
    }
    
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(recipe => recipe.difficulty === selectedDifficulty);
    }
    
    return filtered;
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const featuredRecipes = getFeaturedRecipes();

  const handleRecipeClick = (recipe: Recipe) => {
    setCurrentRecipe(recipe);
    setViewMode('detail');
    onRecipeSelect?.(recipe);
  };

  const handleBackToGrid = () => {
    setCurrentRecipe(null);
    setViewMode('grid');
    onRecipeSelect?.(null);
    onBackToHub?.();
  };

  if (viewMode === 'detail' && currentRecipe) {
    return <RecipeDetail recipe={currentRecipe} onBack={handleBackToGrid} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative py-20 bg-warm-spice overflow-hidden">
        <div className="absolute inset-0 pattern-traditional opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-burgundy/10 border border-burgundy/20 rounded-full">
              <BookOpen className="w-4 h-4 text-burgundy" />
              <span className="text-sm font-medium text-burgundy tracking-wider">HERITAGE RECIPE COLLECTION</span>
            </div>
            
            <h1 className="font-luxury text-luxury-xl text-heritage-gradient mb-6">
              Traditional Recipes &
              <br />
              <span className="text-spice-gradient">Modern Innovations</span>
            </h1>
            
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              Discover authentic Ethiopian and Eritrean recipes that have nourished families for generations,
              alongside contemporary interpretations that honor tradition while embracing innovation.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal/50" />
                <Input
                  placeholder="Search recipes, ingredients, or spices..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-3 text-lg border-2 border-copper/20 focus:border-saffron luxury-shadow"
                />
              </div>
              
              <div className="flex gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border-2 border-copper/20 rounded-md bg-white text-charcoal focus:border-saffron luxury-shadow"
                >
                  {recipeCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>
                
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-4 py-3 border-2 border-copper/20 rounded-md bg-white text-charcoal focus:border-saffron luxury-shadow"
                >
                  <option value="all">All Levels</option>
                  {difficultyLevels.map(level => (
                    <option key={level.id} value={level.id}>
                      {level.icon} {level.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-ivory-cream/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-luxury text-luxury-lg text-burgundy mb-4">
              Featured Heritage Recipes
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Master recipes that showcase the depth and complexity of Ethiopian and Eritrean culinary traditions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => handleRecipeClick(recipe)}
              >
                <Card className="overflow-hidden border-0 luxury-shadow hover:spice-glow transition-luxury bg-white h-full">
                  <CardHeader className="p-0">
                    <div className="relative h-48 bg-heritage-blend flex items-center justify-center">
                      <div className="text-6xl opacity-80">
                        {recipe.category === 'meat' ? '🥩' : 
                         recipe.category === 'vegetarian' ? '🌱' : 
                         recipe.category === 'beverages' ? '☕' : 
                         recipe.category === 'desserts' ? '🍯' : '🌶️'}
                      </div>
                      <Badge className="absolute top-4 right-4 bg-traditional-red hover:bg-traditional-red text-white">
                        {recipe.type === 'traditional' ? 'Traditional' : recipe.type === 'modern' ? 'Modern' : 'Fusion'}
                      </Badge>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(Math.floor(recipe.rating))].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-golden text-golden" />
                          ))}
                          <span className="text-white text-sm ml-1">({recipe.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge 
                        variant="outline" 
                        className={`${difficultyLevels.find(d => d.id === recipe.difficulty)?.color} border-current`}
                      >
                        {difficultyLevels.find(d => d.id === recipe.difficulty)?.name}
                      </Badge>
                      <span className="text-sm text-copper">{recipe.region}</span>
                    </div>
                    
                    <h3 className="font-luxury text-xl text-burgundy mb-2 group-hover:text-saffron transition-colors">
                      {recipe.name}
                    </h3>
                    
                    {recipe.nameAmharic && (
                      <p className="text-lg text-copper/80 mb-3 font-medium">
                        {recipe.nameAmharic}
                      </p>
                    )}
                    
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {recipe.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-charcoal/60">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{recipe.cookTime + recipe.prepTime}m</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{recipe.servings}</span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-saffron hover:text-cinnamon hover:bg-saffron/10 opacity-0 group-hover:opacity-100 transition-luxury"
                      >
                        View Recipe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Recipes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-luxury text-luxury-lg text-burgundy mb-4 text-center">
              Complete Recipe Collection
            </h2>
            <p className="text-center text-charcoal/70 mb-8">
              {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${selectedDifficulty}-${searchQuery}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredRecipes.map((recipe, index) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => handleRecipeClick(recipe)}
                >
                  <Card className="overflow-hidden border-0 luxury-shadow hover:spice-glow transition-luxury bg-white h-full">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="text-2xl">
                            {recipe.category === 'meat' ? '🥩' : 
                             recipe.category === 'vegetarian' ? '🌱' : 
                             recipe.category === 'beverages' ? '☕' : 
                             recipe.category === 'desserts' ? '🍯' : '🌶️'}
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${difficultyLevels.find(d => d.id === recipe.difficulty)?.color} border-current`}
                          >
                            {recipe.difficulty}
                          </Badge>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-luxury p-2">
                          <Heart className="w-4 h-4 text-traditional-red" />
                        </Button>
                      </div>
                      
                      <h3 className="font-luxury text-lg text-burgundy mb-1 group-hover:text-saffron transition-colors">
                        {recipe.name}
                      </h3>
                      
                      {recipe.nameAmharic && (
                        <p className="text-sm text-copper/80 mb-2">
                          {recipe.nameAmharic}
                        </p>
                      )}
                      
                      <p className="text-charcoal/70 text-sm leading-relaxed mb-4 line-clamp-2">
                        {recipe.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-charcoal/60 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Timer className="w-3 h-3" />
                            <span>{recipe.prepTime + recipe.cookTime}m</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{recipe.servings}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-golden text-golden" />
                          <span>{recipe.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-copper font-medium">{recipe.region}</span>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-saffron hover:text-cinnamon hover:bg-saffron/10 opacity-0 group-hover:opacity-100 transition-luxury text-xs"
                        >
                          Read Recipe
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredRecipes.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-luxury text-xl text-burgundy mb-2">No Recipes Found</h3>
              <p className="text-charcoal/70 mb-6">Try adjusting your search terms or filters.</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                }}
                className="bg-saffron hover:bg-cinnamon text-white"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

function RecipeDetail({ recipe, onBack }: RecipeDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background">
      {/* Recipe Header */}
      <section className="relative py-16 bg-heritage-blend overflow-hidden">
        <div className="absolute inset-0 pattern-traditional opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button 
              onClick={onBack}
              variant="ghost"
              className="text-white hover:bg-white/10 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Recipes
            </Button>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-traditional-red hover:bg-traditional-red text-white">
                    {recipe.type === 'traditional' ? 'Traditional' : recipe.type === 'modern' ? 'Modern' : 'Fusion'}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={`${difficultyLevels.find(d => d.id === recipe.difficulty)?.color} border-current bg-white/20`}
                  >
                    {difficultyLevels.find(d => d.id === recipe.difficulty)?.name}
                  </Badge>
                </div>
                
                <h1 className="font-luxury text-luxury-xl text-white mb-4">
                  {recipe.name}
                </h1>
                
                {recipe.nameAmharic && (
                  <p className="text-2xl text-golden/90 mb-6 font-medium">
                    {recipe.nameAmharic}
                  </p>
                )}
                
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  {recipe.description}
                </p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <Timer className="w-6 h-6 text-golden mx-auto mb-2" />
                    <div className="text-white font-medium">{recipe.prepTime}m</div>
                    <div className="text-white/70 text-sm">Prep Time</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <Clock className="w-6 h-6 text-golden mx-auto mb-2" />
                    <div className="text-white font-medium">{recipe.cookTime}m</div>
                    <div className="text-white/70 text-sm">Cook Time</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <Users className="w-6 h-6 text-golden mx-auto mb-2" />
                    <div className="text-white font-medium">{recipe.servings}</div>
                    <div className="text-white/70 text-sm">Servings</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <Star className="w-6 h-6 text-golden mx-auto mb-2" />
                    <div className="text-white font-medium">{recipe.rating}</div>
                    <div className="text-white/70 text-sm">Rating</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-white/10 rounded-2xl flex items-center justify-center text-8xl opacity-80">
                  {recipe.category === 'meat' ? '🥩' : 
                   recipe.category === 'vegetarian' ? '🌱' : 
                   recipe.category === 'beverages' ? '☕' : 
                   recipe.category === 'desserts' ? '🍯' : '🌶️'}
                </div>
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button variant="ghost" size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recipe Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-warm-beige/30">
              <TabsTrigger value="overview" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="ingredients" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
                Ingredients
              </TabsTrigger>
              <TabsTrigger value="instructions" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
                Instructions
              </TabsTrigger>
              <TabsTrigger value="culture" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
                Culture
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-luxury text-2xl text-burgundy mb-6">About This Recipe</h3>
                  <p className="text-charcoal/80 leading-relaxed mb-6">
                    {recipe.culturalContext}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-burgundy mb-2">Difficulty Notes</h4>
                      <p className="text-charcoal/70 text-sm">{recipe.difficulty_description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-burgundy mb-2">Traditional Significance</h4>
                      <p className="text-charcoal/70 text-sm">{recipe.traditional_significance}</p>
                    </div>
                    
                    {recipe.seasonal_notes && (
                      <div>
                        <h4 className="font-medium text-burgundy mb-2">Seasonal Notes</h4>
                        <p className="text-charcoal/70 text-sm">{recipe.seasonal_notes}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-luxury text-2xl text-burgundy mb-6">Nutritional Benefits</h3>
                  <div className="space-y-3">
                    {recipe.nutritionalBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Leaf className="w-5 h-5 text-ethiopian-green mt-0.5 flex-shrink-0" />
                        <span className="text-charcoal/70 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {recipe.chef && (
                    <div className="mt-8 p-6 bg-warm-beige/20 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <ChefHat className="w-6 h-6 text-copper" />
                        <div>
                          <h4 className="font-medium text-burgundy">{recipe.chef.name}</h4>
                          <p className="text-sm text-copper">{recipe.chef.title}</p>
                        </div>
                      </div>
                      <p className="text-sm text-charcoal/70">{recipe.chef.bio}</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ingredients" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <h3 className="font-luxury text-2xl text-burgundy mb-8 text-center">Ingredients</h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {recipe.ingredients.map((ingredient, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-center justify-between p-4 bg-white rounded-lg luxury-shadow"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="font-medium text-burgundy">{ingredient.item}</span>
                            {ingredient.spiceProduct && (
                              <Badge variant="outline" className="text-xs text-saffron border-saffron">
                                Our Spice
                              </Badge>
                            )}
                          </div>
                          {ingredient.notes && (
                            <p className="text-xs text-charcoal/60 mt-1">{ingredient.notes}</p>
                          )}
                        </div>
                        
                        <div className="text-right">
                          <span className="font-medium text-copper">{ingredient.amount}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-burgundy mb-3">Pro Tips</h4>
                      <div className="space-y-2">
                        {recipe.tips.map((tip, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Award className="w-4 h-4 text-golden mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-charcoal/70">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-burgundy mb-3">Variations</h4>
                      <div className="space-y-2">
                        {recipe.variations.map((variation, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Utensils className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-charcoal/70">{variation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="instructions" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <h3 className="font-luxury text-2xl text-burgundy mb-8 text-center">Cooking Instructions</h3>
                
                <div className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <motion.div
                      key={instruction.step}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 luxury-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-saffron text-white rounded-full flex items-center justify-center font-bold">
                          {instruction.step}
                        </div>
                        
                        <div className="flex-1">
                          <p className="text-charcoal/80 leading-relaxed mb-3">
                            {instruction.action}
                          </p>
                          
                          <div className="flex flex-wrap gap-4 text-sm">
                            {instruction.timeEstimate && (
                              <div className="flex items-center gap-1 text-copper">
                                <Clock className="w-3 h-3" />
                                <span>{instruction.timeEstimate}</span>
                              </div>
                            )}
                            
                            {instruction.technique && (
                              <div className="flex items-center gap-1 text-ethiopian-green">
                                <Award className="w-3 h-3" />
                                <span>{instruction.technique}</span>
                              </div>
                            )}
                          </div>
                          
                          {instruction.tips && (
                            <div className="mt-3 p-3 bg-golden/10 rounded-lg border-l-4 border-golden">
                              <p className="text-sm text-charcoal/70">{instruction.tips}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="culture" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <h3 className="font-luxury text-2xl text-burgundy mb-8 text-center">Cultural Heritage</h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 luxury-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="w-6 h-6 text-ethiopian-green" />
                        <h4 className="font-medium text-burgundy">Regional Origin</h4>
                      </div>
                      <p className="text-charcoal/70 text-sm">{recipe.region}</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 luxury-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <Crown className="w-6 h-6 text-golden" />
                        <h4 className="font-medium text-burgundy">Traditional Significance</h4>
                      </div>
                      <p className="text-charcoal/70 text-sm leading-relaxed">
                        {recipe.traditional_significance}
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 luxury-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <Utensils className="w-6 h-6 text-copper" />
                        <h4 className="font-medium text-burgundy">Modern Adaptations</h4>
                      </div>
                      <div className="space-y-2">
                        {recipe.modern_adaptations.map((adaptation, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-copper rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-charcoal/70">{adaptation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 luxury-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-6 h-6 text-traditional-red" />
                        <h4 className="font-medium text-burgundy">Cultural Context</h4>
                      </div>
                      <p className="text-charcoal/70 text-sm leading-relaxed">
                        {recipe.culturalContext}
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 luxury-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <Utensils className="w-6 h-6 text-saffron" />
                        <h4 className="font-medium text-burgundy">Perfect Pairings</h4>
                      </div>
                      <div className="space-y-2">
                        {recipe.pairing_suggestions.map((pairing, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-charcoal/70">{pairing}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}