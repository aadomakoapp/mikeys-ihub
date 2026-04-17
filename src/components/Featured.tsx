import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import iphoneTitanium from "@/assets/iphone-titanium.png";
import iphoneRed from "@/assets/iphone-red.png";
import iphoneBlue from "@/assets/iphone-blue.png";
import ipad from "@/assets/ipad.png";
import macbook from "@/assets/macbook.png";
import airpods from "@/assets/airpods.png";

const WHATSAPP = "https://wa.me/233560965636";

const products = [
  {
    name: "iPhone 15 Pro Max",
    color: "Natural Titanium",
    storage: ["256GB", "512GB", "1TB"],
    condition: "Brand New",
    conditionColor: "bg-[hsl(142_71%_38%)]",
    price: "12,500",
    image: iphoneTitanium,
  },
  {
    name: "iPhone 14 Plus",
    color: "Product (RED)",
    storage: ["128GB", "256GB"],
    condition: "UK Used",
    conditionColor: "bg-primary",
    price: "7,200",
    image: iphoneRed,
  },
  {
    name: "iPhone 13 Pro",
    color: "Sierra Blue",
    storage: ["128GB", "256GB"],
    condition: "UK Used",
    conditionColor: "bg-primary",
    price: "5,800",
    image: iphoneBlue,
  },
  {
    name: "iPad Air (5th Gen)",
    color: "Space Gray",
    storage: ["64GB", "256GB"],
    condition: "Brand New",
    conditionColor: "bg-[hsl(142_71%_38%)]",
    price: "6,400",
    image: ipad,
  },
  {
    name: 'MacBook Air M2 13"',
    color: "Silver",
    storage: ["256GB SSD", "512GB SSD"],
    condition: "Brand New",
    conditionColor: "bg-[hsl(142_71%_38%)]",
    price: "14,900",
    image: macbook,
  },
  {
    name: "AirPods (2nd Gen)",
    color: "White",
    storage: ["With Charging Case"],
    condition: "Brand New",
    conditionColor: "bg-[hsl(142_71%_38%)]",
    price: "850",
    image: airpods,
  },
];

export const Featured = () => {
  return (
    <section id="featured" className="py-16 md:py-20 surface border-y border-border">
      <div className="container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-primary mb-1.5 tracking-wide uppercase">
              Featured stock
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">Currently in store</h2>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            See full stock <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <article
              key={p.name}
              className="group bg-background rounded-xl border border-border overflow-hidden hover:shadow-card-hover hover:border-primary/40 transition-all flex flex-col"
            >
              <div className="relative aspect-square surface-2 flex items-center justify-center overflow-hidden">
                <span
                  className={`absolute top-3 left-3 ${p.conditionColor} text-white text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded`}
                >
                  {p.condition}
                </span>
                <img
                  src={p.image}
                  alt={`${p.name} in ${p.color}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-base leading-tight">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{p.color}</p>

                <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                  {p.storage.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center px-2 py-0.5 rounded border border-border text-[11px] font-medium text-foreground/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-end justify-between gap-3 pt-3 border-t border-border">
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wide">From</p>
                    <p className="text-lg font-bold leading-tight">
                      GH₵ {p.price}
                    </p>
                  </div>
                  <Button variant="whatsapp" size="sm" asChild>
                    <a
                      href={`${WHATSAPP}?text=Hi%20Mikey%2C%20I%27d%20like%20to%20buy%20the%20${encodeURIComponent(p.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Order
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Don't see what you're looking for?{" "}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Message us — we'll source it for you.
          </a>
        </p>
      </div>
    </section>
  );
};
