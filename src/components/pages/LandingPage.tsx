import { MessageSquare, Mail, Upload, Cloud, CheckCircle2, Play, ArrowRight, Star, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export function LandingPage({ onGetStarted, onLogin }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Automation',
      description: 'Send personalized broadcast messages with smart delay control and group member extraction.',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Mail,
      title: 'Gmail Broadcast',
      description: 'Bulk send emails with custom subjects, body templates, and attachment support.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Upload,
      title: 'Contact Management',
      description: 'Easily import and validate WhatsApp numbers or email lists from CSV files.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Cloud,
      title: 'Cloud-Based Platform',
      description: 'Accessible anywhere with secure cloud storage and real-time synchronization.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Connect WhatsApp or Gmail',
      description: 'Link your accounts securely with our simple integration process.',
      icon: MessageSquare,
    },
    {
      number: 2,
      title: 'Upload Your Contact List',
      description: 'Import contacts from CSV files or extract from WhatsApp groups.',
      icon: Upload,
    },
    {
      number: 3,
      title: 'Send and Track Broadcasts',
      description: 'Launch campaigns and monitor delivery status in real-time.',
      icon: CheckCircle2,
    },
  ];

  const pricing = [
    {
      name: 'Free Trial',
      price: '$0',
      period: '14 days',
      description: 'Perfect for testing the platform',
      features: [
        'Up to 100 messages/day',
        'Basic analytics',
        'Email support',
        '1 connected account',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$49',
      period: 'per month',
      description: 'For growing businesses',
      features: [
        'Unlimited messages',
        'Advanced analytics',
        'Priority support',
        'Unlimited accounts',
        'Custom templates',
        'API access',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'Team collaboration',
        'White-label option',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp Inc.',
      image: 'https://images.unsplash.com/photo-1706824250412-42b8ba877abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjEyNTA0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'Blastify transformed our outreach campaigns. We reached 10,000+ customers in minutes with WhatsApp automation.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupHub',
      image: 'https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZW50cmVwcmVuZXVyJTIwaGVhZHNob3R8ZW58MXx8fHwxNzYxMjUwNDg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The best broadcasting platform we\'ve used. Simple, powerful, and saves us hours every week.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Sales Manager',
      company: 'Global Solutions',
      image: 'https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2MTE1MzQxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'Game-changer for our sales team. We increased our response rates by 300% using personalized broadcasts.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <MessageSquare size={28} className="text-blue-500" />
                <Mail size={28} className="text-blue-500" />
              </div>
              <span className="text-blue-500">Blastify</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-blue-500 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-500 transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-500 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-500 transition-colors">Testimonials</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" onClick={onLogin}>Login</Button>
              <Button className="bg-blue-500 hover:bg-blue-600" onClick={onGetStarted}>
                Start Free Trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-gray-700 hover:text-blue-500 transition-colors">Features</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-500 transition-colors">How It Works</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-500 transition-colors">Pricing</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-500 transition-colors">Testimonials</a>
                <Button variant="ghost" onClick={onLogin} className="w-full">Login</Button>
                <Button className="bg-blue-500 hover:bg-blue-600 w-full" onClick={onGetStarted}>
                  Start Free Trial
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                🚀 New: AI-powered message scheduling
              </Badge>
              
              <h1 className="text-gray-900">
                Automate WhatsApp & Gmail Broadcasts Effortlessly
              </h1>
              
              <p className="text-gray-600 text-lg">
                Save time and reach more people — all from one smart dashboard. Connect your accounts and reach thousands instantly with smart automation tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-500 hover:bg-blue-600 text-lg px-8"
                  onClick={onGetStarted}
                >
                  Start Free Trial
                  <ArrowRight size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8"
                >
                  <Play size={20} className="mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">4.9/5 from 2,000+ reviews</p>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <p className="text-gray-900">10M+</p>
                  <p className="text-sm text-gray-600">Messages sent</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-3 opacity-10"></div>
              <ImageWithFallback
              src="/image/hero.png"
              alt="Dashboard Preview"
              className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              Features
            </Badge>
            <h2 className="text-gray-900 mb-4">
              Everything you need to automate your messaging
            </h2>
            <p className="text-gray-600 text-lg">
              Powerful features designed to help you reach your audience efficiently and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className={`inline-flex p-3 rounded-xl ${feature.bgColor}`}>
                      <Icon size={28} className={feature.color} />
                    </div>
                    <h3 className="text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              How It Works
            </Badge>
            <h2 className="text-gray-900 mb-4">
              Get started in 3 simple steps
            </h2>
            <p className="text-gray-600 text-lg">
              Launch your first broadcast campaign in minutes, not hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-blue-200 -z-10"></div>
                  )}
                  <div className="text-center space-y-4">
                    <div className="relative inline-flex">
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20"></div>
                      <div className="relative bg-white border-4 border-blue-500 rounded-full h-24 w-24 flex items-center justify-center mx-auto">
                        <Icon size={36} className="text-blue-500" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              Pricing
            </Badge>
            <h2 className="text-gray-900 mb-4">
              Choose the perfect plan for your needs
            </h2>
            <p className="text-gray-600 text-lg">
              Start free, upgrade as you grow. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-blue-500 shadow-xl' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-500">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">/ {plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={onGetStarted}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              Testimonials
            </Badge>
            <h2 className="text-gray-900 mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-gray-600 text-lg">
              See what our customers have to say about their experience with Blastify.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to automate your messages?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Blastify to streamline their communication.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-500 hover:bg-gray-100 text-lg px-8"
            onClick={onGetStarted}
          >
            Start Free Trial
            <ArrowRight size={20} className="ml-2" />
          </Button>
          <p className="text-blue-100 text-sm mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <MessageSquare size={24} className="text-blue-500" />
                  <Mail size={24} className="text-blue-500" />
                </div>
                <span className="text-white">Blastify</span>
              </div>
              <p className="text-sm">
                Automate your messaging campaigns with ease and efficiency.
              </p>
            </div>

            <div>
              <h4 className="text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2025 Blastify. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Bubble */}
      <button className="fixed bottom-8 right-8 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-all hover:scale-110">
        <MessageSquare size={24} />
      </button>
    </div>
  );
}
