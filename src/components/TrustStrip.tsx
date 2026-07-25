import { ShieldCheck, Truck, RotateCcw, Wallet } from "lucide-react";
import { siteText } from "@/content";

const icons = [ShieldCheck, Truck, RotateCcw, Wallet];

export const TrustStrip = () => (
  <section className="border-b border-border bg-background">
    <div className="container py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {siteText.trustBadges.map(({ title, desc }, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={title} className="flex items-start gap-3">
              <div className="flex-shrink-0 p-2 rounded-md bg-primary/10">
                <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm leading-tight">{title}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
