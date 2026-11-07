import { studio } from "../data/studio";

const WHATSAPP_BASE_URL = "https://wa.me";

export interface QuoteMessageParams {
  technique: string;
  objective: string;
  length?: string;
}

export function buildWhatsAppUrl(
  message?: string,
): string {
  const baseUrl = `${WHATSAPP_BASE_URL}/${studio.contact.whatsapp.raw}`;

  if (!message?.trim()) {
    return baseUrl;
  }

  const encodedMessage = encodeURIComponent(
    message.trim(),
  );

  return `${baseUrl}?text=${encodedMessage}`;
}

export interface BookingMessageParams {
  greeting: string;
  objective: string;
  answers: { label: string; value: string }[];
  closing: string;
}

export function buildBookingMessage({
  greeting,
  objective,
  answers,
  closing,
}: BookingMessageParams): string {
  const lines = [greeting, "", objective];

  if (answers.length > 0) {
    lines.push("", ...answers.map(({ label, value }) => `${label}: ${value}.`));
  }

  lines.push("", closing);

  return lines.join("\n");
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
