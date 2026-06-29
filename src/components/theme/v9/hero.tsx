'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';

export function V9Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #F2C9A0 0%, #D9C7E0 50%, #B08D57 100%)' }}>
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <video autoPlay muted loop playsInline suppressHydrationWarning className="h-full w-full object-cover">
          <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-[10px] font-medium tracking-[0.4em] text-white/70 uppercase drop-shadow-sm">
          Body Wise x Le Buffet Lounge
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="font-sora mt-4 text-5xl leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
          TREINO NO DECK
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-5 max-w-md text-sm leading-relaxed text-white/70 drop-shadow">{C.event.subtitle}</motion.p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="mt-10 flex gap-4">
          <a href="#" className="inline-flex h-12 items-center justify-center rounded-full bg-white/90 px-8 text-xs font-semibold tracking-widest text-[#1a1418] uppercase backdrop-blur transition-all hover:bg-white active:scale-95 shadow-xl">
            {C.event.ctaPrimary}
          </a>
          <a href="#exp9" className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-8 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur transition-all hover:border-white/50 active:scale-95">
            {C.event.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
