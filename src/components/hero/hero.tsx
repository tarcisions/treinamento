'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { content } from '@/lib/content';
import { easeOutExpo } from '@/lib/motion';

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-svh min-h-screen overflow-hidden"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          suppressHydrationWarning
          className="h-full w-full object-cover"
        >
          <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/40" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex max-w-3xl flex-col items-center gap-5"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-medium tracking-[0.3em] text-gold uppercase"
          >
            {content.event.name}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl leading-[1.1] tracking-tight text-cream sm:text-7xl md:text-8xl lg:text-9xl"
          >
            {content.event.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-sand/80 sm:text-lg"
          >
            {content.event.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-4 pt-4 sm:flex-row"
          >
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-gold px-8 text-sm font-semibold tracking-widest text-night transition-all duration-200 hover:bg-gold-light hover:shadow-[0_0_30px_-5px_#B08D57] active:scale-[0.97]"
            >
              {content.event.ctaPrimary}
            </a>
            <a
              href="#experience"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-cream/20 px-8 text-sm font-semibold tracking-widest text-cream transition-all duration-200 hover:border-cream/40 active:scale-[0.97]"
            >
              {content.event.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-[10px] font-medium tracking-[0.2em] text-sand/50 uppercase">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-gold/40 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
