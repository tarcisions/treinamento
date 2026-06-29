'use client';

import { useRef, Fragment } from 'react';
import { motion, useInView } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import type { ThemeConfig } from '@/themes/types';
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

export function ThemeManifesto({ theme }: { theme: ThemeConfig }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section className={`relative overflow-hidden ${theme.tokens.bg} py-28 md:py-40`}>
      <div className="absolute inset-0 opacity-[0.03]">
        <video autoPlay muted loop playsInline suppressHydrationWarning className="h-full w-full object-cover">
          <source src="/assets/videos/sunrise-loop.mp4" type="video/mp4" />
        </video>
      </div>

      <div ref={ref} className={`relative z-10 mx-auto max-w-6xl px-8 text-center ${theme.tokens.text}`}>
        <div className="space-y-1">
          {C.manifesto.map((line, i) => {
            if (line.text === null) return <div key={i} className="h-4 md:h-5" />;

            const size =
              line.size === 'xl' ? 'text-4xl md:text-7xl font-bold leading-tight tracking-tight' :
              line.size === 'lg' ? 'text-xl md:text-3xl font-semibold leading-snug' :
              line.size === 'sm' ? 'text-sm tracking-[0.3em] uppercase' :
              'text-lg md:text-2xl font-light leading-snug';

            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: easeOutExpo }}>
                <p className={`${theme.fonts.display} ${size} ${line.size === 'sm' ? theme.tokens.accentText : ''}`}>
                  {highlight(line.text)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
