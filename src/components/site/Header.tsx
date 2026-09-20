import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { logoWordmarkLight } from "@/lib/site-images";
import { useLanguage } from "@/lib/language";

const nav = [
  { to: "/", fr: "Accueil", en: "Home" },
  { to: "/services", fr: "Services", en: "Services" },
  { to: "/equipment", fr: "Équipements", en: "Equipment" },
  { to: "/projects", fr: "Réalisations", en: "Projects" },
  { to: "/about", fr: "À propos", en: "About" },
  { to: "/contact", fr: "Contact", en: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, choose } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-steel/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" aria-label="Pacific Forage SARL — accueil" className="flex items-center" onClick={() => setOpen(false)}>
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
               {item[language]}
            </Link>
          ))}
           <div className="flex items-center border border-white/20 p-0.5" aria-label="Langue">
             {(["fr", "en"] as const).map((code) => (
               <button key={code} type="button" onClick={() => setLanguage(code)} aria-pressed={language === code} className={`px-2 py-1 font-sans text-xs font-semibold uppercase ${language === code ? "bg-primary text-primary-foreground" : "text-steel-foreground/70"}`}>{code}</button>
             ))}
           </div>
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
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
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
               {item[language]}
            </Link>
          ))}
           <div className="mt-5 flex w-fit items-center border border-white/20 p-0.5" aria-label="Langue">
             {(["fr", "en"] as const).map((code) => (
               <button key={code} type="button" onClick={() => setLanguage(code)} aria-pressed={language === code} className={`px-4 py-2 font-sans text-xs font-semibold uppercase ${language === code ? "bg-primary text-primary-foreground" : "text-steel-foreground/70"}`}>{code}</button>
             ))}
           </div>
          <a
            href="tel:+237682141471"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-primary px-5 py-3 font-display text-sm uppercase tracking-[0.12em] text-primary-foreground"
          >
             <Phone className="h-4 w-4" /> {choose({ fr: "Appeler le service forage", en: "Call the drilling desk" })}
          </a>
        </nav>
      )}
    </header>
  );
}
