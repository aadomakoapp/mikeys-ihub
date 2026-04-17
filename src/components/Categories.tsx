import { Smartphone, Tablet, Watch, Headphones, Laptop, Cable } from "lucide-react";

const categories = [
  { icon: Smartphone, name: "iPhones", desc: "Latest models, all conditions" },
  { icon: Tablet, name: "iPads", desc: "Pro, Air, Mini & standard" },
  { icon: Watch, name: "iWatches", desc: "Series 3 to Ultra" },
  { icon: Headphones, name: "AirPods & Earbuds", desc: "Pro, Max & 2nd/3rd gen" },
  { icon: Laptop, name: "MacBooks", desc: "Air & Pro — M-series" },
  { icon: Cable, name: "Accessories", desc: "Chargers, cases & more" },
];

export const Categories = () => {
  return (
    <section id="products" className="relative py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-primary mb-3 tracking-wider uppercase">
            What we offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-4">
            Everything Apple. One trusted hub.
          </h2>
          <p className="text-muted-foreground text-lg">
            We deal in genuine, quality-checked Apple products and accessories — at prices that work for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ icon: Icon, name, desc }, i) => (
            <div
              key={name}
              className="group relative card-gradient rounded-2xl p-7 border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-card-elevated overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-5 group-hover:bg-gradient-red group-hover:border-transparent transition-all duration-500">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-1.5">{name}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
