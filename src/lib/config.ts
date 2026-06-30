function env(key: string, fallback: string): string {
  return (typeof process !== 'undefined' && process.env[key]) || fallback;
}

export const config = {
  eventDate: env('NEXT_PUBLIC_EVENT_DATE', '2026-08-22T08:00:00-03:00'),
  checkoutUrl: env('NEXT_PUBLIC_CHECKOUT_URL', 'https://pay.hotmart.com/EXEMPLO123'),
  totalVagas: Number(env('NEXT_PUBLIC_TOTAL_VAGAS', '100')),
  vagasPreenchidas: Number(env('NEXT_PUBLIC_VAGAS_PREENCHIDAS', '76')),
  eventAddress: env('NEXT_PUBLIC_EVENT_ADDRESS', 'Le Buffet Lounge — Av. Saturnino Rangel Mauro, 501 - Jardim da Penha, Vitória - ES'),
  eventMapsUrl: env('NEXT_PUBLIC_EVENT_MAPS_URL', 'https://www.google.com/maps/search/?api=1&query=Le+Buffet+Lounge+Vitória+ES'),
  bodywiseAddress: env('NEXT_PUBLIC_BODYWISE_ADDRESS', 'R. da Grécia, 320 A - Santa Luíza, Vitória - ES, 29045-225'),
  bodywiseMapsUrl: env('NEXT_PUBLIC_BODYWISE_MAPS_URL', 'https://www.google.com/maps/search/?api=1&query=Body+Wise+Vitória+ES'),
  instagramBodywise: env('NEXT_PUBLIC_INSTAGRAM_BODYWISE', 'https://www.instagram.com/bodywise.treinamentofisico/'),
  instagramLebuffet: env('NEXT_PUBLIC_INSTAGRAM_LEBUFFET', 'https://www.instagram.com/lebuffetoficial/'),
  instagramMarcella: env('NEXT_PUBLIC_INSTAGRAM_MUNDOCOSMETOLOGIA', 'https://www.instagram.com/mundodacosmetologia/'),
  gaId: env('NEXT_PUBLIC_GA_ID', ''),
  metaPixelId: env('NEXT_PUBLIC_META_PIXEL_ID', ''),
} as const;

export type Config = typeof config;
