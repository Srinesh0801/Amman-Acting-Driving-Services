import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/WhatsApp Image 2025-10-20 at 19.03.19_194c2813.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoZoom, setShowLogoZoom] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Book Now", href: "#booking" },
    { name: "Services", href: "#services" },
    { name: "Rate Chart", href: "#rate-chart" },
  ];

  // Handle logo click
  const handleLogoClick = () => {
    setShowLogoZoom(true);
  };

  // ✅ Handle back button to close zoomed logo
  useEffect(() => {
    if (showLogoZoom) {
      // Push a new state into history so the back button can close the logo instead of going back a page
      window.history.pushState({ logoZoom: true }, "");
    }

    const handlePopState = (event) => {
      if (showLogoZoom) {
        // Animate zoom-out
        const img = document.querySelector(".zoom-animating");
        if (img) {
          img.classList.remove("animate-zoomIn");
          img.classList.add("animate-zoomOut");
        }

        // Close after animation
        setTimeout(() => {
          setShowLogoZoom(false);
        }, 400);

        // Prevent the browser from actually going back a page
        window.history.pushState(null, "", window.location.href);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [showLogoZoom]);

  return (
    <>
      {/* Zoom Overlay */}
      {showLogoZoom && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md transition-opacity duration-500"
          onClick={(e) => {
            // Close only if background (not image) is clicked
            if (e.target === e.currentTarget) {
              const img = document.querySelector(".zoom-animating");
              if (img) {
                img.classList.remove("animate-zoomIn");
                img.classList.add("animate-zoomOut");
              }
              setTimeout(() => setShowLogoZoom(false), 400);
            }
          }}
        >
          <img
            src={logo}
            alt="Amman Acting Driver Logo"
            className="zoom-animating w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-accent shadow-glow transform animate-zoomIn cursor-pointer"
            onClick={(e) => e.stopPropagation()} // prevent accidental close
          />
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              onClick={handleLogoClick}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <img
                src={logo}
                alt="Amman Acting Driver"
                className="w-12 h-12 rounded-full border-2 border-accent transition-transform duration-500 hover:scale-110"
              />
              <span className="text-xl font-bold text-primary">
                Amman Acting Driver
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-accent transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+916382108701"
                className="gradient-hero text-white px-6 py-2 rounded-full hover:shadow-glow transition-all hover:scale-105 font-semibold"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground hover:text-accent transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-foreground hover:text-accent transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+916382108701"
                className="block text-center gradient-hero text-white px-6 py-2 rounded-full hover:shadow-glow transition-all font-semibold"
              >
                Call Now
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
