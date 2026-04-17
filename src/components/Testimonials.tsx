import { Star } from "lucide-react";

const reviews = [
  {
    name: "Kwame A.",
    location: "Kumasi",
    text: "Bought my iPhone 14 Pro from Mikey and it's been flawless for 8 months. The phone was exactly as described and delivery was same-day. Will definitely buy from them again.",
  },
  {
    name: "Adwoa M.",
    location: "Accra",
    text: "I was nervous buying online but they sent me video calls of the actual MacBook before I paid. Came in 2 days, perfectly packaged. Genuine sellers.",
  },
  {
    name: "Yaw O.",
    location: "Takoradi",
    text: "The AirPods Pro I got from Mikey's iHub are 100% original. Better price than the mall and they even gave me a free case. Recommended.",
  },
];

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
            <span className="font-semibold text-foreground">4.9</span> from 320+ reviews
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((r) => (
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
