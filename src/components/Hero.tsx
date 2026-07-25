import { ArrowRight, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { Button } from "./ui/button";
import { siteText, store, imageUrl, whatsappLink } from "@/content";

export const Hero = () => {
  const { hero, stats } = siteText;

  return (
    <section id="top" className="surface border-b border-border">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center py-12 md:py-20">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-3 py-1 mb-6 text-xs font-bold tracking-wide">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              {store.tagline}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-5">
              {hero.headlineStart} <span className="text-primary">{hero.headlineHighlight}</span>
              <br />
              {hero.headlineEnd}
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              {hero.subheadline}
            </p>


            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button size="xl" asChild>
                <a href="#products">
                  Shop products
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href={whatsappLink(store.whatsappGreeting)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-5 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[hsl(45_93%_55%)] text-[hsl(45_93%_55%)]" />
                  ))}
                </div>
                <span className="font-semibold">{stats.rating}</span>
              </div>
              <span className="text-muted-foreground">{stats.customersLine}</span>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-background">
              <img
                src={imageUrl(hero.image)}
                alt={`iPhone available at ${store.storeName}`}
                width={1600}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
