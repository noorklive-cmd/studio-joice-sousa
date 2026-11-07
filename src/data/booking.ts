export interface BookingObjective {
  id: string;
  title: string;
  detail: string;
  message: string;
}

export interface BookingOption {
  value: string;
  label: string;
}

export interface BookingQuestion {
  id: string;
  question: string;
  messageLabel: string;
  options: BookingOption[];
}

export const booking = {
  id: "agendar",
  kicker: "Orçamento personalizado",
  title: {
    before: "O que você quer",
    emphasis: "transformar?",
  },
  description:
    "Escolha o que mais combina com você e responda três toques rápidos. O WhatsApp abre com tudo pronto para a Joice preparar o seu orçamento.",
  objectivesLabel: "Seu objetivo",
  questionsLabel: "Três toques rápidos",
  questionsHint: "As perguntas são opcionais. Se preferir, envie direto.",
  sendLabel: "Enviar no WhatsApp",
  emptyHint: "Escolha um objetivo para continuar.",
  greeting: "Olá, Joice! Vim pelo site do Studio.",
  closing: "Gostaria de receber um orçamento e saber a disponibilidade de horários.",
  objectives: [
    {
      id: "volume",
      title: "Quero mais volume",
      detail: "Corpo e densidade",
      message: "Quero ganhar mais volume.",
    },
    {
      id: "comprimento",
      title: "Quero mais comprimento",
      detail: "Comprimento natural",
      message: "Quero ganhar mais comprimento.",
    },
    {
      id: "renovar",
      title: "Quero renovar meu Mega Hair",
      detail: "Manutenção ou nova aplicação",
      message: "Quero renovar ou corrigir meu Mega Hair.",
    },
  ] satisfies BookingObjective[],
  questions: [
    {
      id: "experiencia",
      question: "Você já usa Mega Hair?",
      messageLabel: "Já uso Mega Hair",
      options: [
        { value: "nunca usei", label: "Nunca usei" },
        { value: "sim", label: "Sim, já uso" },
      ],
    },
    {
      id: "cabelo-atual",
      question: "Seu cabelo hoje é…",
      messageLabel: "Meu cabelo hoje é",
      options: [
        { value: "curto", label: "Curto" },
        { value: "médio", label: "Médio" },
        { value: "longo", label: "Longo" },
      ],
    },
    {
      id: "prazo",
      question: "Quando pretende fazer?",
      messageLabel: "Quero fazer",
      options: [
        { value: "ainda este mês", label: "Este mês" },
        { value: "nos próximos meses", label: "Próximos meses" },
        { value: "ainda estou pesquisando", label: "Só pesquisando" },
      ],
    },
  ] satisfies BookingQuestion[],
};
