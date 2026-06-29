'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import { easeOutExpo } from '@/lib/motion';

export function V4Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="exp4" ref={ref} className="bg-black py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="mb-16 md:mb-24">
          <span className="text-[10px] font-medium tracking-[0.4em] text-white/20 uppercase">A Experiência</span>
          <h2 className="font-display mt-4 text-4xl leading-tight tracking-tight text-white md:text-6xl">O que esperar</h2>
          <div className="mt-4 h-px w-16 bg-white/20" />
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {C.experience.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeOutExpo }}
              className={`flex flex-col gap-6 md:items-start md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="flex-shrink-0 text-5xl md:w-1/3 md:text-7xl">
                <span className="block border border-white/10 p-6 text-center">{item.icon}</span>
              </div>
              <div className="md:w-2/3 md:pt-4">
                <span className="font-mono text-[10px] text-white/20">{String(i + 1).padStart(2, '0')}</span>
                <h3 className={`font-display mt-2 text-2xl leading-snug tracking-tight text-white md:text-4xl ${i % 2 === 0 ? '' : 'md:text-right'}`}>
                  {item.title}
                </h3>
                <p className={`mt-3 max-w-lg text-sm leading-relaxed text-white/40 ${i % 2 === 0 ? '' : 'md:text-right md:ml-auto'}`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
