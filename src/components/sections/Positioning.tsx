import { positioning } from "../../data/editorial";

export function Positioning() {
  return (
    <section
      id="filosofia"
      aria-labelledby="positioning-title"
      className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-3">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-champagne">
            <span aria-hidden="true">— </span>
            {positioning.kicker}
          </p>
          <p className="mt-3 font-display text-lg italic text-muted">
            {positioning.label}
          </p>
        </div>

        <h2
          id="positioning-title"
          className="max-w-4xl text-balance font-display text-3xl font-light leading-tight text-ivory md:text-5xl lg:col-span-9"
        >
          {positioning.statement.before}{" "}
          <em className="italic text-champagne">{positioning.statement.emphasis}</em>{" "}
          {positioning.statement.after}
        </h2>
      </div>

      <div className="my-16 border-t border-white/[0.08]" aria-hidden="true" />

      <ol className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10 lg:pl-[25%]">
        {positioning.pillars.map((pillar) => (
          <li key={pillar.number} className="flex flex-col">
            <span
              aria-hidden="true"
              className="mb-4 font-display text-2xl text-champagne/60"
            >
              {pillar.number}
            </span>
            <h3 className="font-display text-2xl font-normal text-ivory">
              {pillar.title}
            </h3>
            <p className="mt-4 font-sans text-sm font-light leading-relaxed text-muted">
              {pillar.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
