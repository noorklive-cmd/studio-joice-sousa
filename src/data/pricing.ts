export type PricingCategory =
  | "application"
  | "maintenance"
  | "additional";

export interface PricingItem {
  id: string;
  category: PricingCategory;
  name: string;
  price: number;
  priceLabel: string;
  unit?: string;
  notes?: string;
}

export interface BookingTerms {
  reservationDeposit: {
    percentage: number;
    label: string;
  };

  latenessTolerance: {
    minutes: number;
    label: string;
  };

  cancellationNotice: {
    hours: number;
    label: string;
  };

  hairPricingNote: string;
}

export interface PricingData {
  application: PricingItem[];
  maintenance: PricingItem[];
  additional: PricingItem[];
  bookingTerms: BookingTerms;
}

export const pricing: PricingData = {
  application: [
    {
      id: "fita-adesiva-invisible-slim",
      category: "application",
      name: "Fita Adesiva (Invisible / Slim)",
      price: 350,
      priceLabel: "R$ 350,00",
    },
    {
      id: "ponto-americano-tela-costurada",
      category: "application",
      name: "Ponto Americano / Tela Costurada",
      price: 300,
      priceLabel: "R$ 300,00",
    },
    {
      id: "ponto-americano-acabamento-tela",
      category: "application",
      name: "Ponto Americano com acabamento na tela",
      price: 350,
      priceLabel: "R$ 350,00",
    },
    {
      id: "queratina-italiana-microcapsulas",
      category: "application",
      name: "Queratina Italiana (Microcápsulas)",
      price: 500,
      priceLabel: "R$ 500,00",
    },
    {
      id: "no-italiano",
      category: "application",
      name: "Nó Italiano",
      price: 400,
      priceLabel: "R$ 400,00",
    },
  ],

  maintenance: [
    {
      id: "manutencao-queratina-tradicional-200g",
      category: "maintenance",
      name: "Queratina Tradicional",
      price: 500,
      priceLabel: "R$ 500,00",
      unit: "até 200g",
    },
    {
      id: "manutencao-ponto-americano-200g",
      category: "maintenance",
      name: "Ponto Americano",
      price: 400,
      priceLabel: "R$ 400,00",
      unit: "até 200g",
    },
    {
      id: "manutencao-microcapsula-150g",
      category: "maintenance",
      name: "Micro Cápsula de Queratina",
      price: 600,
      priceLabel: "R$ 600,00",
      unit: "até 150g",
    },
    {
      id: "manutencao-microcapsula-200g",
      category: "maintenance",
      name: "Micro Cápsula de Queratina",
      price: 700,
      priceLabel: "R$ 700,00",
      unit: "até 200g",
    },
    {
      id: "manutencao-nanocapsula-200g",
      category: "maintenance",
      name: "Nano Cápsula de Queratina",
      price: 800,
      priceLabel: "R$ 800,00",
      unit: "até 200g",
    },
    {
      id: "manutencao-fita-adesiva-200g",
      category: "maintenance",
      name: "Fita Adesiva",
      price: 400,
      priceLabel: "R$ 400,00",
      unit: "até 200g",
    },
    {
      id: "manutencao-ponto-americano-tela-200g",
      category: "maintenance",
      name: "Ponto Americano com acabamento na tela",
      price: 450,
      priceLabel: "R$ 450,00",
      unit: "até 200g",
    },
  ],

  additional: [
    {
      id: "retirada-avulsa",
      category: "additional",
      name: "Retirada avulsa sem reaplicação",
      price: 100,
      priceLabel: "R$ 100,00",
    },
    {
      id: "hidratacao-recuperacao-mechas",
      category: "additional",
      name: "Hidratação e recuperação de mechas",
      price: 80,
      priceLabel: "R$ 80,00",
    },
    {
      id: "matizacao-coloracao-telas",
      category: "additional",
      name: "Matização / coloração de telas",
      price: 90,
      priceLabel: "A partir de R$ 90,00",
      notes: "Valor inicial sujeito à avaliação.",
    },
  ],

  bookingTerms: {
    reservationDeposit: {
      percentage: 30,
      label: "Sinal de reserva: 30% obrigatório.",
    },

    latenessTolerance: {
      minutes: 15,
      label: "Tolerância de atraso: 15 minutos.",
    },

    cancellationNotice: {
      hours: 24,
      label: "Aviso de desmarcação: mínimo 24h.",
    },

    hairPricingNote:
      "Cabelo humano é cobrado à parte conforme cor, comprimento e gramatura.",
  },
};
