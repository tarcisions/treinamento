'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { easeOutExpo } from '@/lib/motion';

export function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="flex justify-center py-12 md:py-16">
      <motion.div
        className="h-px w-24 bg-gold/40"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: easeOutExpo }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  );
}
