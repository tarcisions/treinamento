'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '@/lib/content';
import { easeOutExpo } from '@/lib/motion';
import { SectionDivider } from '@/components/shared/section-divider';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="timeline" className="bg-night py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Cronograma
          </span>
          <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight text-cream md:text-5xl">
            Seu dia, momento a momento
          </h2>
        </ScrollReveal>

        <SectionDivider />

          <div className="relative mx-auto max-w-3xl md:max-w-4xl">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/10 to-transparent md:left-[9px]" />
          {content.timeline.map((item, i) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: easeOutExpo,
              }}
            >
              <div className="group relative py-3 md:py-4">
                <div className="flex items-center gap-3">
                  <span className="text-gold/30">◆</span>
                  <span className="font-display text-lg tracking-tight text-gold md:text-xl">
                    {item.time}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent" />
                </div>
                <div className="ml-6 mt-1.5">
                  {Array.isArray(item.label) ? (
                    item.label.map((line, li) => (
                      <p key={li} className={li > 0 ? 'text-sm leading-relaxed text-sand/50' : 'text-sm leading-relaxed text-cream/80 md:text-base'}>
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm leading-relaxed text-cream/80 md:text-base">
                      {item.label}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
