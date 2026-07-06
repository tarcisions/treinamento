'use client';

import { motion } from 'framer-motion';
import { content } from '@/lib/content';
import { config } from '@/lib/config';
import { useCountdown } from '@/lib/use-countdown';
import { easeOutExpo } from '@/lib/motion';

export function CTAFinal() {
  const { isExpired } = useCountdown(config.eventDate);

  if (isExpired) return null;

  return (
    <section className="relative overflow-hidden bg-night py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/[0.04] via-transparent to-transparent" />
      <div className="mx-auto max-w-3xl px-6 relative z-10 text-center">
        <motion.span
          className="inline-block text-xs font-medium tracking-[0.3em] text-gold uppercase"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          Não fique de fora
        </motion.span>

        <motion.h2
          className="font-display mt-4 text-3xl leading-tight tracking-tight text-cream md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
        >
          Garanta sua vaga no{' '}
          <span className="text-gold">Treino no Deck</span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-sand/70 md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Uma experiência única de movimento, bem-estar e conexão. Vagas limitadas.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
        >
          <a
            href={config.checkoutUrl}
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-sm bg-gold px-10 text-sm font-semibold tracking-widest text-night transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_40px_-5px_#B08D57] active:scale-[0.96] sm:w-auto"
          >
            {content.pricing.cta}
          </a>
          <a
            href="#experience"
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-sm border border-cream/20 px-10 text-sm font-semibold tracking-widest text-cream transition-all duration-200 hover:border-cream/40 active:scale-[0.97] sm:w-auto"
          >
            VER PROGRAMAÇÃO
          </a>
        </motion.div>
      </div>
    </section>
  );
}
