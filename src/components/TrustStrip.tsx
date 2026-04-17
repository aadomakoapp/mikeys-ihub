import { ShieldCheck, Truck, RotateCcw, Wallet } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Quality checked", desc: "Every device tested before sale" },
  { icon: Truck, title: "Fast delivery", desc: "Same-day in Kumasi · 1–2 days nationwide" },
  { icon: RotateCcw, title: "7-day returns", desc: "Not happy? Send it back, no stress" },
  { icon: Wallet, title: "Pay on delivery", desc: "Inspect before you pay (Kumasi only)" },
];

export const TrustStrip = () => (
  <section className="border-b border-border bg-background">
    <div className="container py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3">
            <div className="flex-shrink-0 p-2 rounded-md bg-primary/10">
              <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm leading-tight">{title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
