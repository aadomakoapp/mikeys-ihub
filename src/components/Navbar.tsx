import { useState } from "react";
import { MessageCircle, Menu, X, Search, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { store, whatsappLink } from "@/content";

const links = [
  { href: "#products", label: "Shop" },
  { href: "#featured", label: "iPhones" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#visit", label: "Contact" },
];

const WHATSAPP = whatsappLink();

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-background border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16 gap-6">
          <div className="flex items-center gap-8">
            <Logo />
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search iPhone, MacBook, AirPods…"
                className="w-full h-10 pl-10 pr-4 rounded-md surface border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="#visit"
              className="hidden lg:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <MapPin className="h-3.5 w-3.5" />
              {store.addressLine1}
            </a>
            <Button variant="whatsapp" size="default" asChild>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-3 border-t border-border animate-fade-up">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search products…"
                className="w-full h-10 pl-10 pr-4 rounded-md surface border border-border text-sm"
              />
            </div>
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <Button variant="whatsapp" className="w-full" asChild>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
