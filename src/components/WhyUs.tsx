import { ShieldCheck, Sparkles, Wallet, HeartHandshake } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Quality First", desc: "Every device is inspected and tested before it reaches you." },
  { icon: Sparkles, title: "Genuine & Durable", desc: "Authentic Apple products built to stand the test of time." },
  { icon: Wallet, title: "Fair, Affordable Prices", desc: "Premium iDeals without the premium price tag." },
  { icon: HeartHandshake, title: "Trusted by Many", desc: "Customers across Ghana keep coming back — and bringing friends." },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="relative py-20 md:py-28">
      <div className="container">
        <div className="relative card-gradient rounded-3xl border border-border overflow-hidden p-8 md:p-14">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative max-w-2xl mb-12">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wider uppercase">
              #WePrioritizeQuality
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              Why customers choose Mikey's iHub.
            </h2>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group">
                <div className="inline-flex p-3 rounded-xl bg-gradient-red shadow-glow mb-5">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
