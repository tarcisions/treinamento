'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import type { ThemeConfig } from '@/themes/types';
import { easeOutExpo } from '@/lib/motion';

export function ThemeGallery({ theme }: { theme: ThemeConfig }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className={`${theme.tokens.bgAlt || theme.tokens.bg} py-20 md:py-28`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className={`text-center ${theme.tokens.text}`}>
          <span className={`text-xs font-medium tracking-[0.3em] uppercase ${theme.tokens.accentText}`}>Galeria</span>
          <h2 className={`${theme.fonts.display} mt-3 text-3xl leading-tight tracking-tight md:text-5xl ${theme.tokens.text}`}>Momentos que inspiram</h2>
        </div>
        <div className="my-12 flex justify-center"><div className={`h-px w-24 ${theme.components.sectionDivider}`} /></div>

        <div className="grid gap-4 sm:grid-cols-2">
          {C.gallery.map((item, i) => (
            <motion.button key={item.src} onClick={() => setActiveIndex(i)}
              className={`group relative aspect-video overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-gold ${theme.components.cardRadius} ${theme.components.cardBorder} ${theme.tokens.bgCard}`}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: easeOutExpo }}>
              <video autoPlay muted loop playsInline suppressHydrationWarning className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105">
                <source src={item.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
            onClick={() => setActiveIndex(null)}>
            <motion.div className={`relative aspect-video w-full max-w-4xl overflow-hidden ${theme.components.cardRadius}`}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: easeOutExpo }} onClick={(e) => e.stopPropagation()}>
              <video autoPlay muted loop playsInline suppressHydrationWarning controls className="h-full w-full object-cover">
                <source src={C.gallery[activeIndex].src} type="video/mp4" />
              </video>
              <button onClick={() => setActiveIndex(null)} className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70" aria-label="Fechar">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
