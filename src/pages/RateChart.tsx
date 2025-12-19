// import { Phone } from 'lucide-react';
// import Navbar from '@/components/Navbar';
// import { Button } from '@/components/ui/button';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';

// const RateChart = () => {
//   const localRates = [
//     { hours: '2 Hours', charges: '₹500' },
//     { hours: '4 Hours', charges: '₹900' },
//     { hours: '6 Hours', charges: '₹1,300' },
//     { hours: '8 Hours', charges: '₹1,700' },
//     { hours: 'Full Day (12 Hours)', charges: '₹2,200' },
//   ];

//   const outstationRates = [
//     { destination: 'Chennai', distance: '460 km', charges: '₹4,500' },
//     { destination: 'Coimbatore', distance: '220 km', charges: '₹2,800' },
//     { destination: 'Trichy', distance: '135 km', charges: '₹1,800' },
//     { destination: 'Thanjavur', distance: '165 km', charges: '₹2,100' },
//     { destination: 'Rameswaram', distance: '175 km', charges: '₹2,300' },
//   ];

//   const pickupDropRates = [
//     { service: 'Airport Pickup/Drop', charges: '₹600' },
//     { service: 'Railway Station Pickup/Drop', charges: '₹400' },
//     { service: 'Bus Stand Pickup/Drop', charges: '₹350' },
//     { service: 'Within City (One Way)', charges: '₹300' },
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navbar />
      
//       <main className="lg:ml-64 pt-16 lg:pt-0">
//         {/* Header */}
//         <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20">
//           <div className="container mx-auto px-6">
//             <div className="max-w-4xl mx-auto text-center">
//               <h1 className="text-4xl md:text-6xl font-bold mb-4">Rate Chart</h1>
//               <p className="text-xl text-primary-foreground/90">
//                 Transparent pricing for all your transportation needs
//               </p>
//               <div className="flex items-center justify-center gap-4 mt-6">
//                 <Phone className="w-5 h-5" />
//                 <span className="text-lg">Call us: 6382108701 | 8778035220</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Local Madurai Tariff */}
//         <section className="py-16 bg-background">
//           <div className="container mx-auto px-6">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Local Madurai Tariff</h2>
//               <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead className="text-lg font-bold">Duration</TableHead>
//                       <TableHead className="text-lg font-bold text-right">Charges</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {localRates.map((rate, index) => (
//                       <TableRow key={index}>
//                         <TableCell className="font-medium">{rate.hours}</TableCell>
//                         <TableCell className="text-right font-semibold text-accent">{rate.charges}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </div>
//               <p className="text-muted-foreground text-center mt-4">
//                 * Prices include fuel and driver charges. Additional charges may apply for extra hours.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Outstation Tariff */}
//         <section className="py-16 bg-secondary/30">
//           <div className="container mx-auto px-6">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Outstation Tariff (Within Tamil Nadu)</h2>
//               <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead className="text-lg font-bold">Destination</TableHead>
//                       <TableHead className="text-lg font-bold">Distance</TableHead>
//                       <TableHead className="text-lg font-bold text-right">Charges</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {outstationRates.map((rate, index) => (
//                       <TableRow key={index}>
//                         <TableCell className="font-medium">{rate.destination}</TableCell>
//                         <TableCell>{rate.distance}</TableCell>
//                         <TableCell className="text-right font-semibold text-accent">{rate.charges}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </div>
//               <p className="text-muted-foreground text-center mt-4">
//                 * Round trip charges apply. Toll and parking charges extra.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Pickup/Drop Tariff */}
//         <section className="py-16 bg-background">
//           <div className="container mx-auto px-6">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Pickup/Drop Tariff</h2>
//               <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead className="text-lg font-bold">Service</TableHead>
//                       <TableHead className="text-lg font-bold text-right">Charges</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {pickupDropRates.map((rate, index) => (
//                       <TableRow key={index}>
//                         <TableCell className="font-medium">{rate.service}</TableCell>
//                         <TableCell className="text-right font-semibold text-accent">{rate.charges}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </div>
//               <p className="text-muted-foreground text-center mt-4">
//                 * All prices are base rates and may vary based on time and distance.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-16 bg-primary text-primary-foreground">
//           <div className="container mx-auto px-6 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book?</h2>
//             <p className="text-xl mb-8 text-primary-foreground/90">
//               Get the best rates for your ride today
//             </p>
//             <Button 
//               size="lg"
//               className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 font-semibold"
//               onClick={() => window.location.href = '/'}
//             >
//               Book Now
//             </Button>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="bg-primary/95 text-primary-foreground py-8 border-t border-primary-foreground/10">
//           <div className="container mx-auto px-6 text-center">
//             <p className="text-primary-foreground/70">
//               © 2025 Amman Active Drivers. All rights reserved.
//             </p>
//           </div>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default RateChart;

import { useState } from 'react';
import { Phone, MapPin, Search, ChevronDown, ChevronUp } from 'lucide-react';
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
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState('');

  const localRates = [
    { hours: '4 Hours', charges: '₹400' },
    { hours: 'After 4 Hours', charges: '₹50 / hour' },
  ];

  const outstationRates = [
    { hours: '10 Hours', charges: '₹800' },
    { hours: 'After 10 Hours', charges: '₹50 / hour' },
    { hours: 'Extra', charges: 'Food' },
  ];

  const pickupDropRates = [
    { hours: '1 Day (12AM - 12PM)', charges: '₹1200' },
    { hours: 'Above 1 Day', charges: '₹50 / hour' },
    { hours: 'Extra', charges: 'Food' },
  ];

  const valetRates = [
    { hours: '1-12 Hours', charges: '₹900' },
    { hours: 'After 12 Hours', charges: '₹50 / hour' },
    { hours: 'Extra', charges: 'Food' },
    { hours: 'Night Hours', charges: 'No Charge' },
  ];

  const locations = [
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
  ];

  // Filter logic
  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(search.toLowerCase())
  );

  const visibleLocations = showAll
    ? filteredLocations
    : filteredLocations.slice(0, 6);

  const sections = [
    { title: 'Local Madurai Tariff', data: localRates },
    { title: 'Outstation Tariff (Within Tamil Nadu)', data: outstationRates },
    { title: 'Pickup / Drop Tariff', data: pickupDropRates },
    { title: 'Valet Parking Tariff', data: valetRates },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Fixed Top Navbar */}
      <Navbar />

      {/* Main content with padding to offset the navbar height */}
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground pt-12 lg:pt-16 pb-20">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Rate Chart</h1>
    <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6">
      Transparent pricing for all your transportation needs
    </p>
    <div className="flex items-center justify-center gap-4">
      <Phone className="w-5 h-5" />
      <span className="text-lg md:text-xl">Call us: 6382108701 | 8778035220</span>
    </div>
  </div>
</section>


        {/* Tariff Grid Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  className="bg-card p-8 rounded-2xl shadow-md border border-border 
                             hover:shadow-xl hover:border-accent/60 hover:scale-[1.02] 
                             transition-all duration-300 backdrop-blur-sm"
                >
                  <h2 className="text-2xl font-bold text-center mb-6 text-primary">
                    {section.title}
                  </h2>
                  <div className="overflow-hidden rounded-xl border border-border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-base font-bold">Hours Detail</TableHead>
                          <TableHead className="text-base font-bold text-right">
                            Charges (Rs.)
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {section.data.map((rate, index) => (
                          <TableRow
                            key={index}
                            className="hover:bg-accent/10 transition-colors"
                          >
                            <TableCell className="font-medium">{rate.hours}</TableCell>
                            <TableCell className="text-right font-semibold text-accent">
                              {rate.charges}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Location Services Available</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                We offer acting driver services across all major areas in Madurai
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md mx-auto mb-10">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-border focus:ring-2 focus:ring-accent outline-none bg-card text-sm shadow-sm"
                />
              </div>

              {/* Locations Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {visibleLocations.length > 0 ? (
                  visibleLocations.map((location, index) => (
                    <div
                      key={index}
                      className="bg-card p-3 rounded-lg border border-border flex items-center gap-2 
                                 hover:border-accent hover:shadow-md hover:bg-accent/5 transition-all"
                    >
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Acting Driver in {location}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="col-span-full text-muted-foreground">
                    No locations found for "{search}"
                  </p>
                )}
              </div>

              {/* Show More / Less Button */}
              {filteredLocations.length > 6 && (
                <div className="mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowAll(!showAll)}
                    className="text-accent font-medium flex items-center gap-2 mx-auto border-accent/30 hover:bg-accent/10"
                  >
                    {showAll ? (
                      <>
                        Show Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              )}

              <p className="text-sm text-muted-foreground mt-6">
                Showing {visibleLocations.length} of {filteredLocations.length} matching locations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get the best rates for your ride today
            </p>
            <Button
              size="lg"
              className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl"
              onClick={() => (window.location.href = '/')}
            >
              Book Now
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary/95 text-primary-foreground py-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/70">
            © 2025 Amman Acting Driver. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default RateChart;
