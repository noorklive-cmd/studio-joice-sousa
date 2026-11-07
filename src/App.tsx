import { studio } from "./data/studio";
import { pricing } from "./data/pricing";
import { buildQuoteMessage, buildWhatsAppUrl } from "./lib/whatsapp";

const previewItems = pricing.application.slice(0, 2);

const whatsappUrl = buildWhatsAppUrl(
  buildQuoteMessage({
    technique: previewItems[0].name,
    objective: "Validar a integração do WhatsApp",
  }),
);

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-obsidian px-6 py-16 text-ivory">
      <div className="flex w-full max-w-xl flex-col items-center gap-10 text-center">
        <header className="flex flex-col items-center gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
            {studio.positioning}
          </p>
          <h1 className="text-balance font-display text-5xl font-medium tracking-wide md:text-6xl">
            STUDIO JOICE SOUSA
          </h1>
          <p className="text-balance font-sans text-base text-champagne md:text-lg">
            {studio.slogan}
          </p>
        </header>

        <section
          aria-labelledby="foundation-check"
          className="flex w-full flex-col gap-6 rounded-luxury-lg border border-borderSubtle bg-surface p-6 text-left shadow-champagne md:p-8"
        >
          <h2
            id="foundation-check"
            className="font-display text-2xl text-ivory"
          >
            Validação da fundação
          </h2>

          <ul className="flex flex-col divide-y divide-borderSubtle">
            {previewItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
              >
                <span className="text-sm text-ivory">{item.name}</span>
                <span className="shrink-0 text-sm font-semibold text-champagne">
                  {item.priceLabel}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-luxury bg-champagne-gradient px-6 py-3 text-sm font-semibold text-obsidian transition-shadow duration-300 ease-luxury hover:shadow-champagne-glow"
          >
            Testar WhatsApp
          </a>
        </section>

        <p className="text-xs text-muted">{studio.address.formatted}</p>
      </div>
    </main>
  );
}
