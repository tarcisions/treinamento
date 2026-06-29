'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import { easeOutExpo } from '@/lib/motion';

export function V9Experience() {
  return (
    <section id="exp9" className="py-20 md:py-28" style={{ background: 'linear-gradient(180deg, #1a1418 0%, #2a1f25 100%)' }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-[#F2C9A0]/60 uppercase">A Experiência</span>
          <h2 className="font-sora mt-3 text-3xl leading-tight tracking-tight text-[#F2E8E0] md:text-5xl">O que esperar</h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {C.experience.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05, ease: easeOutExpo }}
              className="group rounded-xl border border-[#F2E8E0]/5 bg-white/[0.03] p-6 backdrop-blur transition-all duration-300 hover:border-[#F2C9A0]/15 hover:bg-white/[0.06] md:p-8"
              style={{ background: i % 2 === 0 ? 'linear-gradient(135deg, rgba(242,201,160,0.05), rgba(217,199,224,0.05))' : 'linear-gradient(135deg, rgba(176,141,87,0.05), rgba(242,201,160,0.05))' }}>
              <span className="text-2xl">{item.icon}</span>
              <h3 className="font-sora mt-4 text-lg leading-snug text-[#F2E8E0]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#F2E8E0]/40">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
