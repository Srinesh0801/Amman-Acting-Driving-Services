import { useState } from 'react';
import { Car, MapPin, User, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
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
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your ride.",
    });
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
            required
            className="h-12"
          />
        </div>

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
            required
            className="h-12"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Phone className="w-4 h-4 text-accent" />
            Phone Number
          </label>
          <Input
            type="tel"
            placeholder="+962 79 123 4567"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            required
            className="h-12"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Car className="w-4 h-4 text-accent" />
            Car Type
          </label>
          <Select value={formData.carType} onValueChange={(value) => handleChange('carType', value)} required>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select car type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedan">Sedan - Comfortable & Economic</SelectItem>
              <SelectItem value="suv">SUV - Spacious & Premium</SelectItem>
              <SelectItem value="van">Van - Group Travel</SelectItem>
              <SelectItem value="luxury">Luxury - VIP Experience</SelectItem>
            </SelectContent>
          </Select>
        </div>

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
            required
            className="h-12"
          />
        </div>

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
            required
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
