'use client';

import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '@/lib/use-countdown';
import { config } from '@/lib/config';
import { content } from '@/lib/content';
import { easeOutExpo } from '@/lib/motion';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

interface UnitProps {
  value: number;
  label: string;
}

function Unit({ value, label }: UnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm border border-cream/10 bg-charcoal/80 backdrop-blur sm:h-20 sm:w-20">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            className="font-display text-2xl tracking-tight text-cream sm:text-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: easeOutExpo }}
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-[10px] font-medium tracking-[0.2em] text-sand/50 uppercase">
        {label}
      </span>
    </div>
  );
}

export function CountdownSection() {
  const { days, hours, minutes, seconds, isExpired, isReady } = useCountdown(config.eventDate);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="bg-night py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-[0.3em] text-gold uppercase">
            {isExpired ? 'VAGAS ABERTAS' : 'FALTAM APENAS'}
          </span>
        </ScrollReveal>

        {!isReady ? (
          <div className="mt-8 flex items-center justify-center gap-3">
            {['dias', 'horas', 'min', 'seg'].map((l) => (
              <div
                key={l}
                className="flex h-16 w-16 animate-pulse items-center justify-center rounded-sm border border-cream/10 bg-charcoal/80 sm:h-20 sm:w-20"
              />
            ))}
          </div>
        ) : isExpired ? (
          <div className="mt-10 space-y-4">
            <p className="font-display text-2xl text-cream md:text-3xl">
              O grande dia chegou!
            </p>
            <a
              href={config.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-gold px-8 text-sm font-semibold tracking-widest text-night transition-all duration-200 hover:bg-gold-light hover:shadow-[0_0_30px_-5px_#B08D57] active:scale-[0.97]"
            >
              {content.event.ctaPrimary}
            </a>
          </div>
        ) : (
          <>
            <div className="mt-8 flex items-center justify-center gap-3 sm:gap-5">
              <Unit value={days} label="dias" />
              <span className="mt-[-1.5rem] font-display text-2xl text-gold/40 sm:text-3xl">:</span>
              <Unit value={hours} label="horas" />
              <span className="mt-[-1.5rem] font-display text-2xl text-gold/40 sm:text-3xl">:</span>
              <Unit value={minutes} label="min" />
              <span className="mt-[-1.5rem] font-display text-2xl text-gold/40 sm:text-3xl">:</span>
              <Unit value={seconds} label="seg" />
            </div>

            <ScrollReveal delay={0.3}>
              <p className="mt-10 text-sm text-sand/60">
                {content.event.ctaSoon}
              </p>
            </ScrollReveal>
          </>
        )}
      </div>
    </section>
  );
}
