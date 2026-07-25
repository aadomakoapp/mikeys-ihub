import { Truck } from "lucide-react";

export const TopBar = () => (
  <div className="hidden md:block bg-foreground text-background text-xs">
    <div className="container flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        <Truck className="h-3.5 w-3.5 text-primary" />
        <span><span className="font-bold text-primary">#WePrioritizeQuality</span> · Free same-day delivery in Kumasi · Nationwide shipping</span>
      </div>

      <div className="flex items-center gap-5">
        <a href="tel:+233560965636" className="hover:text-primary-foreground/80 transition-colors">
          +233 56 096 5636
        </a>
        <span className="text-background/40">|</span>
        <a href="tel:+233559631051" className="hover:text-primary-foreground/80 transition-colors">
          +233 55 963 1051
        </a>
      </div>
    </div>
  </div>
);
