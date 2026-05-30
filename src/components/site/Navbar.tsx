import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground font-display font-bold">S</span>
          <span className="font-display text-xl font-semibold tracking-tight">Suswaad Caterers</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-foreground/80 hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button variant="hero" size="sm" asChild className="rounded-full">
          <a href="#contact">Get a Quote</a>
        </Button>
      </nav>
    </header>
  );
};
