'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import { easeOutExpo } from '@/lib/motion';

export function V10Experience() {
  return (
    <section id="exp10" className="bg-[#3A3733] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-b border-[#C9A227]/20 pb-4 mb-12">
          <p className="text-[9px] font-medium tracking-[0.4em] text-[#C9A227]/60 uppercase">A Experiência</p>
          <h2 className="font-sora mt-1 text-2xl font-bold text-[#EDE9E3] md:text-3xl">O que esperar</h2>
        </div>

        <div className="grid gap-px bg-[#C9A227]/10 md:grid-cols-2 lg:grid-cols-3">
          {C.experience.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05, ease: easeOutExpo }}
              className="bg-[#3A3733] p-6 transition-all duration-300 hover:bg-[#2F2D29] md:p-8">
              <div className="flex items-start justify-between">
                <span className="text-lg">{item.icon}</span>
                <span className="font-mono text-[10px] text-[#C9A227]/30">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-sora mt-4 text-base font-semibold text-[#EDE9E3]">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#EDE9E3]/40">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
