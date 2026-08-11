'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '@/lib/use-countdown';
import { config } from '@/lib/config';
import { content } from '@/lib/content';
import { easeOutExpo } from '@/lib/motion';

export function CountdownSection() {
  const { isExpired } = useCountdown(config.eventDate);
  const sectionRef = useRef<HTMLDivElement>(null);

  if (isExpired) return null;

  return (
    <section id="inscricoes" ref={sectionRef} className="relative overflow-hidden bg-night py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/[0.05] via-transparent to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:max-w-4xl">
        <div className="absolute inset-0 -inset-x-20 -inset-y-10 bg-gold/[0.03] blur-3xl pointer-events-none" />
        <motion.div
          className="relative mt-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05, ease: easeOutExpo }}
        >
          <span className="h-2 w-2 rounded-full bg-gold animate-[progress-pulse_2s_ease-in-out_infinite]" />
          <span className="font-display mt-6 text-6xl font-bold tracking-tight text-gold drop-shadow-[0_0_30px_rgba(176,141,87,0.25)] md:text-8xl">
            {content.pricing.tag}
          </span>
          <div className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <span className="mt-6 text-sm tracking-[0.25em] text-sand/60 uppercase md:text-base">
            Vagas limitadas
          </span>
        </motion.div>

        <motion.div
          className="mt-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-[progress-pulse_2s_ease-in-out_infinite]" />
          <p className="text-sm text-sand/60 animate-[progress-pulse_3s_ease-in-out_infinite]">
            {content.pricing.disclaimer}
          </p>
        </motion.div>

        <motion.a
          href="https://www.sympla.com.br/evento/treino-no-deck-2-edicao/3536173"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[56px] items-center justify-center rounded-sm bg-gold px-12 text-sm font-bold tracking-widest text-night transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_50px_-5px_#B08D57] active:scale-[0.96] md:px-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8, ease: easeOutExpo }}
        >
          {content.pricing.cta}
        </motion.a>
      </div>
    </section>
  );
}
