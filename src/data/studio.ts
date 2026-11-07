export interface StudioContact {
  whatsapp: {
    display: string;
    raw: string;
  };
  instagram: {
    handle: string;
    url: string;
  };
}

export interface StudioAddress {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  formatted: string;
}

export interface StudioHours {
  days: string;
  opening: string;
  closing: string;
  formatted: string;
}

export interface StudioData {
  name: string;
  specialist: string;
  positioning: string;
  slogan: string;
  address: StudioAddress;
  contact: StudioContact;
  hours: StudioHours;
  previousReference: string;
}

export const studio: StudioData = {
  name: "Studio Joice Sousa",

  specialist: "Joice Sousa",

  positioning:
    "Alta Costura Capilar & Engenharia de Mega Hair",

  slogan:
    "Comprimento, volume e naturalidade que transformam o seu visual.",

  address: {
    street: "Rua Tamuatá, 354",
    neighborhood: "São João Clímaco",
    city: "São Paulo",
    state: "SP",
    postalCode: "04232-000",
    formatted:
      "Rua Tamuatá, 354 — São João Clímaco, São Paulo — SP, CEP 04232-000",
  },

  contact: {
    whatsapp: {
      display: "+55 11 98034-5487",
      raw: "5511980345487",
    },

    instagram: {
      handle: "@studiojoicesousa",
      url: "https://instagram.com/studiojoicesousa",
    },
  },

  hours: {
    days: "Terça a sábado",
    opening: "10:00",
    closing: "19:00",
    formatted: "Terça a sábado, das 10h às 19h",
  },

  previousReference:
    "https://studio-joice-sousa.netlify.app",
};
