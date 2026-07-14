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
          className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gradient-to-r from-gold/[0.08] to-gold/[0.15] px-6 py-2.5 shadow-[0_0_20px_-5px_rgba(176,141,87,0.3)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
        >
          <span className="h-2 w-2 rounded-full bg-gold animate-[progress-pulse_2s_ease-in-out_infinite]" />
          <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
            {content.pricing.tag}
          </span>
        </motion.div>

        <div className="relative mt-8 flex flex-col items-center">
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05, ease: easeOutExpo }}
          >
            <span className="font-display text-lg tracking-wide text-sand/30 line-through decoration-gold/40 decoration-[1px] md:text-xl">
              R$ 285
            </span>
            <div className="relative mt-1 flex items-center justify-center">
              <span className="font-display text-5xl font-bold tracking-tight text-gold md:text-7xl">
                R$ 247
              </span>
              <span className="absolute -right-16 -top-2 rotate-[-12deg] rounded-md border-2 border-dashed border-gold/60 px-2.5 py-1 text-[10px] font-bold tracking-wider text-gold/80 md:-right-20 md:-top-3 md:px-3 md:py-1.5 md:text-xs">
                OFERTA<br />ESPECIAL
              </span>
            </div>
          </motion.div>
          <motion.span
            className="relative mt-1 text-sm tracking-[0.1em] text-sand/60 md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {content.pricing.perPerson}
          </motion.span>
        </div>

        <motion.div
          className="mt-6 flex items-center justify-center gap-2"
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
          href="https://docs.google.com/forms/d/e/1FAIpQLSfdNKxxX2UG7RdHby9y_qoo5ALbeQ8BBZTWcw6W28KAYGvZXw/viewform"
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
