export interface ThemeMeta {
  id: string
  slug: string
  name: string
  tagline: string
  palette: string[]
}

export const themes: ThemeMeta[] = [
  { id: 'v1', slug: 'v1', name: 'Rooftop Sunrise', tagline: 'Preto e dourado — a versão original', palette: ['#0A0A0A', '#B08D57', '#FAF8F4'] },
  { id: 'v2', slug: 'v2', name: 'Rooftop Sunrise Clara', tagline: 'Versão clara e luxuosa do rooftop', palette: ['#FAF8F4', '#D8C9B0', '#B08D57'] },
  { id: 'v3', slug: 'v3', name: 'Night Athletic', tagline: 'Energia urbana noturna — alto rendimento', palette: ['#0D0D0F', '#CFFF04', '#FFFFFF'] },
  { id: 'v4', slug: 'v4', name: 'Editorial Mono', tagline: 'Preto e branco — estilo revista de moda', palette: ['#000000', '#FFFFFF', '#8A8A8A'] },
  { id: 'v5', slug: 'v5', name: 'Beach Club Tropical', tagline: 'Litoral quente e vibrante com elegância', palette: ['#F4E9DA', '#E0876A', '#5C6B4D'] },
  { id: 'v6', slug: 'v6', name: 'Performance Tech', tagline: 'App esportivo high-end — dados em destaque', palette: ['#1A1D21', '#E8EAED', '#5B8DEF'] },
  { id: 'v7', slug: 'v7', name: 'Luxury Spa Wellness', tagline: 'Spa 5 estrelas — ultra clean e suave', palette: ['#F7F3EC', '#C9B79C', '#7C8A72'] },
  { id: 'v8', slug: 'v8', name: 'Bold Competition', tagline: 'Alto contraste — competição Hyrox', palette: ['#0A0A0A', '#FF6B00', '#FFFFFF'] },
  { id: 'v9', slug: 'v9', name: 'Sunrise Gradient Soft', tagline: 'Gradientes suaves — wellness retreat', palette: ['#F2C9A0', '#D9C7E0', '#B08D57'] },
  { id: 'v10', slug: 'v10', name: 'Architectural Concrete', tagline: 'Concreto e dourado — arquitetura do espaço', palette: ['#3A3733', '#C9A227', '#EDE9E3'] },
];
