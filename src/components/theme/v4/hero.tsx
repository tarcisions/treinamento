'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';

export function V4Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <video autoPlay muted loop playsInline suppressHydrationWarning className="absolute inset-0 h-full w-full object-cover grayscale">
        <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="block text-[10px] font-medium tracking-[0.4em] text-white/30 uppercase">
          Body Wise x Le Buffet Lounge
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="font-display mt-6 text-6xl leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
          TREINO<br />NO DECK
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/40">
          {C.event.subtitle}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#" className="inline-flex h-12 items-center justify-center bg-white px-8 text-xs font-semibold tracking-widest text-black uppercase transition-all hover:bg-neutral-200">
            {C.event.ctaPrimary}
          </a>
          <a href="#exp4" className="inline-flex h-12 items-center justify-center border border-white/20 px-8 text-xs font-semibold tracking-widest text-white/70 uppercase transition-all hover:border-white/40">
            {C.event.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-10 w-px bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
