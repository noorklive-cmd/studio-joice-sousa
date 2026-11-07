import { studio } from "./studio";

export interface NavigationLink {
  label: string;
  href: `#${string}`;
}

export const navigation: NavigationLink[] = [
  { label: "Filosofia", href: "#filosofia" },
  { label: "Técnicas", href: "#tecnicas" },
  { label: "Valores", href: "#valores" },
  { label: "Contato", href: "#contato" },
];

export const brand = {
  wordmark: studio.name.toUpperCase(),
  descriptor: "Alta Costura Capilar",
};

export const hero = {
  kicker: "Engenharia de Mega Hair & Visagismo",
  title: {
    before: "Transformação que parece ter",
    emphasis: "nascido",
    after: "com você.",
  },
  description:
    "Cada projeto começa pela preservação milimétrica da saúde do seu fio. Distribuição calculada para tração zero, mechas posicionadas uma a uma e acabamentos indetectáveis — comprimento e volume que acompanham o seu movimento natural.",
  primaryCta: {
    label: "Quero meu Mega Hair",
    message:
      "Olá, Joice! Vi o site do Studio e gostaria de agendar uma avaliação para Mega Hair.",
  },
  secondaryCta: {
    label: "Explorar Técnicas",
    href: "#filosofia",
  },
  image: {
    src: "/images/hero-editorial.png",
    alt: "Mulher de costas com cabelo longo, natural e brilhante, iluminado por luz quente de estúdio",
  },
  plate: {
    name: studio.specialist.toUpperCase(),
    role: "Especialista em Alongamentos Invisíveis & Visagismo",
  },
  caption: `${studio.address.neighborhood}, ${studio.address.city}`,
};

export interface Pillar {
  number: string;
  title: string;
  description: string;
}

export const positioning = {
  kicker: "Filosofia",
  label: "Manifesto do Ateliê",
  statement: {
    before: "Mega Hair não deve parecer colocado. Deve parecer que",
    emphasis: "sempre pertenceu",
    after: "a você.",
  },
  pillars: [
    {
      number: "01",
      title: "Naturalidade Absoluta",
      description:
        "Acabamento milimétrico e distribuição orgânica que acompanha o movimento real dos seus fios.",
    },
    {
      number: "02",
      title: "Conforto & Tração Zero",
      description:
        "Aplicações calculadas respeitando a densidade capilar para eliminar peso ou dores de adaptação.",
    },
    {
      number: "03",
      title: "Precisão Técnica",
      description:
        "Cada mecha é selecionada e posicionada como alta costura personalizada para o seu rosto.",
    },
  ] satisfies Pillar[],
};

export const scheduleCta = {
  label: "Agendar Avaliação",
  shortLabel: "Agendar",
  message:
    "Olá, Joice! Gostaria de agendar uma avaliação no Studio Joice Sousa.",
};
