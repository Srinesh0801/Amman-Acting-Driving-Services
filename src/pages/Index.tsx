import { Shield, Clock, Star, MapPin, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BookingForm from '@/components/BookingForm';
import ServiceCard from '@/components/ServiceCard';
import FloatingContacts from '@/components/FloatingContacts';
import { Button } from '@/components/ui/button';
import heroCarImage from '@/assets/hero-car.jpg';

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: 'Safe & Reliable',
      description: 'Professional drivers with verified backgrounds and excellent safety records.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Book a ride anytime, anywhere in Amman. We are always ready to serve you.',
    },
    {
      icon: Star,
      title: 'Premium Service',
      description: 'Clean vehicles, courteous drivers, and a commitment to your comfort.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingContacts />
      
      {/* Main Content with padding for sidebar */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={heroCarImage} 
              alt="Premium luxury car" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/95"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-6 py-20 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Your Journey,
                <span className="block text-gradient">Our Priority</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Experience premium transportation service in Madurai with professional drivers and luxury vehicles.
              </p>
              
              {/* Stylish Phone Numbers */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a 
                  href="tel:+916382108701"
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full px-6 py-3 hover:bg-white/20 transition-all hover:scale-105 group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:animate-pulse">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">6382108701</span>
                </a>
                <a 
                  href="tel:+918778035220"
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full px-6 py-3 hover:bg-white/20 transition-all hover:scale-105 group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:animate-pulse">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">8778035220</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Your Ride
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg border-2 border-white text-white hover:bg-white hover:text-primary font-semibold"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We provide more than just a ride—we deliver an experience
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your Ride</h2>
                <p className="text-xl text-muted-foreground">
                  Fill in the details and we'll get you on the road
                </p>
              </div>
              <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg border border-border">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Location Services Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Location Services Available</h2>
                <p className="text-xl text-muted-foreground">
                  We serve all major areas across Madurai
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Periyar Bus Stand, Madurai',
                  'Kalavasal, Madurai',
                  'MGR Bus Stand, Madurai',
                  'Kamarajar Salai, Madurai',
                  'Sappani Kovil, Madurai',
                  'Karpaga Nagar, Madurai',
                  'K.K.Nagar, Madurai',
                  'BB Kulam, Madurai',
                  'Villapuram, Madurai',
                  'Vilangudi, Madurai',
                  'Azhagaradi, Madurai',
                  'Therkuvasal, Madurai',
                  'Anaiyur, Madurai',
                  'Arappalayam, Madurai',
                  'Thathaneri, Madurai',
                  'Goripalayam, Madurai',
                  'Sellur, Madurai',
                  'Nilaiyur, Madurai',
                  'Ponnaharam, Madurai',
                  'Simmakkal, Madurai',
                  'Avaniyapuram, Madurai',
                  'Thiruppaalai, Madurai',
                  'Othakkadai, Madurai',
                  'Thiruparankundram, Madurai',
                ].map((location, index) => (
                  <div 
                    key={index}
                    className="bg-card p-4 rounded-lg border border-border hover:border-accent hover:shadow-md transition-all flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.02}s` }}
                  >
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">Acting Driver in {location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">About Amman Active Drivers</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Amman Active Drivers is your trusted ride-hailing service, committed to providing safe, 
                comfortable, and punctual transportation throughout Madurai. With a fleet of well-maintained 
                vehicles and experienced professional drivers, we ensure every journey is smooth and stress-free.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need a ride to the airport, a business meeting, or a night out, we're here to 
                serve you 24/7 with the highest standards of service and reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl mb-12 text-primary-foreground/90">
                Have questions or need assistance? We're here to help
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-full bg-accent mx-auto flex items-center justify-center">
                    <Phone className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-primary-foreground/80">+91 6382108701 | +91 8778035220</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-full bg-accent mx-auto flex items-center justify-center">
                    <Mail className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-primary-foreground/80">info@ammanactive.com</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-full bg-accent mx-auto flex items-center justify-center">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-lg">Visit Us</h3>
                  <p className="text-primary-foreground/80">Madurai, Tamil Nadu</p>
                </div>
              </div>

              <Button 
                size="lg"
                className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 font-semibold"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Ride Now
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary/95 text-primary-foreground py-8 border-t border-primary-foreground/10">
          <div className="container mx-auto px-6 text-center">
            <p className="text-primary-foreground/70">
              © 2025 Amman Active Drivers. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
