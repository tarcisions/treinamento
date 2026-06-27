'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { config } from '@/lib/config';
import { content } from '@/lib/content';
import { easeOutExpo } from '@/lib/motion';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

export function SpotsProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const pct = Math.min(
    Math.round((config.vagasPreenchidas / config.totalVagas) * 100),
    100,
  );
  const remaining = config.totalVagas - config.vagasPreenchidas;

  return (
    <section ref={ref} className="bg-night py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Vagas Limitadas
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-display mt-4 text-4xl leading-tight tracking-tight text-cream md:text-6xl">
            APENAS {config.totalVagas} VAGAS
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8">
            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-charcoal">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                initial={{ width: '0%' }}
                animate={isInView ? { width: `${pct}%` } : { width: '0%' }}
                transition={{ duration: 1.2, delay: 0.4, ease: easeOutExpo }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-sand/50">
              <span>{config.vagasPreenchidas} de {config.totalVagas} preenchidas</span>
              <motion.span
                className="text-gold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {remaining === 0
                  ? 'Todas preenchidas'
                  : `${remaining} ${remaining === 1 ? 'vaga restante' : 'vagas restantes'}`
                }
              </motion.span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-6 text-sm leading-relaxed text-sand/60">
            {content.microcopy[1]}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
