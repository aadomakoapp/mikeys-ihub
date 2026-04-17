import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "./ui/button";

const WHATSAPP = "https://wa.me/233560965636";

export const Visit = () => {
  return (
    <section id="visit" className="relative py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="card-gradient rounded-3xl border border-border p-8 md:p-12">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wider uppercase">
              Visit us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-8">
              Come say hello.
            </h2>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 p-2.5 rounded-xl bg-primary/10 border border-primary/20 h-fit">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Location</p>
                  <p className="font-semibold text-lg">Adum, Melcom</p>
                  <p className="text-sm text-muted-foreground">Kumasi, Ghana</p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex-shrink-0 p-2.5 rounded-xl bg-primary/10 border border-primary/20 h-fit">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Call us</p>
                  <a href="tel:+233560965636" className="block font-semibold text-lg hover:text-primary transition-colors">
                    +233 56 096 5636
                  </a>
                  <a href="tel:+233559631051" className="block font-semibold text-lg hover:text-primary transition-colors">
                    +233 55 963 1051
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex-shrink-0 p-2.5 rounded-xl bg-primary/10 border border-primary/20 h-fit">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Open hours</p>
                  <p className="font-semibold text-lg">Mon — Sat · 9am to 7pm</p>
                  <p className="text-sm text-muted-foreground">Sundays by appointment</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp us now
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="tel:+233560965636">
                  <Phone className="h-5 w-5" />
                  Call directly
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border shadow-card-elevated min-h-[420px]">
            <iframe
              title="Mikey's iHub location — Adum, Melcom Kumasi"
              src="https://www.google.com/maps?q=Melcom+Adum+Kumasi+Ghana&output=embed"
              className="w-full h-full min-h-[420px] grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
