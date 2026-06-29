import type { Transition, Variants } from 'framer-motion'

export interface ThemeTokens {
  bg: string
  bgAlt: string
  bgCard: string
  text: string
  textMuted: string
  textInverse: string
  accent: string
  accentHover: string
  accentText: string
  neutral: string
  border: string
  borderLight: string
}

export interface ThemeFonts {
  display: string
  body: string
}

export interface ThemeMotion {
  duration: number
  durationFast: number
  durationSlow: number
  ease: Transition['ease']
  stagger: number
  parallax: boolean
}

export interface ThemeComponents {
  heroOverlay: string
  heroOverlayStyle: 'dark' | 'light'
  cardRadius: string
  cardBorder: string
  cardHover: string
  button: string
  buttonSecondary: string
  sectionDivider: string
  progressBar: string
  progressTrack: string
}

export interface ThemeConfig {
  id: string
  name: string
  tokens: ThemeTokens
  fonts: ThemeFonts
  motion: ThemeMotion
  components: ThemeComponents
}
