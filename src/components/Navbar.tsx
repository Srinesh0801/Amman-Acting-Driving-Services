import { useState } from 'react';
import { Menu, X, Car, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Book Now', href: '#booking' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Car className="w-6 h-6" />
            <span className="font-bold text-lg">Amman Active Drivers</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="bg-primary border-t border-primary-foreground/10">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 hover:bg-primary-foreground/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-primary text-primary-foreground flex-col shadow-lg z-50">
        <div className="p-6 border-b border-primary-foreground/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-xl">Amman Active</h1>
              <p className="text-sm text-primary-foreground/70">Drivers</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-3 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300 hover:translate-x-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6 border-t border-primary-foreground/10 space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-accent" />
            <span>+962 79 123 4567</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-accent" />
            <span>info@ammanactive.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-accent" />
            <span>Amman, Jordan</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
