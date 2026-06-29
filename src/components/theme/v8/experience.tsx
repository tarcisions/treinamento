'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import { easeOutExpo } from '@/lib/motion';

export function V8Experience() {
  return (
    <section id="exp8" className="bg-[#0A0A0A] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-anton text-7xl leading-none text-[#FF6B00]/20">01</span>
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#FF6B00]/60 uppercase">A Experiência</p>
            <h2 className="font-anton mt-1 text-3xl uppercase text-white md:text-4xl">O que esperar</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {C.experience.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.04, ease: easeOutExpo }}
              className="group border-l-4 border-[#FF6B00] bg-[#161616] p-6 transition-all duration-200 hover:bg-[#FF6B00]/5 md:p-8">
              <div className="flex items-center justify-between">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-anton text-xs text-white/10">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-anton mt-4 text-lg uppercase tracking-wide text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/40">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
