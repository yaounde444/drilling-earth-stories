import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { logoWordmarkLight } from "@/lib/site-images";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/equipment", label: "Equipment" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-steel/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" aria-label="Pacific Forage SARL — home" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logoWordmarkLight} alt="Pacific Forage SARL" className="h-12 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="font-sans text-[0.8rem] font-medium uppercase tracking-[0.15em] text-steel-foreground/70 transition-colors hover:text-primary"
              activeProps={{ className: "!text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+237682141471"
            className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            682 14 14 71
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-steel-foreground lg:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-steel px-5 pb-6 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-4 font-display text-base uppercase tracking-[0.15em] text-steel-foreground/80"
              activeProps={{ className: "!text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+237682141471"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-primary px-5 py-3 font-display text-sm uppercase tracking-[0.12em] text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call the drilling desk
          </a>
        </nav>
      )}
    </header>
  );
}
