import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-iphones.jpg";

const WHATSAPP = "https://wa.me/233560965636?text=Hi%20Mikey%2C%20I%27m%20interested%20in%20an%20iPhone";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-foreground/80">
              #WePrioritizeQuality · Adum, Melcom — Ghana
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6">
            <span className="text-gradient">Quality </span>
            <span className="text-gradient-red italic">iDeals.</span>
            <br />
            <span className="text-gradient">Built to last.</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Mikey's iHub brings you the most trusted iPhones, iPads, MacBooks, AirPods and more — durable, affordable, and ready for your everyday.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Order on WhatsApp
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#products">
                Browse Products
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mt-16 md:mt-20 max-w-5xl mx-auto">
          <div className="absolute -inset-x-10 -inset-y-10 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-elevated">
            <img
              src={heroImage}
              alt="Premium iPhones available at Mikey's iHub"
              width={1600}
              height={1280}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
