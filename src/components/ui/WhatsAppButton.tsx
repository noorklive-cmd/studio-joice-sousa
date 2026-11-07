import { studio } from "../../data/studio";
import { scheduleCta } from "../../data/editorial";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(scheduleCta.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar com ${studio.name} no WhatsApp (abre em nova aba)`}
      className="fixed bottom-6 right-6 z-50 rounded-full border border-champagne/40 bg-obsidian p-3.5 text-champagne shadow-xl transition-all duration-300 ease-luxury motion-safe:hover:scale-105 hover:border-champagne md:bottom-8 md:right-8"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.01C2.62 6.86 6.84 2.64 12.06 2.64c2.52 0 4.9.99 6.68 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.2-4.23 9.42-9.44 9.42m8.03-17.45A11.27 11.27 0 0 0 12.05.72C5.8.72.7 5.8.7 12.07c0 2 .52 3.95 1.52 5.67L.6 23.28l5.67-1.49a11.32 11.32 0 0 0 5.78 1.47h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.33-8.02" />
      </svg>
    </a>
  );
}
