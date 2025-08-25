import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User,
  Package,
  Heart,
  Star,
  Crown,
  Clock,
  Truck,
  Award,
  Settings,
  CreditCard,
  Gift,
  BookOpen,
  Calendar,
  MessageCircle,
  Bell,
  Shield,
  Edit,
  Eye,
  Download
} from 'lucide-react';
import { formatPrice } from '@/contexts/CartContext';

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: number;
  tracking?: string;
  estimatedDelivery?: string;
}

interface Subscription {
  id: string;
  type: string;
  status: 'active' | 'paused' | 'cancelled';
  nextDelivery: string;
  monthlyPrice: number;
}

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const userData = {
    name: 'Selihom Kidane',
    email: 'sarah@example.com',
    memberSince: '2023',
    tier: 'Heritage Connoisseur',
    totalOrders: 24,
    totalSpent: 1847,
    favoriteSpice: 'Single-Origin Berbere'
  };

  const recentOrders: Order[] = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 127.50,
      items: 3,
      tracking: 'TRK123456789'
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-22',
      status: 'shipped',
      total: 89.25,
      items: 2,
      tracking: 'TRK987654321',
      estimatedDelivery: '2024-01-25'
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-28',
      status: 'processing',
      total: 156.00,
      items: 4
    }
  ];

  const subscription: Subscription = {
    id: 'SUB-HC-001',
    type: 'Heritage Connoisseur',
    status: 'active',
    nextDelivery: '2024-02-15',
    monthlyPrice: 79
  };

  const wishlistItems = [
    'Aged Berbere Reserve',
    'Wild Korarima Pods',
    'Heritage Spice Collection',
    'Ethiopian Coffee Ceremony Set'
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-ethiopian-green bg-ethiopian-green/10';
      case 'shipped': return 'text-golden bg-golden/10';
      case 'processing': return 'text-saffron bg-saffron/10';
      case 'cancelled': return 'text-traditional-red bg-traditional-red/10';
      default: return 'text-charcoal/60 bg-charcoal/10';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-warm-beige/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="font-luxury text-3xl text-burgundy mb-2">
                  Welcome back, {userData.name}
                </h1>
                <div className="flex items-center gap-4">
                  <Badge className="bg-golden hover:bg-golden text-charcoal">
                    {userData.tier} Member
                  </Badge>
                  <span className="text-sm text-charcoal/60">
                    Member since {userData.memberSince}
                  </span>
                </div>
              </div>
              
              <Button variant="outline" className="border-saffron text-saffron hover:bg-saffron hover:text-white">
                <Settings className="w-4 h-4 mr-2" />
                Account Settings
              </Button>
            </div>

            {/* Stats Overview */}
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Total Orders', value: userData.totalOrders.toString(), icon: <Package className="w-5 h-5" />, color: 'text-saffron' },
                { label: 'Total Spent', value: formatPrice(userData.totalSpent), icon: <Star className="w-5 h-5" />, color: 'text-golden' },
                { label: 'Favorite Spice', value: userData.favoriteSpice, icon: <Heart className="w-5 h-5" />, color: 'text-traditional-red' },
                { label: 'Membership Tier', value: userData.tier, icon: <Crown className="w-5 h-5" />, color: 'text-burgundy' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="luxury-shadow border-0 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 rounded-full bg-warm-beige/20 flex items-center justify-center mx-auto mb-3 ${stat.color}`}>
                        {stat.icon}
                      </div>
                      <div className="font-bold text-lg text-burgundy">{stat.value}</div>
                      <div className="text-sm text-charcoal/60">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-warm-beige/30 h-12">
                <TabsTrigger value="overview"     className="data-[state=active]:bg-saffron data-[state=active]:text-burgundy data-[state=active]:dark:text-white text-charcoal dark:text-ivory"
>
                  Overview
                </TabsTrigger>
                <TabsTrigger value="orders"     className="data-[state=active]:bg-saffron data-[state=active]:text-burgundy data-[state=active]:dark:text-white text-charcoal dark:text-ivory"
>
                  Orders
                </TabsTrigger>
                <TabsTrigger value="subscription"     className="data-[state=active]:bg-saffron data-[state=active]:text-burgundy data-[state=active]:dark:text-white text-charcoal dark:text-ivory"
>
                  Subscription
                </TabsTrigger>
                <TabsTrigger value="wishlist"     className="data-[state=active]:bg-saffron data-[state=active]:text-burgundy data-[state=active]:dark:text-white text-charcoal dark:text-ivory"
>
                  Wishlist
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Recent Activity */}
                  <Card className="luxury-shadow border-0">
                    <CardHeader>
                      <h3 className="font-medium text-burgundy">Recent Activity</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { action: 'Order delivered', item: 'Single-Origin Berbere', time: '2 days ago', icon: <Package className="w-4 h-4 text-ethiopian-green" /> },
                        { action: 'Added to wishlist', item: 'Wild Korarima Pods', time: '5 days ago', icon: <Heart className="w-4 h-4 text-traditional-red" /> },
                        { action: 'Recipe saved', item: 'Traditional Doro Wat', time: '1 week ago', icon: <BookOpen className="w-4 h-4 text-copper" /> }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-warm-beige/10 rounded-lg">
                          {activity.icon}
                          <div className="flex-1">
                            <p className="text-sm font-medium text-burgundy">{activity.action}</p>
                            <p className="text-xs text-charcoal/60">{activity.item}</p>
                          </div>
                          <span className="text-xs text-charcoal/50">{activity.time}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Subscription Status */}
                  <Card className="luxury-shadow border-0">
                    <CardHeader>
                      <h3 className="font-medium text-burgundy">Your Subscription</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-golden/10 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium text-burgundy">{subscription.type}</h4>
                          <Badge className="bg-ethiopian-green hover:bg-ethiopian-green text-white">
                            Active
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-charcoal/70">Next delivery:</span>
                            <span className="font-medium">{subscription.nextDelivery}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-charcoal/70">Monthly price:</span>
                            <span className="font-medium text-saffron">{formatPrice(subscription.monthlyPrice)}</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full mt-4 border-golden text-golden hover:bg-golden hover:text-charcoal">
                          Manage Subscription
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-luxury text-2xl text-burgundy">Order History</h2>
                  <Button variant="outline" className="border-saffron text-saffron hover:bg-saffron hover:text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                </div>

                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="luxury-shadow border-0 hover:spice-glow transition-luxury">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="font-medium text-burgundy">Order {order.id}</h3>
                              <p className="text-sm text-charcoal/60">{order.date} • {order.items} items</p>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-saffron">{formatPrice(order.total)}</div>
                              <Badge className={getStatusColor(order.status)}>
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </Badge>
                            </div>
                          </div>
                          
                          {order.tracking && (
                            <div className="flex items-center gap-2 text-sm text-charcoal/70 mb-4">
                              <Truck className="w-4 h-4" />
                              <span>Tracking: {order.tracking}</span>
                            </div>
                          )}
                          
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            {order.status === 'delivered' && (
                              <Button variant="outline" size="sm" className="border-saffron text-saffron hover:bg-saffron hover:text-white">
                                Reorder
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Subscription Tab */}
              <TabsContent value="subscription" className="space-y-6">
                <Card className="luxury-shadow border-0">
                  <CardHeader>
                    <h2 className="font-luxury text-2xl text-burgundy">Subscription Management</h2>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="font-medium text-burgundy">Current Plan</h3>
                        <div className="p-6 bg-golden/10 rounded-lg">
                          <div className="flex items-center gap-3 mb-4">
                            <Crown className="w-6 h-6 text-golden" />
                            <div>
                              <h4 className="font-medium text-burgundy">{subscription.type}</h4>
                              <p className="text-sm text-charcoal/60">Premium monthly subscription</p>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Next delivery:</span>
                              <span className="font-medium">{subscription.nextDelivery}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Monthly price:</span>
                              <span className="font-medium text-saffron">{formatPrice(subscription.monthlyPrice)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-medium text-burgundy">Quick Actions</h3>
                        <div className="space-y-3">
                          <Button variant="outline" className="w-full justify-start border-saffron text-saffron hover:bg-saffron hover:text-white">
                            <Calendar className="w-4 h-4 mr-2" />
                            Skip Next Delivery
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Edit className="w-4 h-4 mr-2" />
                            Update Preferences
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Gift className="w-4 h-4 mr-2" />
                            Gift a Month
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Wishlist Tab */}
              <TabsContent value="wishlist" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-luxury text-2xl text-burgundy">Your Wishlist</h2>
                  <Badge variant="outline" className="text-charcoal/60">
                    {wishlistItems.length} items
                  </Badge>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {wishlistItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="luxury-shadow border-0 hover:spice-glow transition-luxury">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-saffron/10 rounded-lg flex items-center justify-center text-2xl">
                              🌶️
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-burgundy">{item}</h3>
                              <p className="text-sm text-charcoal/60">Premium quality • Limited availability</p>
                              <div className="flex items-center gap-1 mt-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-golden text-golden" />
                                ))}
                                <span className="text-xs text-charcoal/60 ml-1">(4.9)</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-saffron mb-2">$75</div>
                              <Button size="sm" className="bg-saffron hover:bg-cinnamon text-white">
                                Add to Cart
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
        </div>
      </section>
    </div>
  );
}