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
    <section ref={ref} className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Cronograma
          </span>
          <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight text-cream md:text-5xl">
            Sua manhã, momento a momento
          </h2>
        </ScrollReveal>

        <SectionDivider />

        <div className="relative">
          <motion.div
            className="absolute left-[19px] top-0 h-full w-px bg-cream/10 md:left-[23px]"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-0">
            {content.timeline.map((item, i) => (
              <motion.div
                key={item.time}
                className="relative flex items-start gap-5 pb-8 pl-12 md:gap-6 md:pb-10"
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.div
                  className="absolute left-0 top-1.5 z-10 h-2.5 w-2.5 rounded-full border-2 border-gold bg-night md:h-3 md:w-3"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.1 + 0.15,
ease: easeOutExpo,
                  }}
                />
                <span className="w-14 flex-shrink-0 pt-0.5 font-display text-lg tracking-tight text-gold md:w-16 md:text-xl">
                  {item.time}
                </span>
                <p className="pt-0.5 text-sm leading-relaxed text-sand/70 md:text-base">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
