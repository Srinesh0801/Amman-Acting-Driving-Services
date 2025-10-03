import { Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const RateChart = () => {
  const localRates = [
    { hours: '2 Hours', charges: '₹500' },
    { hours: '4 Hours', charges: '₹900' },
    { hours: '6 Hours', charges: '₹1,300' },
    { hours: '8 Hours', charges: '₹1,700' },
    { hours: 'Full Day (12 Hours)', charges: '₹2,200' },
  ];

  const outstationRates = [
    { destination: 'Chennai', distance: '460 km', charges: '₹4,500' },
    { destination: 'Coimbatore', distance: '220 km', charges: '₹2,800' },
    { destination: 'Trichy', distance: '135 km', charges: '₹1,800' },
    { destination: 'Thanjavur', distance: '165 km', charges: '₹2,100' },
    { destination: 'Rameswaram', distance: '175 km', charges: '₹2,300' },
  ];

  const pickupDropRates = [
    { service: 'Airport Pickup/Drop', charges: '₹600' },
    { service: 'Railway Station Pickup/Drop', charges: '₹400' },
    { service: 'Bus Stand Pickup/Drop', charges: '₹350' },
    { service: 'Within City (One Way)', charges: '₹300' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="lg:ml-64 pt-16 lg:pt-0">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Rate Chart</h1>
              <p className="text-xl text-primary-foreground/90">
                Transparent pricing for all your transportation needs
              </p>
              <div className="flex items-center justify-center gap-4 mt-6">
                <Phone className="w-5 h-5" />
                <span className="text-lg">Call us: 6382108701 | 8778035220</span>
              </div>
            </div>
          </div>
        </section>

        {/* Local Madurai Tariff */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Local Madurai Tariff</h2>
              <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-lg font-bold">Duration</TableHead>
                      <TableHead className="text-lg font-bold text-right">Charges</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {localRates.map((rate, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{rate.hours}</TableCell>
                        <TableCell className="text-right font-semibold text-accent">{rate.charges}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-muted-foreground text-center mt-4">
                * Prices include fuel and driver charges. Additional charges may apply for extra hours.
              </p>
            </div>
          </div>
        </section>

        {/* Outstation Tariff */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Outstation Tariff (Within Tamil Nadu)</h2>
              <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-lg font-bold">Destination</TableHead>
                      <TableHead className="text-lg font-bold">Distance</TableHead>
                      <TableHead className="text-lg font-bold text-right">Charges</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {outstationRates.map((rate, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{rate.destination}</TableCell>
                        <TableCell>{rate.distance}</TableCell>
                        <TableCell className="text-right font-semibold text-accent">{rate.charges}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-muted-foreground text-center mt-4">
                * Round trip charges apply. Toll and parking charges extra.
              </p>
            </div>
          </div>
        </section>

        {/* Pickup/Drop Tariff */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Pickup/Drop Tariff</h2>
              <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-lg font-bold">Service</TableHead>
                      <TableHead className="text-lg font-bold text-right">Charges</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pickupDropRates.map((rate, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{rate.service}</TableCell>
                        <TableCell className="text-right font-semibold text-accent">{rate.charges}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-muted-foreground text-center mt-4">
                * All prices are base rates and may vary based on time and distance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get the best rates for your ride today
            </p>
            <Button 
              size="lg"
              className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 font-semibold"
              onClick={() => window.location.href = '/'}
            >
              Book Now
            </Button>
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

export default RateChart;