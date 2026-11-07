import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Positioning } from "./components/sections/Positioning";
import { Booking } from "./components/sections/Booking";
import { Button } from "./components/ui/Button";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import { pricing } from "./data/pricing";
import { services } from "./data/services";
import { studio } from "./data/studio";
import { buildWhatsAppUrl } from "./lib/whatsapp";

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-ivory">
      <a href="#conteudo" className="sr-only fixed left-6 top-6 z-[60] bg-champagne px-5 py-3 text-obsidian focus:not-sr-only focus:fixed">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Positioning />

        <section id="tecnicas" aria-labelledby="techniques-title" className="mx-auto grid max-w-7xl scroll-mt-24 gap-10 px-6 py-24 md:px-10 lg:grid-cols-12 lg:gap-12">
          <header className="lg:col-span-4">
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-champagne">— O repertório</p>
            <h2 id="techniques-title" className="font-display text-4xl font-normal leading-tight md:text-5xl">A técnica a serviço da sua <em>natureza.</em></h2>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted">Explore as possibilidades. A escolha começa por uma avaliação individual, não por uma fórmula.</p>
          </header>
          <div className="border-t border-white/[0.08] lg:col-span-7 lg:col-start-6">
            {services.map((service, index) => (
              <details key={service.id} className="group border-b border-white/[0.08]">
                <summary className="flex cursor-pointer list-none items-baseline gap-4 py-6 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span aria-hidden="true" className="font-display text-lg text-champagne/60">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="flex-1 font-display text-2xl font-normal leading-tight group-open:text-champagne">{service.name}</h3>
                  <span aria-hidden="true" className="text-champagne group-open:rotate-45 motion-safe:transition-transform">+</span>
                </summary>
                <p className="max-w-xl pb-6 pl-9 text-sm font-light leading-relaxed text-muted">{service.description}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="valores" aria-labelledby="pricing-title" className="mx-auto grid max-w-7xl scroll-mt-24 gap-10 px-6 py-24 md:px-10 lg:grid-cols-12 lg:gap-12">
          <header className="lg:col-span-4">
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-champagne">— Transparência</p>
            <h2 id="pricing-title" className="font-display text-4xl font-normal leading-tight md:text-5xl">Valores de aplicação.</h2>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted">{pricing.bookingTerms.hairPricingNote}</p>
          </header>
          <dl className="border-t border-white/[0.08] lg:col-span-7 lg:col-start-6">
            {pricing.application.map((item) => (
              <div key={item.id} className="flex flex-wrap items-baseline justify-between gap-3 border-b border-white/[0.08] py-6">
                <dt className="max-w-sm font-display text-xl">{item.name}</dt>
                <dd className="whitespace-nowrap text-sm text-champagne">{item.priceLabel}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Booking />
      </main>
      <footer id="contato" aria-labelledby="contact-title" className="scroll-mt-24 border-t border-white/[0.08]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-32 pt-16 md:grid-cols-2 md:px-10">
          <div>
            <h2 id="contact-title" className="font-display text-3xl font-normal">{studio.name}</h2>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">{studio.positioning}</p>
            <address className="mt-8 max-w-sm text-sm not-italic leading-relaxed text-muted">{studio.address.formatted}</address>
            <p className="mt-3 text-sm text-muted">{studio.hours.formatted}</p>
          </div>
          <div className="flex flex-col items-start gap-6 md:justify-self-end">
            <Button href={buildWhatsAppUrl()} variant="link" external>{studio.contact.whatsapp.display} ↗</Button>
            <Button href={studio.contact.instagram.url} variant="link" external>{studio.contact.instagram.handle} ↗</Button>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
