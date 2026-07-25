import { Star } from "lucide-react";
import { siteText } from "@/content";

export const Testimonials = () => (
  <section className="py-16 md:py-20 surface border-y border-border">
    <div className="container">
      <div className="text-center max-w-xl mx-auto mb-10">
        <p className="text-xs font-semibold text-primary mb-1.5 tracking-wide uppercase">
          What customers say
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Trusted by buyers across Ghana
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[hsl(45_93%_55%)] text-[hsl(45_93%_55%)]" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{siteText.stats.rating}</span>{" "}
            {siteText.stats.reviewsLine}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {siteText.testimonials.map((r) => (
          <figure
            key={r.name}
            className="bg-background border border-border rounded-xl p-6 flex flex-col"
          >
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[hsl(45_93%_55%)] text-[hsl(45_93%_55%)]" />
              ))}
            </div>
            <blockquote className="text-sm text-foreground/85 leading-relaxed flex-1">
              "{r.text}"
            </blockquote>
            <figcaption className="mt-4 pt-4 border-t border-border">
              <p className="font-semibold text-sm">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.location}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
