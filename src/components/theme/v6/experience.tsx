'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import { easeOutExpo } from '@/lib/motion';

export function V6Experience() {
  return (
    <section id="exp6" className="bg-[#1A1D21] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between border-b border-[#E8EAED]/5 pb-4">
          <div>
            <p className="text-[10px] font-medium tracking-[0.4em] text-[#5B8DEF]/60 uppercase">Experience</p>
            <h2 className="font-space-grotesk mt-1 text-2xl text-[#E8EAED] md:text-3xl">O que esperar</h2>
          </div>
          <span className="text-[10px] font-mono text-[#E8EAED]/20">{C.experience.length} itens</span>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {C.experience.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.04, ease: easeOutExpo }}
              className="group border border-[#E8EAED]/5 bg-[#22262B]/50 p-5 transition-all duration-200 hover:border-[#5B8DEF]/20 hover:bg-[#22262B]">
              <div className="flex items-center justify-between">
                <span className="text-lg">{item.icon}</span>
                <span className="font-mono text-[10px] text-[#E8EAED]/15">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-space-grotesk mt-3 text-sm font-semibold text-[#E8EAED]">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#E8EAED]/40">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
