const WHATSAPP_NUMBER = "5511980345487";

const WHATSAPP_BASE_URL = "https://wa.me";

export interface QuoteMessageParams {
  technique: string;
  objective: string;
  length?: string;
}

export function buildWhatsAppUrl(
  message?: string,
): string {
  const baseUrl = `${WHATSAPP_BASE_URL}/${WHATSAPP_NUMBER}`;

  if (!message?.trim()) {
    return baseUrl;
  }

  const encodedMessage = encodeURIComponent(
    message.trim(),
  );

  return `${baseUrl}?text=${encodedMessage}`;
}

export function buildQuoteMessage({
  technique,
  objective,
  length,
}: QuoteMessageParams): string {
  const lines = [
    "Olá, Joice! Gostaria de solicitar uma avaliação para Mega Hair.",
    "",
    `Técnica de interesse: ${technique}`,
    `Objetivo: ${objective}`,
  ];

  if (length?.trim()) {
    lines.push(`Comprimento desejado: ${length.trim()}`);
  }

  lines.push(
    "",
    "Gostaria de saber mais detalhes e disponibilidade de horários.",
  );

  return lines.join("\n");
}
