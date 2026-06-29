'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';

export function V6Hero() {
  return (
    <section className="relative min-h-screen bg-[#1A1D21] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <video autoPlay muted loop playsInline suppressHydrationWarning className="h-full w-full object-cover">
          <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[10px] font-medium tracking-[0.4em] text-[#5B8DEF]/60 uppercase">Body Wise x Le Buffet Lounge</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="font-space-grotesk mt-4 text-6xl leading-[1.05] tracking-tight text-[#E8EAED] sm:text-7xl md:text-8xl">
          TREINO<br />NO DECK
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="mt-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#5B8DEF]/30" />
          <span className="text-xs text-[#E8EAED]/40">{C.microcopy[0]}</span>
          <div className="h-px flex-1 bg-[#5B8DEF]/30" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="mt-8 grid grid-cols-2 gap-4 sm:flex sm:gap-6">
          {[{ v: '06:30', l: 'Horário' }, { v: '50', l: 'Vagas' }, { v: '7h', l: 'Duração' }, { v: '23/08', l: 'Data' }].map((d) => (
            <div key={d.l} className="rounded-sm border border-[#E8EAED]/5 bg-[#22262B] p-4 text-center">
              <p className="font-mono text-xl text-[#E8EAED]">{d.v}</p>
              <p className="text-[10px] text-[#E8EAED]/30 uppercase tracking-wider">{d.l}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
          className="mt-8 flex gap-4">
          <a href="#" className="inline-flex h-11 items-center justify-center bg-[#5B8DEF] px-7 text-xs font-semibold tracking-widest text-white uppercase transition-all hover:bg-[#7BA3F0] active:scale-[0.98]">
            {C.event.ctaPrimary}
          </a>
          <a href="#exp6" className="inline-flex h-11 items-center justify-center border border-[#E8EAED]/10 px-7 text-xs font-semibold tracking-widest text-[#E8EAED]/50 uppercase transition-all hover:border-[#E8EAED]/30 active:scale-[0.98]">
            {C.event.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
