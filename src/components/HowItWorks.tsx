import { MessageCircle, Search, CheckCircle2, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    n: "1",
    title: "Browse or ask",
    desc: "Pick a product from our list or message us with what you're looking for. We'll confirm availability and send photos.",
  },
  {
    icon: MessageCircle,
    n: "2",
    title: "Confirm on WhatsApp",
    desc: "Chat with us to lock in your price, choose storage and color. We'll guide you through payment options.",
  },
  {
    icon: Truck,
    n: "3",
    title: "Pickup or delivery",
    desc: "Visit our store at Adum, Melcom — or get same-day delivery in Kumasi (and 1–2 days nationwide).",
  },
  {
    icon: CheckCircle2,
    n: "4",
    title: "Inspect & enjoy",
    desc: "Test your device on the spot. Every Mikey's iHub purchase comes with a 7-day return policy.",
  },
];

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
        {steps.map(({ icon: Icon, n, title, desc }) => (
          <div
            key={n}
            className="surface rounded-xl p-6 border border-border relative"
          >
            <span className="absolute top-4 right-4 text-5xl font-extrabold text-foreground/5 leading-none">
              {n}
            </span>
            <div className="inline-flex p-2.5 rounded-md bg-primary/10 mb-4">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-base mb-1.5">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
