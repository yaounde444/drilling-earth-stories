import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { gallery, rigHillside, waterStrike, rigUrban, rigRedSoil, rigCrew } from "@/lib/site-images";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Field Record — Pacific Forage SARL" },
      {
        name: "description",
        content:
          "Selected Pacific Forage SARL borehole projects across Cameroon: residential, institutional, agricultural and community water supply.",
      },
      { property: "og:title", content: "Projects & Field Record — Pacific Forage SARL" },
      {
        property: "og:description",
        content:
          "Boreholes drilled, developed and equipped by Pacific Forage SARL across residential, institutional and community sites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    sector: "Residential development",
    title: "Hillside estate supply borehole",
    image: rigHillside,
    alt: "Pacific Forage SARL rig drilling on a hillside beside a residential block",
    body: "Rig positioned on a graded terrace beside an occupied apartment block. Drilled through deep laterite into fractured basement and equipped with a submersible feeding an elevated tank.",
    facts: [["Method", "DTH hammer"], ["Access", "Constrained terrace"], ["Outcome", "Estate supply in service"]],
  },
  {
    sector: "Community water",
    title: "High-yield community borehole",
    image: waterStrike,
    alt: "Strong water strike at a Pacific Forage community borehole",
    body: "A strong strike developed by airlift until the discharge ran clean, then pump-tested at constant rate before handover to the community committee.",
    facts: [["Method", "Air rotary"], ["Stage", "Airlift development"], ["Outcome", "Sustained community yield"]],
  },
  {
    sector: "Urban compound",
    title: "Residential compound borehole",
    image: rigUrban,
    alt: "Pacific Forage drilling rig working inside a residential compound",
    body: "Rig walked into a tight compound between finished houses. Drilled, cased and equipped without damage to surrounding works, with the site reinstated on completion.",
    facts: [["Access", "Tight urban plot"], ["Method", "DTH hammer"], ["Outcome", "Private supply commissioned"]],
  },
  {
    sector: "Agriculture",
    title: "Irrigation borehole, lateritic terrain",
    image: rigRedSoil,
    alt: "Pacific Forage rotary rig drilling through lateritic red soil for irrigation supply",
    body: "Thick lateritic overburden cased off before hammering into the water-bearing fracture zone. Pump sized from the constant-rate test for irrigation demand.",
    facts: [["Formation", "Laterite over basement"], ["Test", "Step + constant rate"], ["Outcome", "Irrigation supply"]],
  },
];

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Track record"
        title="Sites we have drilled, developed and equipped"
        intro="Residential estates, private compounds, farms, schools and community supplies. Different ground, different access, the same standard of completion."
        image={rigCrew}
        imageAlt="Pacific Forage crew in protective clothing working at the rig"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-16 px-5 lg:px-8">
          {projects.map((p, i) => (
            <article key={p.title} className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <img
                src={p.image}
                alt={p.alt}
                className={`h-96 w-full object-cover lg:h-[30rem] ${i % 2 === 1 ? "lg:order-2" : ""}`}
              />
              <div className="lg:self-center">
                <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">
                  {p.sector}
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight text-foreground lg:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-5 font-sans leading-relaxed text-muted-foreground">{p.body}</p>
                <dl className="mt-8 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
                  {p.facts.map(([k, v]) => (
                    <div key={k} className="bg-card p-5">
                      <dt className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                        {k}
                      </dt>
                      <dd className="mt-2 font-display text-sm uppercase tracking-wide text-foreground">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">Field archive</p>
          <h2 className="mt-4 font-display text-4xl font-semibold uppercase text-foreground lg:text-5xl">
            Photographs from our sites
          </h2>
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {gallery.map((img) => (
              <figure key={img.alt} className="mb-4 break-inside-avoid overflow-hidden bg-steel">
                <img src={img.src} alt={img.alt} className="w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center lg:flex-row lg:px-8 lg:text-left">
          <h2 className="font-display text-3xl font-semibold uppercase text-steel-foreground lg:text-4xl">
            Your site could be the next one
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground hover:bg-primary/90"
          >
            Request a site visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
