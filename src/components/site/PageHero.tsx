export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-steel">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-steel via-steel/85 to-steel/30" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-steel-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-steel-foreground/70 lg:text-lg">
          {intro}
        </p>
      </div>
    </section>
  );
}
