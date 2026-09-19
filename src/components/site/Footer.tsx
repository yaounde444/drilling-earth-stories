import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { logoMark } from "@/lib/site-images";

export function Footer() {
  return (
    <footer className="bg-steel text-steel-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="" className="h-10 w-10 object-contain" />
            <span className="font-display text-2xl font-semibold uppercase tracking-[0.18em]">
              Pacific Forage SARL
            </span>
          </div>
          <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-steel-foreground/65">
            Rotary and down-the-hole water well drilling, borehole development and pumping
            systems. Own rigs, own crews, own compressors — mobilised across Cameroon and
            the Central African sub-region.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.25em] text-primary">Company</h4>
          <ul className="mt-5 space-y-3 font-sans text-sm text-steel-foreground/70">
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/equipment" className="hover:text-primary">Equipment</Link></li>
            <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link to="/about" className="hover:text-primary">About us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Request a quotation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.25em] text-primary">Contact</h4>
          <ul className="mt-5 space-y-4 font-sans text-sm text-steel-foreground/70">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+237682141471" className="hover:text-primary">+237 682 14 14 71</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:info@pacificforage.com" className="hover:text-primary">
                info@pacificforage.com
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Yaoundé, Cameroon</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 font-sans text-xs uppercase tracking-[0.2em] text-steel-foreground/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} Pacific Forage SARL</span>
          <span>Water is life. We reach it.</span>
        </div>
      </div>
    </footer>
  );
}
