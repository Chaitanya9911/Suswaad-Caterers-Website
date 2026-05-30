import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import type { FormEvent } from "react";

export const Contact = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thanks — we'll be in touch within 24 hours!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-warm relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, hsl(var(--secondary)) 0%, transparent 40%), radial-gradient(circle at 80% 80%, hsl(var(--primary-glow)) 0%, transparent 40%)"
      }} />

      <div className="container relative grid lg:grid-cols-2 gap-16 items-start">
        <div className="text-primary-foreground">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold opacity-90">Let's plan it</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]">
            Tell us about your <em className="italic">event</em>.
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90 max-w-md leading-relaxed">
            Share a few details and we'll come back with menu ideas, pricing and dates within 24 hours.
          </p>

          <div className="mt-10 space-y-5 text-primary-foreground/95">
            <a href="mailto:suswaadcaterers0504@gmail.com" className="flex items-center gap-3 hover:opacity-80 transition">
              <Mail className="h-5 w-5" /> suswaadcaterers0504@gmail.com
            </a>
            <a href="tel:+917387792832" className="flex items-center gap-3 hover:opacity-80 transition">
              <Phone className="h-5 w-5" /> +91 73877 92832 / 94215 37148
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 shrink-0" /> Kale Nagar, opp. Truevalue, Pipeline Road, Nashik – 422013
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-background rounded-3xl p-8 md:p-10 shadow-warm space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Your name</Label>
              <Input id="name" required placeholder="Jane Doe" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="jane@email.com" className="mt-2" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="event">Event type</Label>
              <Input id="event" placeholder="Wedding, corporate…" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="guests">Guests</Label>
              <Input id="guests" type="number" placeholder="50" className="mt-2" />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Tell us more</Label>
            <Textarea id="message" rows={4} placeholder="Date, location, vision, dietary needs…" className="mt-2" />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full">
            Send Inquiry
          </Button>
        </form>
      </div>
    </section>
  );
};
