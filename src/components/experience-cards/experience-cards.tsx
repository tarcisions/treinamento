'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '@/lib/content';
import { easeOutExpo } from '@/lib/motion';
import { SectionDivider } from '@/components/shared/section-divider';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

export function ExperienceCards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="bg-night py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-[0.3em] text-gold uppercase">
            A Experiência
          </span>
          <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight text-cream md:text-5xl">
            O que vem na{' '}
            <span className="text-gold">segunda edição</span>
          </h2>
        </ScrollReveal>

        <SectionDivider />

        <div
          ref={ref}
          className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {content.experience.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative rounded-sm border border-cream/5 bg-charcoal/50 p-6 backdrop-blur transition-all duration-300 hover:border-gold/20 hover:bg-charcoal/80 hover:shadow-[0_0_30px_-10px_#B08D57] md:p-8"
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: easeOutExpo,
              }}
            >
              {item.title === 'Momento Glow' && (
                <span className="absolute -top-2.5 right-4 rounded-full bg-gradient-to-r from-gold to-amber-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-night shadow-lg">
                  🔥 Exclusivo para os 20 primeiros
                </span>
              )}
              <span className="text-2xl" role="img" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="font-display mt-4 text-lg leading-snug text-cream md:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
