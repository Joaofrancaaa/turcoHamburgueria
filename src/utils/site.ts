export const SITE = {
  name: "Turco",
  fullName: "Turco Hamburgueria",
  tagline: "Hamburgueria artesanal",
  city: "Goiânia – GO",
  /**
   * Número no formato internacional, apenas dígitos (DDI + DDD + número).
   * Substitua pelo WhatsApp oficial da unidade.
   */
  whatsappNumber: "5562984636385",
  phoneDisplay: "(62) 98463-6385",
  address: "Rua SR 7, Qd 14 – Lt 05, Parque Santa Rita, Goiânia – GO",
  instagramUrl: "https://instagram.com/turco.hamburgueria",
  facebookUrl: "https://facebook.com/turcohamburgueria",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Turco+Hamburgueria+Parque+Santa+Rita+Goi%C3%A2nia",
  hours: [
    { days: "Terça a domingo", time: "18h – 23h30" },
    { days: "Segunda-feira", time: "Fechado" },
  ],
} as const;
