'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';

export function V7Hero() {
  return (
    <section className="relative min-h-screen bg-[#F7F3EC] flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 opacity-[0.04]">
        <video autoPlay muted loop playsInline suppressHydrationWarning className="h-full w-full object-cover">
          <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-2xl text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
          <span className="text-[9px] font-medium tracking-[0.5em] text-[#C9B79C] uppercase">Body Wise x Le Buffet Lounge</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="font-cormorant mt-8 text-6xl leading-[1.1] tracking-tight text-[#2C2420] sm:text-7xl md:text-8xl lg:text-9xl font-light">
          TREINO<br />NO DECK
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.5 }}
          className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-[#2C2420]/40 tracking-wide">
          {C.event.subtitle}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#" className="inline-flex h-11 items-center justify-center bg-[#C9B79C] px-8 text-xs font-medium tracking-[0.25em] text-[#F7F3EC] uppercase transition-all hover:bg-[#D4C5AE]">
            {C.event.ctaPrimary}
          </a>
          <a href="#exp7" className="inline-flex h-11 items-center justify-center border border-[#2C2420]/10 px-8 text-xs font-medium tracking-[0.25em] text-[#2C2420]/50 uppercase transition-all hover:border-[#2C2420]/25">
            {C.event.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-12 left-1/2 h-px w-24 -translate-x-1/2 bg-[#C9B79C]/30" />
    </section>
  );
}
