import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Star, MapPin, Clock, CheckCircle2, MessageCircle, Award, Headphones, Shield, TrendingDown } from 'lucide-react';
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

  // Show popup after 2 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_tripoday-tours/artifacts/0k3d5d0a_IMG_0561%20%281%29.PNG" 
              alt="Tripoday Holidays Logo" 
              className="h-12 md:h-14"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center text-sm text-white">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="font-semibold">4.7</span>
              <span className="ml-1 text-gray-300">(175+)</span>
            </div>
            <Button onClick={openForm} size="sm" className="bg-white text-black hover:bg-gray-200">
              Get Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20 text-sm backdrop-blur-sm">
            <Clock className="h-3 w-3 mr-1" />
            Open 24 Hours
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Best Holiday & International Tour Packages<br />
            <span className="text-yellow-400">Book Your Dream Trip Today</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Affordable Honeymoon, Family & Group Tour Packages with Complete Support
          </p>
          <Button onClick={openForm} size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-10 py-6 shadow-xl">
            Get Free Quote
          </Button>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="flex flex-col items-center space-y-2">
              <CheckCircle2 className="h-6 w-6 text-yellow-400" />
              <span className="text-sm md:text-base text-gray-300 font-medium">Local Expertise</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <TrendingDown className="h-6 w-6 text-yellow-400" />
              <span className="text-sm md:text-base text-gray-300 font-medium">Best Prices</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Headphones className="h-6 w-6 text-yellow-400" />
              <span className="text-sm md:text-base text-gray-300 font-medium">24/7 Support</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-6 w-6 text-yellow-400" />
              <span className="text-sm md:text-base text-gray-300 font-medium">Trusted Experts</span>
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
              <Card key={index} className="border-2 hover:border-black hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="bg-gradient-to-br from-gray-900 to-black text-white py-6">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-white/90 text-base">{pkg.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-black mb-1">{pkg.price}</div>
                    <p className="text-sm text-gray-500">{pkg.priceDetails}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={scrollToForm} className="w-full bg-black hover:bg-gray-800">
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
              <Card key={index} className="border-2 hover:border-black hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="bg-gradient-to-br from-gray-900 to-black text-white py-6">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-white/90 text-base">{pkg.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-black mb-1">{pkg.price}</div>
                    <p className="text-sm text-gray-500">{pkg.priceDetails}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={scrollToForm} className="w-full bg-black hover:bg-gray-800">
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
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  {point.icon === 'price' && <TrendingDown className="h-6 w-6 text-yellow-600" />}
                  {point.icon === 'customize' && <Shield className="h-6 w-6 text-yellow-600" />}
                  {point.icon === 'support' && <Headphones className="h-6 w-6 text-yellow-600" />}
                  {point.icon === 'expert' && <Award className="h-6 w-6 text-yellow-600" />}
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
            <div className="flex justify-center items-center space-x-2 text-yellow-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-500" />
              ))}
              <span className="ml-2 text-gray-700 font-semibold">4.7 out of 5 (175+ reviews)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
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

      {/* Contact Form Section */}
      <section id="contact-form-section" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Plan Your Dream Trip
            </h2>
            <p className="text-lg text-gray-600">Fill in your details and get the best deals from our experts</p>
          </div>
          <Card className="border-2 border-black shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2"
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
                    className="w-full border-2"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2"
                  />
                </div>
                <div>
                  <Select value={formData.destination} onValueChange={handleDestinationChange} required>
                    <SelectTrigger className="w-full border-2">
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
                    className="w-full border-2"
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
                    className="w-full border-2"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black hover:bg-gray-800 py-6 text-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Best Deal'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Limited Slots Available – Plan Your Trip Now
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Don't miss out on exclusive deals. Our travel experts are ready to help you!
          </p>
          <Button onClick={openForm} size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-10 py-6">
            Get Instant Callback
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_tripoday-tours/artifacts/0k3d5d0a_IMG_0561%20%281%29.PNG" 
                alt="Tripoday Holidays Logo" 
                className="h-12 mb-4"
              />
              <p className="text-gray-400 mb-4">Your trusted partner for unforgettable Kashmir and international experiences.</p>
              <div className="flex items-center text-sm text-gray-400">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                <span className="font-semibold">4.7</span>
                <span className="ml-1">(175+ Google Reviews)</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">7 Square Mall, Shah Anwar Colony, Hyderpora, Srinagar, J&K 190014</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold text-yellow-400">Open 24 Hours</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="hover:text-yellow-400 cursor-pointer transition-colors">Kashmir Packages</p>
                <p className="hover:text-yellow-400 cursor-pointer transition-colors">Honeymoon Tours</p>
                <p className="hover:text-yellow-400 cursor-pointer transition-colors">Dubai Tours</p>
                <p className="hover:text-yellow-400 cursor-pointer transition-colors">Maldives Tours</p>
                <p className="hover:text-yellow-400 cursor-pointer transition-colors">Thailand Tours</p>
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
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Select value={formData.destination} onValueChange={handleDestinationChange} required>
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
                  className="w-full bg-black hover:bg-gray-800 py-6 text-lg"
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