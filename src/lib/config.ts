export const config = {
  eventDate: process.env.NEXT_PUBLIC_EVENT_DATE || '2026-08-22T08:00:00-03:00',
  checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL || '#',
  eventAddress: process.env.NEXT_PUBLIC_EVENT_ADDRESS || 'Le Buffet Lounge — Av. Saturnino Rangel Mauro, 501 - Jardim da Penha, Vitória - ES',
  instagramBodywise: process.env.NEXT_PUBLIC_INSTAGRAM_BODYWISE || 'https://www.instagram.com/bodywise.treinamentofisico/',
  instagramLebuffet: process.env.NEXT_PUBLIC_INSTAGRAM_LEBUFFET || 'https://www.instagram.com/lebuffetoficial/',
  instagramMarcella: process.env.NEXT_PUBLIC_INSTAGRAM_MUNDOCOSMETOLOGIA || 'https://www.instagram.com/mundodacosmetologia/',
  pricingTag: process.env.NEXT_PUBLIC_PRICING_TAG || '1º LOTE',
  pricingValue: process.env.NEXT_PUBLIC_PRICING_VALUE || 'R$ 247',
  pricingDisclaimer: process.env.NEXT_PUBLIC_PRICING_DISCLAIMER || 'Vagas do 1º lote limitadas — garanta seu lugar no valor especial',
  totalVagas: Number(process.env.NEXT_PUBLIC_TOTAL_VAGAS || '100'),
  vagasPreenchidas: Number(process.env.NEXT_PUBLIC_VAGAS_PREENCHIDAS || '76'),
} as const;

export type Config = typeof config;
