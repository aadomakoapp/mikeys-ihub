import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import titanium from "@/assets/iphone-titanium.png";
import red from "@/assets/iphone-red.png";
import blue from "@/assets/iphone-blue.png";

const WHATSAPP = "https://wa.me/233560965636";

const products = [
  {
    name: "iPhone 15 Pro Max",
    color: "Natural Titanium",
    badge: "New Arrival",
    image: titanium,
  },
  {
    name: "iPhone 14 Plus",
    color: "(PRODUCT) RED",
    badge: "Best Seller",
    image: red,
  },
  {
    name: "iPhone 13 Pro",
    color: "Sierra Blue",
    badge: "Great Value",
    image: blue,
  },
];

export const Featured = () => {
  return (
    <section id="featured" className="relative py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wider uppercase">
              Featured iPhones
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              Hand-picked, quality-checked.
            </h2>
          </div>
          <Button variant="glass" asChild>
            <a href={`${WHATSAPP}?text=Hi%20Mikey%2C%20what%20iPhones%20do%20you%20have%20in%20stock%3F`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Ask about stock
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="group relative card-gradient rounded-3xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-card-elevated"
            >
              <div className="relative aspect-[4/5] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary/30 to-transparent">
                <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-[11px] font-semibold text-primary tracking-wide">
                    {p.badge}
                  </span>
                </div>
                <img
                  src={p.image}
                  alt={`${p.name} in ${p.color}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="relative z-0 w-3/4 h-3/4 object-contain transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2"
                />
              </div>
              <div className="p-6 flex items-center justify-between border-t border-border">
                <div>
                  <h3 className="font-bold text-lg leading-tight">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{p.color}</p>
                </div>
                <Button variant="hero" size="sm" className="rounded-full" asChild>
                  <a
                    href={`${WHATSAPP}?text=Hi%20Mikey%2C%20I%27d%20like%20a%20quote%20for%20the%20${encodeURIComponent(p.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get quote for ${p.name}`}
                  >
                    Get Price
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Looking for a specific model or storage size?{" "}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
            Message us — we'll find it.
          </a>
        </p>
      </div>
    </section>
  );
};
