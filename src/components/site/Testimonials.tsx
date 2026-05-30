import { Quote } from "lucide-react";

const items = [
  {
    quote: "Saffron & Sage didn't just cater our wedding — they made it. Three months later guests are still talking about the short rib.",
    name: "Amelia & Jordan",
    event: "Vineyard Wedding · 180 guests",
  },
  {
    quote: "Flawless from the first email to the last canapé. Our launch dinner felt like a Michelin pop-up in our office.",
    name: "Priya Shah",
    event: "Tech Launch · Corporate",
  },
  {
    quote: "Beautiful, generous, deeply seasonal food. They turned a backyard into the best restaurant in town for one night.",
    name: "Marcus Chen",
    event: "50th Birthday · Private",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Kind words</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-medium tracking-tight">
            Loved by <em className="italic text-primary">hosts</em> and guests.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="relative p-8 rounded-2xl bg-card border border-border hover:shadow-warm hover:-translate-y-1 transition-all duration-500"
            >
              <Quote className="h-8 w-8 text-secondary mb-4" />
              <blockquote className="font-display text-lg leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.event}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
