'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import type { ThemeConfig } from '@/themes/types';
import { easeOutExpo } from '@/lib/motion';

export function ThemeTimeline({ theme }: { theme: ThemeConfig }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className={`${theme.tokens.bgAlt || theme.tokens.bg} py-20 md:py-28`}>
      <div className="mx-auto max-w-3xl px-6">
        <div className={`text-center ${theme.tokens.text}`}>
          <span className={`text-xs font-medium tracking-[0.3em] uppercase ${theme.tokens.accentText}`}>Cronograma</span>
          <h2 className={`${theme.fonts.display} mt-3 text-3xl leading-tight tracking-tight md:text-5xl ${theme.tokens.text}`}>Sua manhã, momento a momento</h2>
        </div>
        <div className="my-12 flex justify-center"><div className={`h-px w-24 ${theme.components.sectionDivider}`} /></div>

        <div className="relative">
          <motion.div className="absolute left-[19px] top-0 h-full w-px md:left-[23px]"
            style={{ background: theme.tokens.borderLight.replace('border-', '') || 'rgba(255,255,255,0.05)', transformOrigin: 'top' }}
            initial={{ scaleY: 0 }} animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: easeOutExpo }} />

          <div className="space-y-0">
            {C.timeline.map((item, i) => (
              <motion.div key={item.time} className="relative flex items-start gap-5 pb-8 pl-12 md:gap-6 md:pb-10"
                initial={{ opacity: 0, x: -16 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: easeOutExpo }}>
                <motion.div className={`absolute left-0 top-1.5 z-10 h-2.5 w-2.5 rounded-full border-2 md:h-3 md:w-3 ${theme.tokens.bg} ${theme.tokens.accentText.replace('text-', 'border-')}`}
                  initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 + 0.15, ease: easeOutExpo }} />
                <span className={`w-14 flex-shrink-0 pt-0.5 md:w-16 ${theme.fonts.display} text-lg tracking-tight md:text-xl ${theme.tokens.accentText}`}>{item.time}</span>
                <p className={`pt-0.5 text-sm leading-relaxed md:text-base ${theme.tokens.textMuted}`}>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
