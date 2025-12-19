import { useState } from 'react';
import { Car, MapPin, User, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickup: '',
    dropoff: '',
    carType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
📌 *New Booking - Amman Acting Driver*
--------------------------------------
👤 Name: ${formData.fullName || 'Not provided'}
📧 Email: ${formData.email || 'Not provided'}
📞 Phone: ${formData.phone || 'Not provided'}
🚘 Car Type: ${formData.carType || 'Not specified'}
📍 Pickup: ${formData.pickup || 'Not specified'}
🏁 Dropoff: ${formData.dropoff || 'Not specified'}
    `;

    const whatsappNumber = "916382108701"; // Your WhatsApp number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    toast({
      title: "Booking Request Sent!",
      description: "Redirecting you to WhatsApp to confirm your ride.",
    });

    window.open(url, "_blank");

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      pickup: '',
      dropoff: '',
      carType: '',
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <User className="w-4 h-4 text-accent" />
            Full Name
          </label>
          <Input
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className="h-12"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Mail className="w-4 h-4 text-accent" />
            Email Address
          </label>
          <Input
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="h-12"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Phone className="w-4 h-4 text-accent" />
            Phone Number
          </label>
          <Input
            type="tel"
            placeholder="+91 63821 08701"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="h-12"
          />
        </div>

        {/* Car Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Car className="w-4 h-4 text-accent" />
            Car Type
          </label>
          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="Enter car type "
            value={formData.carType}
            onChange={(e) => handleChange('carType', e.target.value)}
          />
        </div>

        {/* Pickup */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            Pickup Location
          </label>
          <Input
            type="text"
            placeholder="Enter pickup address"
            value={formData.pickup}
            onChange={(e) => handleChange('pickup', e.target.value)}
            className="h-12"
          />
        </div>

        {/* Dropoff */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            Dropoff Location
          </label>
          <Input
            type="text"
            placeholder="Enter dropoff address"
            value={formData.dropoff}
            onChange={(e) => handleChange('dropoff', e.target.value)}
            className="h-12"
          />
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-accent to-orange-500 hover:opacity-90 transition-opacity"
      >
        Book Your Ride Now
      </Button>
    </form>
  );
};

export default BookingForm;
