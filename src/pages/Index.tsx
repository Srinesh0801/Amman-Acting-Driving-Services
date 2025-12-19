import { Shield, Clock, Star, MapPin, Phone, Mail, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, PhoneCall, Calendar, Car, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BookingForm from '@/components/BookingForm';
import FloatingContacts from '@/components/FloatingContacts';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import logo from '@/assets/logo2.png';
import car1 from "@/assets/alex-chernenko-inqfXtFueYQ-unsplash.jpg";
import car2 from '@/assets/cristofer-maximilian-qI4Nh4t3x90-unsplash.jpg';
import car3 from '@/assets/geike-verniers-sfL_ue5K328-unsplash.jpg';


// ---------------- How It Works Carousel ----------------
const HowItWorksCarousel = () => {
  const steps = [
    {
      icon: PhoneCall,
      step: "Step 1",
      title: "Contact Us",
      description:
        "Call us or fill out the booking form to request a driver for your needs.",
    },
    {
      icon: Calendar,
      step: "Step 2",
      title: "Book Driver",
      description:
        "Schedule your preferred date, time, and pickup location with our team.",
    },
    {
      icon: Car,
      step: "Step 3",
      title: "Driver Arrival",
      description:
        "Our professional driver arrives at your location on time and ready.",
    },
    {
      icon: CheckCircle,
      step: "Step 4",
      title: "Enjoy the Ride",
      description:
        "Relax and enjoy a safe, comfortable journey to your destination.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextStep = () => setCurrent((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrent((prev) => (prev - 1 + steps.length) % steps.length);

  const step = steps[current];
  const Icon = step.icon;

  return (
    <div className="relative py-8 px-4 md:px-20 flex items-center justify-center">
      {/* Left Arrow */}
      <button
        onClick={prevStep}
  className="absolute left-2 md:left-4 z-10 bg-accent text-white hover:bg-accent/80 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
>
  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
</button>

      {/* Card */}
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
        <div
          key={current}
          className="bg-card p-8 md:p-12 rounded-3xl border-2 border-accent/20 shadow-lg transition-all duration-500 animate-fade-in"
        >
          <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <div className="p-6 rounded-full bg-gradient-to-br from-accent to-primary shadow-glow mb-6">
              <Icon className="w-12 h-12 text-white" />
            </div>

            <p className="text-sm font-semibold text-accent mb-2">{step.step}</p>
            <h3 className="text-2xl md:text-4xl font-bold text-primary mb-4">
              {step.title}
            </h3>
            <p className="text-sm md:text-lg text-foreground/80 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextStep}
    className="absolute right-2 md:right-4 z-10 bg-accent text-white hover:bg-accent/80 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
>
  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Indicators */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 mt-6">
        {steps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-accent w-8 shadow-glow"
                : "bg-accent/30 hover:bg-accent/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
// ---------------- Service Carousel ----------------
const ServiceCarousel = () => {
  const services = [
    {
      title: "DESIGNATED SAFE DRIVER SERVICE",
      content: [
        "We are the professional Designated Safe Driver service provider in India. With our highly skilled and experienced drivers by your side, everyone can celebrate and enjoy responsibly.",
        "Our designated safe drivers will drive you in the comfort and privacy of YOUR car. Getting you and your vehicle to your destination safely is what we do best.",
      ],
    },
    {
      title: "DRIVER OUTSOURCING",
      content: [
        "A key service of CAD is the Driver Recruitment and Outsourcing Service available to individuals and companies. Our safe drivers are tested, trained, and groomed by motoring experts before deployment.",
        "Call A Driver provides competitive fleet management solutions that eliminate unnecessary costs and workforce liabilities.",
      ],
    },
    {
      title: "EVENT DRIVERS",
      content: [
        "Safe drivers are available for weddings, corporate events, parties, and more — enjoy your special moments stress-free.",
        "We provide drivers for daily, weekly, monthly, or yearly needs. Our professionals handle all errands with care and reliability.",
      ],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const nextService = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % services.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevService = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + services.length) % services.length);
      setIsAnimating(false);
    }, 500);
  };

  const service = services[current];

  return (
    <div className="relative flex items-center justify-center py-8 px-4 md:px-20">
      {/* Left Arrow */}
      <button
  onClick={prevService}
  disabled={isAnimating}
  className="absolute left-2 md:left-4 z-10 bg-accent text-white hover:bg-accent/80 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
>
  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
</button>


      {/* Service Card with Animation */}
      <div className="relative w-full max-w-3xl overflow-hidden">
        <div
          key={current}
          className={`gradient-card p-8 md:p-12 rounded-3xl border-2 border-accent/20 shadow-elegant hover:shadow-glow transition-all duration-500 ${
            isAnimating
              ? direction === 'right'
                ? 'animate-slide-out-left'
                : 'animate-slide-out-right'
              : 'animate-slide-in-right'
          }`}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-accent mb-6 text-center">
            {service.title}
          </h3>
          <div className="space-y-4">
            {service.content.map((line, idx) => (
              <p
                key={idx}
                className="text-sm md:text-lg text-foreground/80 leading-relaxed text-center"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Arrow */}
     <button
  onClick={nextService}
  disabled={isAnimating}
  className="absolute right-2 md:right-4 z-10 bg-accent text-white hover:bg-accent/80 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
>
  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
</button>


      {/* Indicators */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (isAnimating) return;
              setDirection(idx > current ? 'right' : 'left');
              setIsAnimating(true);
              setTimeout(() => {
                setCurrent(idx);
                setIsAnimating(false);
              }, 500);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current
                ? 'bg-accent w-8 shadow-glow'
                : 'bg-accent/30 hover:bg-accent/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const images = [car1, car2, car3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Car ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 py-20 flex flex-col items-center text-center text-white">
        {/* Logo */}
        {/* <div className="w-44 h-44 rounded-full shadow-glow flex items-center justify-center border-4 border-accent hover:scale-110 hover:rotate-6 transition-transform duration-700 overflow-hidden">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div> */}

        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-bold mt-8 text-white drop-shadow-2xl leading-tight animate-fade-in">
          Amman Acting Driver
        </h2>
        <p className="text-xl md:text-2xl mt-4 text-white/90 font-light">
          Your Trusted Safe Driver Service Across Tamil Nadu
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="tel:+919080512549"
            className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-accent/50 rounded-full px-6 py-4 hover:bg-accent/20 hover:border-accent transition-all hover:scale-105 shadow-elegant"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:shadow-glow transition-all">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">9080512549</span>
          </a>

          <a
            href="tel:+919940990684"
            className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-accent/50 rounded-full px-6 py-4 hover:bg-accent/20 hover:border-accent transition-all hover:scale-105 shadow-elegant"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:shadow-glow transition-all">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">9940990684</span>
          </a>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="tel:+919080512549"
            className="inline-flex items-center justify-center h-16 px-12 text-2xl bg-gradient-to-r from-accent to-primary hover:shadow-glow text-white font-bold shadow-elegant transition-all rounded-full hover:scale-110 transform duration-300"
          >
            Get Driver Now
          </a>
        </div>
      </div>
    </section>
  );
};
// ---------------- Main Index Page ----------------
const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllLocations, setShowAllLocations] = useState(false);

  // Rate Chart Data
  const rateSections = [
    {
      title: 'Local Madurai Tariff',
      data: [
        { hours: '4 Hours', charges: '₹400' },
        { hours: 'After 4 Hours', charges: '₹50 / hour' },
      ],
    },
    {
      title: 'Outstation Tariff (Within Tamil Nadu)',
      data: [
        { hours: '10 Hours', charges: '₹800' },
        { hours: 'After 10 Hours', charges: '₹50 / hour' },
        { hours: 'Extra', charges: 'Food' },
      ],
    },
    {
      title: 'Pickup / Drop Tariff',
      data: [
        { hours: '1 Day (12AM - 12PM)', charges: '₹1200' },
        { hours: 'Above 1 Day', charges: '₹50 / hour' },
        { hours: 'Extra', charges: 'Food' },
      ],
    },
    {
      title: 'Valet Parking Tariff',
      data: [
        { hours: '1-12 Hours', charges: '₹900' },
        { hours: 'After 12 Hours', charges: '₹50 / hour' },
        { hours: 'Extra', charges: 'Food' },
        { hours: 'Night Hours', charges: 'No Charge' },
      ],
    },
  ];

  // Locations
  const allLocations = [
    'Periyar Bus Stand, Madurai', 'Kalavasal, Madurai', 'MGR Bus Stand, Madurai', 'Kamarajar Salai, Madurai',
    'Sappani Kovil, Madurai', 'Karpaga Nagar, Madurai', 'K.K.Nagar, Madurai', 'BB Kulam, Madurai',
    'Villapuram, Madurai', 'Vilangudi, Madurai', 'Azhagaradi, Madurai', 'Therkuvasal, Madurai',
    'Anaiyur, Madurai', 'Arappalayam, Madurai', 'Thathaneri, Madurai', 'Goripalayam, Madurai',
    'Sellur, Madurai', 'Nilaiyur, Madurai', 'Ponnaharam, Madurai', 'Simmakkal, Madurai',
    'Avaniyapuram, Madurai', 'Thiruppaalai, Madurai', 'Othakkadai, Madurai', 'Thiruparankundram, Madurai',
  ];

  const filteredLocations = allLocations.filter(location =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const locationsToShow = showAllLocations ? filteredLocations : filteredLocations.slice(0, 4);

  const services = [
    { icon: Shield, title: 'Safe & Reliable', description: 'Professional drivers with verified backgrounds and excellent safety records.' },
    { icon: Clock, title: '24/7 Availability', description: 'Book a ride anytime, anywhere in Madurai. We are always ready to serve you.' },
    { icon: Star, title: 'Premium Service', description: 'Clean vehicles, courteous drivers, and a commitment to your comfort.' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <FloatingContacts />

      <main className="flex-1">
        {/* Hero Section */}
<HeroSection />

        {/* Booking Section */}
        <section id="booking" className="py-20 bg-gradient-to-br from-secondary/20 via-background to-accent/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">Book Your Ride</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12">Fill in the details and we'll get you on the road</p>
            <div className="gradient-card p-10 md:p-12 rounded-3xl shadow-elegant hover:shadow-glow border-2 border-accent/20 transition-all duration-500">
              <BookingForm />
            </div>
          </div>
        </section>

        {/* Rate Chart Section */}
        <section id="rate-chart" className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">Rate Chart</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12">Transparent pricing for all your transportation needs</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {rateSections.map((section, idx) => (
                <div key={idx} className="gradient-card p-6 rounded-2xl border-2 border-accent/20 hover:shadow-elegant hover:border-accent/50 transition-all duration-500 hover:scale-105">
                  <h3 className="text-lg font-bold mb-4 text-accent">{section.title}</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Hours</TableHead>
                        <TableHead className="text-right">Charges</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {section.data.map((rate, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium">{rate.hours}</TableCell>
                          <TableCell className="text-right text-accent font-bold">{rate.charges}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20 bg-gradient-to-br from-accent/5 via-secondary/20 to-accent/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">Service Locations</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">We cover all major areas in Madurai</p>
            <input
              type="text"
              placeholder="Search location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md mx-auto mb-8 px-6 py-3 border-2 border-accent/30 rounded-full focus:ring-2 focus:ring-accent focus:border-accent outline-none shadow-md transition-all"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {locationsToShow.map((location, i) => (
                <div key={i} className="gradient-card p-4 rounded-xl border-2 border-accent/20 flex items-center gap-3 hover:border-accent hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{location}</span>
                </div>
              ))}
            </div>
            {filteredLocations.length > 4 && (
              <Button
                onClick={() => setShowAllLocations(!showAllLocations)}
                className="mt-8 gradient-hero text-white border-0 hover:shadow-glow px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
              >
                {showAllLocations ? 'Show Less' : 'Show More'}
                {showAllLocations ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
              </Button>
            )}
          </div>
        </section>

        {/* Service Carousel Section */}
        <section className="py-20 bg-background"  id="services" >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">Our Services</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12">Professional driving solutions tailored to your needs</p>
            <ServiceCarousel />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-accent/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">How It Works</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12">Simple steps to get your driver</p>
            <HowItWorksCarousel />
          </div>
        </section>

{/* Why Choose Us Section */}
<section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
      Why Choose Us
    </h2>
    <p className="text-lg md:text-xl text-muted-foreground mb-12">
      Experience the difference with our premium service
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {services.map((service, i) => {
        const IconComponent = service.icon;
        return (
          <div
            key={i}
            className="gradient-card p-8 rounded-2xl border-2 border-accent/20 shadow-elegant hover:shadow-glow transition-all duration-500 flex flex-col items-center hover:scale-105"
          >
            {/* Icon */}
            <div className="p-5 rounded-full bg-gradient-to-br from-accent to-primary shadow-glow mb-6">
              <IconComponent className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-3 text-accent">
              {service.title}
            </h3>
            <p className="text-foreground/80 text-lg">{service.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>


{/* Contact Section */}
<section className="py-16 bg-background text-center border-t border-accent/20">
  <h3 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
    Contact Us
  </h3>
  <p className="text-lg md:text-xl text-muted-foreground mb-4">
    Have questions or need a driver? We’re here to help.
  </p>
  <div className="space-y-3 text-lg md:text-xl">
    <p className="flex justify-center items-center gap-2 text-foreground">
      <Phone className="w-5 h-5 text-accent" />
      <span>+91 9080512549 &nbsp;|&nbsp; +91 9940990684</span>
    </p>
    <p className="flex justify-center items-center gap-2 text-foreground">
      {/* <Mail className="w-5 h-5 text-accent" /> */}
      {/* <a
        href="mailto:info@ammanactive.com"
        className="hover:text-accent transition-colors"
      >
        info@ammanactive.com
      </a> */}
    </p>
  </div>
</section>


        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-8 text-center border-t-4 border-accent">
          <p className="text-lg font-medium">© 2025 Amman Acting Driver. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
