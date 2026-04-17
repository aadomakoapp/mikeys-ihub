import { Logo } from "./Logo";
import { MessageCircle, Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";

export const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div className="col-span-2">
          <Logo variant="light" />
          <p className="text-sm text-background/70 mt-4 max-w-sm leading-relaxed">
            Kumasi's trusted dealer in genuine Apple products — iPhones, iPads, MacBooks, AirPods and Apple Watch. Quality you can count on.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-md bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-md bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/233560965636"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-md bg-background/10 hover:bg-background/20 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4 text-background">Shop</h4>
          <ul className="space-y-2.5 text-sm text-background/70">
            <li><a href="#products" className="hover:text-background transition-colors">iPhones</a></li>
            <li><a href="#products" className="hover:text-background transition-colors">iPads</a></li>
            <li><a href="#products" className="hover:text-background transition-colors">MacBooks</a></li>
            <li><a href="#products" className="hover:text-background transition-colors">Apple Watch</a></li>
            <li><a href="#products" className="hover:text-background transition-colors">AirPods & Accessories</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4 text-background">Get in touch</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Adum, Melcom · Kumasi</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <a href="tel:+233560965636" className="hover:text-background transition-colors">+233 56 096 5636</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <a href="mailto:hello@mikeysihub.com" className="hover:text-background transition-colors">hello@mikeysihub.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/60">
        <p>© {new Date().getFullYear()} Mikey's iHub. All rights reserved.</p>
        <p>#WePrioritizeQuality · Made in Kumasi, Ghana 🇬🇭</p>
      </div>
    </div>
  </footer>
);
