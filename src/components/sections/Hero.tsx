import { useState } from "react";
import { studio } from "../../data/studio";
import { hero } from "../../data/editorial";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { Button } from "../ui/Button";

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col lg:col-span-7">
          <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.3em] text-champagne">
            <span aria-hidden="true">— </span>
            {hero.kicker}
          </p>

          <h1
            id="hero-title"
            className="max-w-[13ch] text-balance font-display text-5xl font-normal leading-[0.95] tracking-tight text-ivory sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {hero.title.before}{" "}
            <em className="font-light italic text-champagne">{hero.title.emphasis}</em>{" "}
            {hero.title.after}
          </h1>

          <p className="mb-10 mt-8 max-w-xl font-sans text-base font-light leading-relaxed text-muted md:text-lg">
            {hero.description}
          </p>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
            <Button href={buildWhatsAppUrl(hero.primaryCta.message)} external>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="link">
              {hero.secondaryCta.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-luxury group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </Button>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-5 lg:pt-6">
          <figure className="hero-portrait relative aspect-[4/5] overflow-hidden border border-white/5 bg-surface">
            {!imageFailed && (
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="h-full w-full object-cover"
                width={928}
                height={1152}
                onError={() => setImageFailed(true)}
                loading="eager"
                decoding="async"
              />
            )}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-16 sm:px-8 sm:pb-8">
              <span className="block font-sans text-[10px] uppercase tracking-[0.3em] text-ivory">
                {studio.specialist.toUpperCase()}
              </span>
              <span className="mt-1.5 block max-w-[14rem] font-display text-sm italic leading-snug text-ivory/80">
                {hero.plate.role}
              </span>
            </figcaption>
          </figure>
          <p className="mt-5 text-right font-sans text-[9px] uppercase tracking-[0.25em] text-muted">
            {hero.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
