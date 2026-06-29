'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import { easeOutExpo } from '@/lib/motion';

export function V2Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="exp" className="overflow-hidden bg-cream py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl leading-tight tracking-tight text-charcoal md:text-5xl">
          A experiência
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }} className="mt-3 text-sm text-charcoal/40 max-w-md">
          {C.microcopy[0]}
        </motion.p>
      </div>

      <div className="mt-12 flex gap-5 overflow-x-auto px-6 pb-6 snap-x snap-mandatory scrollbar-none md:px-12">
        {C.experience.map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.06, ease: easeOutExpo }}
            className="group flex w-[280px] flex-shrink-0 snap-center flex-col rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md md:w-[320px] md:p-8">
            <span className="text-3xl">{item.icon}</span>
            <h3 className="font-display mt-4 text-lg leading-snug text-charcoal">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/40">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
