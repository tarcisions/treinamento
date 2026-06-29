'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';

export function V5Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end bg-[#F4E9DA] overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline suppressHydrationWarning className="h-full w-full object-cover opacity-60">
          <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4E9DA] via-[#F4E9DA]/60 to-transparent" />
      </div>

      <div className="relative z-10 px-6 pb-16 md:pb-24 md:px-12">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="block text-xs font-medium tracking-[0.3em] text-[#E0876A] uppercase">
          Body Wise x Le Buffet Lounge
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="font-display mt-2 text-5xl leading-[1.05] tracking-tight text-[#2C2420] sm:text-6xl md:text-7xl lg:text-8xl">
          TREINO NO DECK
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-4 max-w-lg text-sm leading-relaxed text-[#2C2420]/50">
          {C.event.subtitle}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="mt-8 flex gap-4">
          <a href="#" className="inline-flex h-12 items-center justify-center rounded-full bg-[#E0876A] px-8 text-xs font-semibold tracking-widest text-white uppercase transition-all hover:bg-[#E69A82] active:scale-95 shadow-lg">
            {C.event.ctaPrimary}
          </a>
          <a href="#exp5" className="inline-flex h-12 items-center justify-center rounded-full border border-[#2C2420]/15 px-8 text-xs font-semibold tracking-widest text-[#2C2420]/60 uppercase transition-all hover:border-[#2C2420]/30 active:scale-95">
            {C.event.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <div className="absolute -bottom-1 left-0 right-0 h-16 bg-[#F4E9DA]" style={{ borderRadius: '50% 50% 0 0' }} />
    </section>
  );
}
