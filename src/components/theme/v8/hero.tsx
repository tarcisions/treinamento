'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';

export function V8Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <video autoPlay muted loop playsInline suppressHydrationWarning className="h-full w-full object-cover">
          <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute -right-32 top-0 h-full w-1/2 bg-[#FF6B00]/10 skew-x-12" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <span className="text-[10px] font-medium tracking-[0.3em] text-[#FF6B00]/70 uppercase">Body Wise x Le Buffet Lounge</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
          className="font-anton mt-3 text-7xl leading-[0.95] tracking-tight text-white sm:text-8xl md:text-9xl lg:text-[10rem] uppercase">
          TREINO<br />NO DECK
        </motion.h1>

        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="mt-4 max-w-md text-sm leading-relaxed text-white/40">{C.event.subtitle}</motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="mt-8 flex gap-4">
          <a href="#" className="inline-flex h-12 items-center justify-center bg-[#FF6B00] px-8 text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-[#FF8533] active:scale-95 shadow-lg shadow-[#FF6B00]/20">
            {C.event.ctaPrimary}
          </a>
          <a href="#exp8" className="inline-flex h-12 items-center justify-center border-2 border-white/10 px-8 text-xs font-bold tracking-widest text-white/60 uppercase transition-all hover:border-white/30 active:scale-95">
            {C.event.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
