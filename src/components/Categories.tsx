import { ArrowRight } from "lucide-react";
import { siteText, whatsappLink } from "@/content";

export const Categories = () => {
  return (
    <section id="products" className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1.5">Shop by category</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Browse our full range of Apple products and accessories.
            </p>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {siteText.categories.map((c) => (
            <a
              key={c.name}
              href="#featured"
              className="group surface rounded-xl p-5 border border-border hover:border-primary hover:shadow-card-hover transition-all text-center"
            >
              <div className="text-3xl md:text-4xl mb-3">{c.emoji}</div>
              <p className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                {c.name}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{c.count}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
