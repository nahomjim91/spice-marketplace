import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Crown,
  MessageCircle,
  Calendar,
  Star,
  ChefHat,
  Users,
  Clock,
  Award,
  Sparkles,
  Phone,
  Video,
  Mail,
  Globe,
  Package,
  Heart,
  Coffee,
  Scissors,
  Shield,
  Truck,
  Gift,
  CheckCircle
} from 'lucide-react';

interface ConciergeService {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  features: string[];
  availability: 'immediate' | 'scheduled' | 'premium_only';
  category: 'consultation' | 'custom_blend' | 'event_planning' | 'education';
  expert: {
    name: string;
    title: string;
    specialization: string;
    experience: string;
  };
}

interface CustomBlendRequest {
  name: string;
  purpose: string;
  heatLevel: number;
  preferredSpices: string[];
  avoidSpices: string[];
  cuisineStyle: string;
  quantity: number;
  specialInstructions: string;
}

export default function ConciergeService() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    preferredTime: '',
    topic: ''
  });
  
  const [customBlend, setCustomBlend] = useState<CustomBlendRequest>({
    name: '',
    purpose: '',
    heatLevel: 3,
    preferredSpices: [],
    avoidSpices: [],
    cuisineStyle: '',
    quantity: 250,
    specialInstructions: ''
  });

  const conciergeServices: ConciergeService[] = [
    {
      id: 'spice-consultation',
      name: 'Personal Spice Consultation',
      description: 'One-on-one session with our master spice curator to discuss your culinary goals, taste preferences, and spice collection planning.',
      duration: '60 minutes',
      price: 125,
      features: [
        'Personalized spice recommendations',
        'Custom collection planning',
        'Cooking technique guidance',
        'Storage and preservation tips',
        'Cultural context education',
        'Follow-up recommendations'
      ],
      availability: 'scheduled',
      category: 'consultation',
      expert: {
        name: 'Master Curator Dawit Alemayehu',
        title: 'Chief Spice Curator',
        specialization: 'Traditional Ethiopian spice blending and heritage preservation',
        experience: '25+ years in spice trading and traditional cuisine'
      }
    },
    {
      id: 'custom-blend-creation',
      name: 'Custom Berbere Creation',
      description: 'Work with our spice masters to create a unique berbere blend tailored to your exact taste preferences and cooking style.',
      duration: '90 minutes + production',
      price: 275,
      features: [
        'In-depth taste profile consultation',
        'Custom blend formulation',
        'Small batch testing',
        'Recipe development',
        'Personalized labeling',
        'Storage and usage guide',
        '500g of your custom blend'
      ],
      availability: 'scheduled',
      category: 'custom_blend',
      expert: {
        name: 'Blend Master Hiwot Tadesse',
        title: 'Master Blend Artisan',
        specialization: 'Custom spice blend creation and flavor profiling',
        experience: '20+ years perfecting traditional and innovative blends'
      }
    },
    {
      id: 'cultural-cooking-class',
      name: 'Private Cooking Masterclass',
      description: 'Virtual one-on-one cooking session learning traditional Ethiopian techniques and recipes with our master chefs.',
      duration: '2 hours',
      price: 195,
      features: [
        'Live interactive cooking session',
        'Traditional technique instruction',
        'Cultural context and stories',
        'Ingredient preparation kit',
        'Recipe collection',
        'Recording for future reference'
      ],
      availability: 'scheduled',
      category: 'education',
      expert: {
        name: 'Chef Mulu Girma',
        title: 'Traditional Cuisine Master',
        specialization: 'Authentic Ethiopian cooking techniques and cultural traditions',
        experience: '30+ years preserving and teaching traditional methods'
      }
    },
    {
      id: 'event-menu-planning',
      name: 'Event Menu Planning',
      description: 'Comprehensive planning service for Ethiopian-themed dinners, cultural events, or corporate functions.',
      duration: 'Full service planning',
      price: 450,
      features: [
        'Custom menu development',
        'Ingredient sourcing assistance',
        'Cooking timeline planning',
        'Cultural presentation guidance',
        'Dietary accommodation planning',
        'Chef referral network access'
      ],
      availability: 'premium_only',
      category: 'event_planning',
      expert: {
        name: 'Event Specialist Rahel Bekele',
        title: 'Cultural Event Curator',
        specialization: 'Ethiopian cultural events and traditional feast planning',
        experience: '15+ years organizing cultural celebrations and corporate events'
      }
    }
  ];

  const spiceOptions = [
    'Berbere', 'Korarima', 'Long Pepper', 'Nigella Seeds', 'Coriander', 
    'Fenugreek', 'Cinnamon', 'Cardamom', 'Turmeric', 'Ginger'
  ];

  const cuisineStyles = [
    'Traditional Ethiopian', 'Modern Ethiopian', 'Eritrean Traditional', 
    'International Fusion', 'Vegetarian Focus', 'Heat-Forward', 'Mild & Aromatic'
  ];

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case 'immediate':
        return <Badge className="bg-ethiopian-green hover:bg-ethiopian-green text-white">Available Now</Badge>;
      case 'scheduled':
        return <Badge variant="outline" className="text-golden border-golden">Schedule Required</Badge>;
      case 'premium_only':
        return <Badge className="bg-traditional-red hover:bg-traditional-red text-white">Premium Members Only</Badge>;
      default:
        return null;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'consultation': return <MessageCircle className="w-5 h-5" />;
      case 'custom_blend': return <Scissors className="w-5 h-5" />;
      case 'education': return <ChefHat className="w-5 h-5" />;
      case 'event_planning': return <Calendar className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  if (activeService) {
    const service = conciergeServices.find(s => s.id === activeService);
    if (!service) return null;

    return (
      <div className="min-h-screen bg-background">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Button 
                onClick={() => setActiveService(null)}
                variant="ghost"
                className="mb-8 text-burgundy hover:text-saffron"
              >
                ← Back to Concierge Services
              </Button>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Service Details */}
                <div>
                  <Card className="luxury-shadow border-0 mb-6">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-saffron">
                          {getCategoryIcon(service.category)}
                        </div>
                        <div>
                          <h2 className="font-luxury text-2xl text-burgundy">
                            {service.name}
                          </h2>
                          <p className="text-copper">{service.duration} • ${service.price}</p>
                        </div>
                      </div>
                      
                      {getAvailabilityBadge(service.availability)}
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-charcoal/70 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div>
                        <h4 className="font-medium text-burgundy mb-3">What You'll Receive:</h4>
                        <div className="space-y-2">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-ethiopian-green mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-charcoal/70">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-4 bg-golden/10 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <Award className="w-5 h-5 text-golden" />
                          <h4 className="font-medium text-burgundy">Your Expert</h4>
                        </div>
                        <h5 className="font-medium text-burgundy">{service.expert.name}</h5>
                        <p className="text-sm text-copper mb-2">{service.expert.title}</p>
                        <p className="text-xs text-charcoal/70 mb-2">{service.expert.specialization}</p>
                        <p className="text-xs text-charcoal/60">{service.expert.experience}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Booking Form */}
                <div>
                  {service.category === 'consultation' && (
                    <Card className="luxury-shadow border-0">
                      <CardHeader>
                        <h3 className="font-luxury text-xl text-burgundy">Book Your Consultation</h3>
                        <p className="text-charcoal/70">Let us help you discover your perfect spice journey.</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            placeholder="Full Name"
                            value={consultationForm.name}
                            onChange={(e) => setConsultationForm(prev => ({ ...prev, name: e.target.value }))}
                            className="border-copper/20 focus:border-saffron"
                          />
                          <Input
                            type="email"
                            placeholder="Email Address"
                            value={consultationForm.email}
                            onChange={(e) => setConsultationForm(prev => ({ ...prev, email: e.target.value }))}
                            className="border-copper/20 focus:border-saffron"
                          />
                        </div>
                        
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          value={consultationForm.phone}
                          onChange={(e) => setConsultationForm(prev => ({ ...prev, phone: e.target.value }))}
                          className="border-copper/20 focus:border-saffron"
                        />
                        
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            Cooking Experience Level
                          </label>
                          <select
                            value={consultationForm.experience}
                            onChange={(e) => setConsultationForm(prev => ({ ...prev, experience: e.target.value }))}
                            className="w-full px-3 py-2 border-2 border-copper/20 rounded-md focus:border-saffron bg-white"
                          >
                            <option value="">Select your level</option>
                            <option value="beginner">Beginner - New to Ethiopian cuisine</option>
                            <option value="intermediate">Intermediate - Some experience</option>
                            <option value="advanced">Advanced - Experienced cook</option>
                            <option value="professional">Professional - Chef or culinary professional</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            Consultation Topic
                          </label>
                          <select
                            value={consultationForm.topic}
                            onChange={(e) => setConsultationForm(prev => ({ ...prev, topic: e.target.value }))}
                            className="w-full px-3 py-2 border-2 border-copper/20 rounded-md focus:border-saffron bg-white"
                          >
                            <option value="">What would you like to discuss?</option>
                            <option value="spice-selection">Spice Selection & Collection Building</option>
                            <option value="cooking-techniques">Traditional Cooking Techniques</option>
                            <option value="menu-planning">Menu Planning & Recipe Development</option>
                            <option value="cultural-education">Cultural Education & Heritage</option>
                            <option value="custom-blends">Custom Blend Creation</option>
                            <option value="business-consulting">Restaurant/Business Consulting</option>
                          </select>
                        </div>
                        
                        <Textarea
                          placeholder="What are your culinary goals and interests? Tell us about your current experience with Ethiopian cuisine..."
                          value={consultationForm.goals}
                          onChange={(e) => setConsultationForm(prev => ({ ...prev, goals: e.target.value }))}
                          rows={4}
                          className="border-copper/20 focus:border-saffron resize-none"
                        />
                        
                        <Input
                          type="datetime-local"
                          value={consultationForm.preferredTime}
                          onChange={(e) => setConsultationForm(prev => ({ ...prev, preferredTime: e.target.value }))}
                          className="border-copper/20 focus:border-saffron"
                          min={new Date().toISOString().slice(0, 16)}
                        />
                        
                        <Button className="w-full bg-saffron hover:bg-cinnamon text-white py-3 font-medium">
                          <Calendar className="w-5 h-5 mr-2" />
                          Schedule Consultation - ${service.price}
                        </Button>
                      </CardContent>
                    </Card>
                  )}

                  {service.category === 'custom_blend' && (
                    <Card className="luxury-shadow border-0">
                      <CardHeader>
                        <h3 className="font-luxury text-xl text-burgundy">Create Your Signature Blend</h3>
                        <p className="text-charcoal/70">Design a unique spice blend that reflects your taste and style.</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Input
                          placeholder="Blend Name (e.g., 'Sarah's Special Berbere')"
                          value={customBlend.name}
                          onChange={(e) => setCustomBlend(prev => ({ ...prev, name: e.target.value }))}
                          className="border-copper/20 focus:border-saffron"
                        />
                        
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            What will you use this blend for?
                          </label>
                          <select
                            value={customBlend.purpose}
                            onChange={(e) => setCustomBlend(prev => ({ ...prev, purpose: e.target.value }))}
                            className="w-full px-3 py-2 border-2 border-copper/20 rounded-md focus:border-saffron bg-white"
                          >
                            <option value="">Select primary use</option>
                            <option value="meat-stews">Meat stews and braises</option>
                            <option value="vegetarian">Vegetarian dishes</option>
                            <option value="grilling">Grilling and roasting</option>
                            <option value="marinades">Marinades and rubs</option>
                            <option value="general">General cooking</option>
                            <option value="specific-dish">Specific traditional dish</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            Heat Level: {customBlend.heatLevel}/5
                          </label>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            value={customBlend.heatLevel}
                            onChange={(e) => setCustomBlend(prev => ({ ...prev, heatLevel: parseInt(e.target.value) }))}
                            className="w-full accent-saffron"
                          />
                          <div className="flex justify-between text-xs text-charcoal/60 mt-1">
                            <span>Mild</span>
                            <span>Medium</span>
                            <span>Hot</span>
                            <span>Very Hot</span>
                            <span>Extreme</span>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            Preferred Spices (select multiple)
                          </label>
                          <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                            {spiceOptions.map(spice => (
                              <label key={spice} className="flex items-center gap-2 text-sm">
                                <input
                                  type="checkbox"
                                  checked={customBlend.preferredSpices.includes(spice)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setCustomBlend(prev => ({ 
                                        ...prev, 
                                        preferredSpices: [...prev.preferredSpices, spice] 
                                      }));
                                    } else {
                                      setCustomBlend(prev => ({ 
                                        ...prev, 
                                        preferredSpices: prev.preferredSpices.filter(s => s !== spice) 
                                      }));
                                    }
                                  }}
                                  className="text-saffron"
                                />
                                {spice}
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            Quantity
                          </label>
                          <select
                            value={customBlend.quantity}
                            onChange={(e) => setCustomBlend(prev => ({ ...prev, quantity: parseInt(e.target.value) }))}
                            className="w-full px-3 py-2 border-2 border-copper/20 rounded-md focus:border-saffron bg-white"
                          >
                            <option value={250}>250g - Personal Use ($275)</option>
                            <option value={500}>500g - Family Size ($425)</option>
                            <option value={1000}>1kg - Professional Size ($750)</option>
                          </select>
                        </div>
                        
                        <Textarea
                          placeholder="Special instructions, dietary restrictions, or specific requests..."
                          value={customBlend.specialInstructions}
                          onChange={(e) => setCustomBlend(prev => ({ ...prev, specialInstructions: e.target.value }))}
                          rows={3}
                          className="border-copper/20 focus:border-saffron resize-none"
                        />
                        
                        <Button className="w-full bg-saffron hover:bg-cinnamon text-white py-3 font-medium">
                          <Scissors className="w-5 h-5 mr-2" />
                          Start Custom Blend Creation - $
                          {customBlend.quantity === 250 ? 275 : customBlend.quantity === 500 ? 425 : 750}
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-20 bg-heritage-blend overflow-hidden">
        <div className="absolute inset-0 pattern-traditional opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-burgundy/10 border border-burgundy/20 rounded-full">
              <Crown className="w-4 h-4 text-burgundy" />
              <span className="text-sm font-medium text-burgundy tracking-wider">VIP CONCIERGE SERVICES</span>
            </div>
            
            <h1 className="font-luxury text-luxury-xl text-white mb-6">
              Personal Spice
              <br />
              <span className="text-golden">Concierge</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Experience personalized service from our team of spice masters, cultural experts, and culinary artists.
              From custom blends to private consultations, we're here to elevate your culinary journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {conciergeServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setActiveService(service.id)}
              >
                <Card className="overflow-hidden border-0 luxury-shadow hover:spice-glow transition-luxury h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-saffron">
                        {getCategoryIcon(service.category)}
                      </div>
                      {getAvailabilityBadge(service.availability)}
                    </div>
                    
                    <h3 className="font-luxury text-xl text-burgundy mb-2 group-hover:text-saffron transition-colors">
                      {service.name}
                    </h3>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-copper">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-saffron">
                        ${service.price}
                      </div>
                    </div>
                    
                    <p className="text-charcoal/70 leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-medium text-burgundy mb-3 text-sm">Service Includes:</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-ethiopian-green mt-1 flex-shrink-0" />
                            <span className="text-xs text-charcoal/70">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-xs text-saffron">
                            +{service.features.length - 4} more benefits...
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-warm-beige/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-golden" />
                        <span className="font-medium text-burgundy text-sm">Expert Guide</span>
                      </div>
                      <p className="text-xs text-charcoal/70">{service.expert.name}</p>
                      <p className="text-xs text-copper">{service.expert.specialization}</p>
                    </div>
                    
                    <Button className="w-full bg-saffron hover:bg-cinnamon text-white opacity-0 group-hover:opacity-100 transition-luxury">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book This Service
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Benefits */}
      <section className="py-16 bg-warm-beige/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-luxury text-2xl text-burgundy mb-4">
              VIP Concierge Benefits
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Our premium members enjoy exclusive access to personalized services
              and dedicated support from our team of spice masters.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: '24/7 Expert Support',
                description: 'Dedicated spice specialists available around the clock for questions, recommendations, and cooking guidance.',
                badge: 'Always Available'
              },
              {
                icon: <Scissors className="w-8 h-8" />,
                title: 'Custom Blend Service',
                description: 'Work with master blenders to create signature spice blends tailored to your exact taste preferences.',
                badge: 'Exclusive'
              },
              {
                icon: <Crown className="w-8 h-8" />,
                title: 'VIP Priority Access',
                description: 'First access to limited editions, rare harvests, and exclusive collaborations with renowned chefs.',
                badge: 'Members Only'
              },
              {
                icon: <ChefHat className="w-8 h-8" />,
                title: 'Private Cooking Classes',
                description: 'One-on-one virtual cooking sessions with traditional Ethiopian chefs and modern fusion specialists.',
                badge: 'Educational'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Cultural Immersion',
                description: 'Deep dives into Ethiopian and Eritrean culinary history, traditions, and regional specialties.',
                badge: 'Heritage'
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: 'White-Glove Service',
                description: 'Premium packaging, expedited shipping, and personalized attention for all orders and special requests.',
                badge: 'Luxury'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="luxury-shadow border-0 hover:spice-glow transition-luxury h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4 text-saffron">
                      {benefit.icon}
                    </div>
                    
                    <Badge className="bg-golden hover:bg-golden text-charcoal mb-4">
                      {benefit.badge}
                    </Badge>
                    
                    <h3 className="font-luxury text-lg text-burgundy mb-3">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-sm text-charcoal/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-heritage-blend relative overflow-hidden">
        <div className="absolute inset-0 pattern-traditional opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-luxury text-luxury-lg text-white mb-6">
              Ready for VIP Treatment?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our exclusive community of spice connoisseurs and experience
              the ultimate in personalized culinary service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-golden hover:bg-copper text-charcoal px-8 py-4 text-lg font-medium"
              >
                <Crown className="w-5 h-5 mr-2" />
                Become VIP Member
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 text-lg font-medium"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Concierge Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}