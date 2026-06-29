'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import { easeOutExpo } from '@/lib/motion';

export function V7Experience() {
  return (
    <section id="exp7" className="bg-[#F7F3EC] py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="text-[9px] font-medium tracking-[0.5em] text-[#C9B79C] uppercase">A Experiência</span>
          <h2 className="font-cormorant mt-4 text-4xl font-light tracking-tight text-[#2C2420] md:text-5xl">O que esperar</h2>
          <div className="mx-auto mt-6 h-px w-12 bg-[#C9B79C]/30" />
        </div>

        <div className="mt-20 space-y-8">
          {C.experience.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.05, ease: easeOutExpo }}
              className="group flex items-start gap-6 border-b border-[#2C2420]/5 pb-8 transition-colors hover:border-[#C9B79C]/20 md:gap-10 md:pb-10">
              <span className="text-2xl md:text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-cormorant text-xl text-[#2C2420] md:text-2xl">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#2C2420]/40 tracking-wide max-w-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
