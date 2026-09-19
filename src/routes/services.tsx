import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import {
  rigWide,
  rigWide as surveyImg,
  rigPanel,
  waterStrike,
  waterStrike2,
  rigUrban,
  rigRedSoil,
  rigLowAngle,
} from "@/lib/site-images";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Drilling Services — Pacific Forage SARL" },
      {
        name: "description",
        content:
          "Borehole drilling, hydrogeological survey, borehole development, pump testing, pump installation and rehabilitation services from Pacific Forage SARL.",
      },
      { property: "og:title", content: "Drilling Services — Pacific Forage SARL" },
      {
        property: "og:description",
        content:
          "Survey, rotary and DTH drilling, development, pump testing and pump installation, delivered by one accountable contractor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const services = [
  {
    id: "survey",
    title: "Hydrogeological Survey",
    lead: "Water is found before it is drilled.",
    image: surveyImg,
    alt: "Pacific Forage rig positioned after siting survey on a drilling point",
    body: "Geological reconnaissance, electrical resistivity profiling and vertical electrical sounding establish overburden thickness, weathering depth and the fracture geometry beneath the plot. You receive an interpreted section, a recommended drilling point and a realistic depth expectation before any rig is mobilised.",
    points: [
      "Walkover survey and structural lineament assessment",
      "Electrical resistivity profiling and VES interpretation",
      "Recommended drilling point, target depth and expected yield band",
      "Written survey report suitable for donor and municipal approval",
    ],
  },
  {
    id: "drilling",
    title: "Borehole Drilling",
    lead: "Rotary and down-the-hole, to whatever the formation demands.",
    image: rigRedSoil,
    alt: "Pacific Forage rotary rig drilling through lateritic red soil",
    body: "Truck-mounted rotary rigs with high-pressure onboard compressors advance through laterite, weathered regolith and hard crystalline basement. Cuttings are logged continuously so the casing and screen programme is designed against the formation actually encountered, not against an assumption.",
    points: [
      "4½″ to 12¼″ diameters, depths beyond 150 m",
      "DTH hammer in basement, mud rotary in unconsolidated ground",
      "Continuous cuttings log and strata record",
      "uPVC casing, slotted screening and graded gravel pack",
    ],
  },
  {
    id: "development",
    title: "Borehole Development",
    lead: "The hole is not finished until the water runs clear.",
    image: waterStrike,
    alt: "Water strike and airlift development at a Pacific Forage borehole",
    body: "Airlifting and surging remove drilling fines from the gravel pack and the aquifer face. Development continues until turbidity stabilises and the borehole delivers the yield the formation is actually capable of — often several times the first blow-out reading.",
    points: [
      "Airlift development with staged surging",
      "Turbidity and yield monitoring through the cycle",
      "Sand-free acceptance criteria before testing",
      "Disinfection and sanitary sealing of the annulus",
    ],
  },
  {
    id: "pump-testing",
    title: "Pump Testing",
    lead: "Yield figures you can size equipment against.",
    image: rigPanel,
    alt: "Control panel and instrumentation during borehole pumping operations",
    body: "Step-drawdown tests establish well efficiency and the safe abstraction step; constant-rate tests confirm sustainable yield over duration; recovery monitoring reveals aquifer transmissivity. The test report, not the driller's optimism, determines the pump.",
    points: [
      "Step-drawdown testing across four or more steps",
      "Constant-rate test with timed drawdown readings",
      "Recovery monitoring to static water level",
      "Transmissivity estimate and recommended abstraction rate",
    ],
  },
  {
    id: "pump-installation",
    title: "Pump Installation",
    lead: "Commissioned systems, not delivered boxes.",
    image: waterStrike2,
    alt: "Borehole discharging clean water during commissioning",
    body: "Submersible and solar pumping systems are sized to the tested yield and the real head, then installed with rising main, cable, control gear, headworks, storage and distribution. The site is handed over running, with the operator shown how to run it.",
    points: [
      "Electric submersible and solar-array pumping systems",
      "Rising main, cabling, control panel and protection gear",
      "Elevated tanks, ground tanks and distribution reticulation",
      "Commissioning, operator briefing and as-built documentation",
    ],
  },
  {
    id: "rehabilitation",
    title: "Borehole Rehabilitation",
    lead: "Bringing failed boreholes back into service.",
    image: rigUrban,
    alt: "Pacific Forage rig mobilised to a residential compound",
    body: "Many dry taps sit above perfectly good aquifers. Camera inspection, re-development, screen cleaning, deepening or pump replacement frequently restores full service for a fraction of the cost of a new hole.",
    points: [
      "Downhole inspection and failure diagnosis",
      "Re-development, de-silting and screen cleaning",
      "Deepening and re-casing where the aquifer allows",
      "Pump replacement and control-gear upgrade",
    ],
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything between the survey peg and the running tap"
        intro="Six disciplines, one contractor, one programme. Each stage feeds the next, so the pump that finally goes down the hole is sized against measured data."
        image={rigLowAngle}
        imageAlt="Low-angle view of a Pacific Forage truck-mounted drilling rig"
      />

      <nav className="border-b border-border bg-muted">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-5 lg:px-8">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="bg-background">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-24 ${i % 2 === 1 ? "bg-muted" : "bg-background"}`}
          >
            <div
              className={`mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28`}
            >
              <img
                src={s.image}
                alt={s.alt}
                className={`h-80 w-full object-cover lg:h-[28rem] ${i % 2 === 1 ? "lg:order-2" : ""}`}
              />
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight text-foreground lg:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-3 font-display text-lg uppercase tracking-wide text-primary">
                  {s.lead}
                </p>
                <p className="mt-5 font-sans leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-7 space-y-3 font-sans text-sm text-foreground">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-steel py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center lg:flex-row lg:px-8 lg:text-left">
          <div>
            <h2 className="font-display text-3xl font-semibold uppercase text-steel-foreground lg:text-4xl">
              Need a programme priced?
            </h2>
            <p className="mt-3 font-sans text-steel-foreground/70">
              Send the location, the intended use and the daily demand.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground hover:bg-primary/90"
          >
            Request a quotation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <img src={rigWide} alt="" className="hidden" aria-hidden />
    </>
  );
}
