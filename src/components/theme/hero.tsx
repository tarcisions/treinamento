'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import type { ThemeConfig } from '@/themes/types';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

export function ThemeHero({ theme }: { theme: ThemeConfig }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', theme.motion.parallax ? '15%' : '0%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-svh min-h-screen overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <video autoPlay muted loop playsInline suppressHydrationWarning className="h-full w-full object-cover">
          <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className={`absolute inset-0 ${theme.components.heroOverlay}`} />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex max-w-3xl flex-col items-center gap-5">
          <motion.span variants={fadeUp} className={`text-xs font-medium tracking-[0.3em] uppercase ${theme.tokens.accentText}`}>
            {C.event.name}
          </motion.span>
          <motion.h1 variants={fadeUp} className={`${theme.fonts.display} text-5xl leading-[1.1] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl ${theme.tokens.text}`}>
            {C.event.title}
          </motion.h1>
          <motion.p variants={fadeUp} className={`max-w-xl text-base leading-relaxed sm:text-lg ${theme.tokens.textMuted}`}>
            {C.event.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-4 pt-4 sm:flex-row">
            <a href="#" className={`inline-flex h-12 items-center justify-center px-8 text-sm font-semibold tracking-widest uppercase transition-all duration-200 active:scale-[0.97] ${theme.components.cardRadius} ${theme.components.button}`}>
              {C.event.ctaPrimary}
            </a>
            <a href="#experience" className={`inline-flex h-12 items-center justify-center px-8 text-sm font-semibold tracking-widest uppercase transition-all duration-200 active:scale-[0.97] ${theme.components.cardRadius} ${theme.components.buttonSecondary}`}>
              {C.event.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }}>
          <motion.div className="flex flex-col items-center gap-2" animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <span className={`text-[10px] font-medium tracking-[0.2em] uppercase ${theme.tokens.textMuted}`}>Scroll</span>
            <div className={`h-8 w-px bg-gradient-to-b from-transparent ${theme.tokens.accentText.replace('text-', 'to-')}`} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
