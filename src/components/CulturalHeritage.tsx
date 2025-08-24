import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin,
  Users,
  Award,
  Leaf,
  BookOpen,
  Crown,
  Calendar,
  Quote
} from 'lucide-react';
import { producers, heritageStories, culturalTraditions } from '@/data/cultural';

export default function CulturalHeritage() {
  const [selectedProducer, setSelectedProducer] = useState(producers[0]);

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-luxury text-luxury-lg text-burgundy mb-4">
            Our Heritage & Stories
          </h1>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            Discover the rich cultural tapestry behind every spice, from the dedicated farmers 
            who grow them to the ancient traditions that shaped their use.
          </p>
        </motion.div>

        <Tabs defaultValue="producers" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-warm-beige/30 mb-12">
            <TabsTrigger value="producers" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              Producer Stories
            </TabsTrigger>
            <TabsTrigger value="heritage" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Heritage Tales
            </TabsTrigger>
            <TabsTrigger value="traditions" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
              <Crown className="w-4 h-4 mr-2" />
              Cultural Traditions
            </TabsTrigger>
          </TabsList>

          {/* Producer Stories */}
          <TabsContent value="producers">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Producer List */}
              <div className="space-y-4">
                {producers.map((producer) => (
                  <motion.div
                    key={producer.id}
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedProducer(producer)}
                    className={`p-4 rounded-lg cursor-pointer transition-luxury ${
                      selectedProducer.id === producer.id
                        ? 'bg-saffron/10 border-2 border-saffron'
                        : 'bg-warm-beige/20 border border-golden/20 hover:border-saffron/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-spice-sunset rounded-full flex items-center justify-center text-white font-bold">
                        {producer.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-luxury text-burgundy">{producer.name}</h4>
                        <p className="text-sm text-copper flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {producer.location}
                        </p>
                        <p className="text-xs text-charcoal/60 mt-1">
                          {producer.generationsInBusiness} generations
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Producer Detail */}
              <div className="lg:col-span-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProducer.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="luxury-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="font-luxury text-2xl text-burgundy mb-2">
                              {selectedProducer.name}
                            </CardTitle>
                            <p className="text-copper flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {selectedProducer.region}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge className="bg-golden hover:bg-golden text-charcoal">
                              {selectedProducer.generationsInBusiness} Generations
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {/* Producer Image */}
                        <div className="aspect-video bg-warm-beige/30 rounded-lg mb-6 overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center text-6xl">
                            👨‍🌾
                          </div>
                        </div>

                        {/* Quote */}
                        <blockquote className="border-l-4 border-saffron pl-4 mb-6 bg-warm-beige/20 p-4 rounded-r-lg">
                          <Quote className="w-6 h-6 text-saffron mb-2" />
                          <p className="italic text-burgundy font-medium">
                            "{selectedProducer.quote}"
                          </p>
                        </blockquote>

                        {/* Story */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-burgundy mb-3">Their Story</h4>
                          <p className="text-charcoal/80 leading-relaxed">{selectedProducer.story}</p>
                        </div>

                        {/* Specialties */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-burgundy mb-3">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProducer.specialties.map((specialty) => (
                              <Badge key={specialty} variant="outline" className="border-golden text-golden">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-burgundy mb-3">Achievements</h4>
                          <div className="space-y-2">
                            {selectedProducer.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-saffron flex-shrink-0" />
                                <span className="text-sm text-charcoal/80">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Sustainability */}
                        <div>
                          <h4 className="font-semibold text-burgundy mb-3">Sustainability Practices</h4>
                          <div className="space-y-2">
                            {selectedProducer.sustainabilityPractices.map((practice, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <Leaf className="w-4 h-4 text-ethiopian-green flex-shrink-0" />
                                <span className="text-sm text-charcoal/80">{practice}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </TabsContent>

          {/* Heritage Stories */}
          <TabsContent value="heritage">
            <div className="grid md:grid-cols-2 gap-8">
              {heritageStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="luxury-shadow h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="font-luxury text-xl text-burgundy">
                          {story.title}
                        </CardTitle>
                        <Badge variant="outline" className="border-copper text-copper">
                          {story.period}
                        </Badge>
                      </div>
                      <p className="text-sm text-saffron flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {story.location}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-charcoal/80 leading-relaxed mb-4">
                        {story.story}
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-burgundy text-sm">Significance</h5>
                          <p className="text-xs text-charcoal/70">{story.significance}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-burgundy text-sm">Related Spices</h5>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {story.relatedSpices.map((spice) => (
                              <Badge key={spice} className="text-xs bg-golden/20 text-golden hover:bg-golden/20">
                                {spice}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-burgundy text-sm">Modern Relevance</h5>
                          <p className="text-xs text-charcoal/70">{story.modernRelevance}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Cultural Traditions */}
          <TabsContent value="traditions">
            <div className="space-y-8">
              {culturalTraditions.map((tradition, index) => (
                <motion.div
                  key={tradition.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="luxury-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="font-luxury text-2xl text-burgundy mb-2">
                            {tradition.name}
                          </CardTitle>
                          <p className="text-copper flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {tradition.occasion}
                          </p>
                        </div>
                        <Badge className="bg-ethiopian-green hover:bg-ethiopian-green text-white">
                          {tradition.region}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-charcoal/80 leading-relaxed mb-6">
                            {tradition.description}
                          </p>
                          
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-burgundy mb-2">Spices Used</h5>
                              <div className="flex flex-wrap gap-2">
                                {tradition.spicesUsed.map((spice) => (
                                  <Badge key={spice} variant="outline" className="border-golden text-golden">
                                    {spice}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h5 className="font-semibold text-burgundy mb-2">Preparation</h5>
                              <p className="text-sm text-charcoal/70">{tradition.preparation}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-burgundy mb-2">Cultural Significance</h5>
                            <p className="text-sm text-charcoal/70">{tradition.culturalSignificance}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-burgundy mb-2">Modern Adaptation</h5>
                            <p className="text-sm text-charcoal/70">{tradition.modernAdaptation}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}