import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-spread.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Beautifully styled catering spread with canapés, salads and grilled mains on a wooden table"
        width={1600}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/30" />
      <div className="absolute top-1/3 right-8 hidden lg:block animate-float">
        <div className="h-32 w-32 rounded-full bg-secondary/80 blur-2xl" />
      </div>

      <div className="container relative z-10 pb-20 pt-32 md:pb-32">
        <div className="max-w-3xl text-background animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Suswaad Caterers · 45+ Years of Craft
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight">
            Unforgettable
            <br />
            <em className="italic font-light text-secondary">flavours,</em> served
            <br />
            with soul.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-background/85 leading-relaxed">
            From intimate dinners to grand weddings — seasonal menus, ethically sourced ingredients,
            and a team that treats every plate like the last word in hospitality.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Book Your Event</a>
            </Button>
            <Button variant="cream" size="xl" asChild>
              <a href="#menu">Explore the Menu</a>
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-12 gap-y-4 text-background/90">
            {[
              { n: "250+", l: "Events catered" },
              { n: "45+yrs", l: "Of craft" },
              { n: "4.8★", l: "Client rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-secondary">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-background/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
