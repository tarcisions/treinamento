'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';

export function V2Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const reveal = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col bg-cream md:flex-row">
      <motion.div style={{ opacity: reveal }} className="relative z-10 flex flex-col justify-center px-8 py-20 md:w-1/2 md:px-16 md:py-0">
        <span className="text-[10px] font-medium tracking-[0.35em] text-gold uppercase">Body Wise x Le Buffet Lounge</span>
        <h1 className="font-display mt-4 text-5xl leading-[1.05] tracking-tight text-charcoal sm:text-6xl md:text-7xl lg:text-8xl">
          TREINO<br />NO DECK
        </h1>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-charcoal/50">{C.event.subtitle}</p>
        <div className="mt-8 flex gap-4">
          <a href="#" className="inline-flex h-11 items-center justify-center rounded-full bg-gold px-7 text-xs font-semibold tracking-widest text-cream uppercase transition-all hover:bg-gold-light active:scale-95">
            {C.event.ctaPrimary}
          </a>
          <a href="#exp" className="inline-flex h-11 items-center justify-center rounded-full border border-charcoal/10 px-7 text-xs font-semibold tracking-widest text-charcoal/70 uppercase transition-all hover:border-charcoal/30 active:scale-95">
            {C.event.ctaSecondary}
          </a>
        </div>
      </motion.div>

      <div className="relative h-[40vh] overflow-hidden md:h-auto md:w-1/2">
        <video autoPlay muted loop playsInline suppressHydrationWarning className="h-full w-full object-cover">
          <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-cream/20 to-transparent md:bg-gradient-to-r md:from-cream/10 md:to-transparent" />
      </div>
    </section>
  );
}
