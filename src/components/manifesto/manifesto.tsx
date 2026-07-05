'use client';

import { useRef, Fragment } from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '@/lib/content';
import { easeOutExpo } from '@/lib/motion';

function highlight(text: string) {
  const parts = text.split(/(<gold>.*?<\/gold>)/g);
  return parts.map((part, i) => {
    if (part.startsWith('<gold>')) {
      return <span key={i} className="text-gold">{part.replace('<gold>', '').replace('</gold>', '')}</span>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section className="relative overflow-hidden bg-night py-28 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] via-transparent to-gold/[0.01]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-8 text-center">
        <div className="space-y-2">
          {content.manifesto.map((line, i) => {
            if (line.text === null) {
              return <div key={i} className="h-6 md:h-8" />;
            }

            const size =
              line.size === 'xl' ? 'text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight' :
              line.size === 'lg' ? 'text-xl md:text-3xl font-display font-semibold leading-snug' :
              line.size === 'sm' ? 'text-sm tracking-[0.3em] text-gold/50 uppercase' :
              'text-lg md:text-2xl font-display font-light leading-snug text-cream/90';

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: easeOutExpo,
                }}
              >
                <p className={size}>{highlight(line.text)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
