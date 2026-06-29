'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '@/lib/content';
import { easeOutExpo } from '@/lib/motion';
import { SectionDivider } from '@/components/shared/section-divider';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-night py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Galeria
          </span>
          <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight text-cream md:text-5xl">
            Momentos que inspiram
          </h2>
        </ScrollReveal>

        <SectionDivider />

        <div
          ref={ref}
          className="grid gap-4 sm:grid-cols-2"
        >
          {content.gallery.map((item, i) => (
            <motion.button
              key={item.src}
              onClick={() => setActiveIndex(i)}
              className="group relative aspect-video overflow-hidden rounded-sm border border-cream/5 bg-charcoal outline-none focus-visible:ring-2 focus-visible:ring-gold"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: easeOutExpo,
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                suppressHydrationWarning
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
              >
                <source src={item.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 backdrop-blur-sm">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                suppressHydrationWarning
                controls
                className="h-full w-full object-cover"
              >
                <source src={content.gallery[activeIndex].src} type="video/mp4" />
              </video>
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                aria-label="Fechar galeria"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
