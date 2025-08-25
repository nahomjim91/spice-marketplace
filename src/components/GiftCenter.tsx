import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Gift,
  Package,
  Heart,
  Star,
  Crown,
  Users,
  Building,
  Calendar,
  MessageCircle,
  Truck,
  Award,
  Sparkles,
  Check,
  Plus,
  Minus,
  ShoppingCart,
  Clock,
  Globe,
} from "lucide-react";
import { giftOptions, type GiftOption } from "@/data/subscriptions";

interface GiftCustomization {
  message: string;
  recipientName: string;
  senderName: string;
  occasion: string;
  deliveryDate: string;
  giftWrap: string;
  includeCard: boolean;
}

export default function GiftCenter() {
  const [selectedGift, setSelectedGift] = useState<GiftOption | null>(null);
  const [showCustomization, setShowCustomization] = useState(false);
  const [giftQuantity, setGiftQuantity] = useState(1);
  const [customization, setCustomization] = useState<GiftCustomization>({
    message: "",
    recipientName: "",
    senderName: "",
    occasion: "",
    deliveryDate: "",
    giftWrap: "luxury",
    includeCard: true,
  });

  const occasionOptions = [
    "Birthday",
    "Anniversary",
    "Wedding",
    "Housewarming",
    "Holiday",
    "Thank You",
    "Corporate",
    "Cultural Celebration",
  ];

  const giftWrapOptions = [
    { id: "luxury", name: "Luxury Ethiopian Textile", price: 15 },
    { id: "corporate", name: "Corporate Elegant", price: 10 },
    { id: "traditional", name: "Traditional Heritage", price: 12 },
    { id: "seasonal", name: "Seasonal Theme", price: 8 },
  ];

  const oneTimeGifts = giftOptions.filter((gift) => gift.type === "one_time");
  const subscriptionGifts = giftOptions.filter(
    (gift) => gift.type === "subscription"
  );
  const corporateGifts = giftOptions.filter(
    (gift) => gift.type === "corporate"
  );

  const handleGiftSelect = (gift: GiftOption) => {
    setSelectedGift(gift);
    setShowCustomization(true);
  };

  const calculateTotal = () => {
    if (!selectedGift) return 0;
    const basePrice = selectedGift.price * giftQuantity;
    const wrapPrice =
      giftWrapOptions.find((wrap) => wrap.id === customization.giftWrap)
        ?.price || 0;
    return basePrice + (customization.includeCard ? wrapPrice : 0);
  };

  if (showCustomization && selectedGift) {
    return (
      <div className="min-h-screen bg-background">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <Button
                onClick={() => setShowCustomization(false)}
                variant="ghost"
                className="mb-8 text-burgundy hover:text-saffron"
              >
                ← Back to Gift Center
              </Button>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Gift Summary */}
                <div className="space-y-6">
                  <Card className="luxury-shadow border-0">
                    <CardHeader>
                      <h2 className="font-luxury text-2xl text-burgundy">
                        {selectedGift.name}
                      </h2>
                      <p className="text-charcoal/70">
                        {selectedGift.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {selectedGift.includes.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-ethiopian-green mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-charcoal/70">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-charcoal/10">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-medium text-burgundy">
                            Quantity:
                          </span>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                setGiftQuantity(Math.max(1, giftQuantity - 1))
                              }
                              className="w-8 h-8 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">
                              {giftQuantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setGiftQuantity(giftQuantity + 1)}
                              className="w-8 h-8 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="bg-warm-beige/20 rounded-lg p-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span>Gift ({giftQuantity}x)</span>
                            <span>${selectedGift.price * giftQuantity}</span>
                          </div>
                          {customization.includeCard && (
                            <div className="flex justify-between text-sm mb-2">
                              <span>Gift Wrapping</span>
                              <span>
                                $
                                {giftWrapOptions.find(
                                  (wrap) => wrap.id === customization.giftWrap
                                )?.price || 0}
                              </span>
                            </div>
                          )}
                          <div className="border-t border-charcoal/10 pt-2 flex justify-between font-medium">
                            <span>Total</span>
                            <span className="text-saffron">
                              ${calculateTotal()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Customization Form */}
                <div className="space-y-6">
                  <Card className="luxury-shadow border-0">
                    <CardHeader>
                      <h3 className="font-luxury text-xl text-burgundy">
                        Personalize Your Gift
                      </h3>
                      <p className="text-charcoal/70">
                        Add a personal touch to make this gift truly special.
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            Recipient Name
                          </label>
                          <Input
                            value={customization.recipientName}
                            onChange={(e) =>
                              setCustomization((prev) => ({
                                ...prev,
                                recipientName: e.target.value,
                              }))
                            }
                            placeholder="Who is this gift for?"
                            className="border-copper/20 focus:border-saffron"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-burgundy mb-2">
                            Your Name
                          </label>
                          <Input
                            value={customization.senderName}
                            onChange={(e) =>
                              setCustomization((prev) => ({
                                ...prev,
                                senderName: e.target.value,
                              }))
                            }
                            placeholder="From"
                            className="border-copper/20 focus:border-saffron"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-burgundy mb-2">
                          Occasion
                        </label>
                        <select
                          value={customization.occasion}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              occasion: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border-2 border-copper/20 rounded-md focus:border-saffron bg-white"
                        >
                          <option value="">Select occasion</option>
                          {occasionOptions.map((occasion) => (
                            <option key={occasion} value={occasion}>
                              {occasion}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-burgundy mb-2">
                          Personal Message
                        </label>
                        <Textarea
                          value={customization.message}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              message: e.target.value,
                            }))
                          }
                          placeholder="Share a heartfelt message with your gift..."
                          rows={4}
                          className="border-copper/20 focus:border-saffron resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-burgundy mb-2">
                          Delivery Date
                        </label>
                        <Input
                          type="date"
                          value={customization.deliveryDate}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              deliveryDate: e.target.value,
                            }))
                          }
                          className="border-copper/20 focus:border-saffron"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-burgundy mb-3">
                          Gift Presentation
                        </label>
                        <div className="space-y-3">
                          {giftWrapOptions.map((wrap) => (
                            <div
                              key={wrap.id}
                              className="flex items-center justify-between p-3 border rounded-lg hover:bg-warm-beige/20 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <input
                                  type="radio"
                                  name="giftWrap"
                                  value={wrap.id}
                                  checked={customization.giftWrap === wrap.id}
                                  onChange={(e) =>
                                    setCustomization((prev) => ({
                                      ...prev,
                                      giftWrap: e.target.value,
                                    }))
                                  }
                                  className="text-saffron"
                                />
                                <div>
                                  <div className="font-medium text-burgundy">
                                    {wrap.name}
                                  </div>
                                  <div className="text-sm text-charcoal/60">
                                    +${wrap.price}
                                  </div>
                                </div>
                              </div>
                              <Package className="w-4 h-4 text-copper" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={customization.includeCard}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              includeCard: e.target.checked,
                            }))
                          }
                          className="text-saffron"
                        />
                        <span className="text-sm text-charcoal/70">
                          Include personalized gift card
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Button className="w-full bg-saffron hover:bg-cinnamon text-white py-4 text-lg font-medium luxury-shadow">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart - ${calculateTotal()}
                  </Button>
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
      <section className="relative py-20 bg-warm-spice overflow-hidden">
        <div className="absolute inset-0 pattern-traditional opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-burgundy/10 border border-burgundy/20 rounded-full">
              <Gift className="w-4 h-4 text-burgundy" />
              <span className="text-sm font-medium text-burgundy tracking-wider">
                LUXURY GIFT CENTER
              </span>
            </div>

            <h1 className="font-luxury text-luxury-xl text-heritage-gradient mb-6">
              Gifts That Tell
              <br />
              <span className="text-spice-gradient">Cultural Stories</span>
            </h1>

            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              Share the rich heritage of Ethiopian and Eritrean cuisine with
              beautifully curated gift collections, perfect for any occasion and
              any level of culinary curiosity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gift Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-warm-beige/30 dark:bg-charcoal/30 h-14">
              <TabsTrigger
                value="personal"
                className="data-[state=active]:!bg-gradient-to-r data-[state=active]:!from-saffron data-[state=active]:!to-golden data-[state=active]:!text-burgundy data-[state=active]:!shadow-lg data-[state=active]:!shadow-saffron/25 dark:data-[state=active]:!text-ivory text-lg py-3 text-burgundy/70 dark:text-ivory/70 hover:text-saffron hover:bg-saffron/5 dark:hover:bg-saffron/10 transition-all duration-300 font-medium data-[state=active]:!scale-105 data-[state=active]:!border-golden/50 data-[state=active]:!font-semibold"
              >
                <Heart className="w-5 h-5 mr-2" />
                Personal Gifts
              </TabsTrigger>
              <TabsTrigger
                value="subscription"
                className="data-[state=active]:!bg-gradient-to-r data-[state=active]:!from-saffron data-[state=active]:!to-golden data-[state=active]:!text-burgundy data-[state=active]:!shadow-lg data-[state=active]:!shadow-saffron/25 dark:data-[state=active]:!text-ivory text-lg py-3 text-burgundy/70 dark:text-ivory/70 hover:text-saffron hover:bg-saffron/5 dark:hover:bg-saffron/10 transition-all duration-300 font-medium data-[state=active]:!scale-105 data-[state=active]:!border-golden/50 data-[state=active]:!font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Subscription Gifts
              </TabsTrigger>
              <TabsTrigger
                value="corporate"
                className="data-[state=active]:!bg-gradient-to-r data-[state=active]:!from-saffron data-[state=active]:!to-golden data-[state=active]:!text-burgundy data-[state=active]:!shadow-lg data-[state=active]:!shadow-saffron/25 dark:data-[state=active]:!text-ivory text-lg py-3 text-burgundy/70 dark:text-ivory/70 hover:text-saffron hover:bg-saffron/5 dark:hover:bg-saffron/10 transition-all duration-300 font-medium data-[state=active]:!scale-105 data-[state=active]:!border-golden/50 data-[state=active]:!font-semibold"
              >
                <Building className="w-5 h-5 mr-2" />
                Corporate Gifts
              </TabsTrigger>
            </TabsList>

            {/* Personal Gifts */}
            <TabsContent value="personal">
              <div className="grid lg:grid-cols-2 gap-8">
                {oneTimeGifts.map((gift, index) => (
                  <motion.div
                    key={gift.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                    onClick={() => handleGiftSelect(gift)}
                  >
                    <Card className="overflow-hidden border-0 luxury-shadow hover:spice-glow transition-luxury h-full">
                      <CardHeader className="relative">
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-golden hover:bg-golden text-charcoal">
                            ${gift.price}
                          </Badge>
                        </div>

                        <div className="text-6xl mb-4">🎁</div>

                        <h3 className="font-luxury text-xl text-burgundy mb-2 group-hover:text-saffron transition-colors">
                          {gift.name}
                        </h3>

                        <p className="text-charcoal/70 leading-relaxed">
                          {gift.description}
                        </p>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-medium text-burgundy mb-3 text-sm">
                            What's Included:
                          </h4>
                          <div className="space-y-2">
                            {gift.includes
                              .slice(0, 4)
                              .map((item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  className="flex items-start gap-2"
                                >
                                  <Star className="w-3 h-3 text-golden mt-1 flex-shrink-0" />
                                  <span className="text-xs text-charcoal/70">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            {gift.includes.length > 4 && (
                              <div className="text-xs text-saffron">
                                +{gift.includes.length - 4} more items...
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="p-4 bg-golden/10 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Package className="w-4 h-4 text-golden" />
                            <span className="font-medium text-burgundy text-sm">
                              Presentation
                            </span>
                          </div>
                          <p className="text-xs text-charcoal/70">
                            {gift.presentation}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {gift.ideal_for
                            .slice(0, 3)
                            .map((audience, audienceIndex) => (
                              <Badge
                                key={audienceIndex}
                                variant="outline"
                                className="text-xs text-copper border-copper"
                              >
                                {audience}
                              </Badge>
                            ))}
                        </div>

                        <Button className="w-full bg-saffron hover:bg-cinnamon text-white opacity-0 group-hover:opacity-100 transition-luxury">
                          <Gift className="w-4 h-4 mr-2" />
                          Customize This Gift
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Subscription Gifts */}
            <TabsContent value="subscription">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="font-luxury text-2xl text-burgundy mb-4">
                    The Gift That Keeps Giving
                  </h2>
                  <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                    Give the experience of monthly spice discovery with our
                    subscription gift options. Recipients receive beautifully
                    curated boxes for their chosen duration.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {subscriptionGifts.map((gift, index) => (
                    <motion.div
                      key={gift.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      whileHover={{ y: -5 }}
                      className="group cursor-pointer"
                      onClick={() => handleGiftSelect(gift)}
                    >
                      <Card className="overflow-hidden border-0 luxury-shadow hover:spice-glow transition-luxury h-full bg-gradient-to-br from-saffron/5 to-golden/5">
                        <CardHeader className="text-center">
                          <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Calendar className="w-8 h-8 text-saffron" />
                          </div>

                          <h3 className="font-luxury text-xl text-burgundy mb-2 group-hover:text-saffron transition-colors">
                            {gift.name}
                          </h3>

                          <div className="text-3xl font-bold text-saffron mb-2">
                            ${gift.price}
                          </div>

                          <Badge className="bg-golden hover:bg-golden text-charcoal mb-4">
                            {gift.duration}
                          </Badge>

                          <p className="text-charcoal/70 leading-relaxed">
                            {gift.description}
                          </p>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            {gift.includes.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex items-start gap-3"
                              >
                                <Check className="w-4 h-4 text-ethiopian-green mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-charcoal/70">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>

                          <Button className="w-full bg-saffron hover:bg-cinnamon text-white opacity-0 group-hover:opacity-100 transition-luxury">
                            <Gift className="w-4 h-4 mr-2" />
                            Give This Experience
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Corporate Gifts */}
            <TabsContent value="corporate">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="font-luxury text-2xl text-burgundy mb-4">
                    Distinguished Corporate Collections
                  </h2>
                  <p className="text-lg text-charcoal/70 dark:text-ivory/70 max-w-2xl mx-auto">
                    Impress clients, partners, and employees with sophisticated
                    gifts that showcase Ethiopian heritage and your company's
                    appreciation for cultural excellence.
                  </p>
                </div>

                {corporateGifts.map((gift, index) => (
                  <motion.div
                    key={gift.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group"
                  >
                    <Card className="overflow-hidden border-0 luxury-shadow bg-gradient-to-r from-heritage-blend to-burgundy">
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-3 gap-8 items-center">
                          <div className="lg:col-span-2">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center">
                                <Building className="w-8 h-8 text-burgundy" />
                              </div>
                              <div>
                                <h3 className="font-luxury text-2xl text-ivory">
                                  {gift.name}
                                </h3>
                                <div className="flex items-center gap-3">
                                  <Badge className="bg-golden hover:bg-golden text-burgundy">
                                    ${gift.price}
                                  </Badge>
                                  <Badge
                                    variant="outline"
                                    className="border-ivory text-ivory hover:bg-ivory/10"
                                  >
                                    Corporate Tier
                                  </Badge>
                                </div>
                              </div>
                            </div>

                            <p className="text-ivory/90 leading-relaxed mb-6">
                              {gift.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-medium text-golden mb-3">
                                  Collection Includes:
                                </h4>
                                <div className="space-y-2">
                                  {gift.includes
                                    .slice(0, 4)
                                    .map((item, itemIndex) => (
                                      <div
                                        key={itemIndex}
                                        className="flex items-start gap-2"
                                      >
                                        <Sparkles className="w-3 h-3 text-golden mt-1 flex-shrink-0" />
                                        <span className="text-sm text-ivory/80">
                                          {item}
                                        </span>
                                      </div>
                                    ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-medium text-golden mb-3">
                                  Corporate Services:
                                </h4>
                                <div className="space-y-2">
                                  {gift.corporate_features
                                    ?.slice(0, 4)
                                    .map((feature, featureIndex) => (
                                      <div
                                        key={featureIndex}
                                        className="flex items-start gap-2"
                                      >
                                        <Award className="w-3 h-3 text-golden mt-1 flex-shrink-0" />
                                        <span className="text-sm text-ivory/80">
                                          {feature}
                                        </span>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="p-6 bg-ivory/10 dark:bg-charcoal/10 rounded-lg backdrop-blur-sm">
                              <h4 className="font-medium text-golden mb-4 text-center">
                                Perfect For:
                              </h4>
                              <div className="space-y-2">
                                {gift.ideal_for.map(
                                  (audience, audienceIndex) => (
                                    <div
                                      key={audienceIndex}
                                      className="text-center"
                                    >
                                      <Badge
                                        variant="outline"
                                        className="border-ivory/30 text-ivory text-xs hover:bg-ivory/10"
                                      >
                                        {audience}
                                      </Badge>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>

                            <Button
                              className="w-full bg-golden hover:bg-copper text-burgundy font-medium py-3 transition-colors"
                              onClick={() => handleGiftSelect(gift)}
                            >
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Request Corporate Quote
                            </Button>
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
      </section>

      {/* Gift Services */}
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
              White-Glove Gift Services
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Every gift is handled with the utmost care and attention to
              detail, ensuring your gesture makes a lasting impression.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Package className="w-6 h-6" />,
                title: "Luxury Packaging",
                description:
                  "Hand-crafted presentation boxes with Ethiopian textile accents",
              },
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Personal Messages",
                description:
                  "Custom cards with your heartfelt message in beautiful calligraphy",
              },
              {
                icon: <Truck className="w-6 h-6" />,
                title: "Precise Delivery",
                description:
                  "Schedule delivery for the perfect moment with tracking updates",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Concierge Support",
                description:
                  "Dedicated gift specialists to help you choose the perfect collection",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4 text-saffron">
                  {service.icon}
                </div>
                <h3 className="font-medium text-burgundy mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-charcoal/70">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Need Help Choosing?
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our gift specialists are here to help you find the perfect
              collection for any occasion, taste preference, or budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-golden hover:bg-copper text-charcoal px-8 py-4 text-lg font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Gift Specialist
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-ivory text-ivory hover:bg-ivory hover:text-charcoal px-8 py-4 text-lg font-medium transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
