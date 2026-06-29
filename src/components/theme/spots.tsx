'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { config } from '@/lib/config';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import type { ThemeConfig } from '@/themes/types';
import { easeOutExpo } from '@/lib/motion';

export function ThemeSpots({ theme }: { theme: ThemeConfig }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const pct = Math.min(Math.round((config.vagasPreenchidas / config.totalVagas) * 100), 100);
  const remaining = config.totalVagas - config.vagasPreenchidas;

  return (
    <section ref={ref} className={`${theme.tokens.bg} py-20 md:py-28`}>
      <div className={`mx-auto max-w-2xl px-6 text-center ${theme.tokens.text}`}>
        <span className={`text-xs font-medium tracking-[0.3em] uppercase ${theme.tokens.accentText}`}>Vagas Limitadas</span>
        <p className={`${theme.fonts.display} mt-4 text-4xl leading-tight tracking-tight md:text-6xl ${theme.tokens.text}`}>
          APENAS {config.totalVagas} VAGAS
        </p>
        <div className="mt-8">
          <div className={`relative h-1.5 w-full overflow-hidden rounded-full ${theme.components.progressTrack}`}>
            <motion.div className={`h-full rounded-full ${theme.components.progressBar}`}
              initial={{ width: '0%' }} animate={isInView ? { width: `${pct}%` } : { width: '0%' }}
              transition={{ duration: 1.2, delay: 0.4, ease: easeOutExpo }} />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs">
            <span className={theme.tokens.textMuted}>{config.vagasPreenchidas} de {config.totalVagas} preenchidas</span>
            <motion.span className={theme.tokens.accentText} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
              {remaining === 0 ? 'Todas preenchidas' : `${remaining} ${remaining === 1 ? 'vaga restante' : 'vagas restantes'}`}
            </motion.span>
          </div>
        </div>
        <p className={`mt-6 text-sm leading-relaxed ${theme.tokens.textMuted}`}>{C.microcopy[1]}</p>
      </div>
    </section>
  );
}
