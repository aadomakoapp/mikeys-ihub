import { Logo } from "./Logo";
import { MessageCircle, Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";
import { siteText, store, whatsappLink, telLink } from "@/content";

export const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div className="col-span-2">
          <Logo variant="light" />
          <p className="text-sm text-background/70 mt-4 max-w-sm leading-relaxed">
            {siteText.footerAbout}
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href={store.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-md bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={store.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-md bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={store.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="p-2 rounded-md bg-background/10 hover:bg-background/20 transition-colors"
            >
              {/* lucide has no TikTok glyph, so this is the brand mark as an inline path */}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M19.6 6.7a4.9 4.9 0 0 1-3.8-4.3V2h-3.4v13.4a2.9 2.9 0 1 1-2-2.8V9.2a6.3 6.3 0 1 0 5.4 6.2V8.6a8.2 8.2 0 0 0 4.8 1.5V6.7h-1Z" />
              </svg>
            </a>
            <a
              href={whatsappLink()}
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
              <span>{store.addressLine1} · {store.addressLine2}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <a href={telLink(store.phones[0])} className="hover:text-background transition-colors">{store.phones[0]}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <a href={`mailto:${store.email}`} className="hover:text-background transition-colors">{store.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/60">
        <p>© {new Date().getFullYear()} {store.storeName}. All rights reserved.</p>
        <p>{store.tagline} · {siteText.footerNote}</p>
      </div>
    </div>
  </footer>
);
