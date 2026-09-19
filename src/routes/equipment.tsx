import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import {
  rigHero,
  rigWide,
  rigDetail,
  rigPanel,
  rigFieldMono,
  rigHillside,
  rigLowAngle,
} from "@/lib/site-images";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [
      { title: "Rig Fleet & Equipment — Pacific Forage SARL" },
      {
        name: "description",
        content:
          "Pacific Forage SARL's owned fleet: truck-mounted rotary and DTH drilling rigs, high-pressure compressors, support vehicles and downhole tooling.",
      },
      { property: "og:title", content: "Rig Fleet & Equipment — Pacific Forage SARL" },
      {
        property: "og:description",
        content:
          "Truck-mounted rotary and DTH rigs, onboard compressors and full downhole tooling — all owned and maintained in house.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Equipment,
});

const fleet = [
  {
    name: "Truck-mounted rotary rig — primary unit",
    image: rigHero,
    alt: "Pacific Forage primary truck-mounted rotary drilling rig with mast raised",
    specs: [
      ["Configuration", "6×4 carrier, hydraulic mast, onboard rod rack"],
      ["Method", "DTH hammer and mud rotary"],
      ["Depth capacity", "Beyond 150 m"],
      ["Diameters", "4½″ – 12¼″"],
    ],
  },
  {
    name: "Truck-mounted rotary rig — second unit",
    image: rigWide,
    alt: "Second Pacific Forage truck-mounted drilling rig at work in open ground",
    specs: [
      ["Configuration", "Self-contained carrier with integral compressor"],
      ["Method", "Air rotary and DTH"],
      ["Mobilisation", "Road-legal, no low-loader required"],
      ["Crew", "Driller, assistant driller and two rig hands"],
    ],
  },
  {
    name: "Compact access rig",
    image: rigHillside,
    alt: "Pacific Forage rig positioned on a constrained hillside plot",
    specs: [
      ["Access", "Hillside, compound and constrained urban plots"],
      ["Setup", "Levelling jacks and short-mast configuration"],
      ["Method", "DTH hammer"],
      ["Typical use", "Residential and institutional boreholes"],
    ],
  },
];

const support = [
  {
    title: "High-pressure compressors",
    body: "Onboard and skid-mounted compressors sized for DTH hammer work and for airlift development in deep holes.",
    image: rigPanel,
    alt: "Rig instrumentation, compressor lines and drill pipe on the deck",
  },
  {
    title: "Downhole tooling",
    body: "Hammers, bits, stabilisers, drill collars and fishing tools carried to site so a stuck string never becomes a lost hole.",
    image: rigDetail,
    alt: "Hydraulic hoses, rotary head and mast rails in close detail",
  },
  {
    title: "Support fleet",
    body: "Water bowser, materials truck and crew transport keep the rig drilling instead of waiting on deliveries.",
    image: rigFieldMono,
    alt: "Pacific Forage rig staged in open field with support equipment",
  },
];

function Equipment() {
  return (
    <>
      <PageHero
        eyebrow="Fleet"
        title="Owned iron, maintained in house"
        intro="Pacific Forage does not hire rigs. Every unit on this page is company plant, serviced by our own workshop and operated by our own drillers."
        image={rigLowAngle}
        imageAlt="Low-angle view of a Pacific Forage drilling rig mast against the sky"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-20 px-5 lg:px-8">
          {fleet.map((rig, i) => (
            <div key={rig.name} className="grid gap-10 lg:grid-cols-5 lg:gap-14">
              <img
                src={rig.image}
                alt={rig.alt}
                className={`h-96 w-full object-cover lg:col-span-3 lg:h-[32rem] ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              />
              <div className="lg:col-span-2 lg:self-center">
                <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">
                  Unit {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight text-foreground">
                  {rig.name}
                </h2>
                <dl className="mt-8 divide-y divide-border border-y border-border">
                  {rig.specs.map(([k, v]) => (
                    <div key={k} className="flex gap-6 py-4">
                      <dt className="w-40 shrink-0 font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {k}
                      </dt>
                      <dd className="font-sans text-sm text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">Support plant</p>
          <h2 className="mt-4 font-display text-4xl font-semibold uppercase text-foreground lg:text-5xl">
            What travels with the rig
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {support.map((s) => (
              <article key={s.title} className="bg-card">
                <img src={s.image} alt={s.alt} className="h-64 w-full object-cover" />
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center lg:flex-row lg:px-8 lg:text-left">
          <h2 className="font-display text-3xl font-semibold uppercase text-steel-foreground lg:text-4xl">
            Check rig availability for your dates
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground hover:bg-primary/90"
          >
            Contact the drilling desk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
