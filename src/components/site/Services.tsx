import { Heart, Building2, Sparkles, Utensils } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    desc: "Bespoke menus that turn your big day into a feast guests will talk about for years.",
  },
  {
    icon: Building2,
    title: "Corporate",
    desc: "Polished breakfasts, working lunches and gala dinners — punctual, professional, delicious.",
  },
  {
    icon: Sparkles,
    title: "Private Events",
    desc: "Birthdays, anniversaries, intimate dinners. We handle every detail so you host effortlessly.",
  },
  {
    icon: Utensils,
    title: "Drop-Off & Grazing",
    desc: "Stunning grazing tables and ready-to-serve platters delivered with style.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">What we do</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-medium tracking-tight">
            Catering for every <em className="italic text-primary">occasion</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 shadow-soft"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-warm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <s.icon className="h-7 w-7 text-primary-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
