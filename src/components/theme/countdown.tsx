'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import { config } from '@/lib/config';
import { useCountdown } from '@/lib/use-countdown';
import type { ThemeConfig } from '@/themes/types';
import { easeOutExpo } from '@/lib/motion';

function Unit({ value, label, theme }: { value: number; label: string; theme: ThemeConfig }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`relative flex h-16 w-16 items-center justify-center overflow-hidden sm:h-20 sm:w-20 ${theme.components.cardBorder} ${theme.components.cardRadius} ${theme.tokens.bgCard} backdrop-blur`}>
        <AnimatePresence mode="popLayout">
          <motion.span key={value} className={`${theme.fonts.display} text-2xl tracking-tight sm:text-3xl ${theme.tokens.text}`}
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: easeOutExpo }}>
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className={`mt-2 text-[10px] font-medium tracking-[0.2em] uppercase ${theme.tokens.textMuted}`}>{label}</span>
    </div>
  );
}

export function ThemeCountdown({ theme }: { theme: ThemeConfig }) {
  const { days, hours, minutes, seconds, isExpired, isReady } = useCountdown(config.eventDate);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className={`${theme.tokens.bg} py-20 md:py-28`}>
      <div className={`mx-auto max-w-3xl px-6 text-center ${theme.tokens.text}`}>
        <span className={`text-xs font-medium tracking-[0.3em] uppercase ${theme.tokens.accentText}`}>
          {isExpired ? 'VAGAS ABERTAS' : 'FALTAM APENAS'}
        </span>

        {!isReady ? (
          <div className="mt-8 flex items-center justify-center gap-3">
            {['dias', 'horas', 'min', 'seg'].map((l) => (
              <div key={l} className={`flex h-16 w-16 animate-pulse items-center justify-center sm:h-20 sm:w-20 ${theme.components.cardBorder} ${theme.components.cardRadius} ${theme.tokens.bgCard}`} />
            ))}
          </div>
        ) : isExpired ? (
          <div className="mt-10 space-y-4">
            <p className={`${theme.fonts.display} text-2xl md:text-3xl ${theme.tokens.text}`}>O grande dia chegou!</p>
            <a href={config.checkoutUrl} target="_blank" rel="noopener noreferrer"
              className={`inline-flex h-12 items-center justify-center px-8 text-sm font-semibold tracking-widest uppercase transition-all duration-200 active:scale-[0.97] ${theme.components.cardRadius} ${theme.components.button}`}>
              {C.event.ctaPrimary}
            </a>
          </div>
        ) : (
          <>
            <div className="mt-8 flex items-center justify-center gap-3 sm:gap-5">
              <Unit value={days} label="dias" theme={theme} />
              <span className={`mt-[-1.5rem] ${theme.fonts.display} text-2xl sm:text-3xl ${theme.tokens.accentText}`}>:</span>
              <Unit value={hours} label="horas" theme={theme} />
              <span className={`mt-[-1.5rem] ${theme.fonts.display} text-2xl sm:text-3xl ${theme.tokens.accentText}`}>:</span>
              <Unit value={minutes} label="min" theme={theme} />
              <span className={`mt-[-1.5rem] ${theme.fonts.display} text-2xl sm:text-3xl ${theme.tokens.accentText}`}>:</span>
              <Unit value={seconds} label="seg" theme={theme} />
            </div>
            <p className={`mt-10 text-sm ${theme.tokens.textMuted}`}>{C.event.ctaSoon}</p>
          </>
        )}
      </div>
    </section>
  );
}
