import { ArrowRight, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-iphones.jpg";

const WHATSAPP = "https://wa.me/233560965636?text=Hi%20Mikey%2C%20I%27m%20interested%20in%20an%20iPhone";

export const Hero = () => {
  return (
    <section id="top" className="surface border-b border-border">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center py-12 md:py-20">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-3 py-1 mb-6 text-xs font-bold tracking-wide">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              #WePrioritizeQuality
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-5">
              Quality <span className="text-primary">iDeals</span>
              <br />
              on genuine Apple products.
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Mikey's iHub is Kumasi's trusted dealer in iPhones, iPads, MacBooks, AirPods and Apple Watch — quality, durable and affordable, every time.
            </p>


            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button size="xl" asChild>
                <a href="#products">
                  Shop products
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
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
                <span className="font-semibold">4.9</span>
              </div>
              <span className="text-muted-foreground">Trusted by 1,200+ customers across Ghana</span>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-background">
              <img
                src={heroImage}
                alt="iPhone available at Mikey's iHub"
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
