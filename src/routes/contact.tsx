import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { rigUrban } from "@/lib/site-images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Quotations — Pacific Forage SARL" },
      {
        name: "description",
        content:
          "Contact Pacific Forage SARL in Yaoundé, Cameroon for borehole drilling quotations, site visits, pump installation and borehole rehabilitation.",
      },
      { property: "og:title", content: "Contact Pacific Forage SARL" },
      {
        property: "og:description",
        content:
          "Request a borehole drilling quotation or a site visit from Pacific Forage SARL, Yaoundé, Cameroon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where you need water"
        intro="Send the location, the intended use and the daily demand. We reply with a survey plan, a drilling programme and a price."
        image={rigUrban}
        imageAlt="Pacific Forage drilling rig mobilised on a residential site"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl font-semibold uppercase text-foreground">
              Drilling desk
            </h2>
            <ul className="mt-8 space-y-7">
              {[
                { icon: Phone, label: "Telephone", value: "+237 682 14 14 71", href: "tel:+237682141471" },
                { icon: Mail, label: "Email", value: "info@pacificforage.com", href: "mailto:info@pacificforage.com" },
                { icon: MapPin, label: "Base", value: "Yaoundé, Cameroon" },
                { icon: Clock, label: "Site hours", value: "Monday – Saturday, 07:00 – 18:00" },
              ].map((item) => (
                <li key={item.label} className="flex gap-4">
                  <item.icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-display text-lg uppercase tracking-wide text-foreground hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-display text-lg uppercase tracking-wide text-foreground">
                        {item.value}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-l-2 border-primary bg-muted p-6">
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                For an accurate quotation, include the plot location (or GPS coordinates),
                what the water is for, and roughly how many cubic metres per day you need.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="border border-border bg-card p-10">
                <h3 className="font-display text-2xl font-semibold uppercase text-foreground">
                  Enquiry ready to send
                </h3>
                <p className="mt-4 font-sans leading-relaxed text-muted-foreground">
                  Thank you. Your details have been captured on this page. To reach the
                  drilling desk immediately, call{" "}
                  <a href="tel:+237682141471" className="text-primary underline">
                    +237 682 14 14 71
                  </a>{" "}
                  or email{" "}
                  <a href="mailto:info@pacificforage.com" className="text-primary underline">
                    info@pacificforage.com
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 border border-border px-6 py-3 font-display text-sm uppercase tracking-[0.14em] text-foreground hover:border-primary hover:text-primary"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Telephone" name="phone" type="tel" required />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" />
                  <Field label="Site location / town" name="location" required />
                </div>
                <div>
                  <label className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                    Service required
                  </label>
                  <select
                    name="service"
                    className="mt-2 w-full border border-input bg-card px-4 py-3 font-sans text-sm text-foreground outline-none focus:border-primary"
                  >
                    {[
                      "Borehole drilling",
                      "Hydrogeological survey",
                      "Pump installation",
                      "Pump testing",
                      "Borehole development",
                      "Borehole rehabilitation",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                    Project details
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Intended use, daily demand, access conditions, timing…"
                    className="mt-2 w-full border border-input bg-card px-4 py-3 font-sans text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                >
                  Request quotation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full border border-input bg-card px-4 py-3 font-sans text-sm text-foreground outline-none focus:border-primary"
      />
    </div>
  );
}
