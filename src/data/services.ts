export type ServiceBadge =
  | "Mais procurada"
  | "Mais discreta"
  | "Mais versátil"
  | "Alta durabilidade"
  | "Acabamento premium"
  | "Leveza"
  | "Naturalidade";

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  maintenanceInterval: string;
  indication: string;
  applicationPrice: number;
  maintenancePrice: number;
  badge: ServiceBadge;
}

export const services: Service[] = [
  {
    id: "fita-adesiva-invisible-slim",
    name: "Fita Adesiva (Invisible / Slim)",
    tagline: "Leveza e discrição para um acabamento praticamente invisível.",
    description:
      "Técnica indicada para quem busca integração discreta, conforto e um resultado visual natural, com fitas finas e acabamento pensado para acompanhar o caimento dos fios.",
    maintenanceInterval: "45 a 60 dias",
    indication:
      "Indicada para quem prioriza discrição, leveza e praticidade na rotina.",
    applicationPrice: 350,
    maintenancePrice: 400,
    badge: "Mais discreta",
  },

  {
    id: "ponto-americano-tela-costurada",
    name: "Ponto Americano / Tela Costurada",
    tagline: "Estrutura, segurança e excelente aproveitamento de volume.",
    description:
      "Técnica de aplicação com tela costurada, desenvolvida para proporcionar boa distribuição do cabelo e estrutura adequada ao projeto de alongamento.",
    maintenanceInterval: "50 a 70 dias",
    indication:
      "Indicada para projetos que exigem maior cobertura, volume e estrutura.",
    applicationPrice: 300,
    maintenancePrice: 400,
    badge: "Mais versátil",
  },

  {
    id: "ponto-americano-acabamento-tela",
    name: "Ponto Americano com acabamento na tela",
    tagline: "A estrutura do ponto americano com acabamento refinado.",
    description:
      "Versão com acabamento adicional na tela para um resultado mais elaborado e visualmente refinado, mantendo a proposta de estrutura e distribuição do ponto americano.",
    maintenanceInterval: "50 a 70 dias",
    indication:
      "Indicada para quem deseja estrutura com atenção especial ao acabamento.",
    applicationPrice: 350,
    maintenancePrice: 450,
    badge: "Acabamento premium",
  },

  {
    id: "queratina-tradicional",
    name: "Queratina Tradicional",
    tagline: "Fixação precisa e integração natural ao cabelo.",
    description:
      "Técnica de aplicação por queratina desenvolvida para integrar as extensões aos fios naturais com pontos de fixação discretos e acabamento cuidadoso.",
    maintenanceInterval: "60 a 90 dias",
    indication:
      "Indicada para quem busca comprimento e volume com pontos de aplicação discretos.",
    applicationPrice: 500,
    maintenancePrice: 500,
    badge: "Alta durabilidade",
  },

  {
    id: "microcapsula-queratina",
    name: "Micro Cápsula de Queratina",
    tagline: "Pequenos pontos de fixação para máxima discrição.",
    description:
      "Técnica que utiliza cápsulas menores de queratina para favorecer a discrição dos pontos de aplicação e a integração das extensões ao cabelo.",
    maintenanceInterval: "60 a 90 dias",
    indication:
      "Indicada para quem busca pontos menores e maior discrição visual.",
    applicationPrice: 500,
    maintenancePrice: 600,
    badge: "Mais discreta",
  },

  {
    id: "nano-capsula-queratina",
    name: "Nano Cápsula de Queratina",
    tagline: "Máxima discrição em uma estrutura extremamente compacta.",
    description:
      "Técnica de alta precisão que utiliza cápsulas ainda menores para favorecer um resultado discreto e uma integração refinada, especialmente em projetos que exigem atenção aos detalhes.",
    maintenanceInterval: "60 a 90 dias",
    indication:
      "Indicada para projetos que exigem alto nível de discrição e acabamento.",
    applicationPrice: 500,
    maintenancePrice: 800,
    badge: "Naturalidade",
  },

  {
    id: "no-italiano",
    name: "Nó Italiano",
    tagline: "Fixação manual com visual natural e acabamento artesanal.",
    description:
      "Técnica de fixação manual que permite trabalhar a distribuição das mechas de forma estratégica, buscando integração natural e acabamento personalizado.",
    maintenanceInterval: "60 a 90 dias",
    indication:
      "Indicada para projetos personalizados que valorizam distribuição e naturalidade.",
    applicationPrice: 400,
    // 0 = valor de manutenção não definido na especificação; tratar como "consultar avaliação".
    maintenancePrice: 0,
    badge: "Alta durabilidade",
  },
];
