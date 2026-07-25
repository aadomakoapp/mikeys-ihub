import { MessageCircle, Search, CheckCircle2, Truck } from "lucide-react";
import { siteText } from "@/content";

const icons = [Search, MessageCircle, Truck, CheckCircle2];

export const HowItWorks = () => (
  <section id="how-it-works" className="py-16 md:py-20 bg-background">
    <div className="container">
      <div className="max-w-2xl mb-10">
        <p className="text-xs font-semibold text-primary mb-1.5 tracking-wide uppercase">
          How it works
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Buying from Mikey's is simple.
        </h2>
        <p className="text-muted-foreground">
          From browsing to delivery — here's exactly what to expect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {siteText.howItWorks.map(({ title, desc }, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={title}
              className="surface rounded-xl p-6 border border-border relative"
            >
              <span className="absolute top-4 right-4 text-5xl font-extrabold text-foreground/5 leading-none">
                {i + 1}
              </span>
              <div className="inline-flex p-2.5 rounded-md bg-primary/10 mb-4">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-base mb-1.5">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
