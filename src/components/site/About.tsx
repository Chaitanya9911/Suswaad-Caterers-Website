import chef from "@/assets/chef-plating.jpg";
import { Leaf, Award, Clock } from "lucide-react";

const values = [
  { icon: Leaf, title: "Locally sourced", desc: "Partnering with farms within 100 miles." },
  { icon: Award, title: "Award-winning team", desc: "Led by chefs with Michelin pedigree." },
  { icon: Clock, title: "On time, every time", desc: "Logistics dialled in to the minute." },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/40">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={chef}
            alt="Chef carefully plating canapés"
            loading="lazy"
            width={1024}
            height={1024}
            className="rounded-3xl shadow-warm w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-background rounded-2xl p-6 shadow-soft max-w-[260px] border border-border">
            <div className="font-display text-4xl text-primary">45<span className="text-secondary">+</span></div>
            <div className="text-sm text-muted-foreground mt-1">Years feeding Nashik's most memorable celebrations.</div>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our story</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            Real food, made with <em className="italic text-primary">care</em> — and a little fire.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Saffron &amp; Sage began in a tiny kitchen with a big idea: that catered food should taste
            as alive as it does in a restaurant. Today our team of chefs, stylists and servers brings that
            same conviction to every event — whether it's six guests or six hundred.
          </p>

          <ul className="mt-10 space-y-5">
            {values.map((v) => (
              <li key={v.title} className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <v.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold">{v.title}</div>
                  <div className="text-muted-foreground text-sm">{v.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
