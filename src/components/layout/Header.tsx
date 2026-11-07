import { useRef, useState } from "react";
import { brand, navigation, scheduleCta } from "../../data/editorial";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { Button } from "../ui/Button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-obsidian/85 backdrop-blur-md"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          closeMenu();
          menuButton.current?.focus();
        }
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-5 sm:px-6 md:px-10">
        <a href="#top" onClick={closeMenu} className="flex shrink-0 flex-col gap-2" aria-label={`${brand.wordmark} — início`}>
          <span className="font-display text-base font-normal leading-none tracking-wider text-ivory">
            {brand.wordmark}
          </span>
          <span className="font-sans text-[9px] uppercase leading-none tracking-[0.25em] text-muted sm:text-[10px]">
            {brand.descriptor}
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="py-3 text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-ivory">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Button href={buildWhatsAppUrl(scheduleCta.message)} variant="outline" external className="hidden shrink-0 sm:inline-flex">
            {scheduleCta.label}
          </Button>
          <button
            ref={menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="min-h-11 min-w-11 text-xs uppercase tracking-[0.15em] text-champagne lg:hidden"
          >
            {menuOpen ? "Fechar" : "Menu"}
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" aria-label="Navegação mobile" hidden={!menuOpen} className="border-t border-white/[0.06] bg-obsidian px-6 py-6 lg:hidden">
        <ul className="mx-auto flex max-w-7xl flex-col items-start gap-2">
          {navigation.map((link) => (
            <li key={link.href} className="w-full">
              <a href={link.href} onClick={closeMenu} className="block py-3 text-xs uppercase tracking-[0.15em] text-muted hover:text-ivory">
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <Button href={buildWhatsAppUrl(scheduleCta.message)} variant="outline" external onClick={closeMenu}>
              {scheduleCta.label}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
