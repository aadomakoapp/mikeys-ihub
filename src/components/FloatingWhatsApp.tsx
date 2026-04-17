import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/233560965636?text=Hi%20Mikey%2C%20I%20have%20a%20question"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-[hsl(142_71%_38%)] text-white shadow-card-hover hover:scale-105 hover:bg-[hsl(142_71%_32%)] transition-all"
  >
    <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
    <span className="absolute -top-1 -right-1 flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(142_71%_55%)] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-[hsl(142_71%_45%)]"></span>
    </span>
  </a>
);
