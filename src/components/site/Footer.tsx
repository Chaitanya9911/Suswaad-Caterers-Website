import { Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-14">
      <div className="container grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground font-display font-bold">S</span>
            <span className="font-display text-xl font-semibold text-background">Suswaad Caterers</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">Catering crafted with care, served with soul. Nashik & across Maharashtra.</p>
        </div>

        <div className="text-sm">
          <div className="font-semibold text-background mb-3">Visit</div>
          <p>Kale Nagar, opp. Truevalue,<br />Pipeline Road, Nashik – 422013</p>
          <p className="mt-3">+91 73877 92832 / 94215 37148</p>
        </div>

        <div className="md:text-right">
          <div className="font-semibold text-background mb-3 text-sm">Follow along</div>
          <div className="flex md:justify-end gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-10 pt-6 border-t border-background/10 text-xs text-background/60 flex flex-col md:flex-row gap-3 justify-between">
        <span>© {new Date().getFullYear()} Suswaad Caterers. All rights reserved.</span>
        <span>Crafted with warmth in Nashik.</span>
      </div>
    </footer>
  );
};
