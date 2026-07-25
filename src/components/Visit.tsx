import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { store, whatsappLink, telLink } from "@/content";

export const Visit = () => {
  return (
    <section id="visit" className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold text-primary mb-1.5 tracking-wide uppercase">
            Visit us
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Find our store</h2>
          <p className="text-muted-foreground">
            Walk in, see the products, and shop with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 surface rounded-xl border border-border p-7">
            <ul className="space-y-5">
              <li className="flex gap-3.5">
                <div className="flex-shrink-0 p-2 rounded-md bg-primary/10 h-fit">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-0.5">
                    Address
                  </p>
                  <p className="font-semibold">{store.addressLine1}</p>
                  <p className="text-sm text-muted-foreground">{store.addressLine2}</p>
                </div>
              </li>

              <li className="flex gap-3.5">
                <div className="flex-shrink-0 p-2 rounded-md bg-primary/10 h-fit">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-0.5">
                    Call us
                  </p>
                  {store.phones.map((phone) => (
                    <a
                      key={phone}
                      href={telLink(phone)}
                      className="block font-semibold hover:text-primary transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex gap-3.5">
                <div className="flex-shrink-0 p-2 rounded-md bg-primary/10 h-fit">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-0.5">
                    Opening hours
                  </p>
                  {store.openingHours.map((h) => (
                    <p key={h.days} className="text-sm">
                      <span className="font-semibold">{h.days}:</span>{" "}
                      <span className="text-foreground/80">{h.time}</span>
                    </p>
                  ))}
                </div>
              </li>

              <li className="flex gap-3.5">
                <div className="flex-shrink-0 p-2 rounded-md bg-primary/10 h-fit">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-0.5">
                    Email
                  </p>
                  <a href={`mailto:${store.email}`} className="font-semibold hover:text-primary transition-colors">
                    {store.email}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-7 pt-6 border-t border-border flex flex-col sm:flex-row gap-2.5">
              <Button variant="whatsapp" size="lg" className="flex-1" asChild>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a href={telLink(store.phones[0])}>
                  <Phone className="h-4 w-4" />
                  Call now
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-xl overflow-hidden border border-border min-h-[400px] bg-secondary">
            <iframe
              title={`${store.storeName} location — ${store.addressLine1}, ${store.addressLine2}`}
              src={store.mapEmbedUrl}
              className="w-full h-full min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
