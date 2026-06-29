'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import { easeOutExpo } from '@/lib/motion';

export function V5Experience() {
  return (
    <section id="exp5" className="bg-[#F4E9DA] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-[#E0876A] uppercase">A Experiência</span>
          <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight text-[#2C2420] md:text-5xl">O que esperar</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#E0876A]/30" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {C.experience.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06, ease: easeOutExpo }}
              className="group rounded-2xl border border-[#2C2420]/5 bg-white/60 p-6 backdrop-blur transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#E0876A]/5 md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E0876A]/10 text-2xl group-hover:bg-[#E0876A]/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-display mt-4 text-lg leading-snug text-[#2C2420]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#2C2420]/50">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
