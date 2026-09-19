import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { rigMono, rigCrew, rigFieldMono, rigHero } from "@/lib/site-images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pacific Forage SARL — Cameroonian Drilling Contractor" },
      {
        name: "description",
        content:
          "Pacific Forage SARL is a Cameroonian water well drilling contractor operating its own rigs, crews and compressors, with safety and completion standards held in house.",
      },
      { property: "og:title", content: "About Pacific Forage SARL" },
      {
        property: "og:description",
        content:
          "A Cameroonian drilling contractor with owned plant, trained crews and an in-house standard for completing every hole.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="The company"
        title="A drilling contractor built around finishing the hole"
        intro="Pacific Forage SARL was founded to do one thing properly: put reliable, tested, well-constructed boreholes into ground that other contractors walk away from."
        image={rigMono}
        imageAlt="Pacific Forage drilling rig and driller working in heavy ground"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-4xl font-semibold uppercase leading-tight text-foreground lg:text-5xl">
              Who we are
            </h2>
            <div className="mt-7 space-y-5 font-sans leading-relaxed text-muted-foreground">
              <p>
                Pacific Forage SARL is a Cameroonian water well drilling company. We survey,
                drill, develop, test and equip boreholes for households, estates, farms,
                institutions and communities — from the first resistivity traverse through to
                the day the tap runs.
              </p>
              <p>
                The company was built on owned plant rather than brokered subcontracts. Our
                rigs, compressors and support vehicles carry our name because the crew
                operating them answers for the result. When ground is hard, when access is
                bad, when the first strike is disappointing, there is nobody else to hand the
                problem to — so we solve it.
              </p>
              <p>
                That has produced a simple reputation in the field: Pacific Forage finishes
                what it spuds.
              </p>
            </div>
          </div>
          <img
            src={rigHero}
            alt="Pacific Forage rig with mast raised, crew working at the borehole"
            className="h-[34rem] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-steel py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">Principles</p>
          <h2 className="mt-4 font-display text-4xl font-semibold uppercase text-steel-foreground lg:text-5xl">
            How we work
          </h2>
          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
            {[
              {
                t: "Evidence before iron",
                b: "No rig is mobilised on guesswork. Survey data fixes the point, the depth expectation and the programme.",
              },
              {
                t: "Own the whole chain",
                b: "Survey, drilling, development, testing and pumping stay under one contract and one supervisor.",
              },
              {
                t: "Complete to standard",
                b: "Sanitary seal, clean development, documented test and as-built record on every borehole, private or public.",
              },
              {
                t: "Safety on the rig floor",
                b: "PPE, exclusion zones and a qualified driller supervising every shift. No shortcut is worth a hand.",
              },
              {
                t: "Maintain relentlessly",
                b: "In-house workshop and a spares inventory, because a rig broken down in the bush helps nobody.",
              },
              {
                t: "Leave the site clean",
                b: "Spoil cleared, headworks finished, ground reinstated. The handover photo should look like the brochure.",
              },
            ].map((v) => (
              <div key={v.t} className="bg-steel p-8">
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-primary">
                  {v.t}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-steel-foreground/70">
                  {v.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <img
            src={rigCrew}
            alt="Pacific Forage crew in blue protective clothing working alongside the rig"
            className="h-[30rem] w-full object-cover"
          />
          <div className="lg:self-center">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">The crew</p>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight text-foreground lg:text-5xl">
              Drillers, not day labour
            </h2>
            <p className="mt-6 font-sans leading-relaxed text-muted-foreground">
              Each rig runs with a qualified driller, an assistant driller and rig hands who
              have been trained on our own plant. The same people who spud the hole develop
              it, test it and equip it — so nothing about the borehole's history gets lost
              between crews.
            </p>
            <p className="mt-4 font-sans leading-relaxed text-muted-foreground">
              Supervision is on site, not on the phone. Every shift closes with a strata log,
              a depth record and a photograph of the work completed.
            </p>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-steel">
        <img
          src={rigFieldMono}
          alt="Pacific Forage drilling rig staged in an open field"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-steel/75" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center lg:py-32">
          <h2 className="font-display text-4xl font-semibold uppercase text-steel-foreground lg:text-5xl">
            Work with the crew that finishes
          </h2>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 bg-primary px-9 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground hover:bg-primary/90"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
