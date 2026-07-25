import { Truck } from "lucide-react";
import { store, telLink } from "@/content";

export const TopBar = () => (
  <div className="hidden md:block bg-foreground text-background text-xs">
    <div className="container flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        <Truck className="h-3.5 w-3.5 text-primary" />
        <span><span className="font-bold text-primary">{store.tagline}</span> · {store.deliveryMessage}</span>
      </div>

      <div className="flex items-center gap-5">
        {store.phones.map((phone, i) => (
          <span key={phone} className="flex items-center gap-5">
            {i > 0 && <span className="text-background/40">|</span>}
            <a href={telLink(phone)} className="hover:text-primary-foreground/80 transition-colors">
              {phone}
            </a>
          </span>
        ))}
      </div>
    </div>
  </div>
);
