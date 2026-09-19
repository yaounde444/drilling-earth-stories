import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Gauge, Layers, ShieldCheck, Truck, Waves } from "lucide-react";
import {
  rigHero,
  rigWide,
  rigHillside,
  rigCrew,
  rigDetail,
  rigPanel,
  waterStrike,
  waterStrike2,
  rigMono,
} from "@/lib/site-images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pacific Forage SARL — Water Well Drilling & Borehole Contractors" },
      {
        name: "description",
        content:
          "Pacific Forage SARL drills, develops and equips water boreholes across Cameroon. Own truck-mounted rotary and DTH rigs, in-house crews, pump installation and yield testing.",
      },
      { property: "og:title", content: "Pacific Forage SARL — Water Well Drilling Contractors" },
      {
        property: "og:description",
        content:
          "Truck-mounted rotary and DTH borehole drilling, development, pump installation and testing across Cameroon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const capabilities = [
  {
    icon: Layers,
    title: "Rotary & DTH Drilling",
    body: "Air-hammer and mud rotary boreholes from 4½″ to 12¼″, to depths beyond 150 m in basement, laterite and sedimentary formations.",
  },
  {
    icon: Waves,
    title: "Borehole Development",
    body: "Airlift and surge development until the column runs clean and the aquifer delivers its designed yield.",
  },
  {
    icon: Gauge,
    title: "Pump Testing",
    body: "Step-drawdown and constant-rate tests with recovery monitoring, sized to the aquifer rather than to the pump catalogue.",
  },
  {
    icon: Droplets,
    title: "Pump Installation",
    body: "Submersible and solar pumping systems, rising mains, control gear, tanks and reticulation — commissioned and handed over.",
  },
  {
    icon: ShieldCheck,
    title: "Hydrogeological Survey",
    body: "Electrical resistivity and VES siting before a single metre is drilled, so the rig lands on water, not on hope.",
  },
  {
    icon: Truck,
    title: "Rapid Mobilisation",
    body: "Self-contained rigs with onboard compressors, support truck, water bowser and crew — no third-party hire, no waiting.",
  },
];

const stats = [
  { value: "1 200+", label: "Boreholes completed" },
  { value: "150 m+", label: "Typical drilling depth" },
  { value: "10", label: "Regions covered" },
  { value: "24 h", label: "Mobilisation window" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-steel">
        <img
          src={rigHero}
          alt="Pacific Forage truck-mounted drilling rig with mast raised on a Cameroon work site"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-steel via-steel/90 to-steel/40" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-40">
          <p className="font-sans text-xs uppercase tracking-[0.45em] text-primary">
            Pacific Forage SARL · Cameroon
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold uppercase leading-[0.98] tracking-tight text-steel-foreground sm:text-6xl lg:text-7xl">
            We drill the boreholes
            <span className="block text-primary">that other contractors abandon</span>
          </h1>
          <p className="mt-7 max-w-2xl font-sans text-lg leading-relaxed text-steel-foreground/75">
            Heavy truck-mounted rotary and down-the-hole rigs, in-house crews and a
            compressor fleet that keeps working when the formation gets hard. From siting
            survey to commissioned pump, one contractor is accountable for the water.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request a quotation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/equipment"
              className="inline-flex items-center gap-2 border border-white/25 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-steel-foreground transition-colors hover:border-primary hover:text-primary"
            >
              See the rig fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-primary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/20 px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-8 text-center">
              <div className="font-display text-3xl font-semibold text-primary-foreground lg:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground/80">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capability grid */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">Capability</p>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-foreground lg:text-5xl">
              One contractor, the full water chain
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-muted-foreground lg:text-lg">
              Survey, drilling, casing and screening, development, testing, pumping and
              reticulation. Nothing is sub-let to a broker, so nothing gets lost between
              trades.
            </p>
          </div>

          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="group bg-card p-8 transition-colors hover:bg-muted">
                <c.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split feature */}
      <section className="bg-steel">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
          <img
            src={rigWide}
            alt="Pacific Forage rig drilling a production borehole under an open sky"
            className="h-80 w-full object-cover lg:h-full"
          />
          <div className="px-5 py-20 lg:px-16 lg:py-28">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">
              Owned, not hired
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight text-steel-foreground lg:text-5xl">
              Our iron is on our own plates
            </h2>
            <p className="mt-6 font-sans leading-relaxed text-steel-foreground/70">
              Every rig, compressor, support truck and pipe rack on a Pacific Forage site
              belongs to Pacific Forage. That single fact decides the programme: we
              mobilise on our own schedule, we maintain to our own standard, and when a
              hole gets difficult we stay until it is finished.
            </p>
            <ul className="mt-8 space-y-4 font-sans text-sm text-steel-foreground/75">
              {[
                "Truck-mounted rotary rigs with onboard mast and rod handling",
                "High-pressure compressors for DTH hammer work in hard basement",
                "Full casing, screening and gravel-pack inventory carried to site",
                "Crews in PPE, supervised by a qualified driller on every shift",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/equipment"
              className="mt-10 inline-flex items-center gap-2 border border-white/25 px-7 py-4 font-display text-sm uppercase tracking-[0.14em] text-steel-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Fleet & specifications <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">Method</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold uppercase leading-tight text-foreground lg:text-5xl">
            From survey to standing water
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Site & survey",
                b: "Geological walkover and electrical resistivity profiling to locate the fracture zone and fix the drilling point.",
              },
              {
                n: "02",
                t: "Drill & case",
                b: "Rotary or DTH advance with continuous cutting logs, followed by uPVC casing, screening and gravel pack.",
              },
              {
                n: "03",
                t: "Develop & test",
                b: "Airlift development to clean water, then step and constant-rate pumping tests with recovery readings.",
              },
              {
                n: "04",
                t: "Equip & hand over",
                b: "Pump sizing, installation, headworks, tank and control gear — commissioned with a full borehole report.",
              },
            ].map((step) => (
              <div key={step.n} className="border-t-2 border-primary pt-6">
                <span className="font-display text-5xl font-semibold text-muted">{step.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold uppercase tracking-wide text-foreground">
                  {step.t}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  {step.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field gallery strip */}
      <section className="bg-muted py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">
                From the field
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold uppercase text-foreground lg:text-5xl">
                Real sites. Real water.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.14em] text-primary hover:underline"
            >
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: waterStrike, alt: "Water strike during borehole development" },
              { src: rigHillside, alt: "Pacific Forage SARL rig working a hillside plot" },
              { src: rigPanel, alt: "Rig control panel and drill string during operation" },
              { src: rigCrew, alt: "Pacific Forage crew in PPE at the rig floor" },
              { src: waterStrike2, alt: "Borehole blowing clean after airlift development" },
              { src: rigDetail, alt: "Hydraulic hoses and rotary head detail on the mast" },
            ].map((img) => (
              <figure key={img.alt} className="group relative overflow-hidden bg-steel">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-steel">
        <img
          src={rigMono}
          alt="Pacific Forage rig and driller on a muddy work site"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-steel/70" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center lg:py-32">
          <h2 className="font-display text-4xl font-semibold uppercase leading-tight text-steel-foreground lg:text-5xl">
            Tell us where you need water
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-lg text-steel-foreground/70">
            Send the location and the demand. We come back with a survey plan, a drilling
            programme and a fixed price.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-primary px-9 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
