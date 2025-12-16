import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Star, Phone, MapPin, Clock, Mountain, CheckCircle2, MessageCircle, Award, Headphones, Shield, TrendingDown } from 'lucide-react';
import { mockData } from '../utils/mock';

const LandingPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    destination: '',
    travelDate: '',
    travelers: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDestinationChange = (value) => {
    setFormData({
      ...formData,
      destination: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission - will integrate with backend later
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
      setFormData({ fullName: '', phone: '', email: '', destination: '', travelDate: '', travelers: '' });
      setTimeout(() => {
        setShowThankYou(false);
        setIsFormOpen(false);
      }, 3000);
    }, 1000);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919650695999?text=Hello,%20I%20want%20to%20know%20about%20tour%20packages', '_blank');
  };

  return (
    <div className="landing-page">
      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Mountain className="h-7 w-7 text-[#cc0e00]" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">Tripoday Holidays</h1>
              <p className="text-xs text-gray-600">Tripoday India Pvt Ltd</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center text-sm text-gray-700">
              <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
              <span className="font-semibold">4.7</span>
              <span className="ml-1 text-gray-500">(175+)</span>
            </div>
            <Button onClick={() => window.open('tel:+919650695999', '_self')} size="sm" className="bg-[#cc0e00] hover:bg-[#a00b00]">
              <Phone className="h-3 w-3 mr-1" />
              Call
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 hero-gradient">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge className="mb-4 bg-orange-100 text-[#FF7B39] hover:bg-orange-100 text-sm">
            <Clock className="h-3 w-3 mr-1" />
            Open 24 Hours
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Best Holiday & International Tour Packages<br />
            <span className="text-[#cc0e00]">Book Your Dream Trip Today</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Affordable Honeymoon, Family & Group Tour Packages with Complete Support
          </p>
          <Button onClick={openForm} size="lg" className="bg-[#cc0e00] hover:bg-[#a00b00] text-lg px-10 py-6 shadow-xl">
            Get Free Quote
          </Button>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="flex flex-col items-center space-y-2">
              <CheckCircle2 className="h-6 w-6 text-[#cc0e00]" />
              <span className="text-sm md:text-base text-gray-700 font-medium">Local Expertise</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <TrendingDown className="h-6 w-6 text-[#cc0e00]" />
              <span className="text-sm md:text-base text-gray-700 font-medium">Best Prices</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Headphones className="h-6 w-6 text-[#cc0e00]" />
              <span className="text-sm md:text-base text-gray-700 font-medium">24/7 Support</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-6 w-6 text-[#cc0e00]" />
              <span className="text-sm md:text-base text-gray-700 font-medium">Trusted Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Kashmir Tour Packages */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Kashmir Tour Packages (4N/5D)
            </h2>
            <p className="text-lg text-gray-600">Explore the paradise on earth with our curated packages</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mockData.kashmirPackages.map((pkg, index) => (
              <Card key={index} className="border-2 hover:border-[#cc0e00] hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-br from-[#cc0e00] to-[#FF7B39] text-white py-6">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-white/90 text-base">{pkg.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-[#cc0e00] mb-1">{pkg.price}</div>
                    <p className="text-sm text-gray-500">{pkg.priceDetails}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[#cc0e00] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={openForm} className="w-full bg-[#cc0e00] hover:bg-[#a00b00]">
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Tour Packages */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              International Tour Packages (4N/5D)
            </h2>
            <p className="text-lg text-gray-600">Discover amazing destinations across the globe</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mockData.internationalPackages.map((pkg, index) => (
              <Card key={index} className="border-2 hover:border-[#cc0e00] hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-br from-[#cc0e00] to-[#FF7B39] text-white py-6">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-white/90 text-base">{pkg.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-[#cc0e00] mb-1">{pkg.price}</div>
                    <p className="text-sm text-gray-500">{pkg.priceDetails}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[#cc0e00] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={openForm} className="w-full bg-[#cc0e00] hover:bg-[#a00b00]">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Conversion Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Choose Tripoday Holidays?
            </h2>
            <p className="text-lg text-gray-600">Your trusted partner for unforgettable journeys</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mockData.trustPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  {point.icon === 'price' && <TrendingDown className="h-6 w-6 text-[#cc0e00]" />}
                  {point.icon === 'customize' && <Shield className="h-6 w-6 text-[#cc0e00]" />}
                  {point.icon === 'support' && <Headphones className="h-6 w-6 text-[#cc0e00]" />}
                  {point.icon === 'expert' && <Award className="h-6 w-6 text-[#cc0e00]" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What Our Travelers Say
            </h3>
            <div className="flex justify-center items-center space-x-2 text-amber-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-amber-500" />
              ))}
              <span className="ml-2 text-gray-700 font-semibold">4.7 out of 5 (175+ reviews)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
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

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#cc0e00] to-[#FF7B39] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Limited Slots Available – Plan Your Trip Now
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Don't miss out on exclusive deals. Our travel experts are ready to help you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={openForm} size="lg" className="bg-white text-[#cc0e00] hover:bg-gray-100 text-lg px-10 py-6">
              Get Instant Callback
            </Button>
            <Button onClick={() => window.open('tel:+919650695999', '_self')} size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6">
              <Phone className="h-5 w-5 mr-2" />
              Call +91 96506 95999
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-8 w-8 text-[#FF7B39]" />
                <span className="text-xl font-bold">Tripoday Holidays</span>
              </div>
              <p className="text-gray-400 mb-4">Your trusted partner for unforgettable Kashmir and international experiences.</p>
              <div className="flex items-center text-sm text-gray-400">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                <span className="font-semibold">4.7</span>
                <span className="ml-1">(175+ Google Reviews)</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-[#FF7B39] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">7 Square Mall, Shah Anwar Colony, Hyderpora, Srinagar, J&K 190014</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-[#FF7B39]" />
                  <a href="tel:+919650695999" className="hover:text-[#FF7B39] transition-colors">+91 96506 95999</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-[#FF7B39]" />
                  <span className="font-semibold text-[#FF7B39]">Open 24 Hours</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="hover:text-[#FF7B39] cursor-pointer transition-colors">Kashmir Packages</p>
                <p className="hover:text-[#FF7B39] cursor-pointer transition-colors">Honeymoon Tours</p>
                <p className="hover:text-[#FF7B39] cursor-pointer transition-colors">Dubai Tours</p>
                <p className="hover:text-[#FF7B39] cursor-pointer transition-colors">Maldives Tours</p>
                <p className="hover:text-[#FF7B39] cursor-pointer transition-colors">Thailand Tours</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Tripoday India Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Lead Capture Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-md">
          {!showThankYou ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">Get Best Deal</DialogTitle>
                <DialogDescription>
                  Fill in your details and our travel expert will contact you shortly
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <Select value={formData.destination} onValueChange={handleDestinationChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Destination Interested In *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kashmir">Kashmir</SelectItem>
                      <SelectItem value="dubai">Dubai</SelectItem>
                      <SelectItem value="maldives">Maldives</SelectItem>
                      <SelectItem value="thailand">Thailand</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Input
                    type="text"
                    name="travelDate"
                    placeholder="Travel Date (e.g., June 2025)"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    name="travelers"
                    placeholder="Number of Travelers"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#cc0e00] hover:bg-[#a00b00] py-6 text-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Best Deal'}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">Thank You!</DialogTitle>
              <DialogDescription className="text-base">
                Your inquiry has been submitted successfully. Our travel expert will contact you within 24 hours.
              </DialogDescription>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandingPage;