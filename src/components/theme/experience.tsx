'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import type { ThemeConfig } from '@/themes/types';
import { easeOutExpo } from '@/lib/motion';

export function ThemeExperience({ theme }: { theme: ThemeConfig }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className={`${theme.tokens.bg} py-20 md:py-28`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className={`text-center ${theme.tokens.text}`}>
          <span className={`text-xs font-medium tracking-[0.3em] uppercase ${theme.tokens.accentText}`}>A Experiência</span>
          <h2 className={`${theme.fonts.display} mt-3 text-3xl leading-tight tracking-tight md:text-5xl ${theme.tokens.text}`}>O que esperar</h2>
        </div>
        <div className="my-12 flex justify-center"><div className={`h-px w-24 ${theme.components.sectionDivider}`} /></div>
        <div ref={ref} className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {C.experience.map((item, i) => (
            <motion.div key={item.title} className={`group p-6 backdrop-blur transition-all duration-300 md:p-8 ${theme.components.cardRadius} ${theme.components.cardBorder} ${theme.tokens.bgCard} ${theme.components.cardHover}`}
              initial={{ opacity: 0, y: 32 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: easeOutExpo }}>
              <span className="text-2xl" role="img" aria-hidden="true">{item.icon}</span>
              <h3 className={`${theme.fonts.display} mt-4 text-lg leading-snug md:text-xl ${theme.tokens.text}`}>{item.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${theme.tokens.textMuted}`}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
