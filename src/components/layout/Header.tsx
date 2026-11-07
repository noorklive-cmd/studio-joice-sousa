import { brand, navigation, scheduleCta } from "../../data/editorial";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { Button } from "../ui/Button";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-obsidian/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 md:px-10">
        <a href="#top" className="flex flex-col gap-1" aria-label={`${brand.wordmark} — início`}>
          <span className="font-display text-base font-normal leading-none tracking-wider text-ivory">
            {brand.wordmark}
          </span>
          <span className="font-sans text-[10px] uppercase leading-none tracking-[0.25em] text-muted">
            {brand.descriptor}
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navigation.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-[0.15em] text-muted transition-colors duration-300 hover:text-ivory"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          href={buildWhatsAppUrl(scheduleCta.message)}
          variant="outline"
          external
          className="shrink-0"
        >
          <span className="sm:hidden">{scheduleCta.shortLabel}</span>
          <span className="hidden sm:inline">{scheduleCta.label}</span>
        </Button>
      </div>
    </header>
  );
}
