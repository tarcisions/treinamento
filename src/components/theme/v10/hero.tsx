'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';

export function V10Hero() {
  return (
    <section className="relative min-h-screen bg-[#3A3733] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]">
        <video autoPlay muted loop playsInline suppressHydrationWarning className="h-full w-full object-cover">
          <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="pointer-events-none absolute inset-0 border-[16px] border-[#C9A227]/10 md:border-[24px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-8 md:px-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C9A227]/50" />
            <span className="text-[9px] font-medium tracking-[0.4em] text-[#C9A227]/60 uppercase">Body Wise x Le Buffet Lounge</span>
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="font-sora text-5xl leading-[1.05] tracking-tight text-[#EDE9E3] sm:text-6xl md:text-7xl lg:text-8xl font-bold">
          TREINO NO DECK
        </motion.h1>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 h-0.5 w-24 origin-left bg-[#C9A227]" />

        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="mt-5 max-w-md text-sm leading-relaxed text-[#EDE9E3]/50">{C.event.subtitle}</motion.p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
          className="mt-10 flex gap-4">
          <a href="#" className="inline-flex h-11 items-center justify-center bg-[#C9A227] px-7 text-xs font-semibold tracking-widest text-[#3A3733] uppercase transition-all hover:bg-[#D4B338] active:scale-[0.98]">
            {C.event.ctaPrimary}
          </a>
          <a href="#exp10" className="inline-flex h-11 items-center justify-center border border-[#EDE9E3]/15 px-7 text-xs font-semibold tracking-widest text-[#EDE9E3]/50 uppercase transition-all hover:border-[#EDE9E3]/30 active:scale-[0.98]">
            {C.event.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-8 right-8 flex justify-between text-[9px] text-[#C9A227]/30 font-mono tracking-wider uppercase">
        <span>Elevation +12m</span>
        <span>Area 1200m2</span>
        <span>Capacity 50</span>
      </div>
    </section>
  );
}
