import { Phone, MessageCircle } from 'lucide-react';

const FloatingContacts = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919080512549"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-elegant hover:shadow-glow transition-all hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919080512549"
        className="group gradient-hero text-white p-4 rounded-full shadow-elegant hover:shadow-glow transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 group-hover:animate-pulse" />
      </a>
    </div>
  );
};

export default FloatingContacts;
