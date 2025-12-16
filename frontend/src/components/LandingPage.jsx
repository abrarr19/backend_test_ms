import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Star, Phone, MapPin, Clock, Mountain, Users, Shield, Heart, CheckCircle2 } from 'lucide-react';
import { mockData } from '../utils/mock';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    travelDates: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission - will integrate with backend later
    setTimeout(() => {
      alert('Thank you! We will contact you soon.');
      setFormData({ name: '', phone: '', travelDates: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-[#cc0e00]" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Tripoday Holidays</h1>
              <p className="text-xs text-gray-600">Tripoday India Pvt Ltd</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-700">
              <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
              <span className="font-semibold">4.7</span>
              <span className="ml-1 text-gray-500">(175+ reviews)</span>
            </div>
            <Button onClick={() => window.open('tel:+919876543210', '_self')} className="bg-[#cc0e00] hover:bg-[#a00b00]">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 hero-gradient">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-orange-100 text-[#FF7B39] hover:bg-orange-100">
            <Clock className="h-3 w-3 mr-1" />
            Open 24 Hours
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover the Paradise of <span className="text-[#cc0e00]">Kashmir</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience unforgettable journeys with Kashmir's most trusted travel agency. Best prices, expert guidance, and memories that last forever.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button size="lg" className="bg-[#cc0e00] hover:bg-[#a00b00] text-lg px-8 py-6">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-[#cc0e00] text-[#cc0e00] hover:bg-red-50 text-lg px-8 py-6">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-[#cc0e00]" />
              <span className="text-gray-700 font-medium">Local Expertise</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-[#cc0e00]" />
              <span className="text-gray-700 font-medium">Best Prices</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-[#cc0e00]" />
              <span className="text-gray-700 font-medium">Friendly Staff</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-[#cc0e00]" />
              <span className="text-gray-700 font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Tripoday Holidays?
            </h3>
            <p className="text-lg text-gray-600">Your trusted partner for Kashmir adventures</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-[#cc0e00] hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon === 'shield' && <Shield className="h-7 w-7 text-[#cc0e00]" />}
                    {feature.icon === 'users' && <Users className="h-7 w-7 text-[#cc0e00]" />}
                    {feature.icon === 'heart' && <Heart className="h-7 w-7 text-[#cc0e00]" />}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Kashmir Packages
            </h3>
            <p className="text-lg text-gray-600">Curated experiences for every traveler</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.packages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                  <Mountain className="h-20 w-20 text-white opacity-80" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-teal-600">{pkg.price}</span>
                    <Button className="bg-teal-600 hover:bg-teal-700">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h3>
            <div className="flex justify-center items-center space-x-2 text-amber-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-amber-500" />
              ))}
              <span className="ml-2 text-gray-700 font-semibold">4.7 out of 5</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plan Your Dream Kashmir Trip
            </h3>
            <p className="text-lg text-gray-600">Share your details and we'll create a personalized itinerary for you</p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Dates</label>
                  <Input
                    type="text"
                    name="travelDates"
                    value={formData.travelDates}
                    onChange={handleInputChange}
                    placeholder="e.g., June 15-20, 2025"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your travel preferences, number of travelers, etc."
                    rows={4}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-6"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-8 w-8 text-teal-400" />
                <span className="text-xl font-bold">Tripoday Holidays</span>
              </div>
              <p className="text-gray-400">Your trusted partner for unforgettable Kashmir experiences.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>7 Square Mall, Shah Anwar Colony, Hyderpora, Srinagar, Jammu and Kashmir 190014</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-teal-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-teal-400" />
                  <span className="font-semibold text-teal-400">Open 24 Hours</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-teal-400 cursor-pointer transition-colors">Kashmir Packages</p>
                <p className="hover:text-teal-400 cursor-pointer transition-colors">Honeymoon Tours</p>
                <p className="hover:text-teal-400 cursor-pointer transition-colors">Family Holidays</p>
                <p className="hover:text-teal-400 cursor-pointer transition-colors">Custom Trips</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Tripoday India Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;