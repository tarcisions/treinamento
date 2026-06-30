'use client';

import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '@/lib/use-countdown';
import { config } from '@/lib/config';
import { content } from '@/lib/content';
import { easeOutExpo } from '@/lib/motion';

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-sm border border-cream/10 bg-charcoal/80 backdrop-blur sm:h-24 sm:w-24">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            className="font-display text-3xl tracking-tight text-cream sm:text-4xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: easeOutExpo }}
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-xs font-medium tracking-[0.2em] text-sand/50 uppercase">
        {label}
      </span>
    </div>
  );
}

export function CountdownSection() {
  const { days, hours, minutes, seconds, isExpired, isReady } = useCountdown(config.eventDate);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="inscricoes" ref={sectionRef} className="bg-night py-20 md:py-28">
      <div className="mx-auto max-w-lg px-6 text-center">
        <p className="font-display mt-2 text-2xl font-bold tracking-wide text-gold md:text-3xl">
          22.08.26
        </p>

        <span className="mt-3 text-xs font-medium tracking-[0.3em] text-gold uppercase">
          {isExpired ? 'VAGAS ABERTAS' : 'FALTAM APENAS'}
        </span>

        {!isReady ? (
          <div className="mt-4 flex items-center justify-center gap-2">
            {['dias', 'horas', 'min', 'seg'].map((l) => (
              <div key={l} className="flex h-16 w-16 animate-pulse items-center justify-center rounded-sm border border-cream/10 bg-charcoal/80 sm:h-20 sm:w-20" />
            ))}
          </div>
        ) : isExpired ? (
          <div className="mt-4 space-y-4">
            <p className="font-display text-xl text-cream md:text-2xl">O grande dia chegou!</p>
            <a
              href={config.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-sm bg-gold px-7 text-xs font-semibold tracking-widest text-night transition-all hover:bg-gold-light active:scale-[0.97]"
            >
              {content.event.ctaPrimary}
            </a>
          </div>
        ) : (
          <div className="mt-4 flex items-center justify-center gap-3 sm:gap-5">
            <Unit value={days} label="dias" />
            <span className="self-center font-display text-2xl text-gold/40 sm:text-3xl">:</span>
            <Unit value={hours} label="horas" />
            <span className="self-center font-display text-2xl text-gold/40 sm:text-3xl">:</span>
            <Unit value={minutes} label="min" />
            <span className="self-center font-display text-2xl text-gold/40 sm:text-3xl">:</span>
            <Unit value={seconds} label="seg" />
          </div>
        )}

        {!isExpired && (
          <div className="mt-10 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-sm border border-gold/25 bg-gold/[0.06] px-6 py-3.5 text-xs font-semibold tracking-[0.25em] text-gold/80 uppercase">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
              {content.event.ctaSoon}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
