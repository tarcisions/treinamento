'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { content } from '@/lib/content';
import { config } from '@/lib/config';
import { easeOutExpo } from '@/lib/motion';
import { useCountdown } from '@/lib/use-countdown';

function formatEventDate(iso: string) {
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = String(d.getFullYear()).slice(-2);
  return `${day}.${month}.${year}`;
}

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

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-sm border border-gold/30 bg-black/60 backdrop-blur sm:h-20 sm:w-20">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            className="font-display text-xl tracking-tight text-gold sm:text-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: easeOutExpo }}
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-1 text-xs font-medium tracking-[0.2em] text-gold/60 uppercase">
        {label}
      </span>
    </div>
  );
}

function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const inscricoes = document.getElementById('inscricoes');
      if (inscricoes) {
        const rect = inscricoes.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setShow(window.scrollY > window.innerHeight * 0.6 && !isInView);
      } else {
        setShow(window.scrollY > window.innerHeight * 0.6);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/10 bg-night/95 backdrop-blur-md md:hidden"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3, ease: easeOutExpo }}
        >
          <div className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-[progress-pulse_2s_ease-in-out_infinite] sm:h-2 sm:w-2" />
                <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase animate-[progress-pulse_2s_ease-in-out_infinite] sm:text-sm">{config.pricingTag.toLowerCase()}</p>
              </div>
              <p className="mt-0.5 text-[10px] text-sand/50 sm:text-xs">Vagas limitadas</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#inscricoes"
                className="inline-flex h-11 items-center justify-center rounded-sm bg-gold px-6 text-xs font-bold tracking-widest text-night sm:h-12 sm:px-8 sm:text-sm"
              >
                {content.event.ctaPrimary}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { days, hours, minutes, seconds, isReady } = useCountdown(config.eventDate);
  const formattedDate = useMemo(() => formatEventDate(config.eventDate), [config.eventDate]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
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
            className="flex max-w-3xl flex-col items-center gap-5 lg:max-w-4xl"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-medium tracking-[0.3em] text-gold uppercase"
            >
              {content.event.name}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl leading-[1.1] tracking-tight text-cream sm:text-5xl md:text-7xl lg:text-8xl"
            >
              {content.event.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-base leading-relaxed text-sand/80 sm:text-lg"
            >
              {content.event.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-2 flex flex-col items-center gap-5">
              <p className="font-display text-3xl font-bold tracking-wide text-gold sm:text-4xl">
                {formattedDate}
              </p>

              {isReady && (
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[10px] font-medium tracking-[0.3em] text-gold/60 uppercase">
                    Faltam apenas
                  </span>
                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <Unit value={days} label="dias" />
                    <span className="self-center font-display text-xl text-gold sm:text-3xl">:</span>
                    <Unit value={hours} label="horas" />
                    <span className="self-center font-display text-xl text-gold sm:text-3xl">:</span>
                    <Unit value={minutes} label="min" />
                    <span className="self-center font-display text-xl text-gold sm:text-3xl">:</span>
                    <Unit value={seconds} label="seg" />
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 pt-2 sm:flex-row">
              <a
                href="#inscricoes"
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
              <span className="text-[11px] font-medium tracking-[0.2em] text-sand/50 uppercase sm:text-xs">Scroll</span>
              <div className="h-8 w-px bg-gradient-to-b from-gold/40 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <StickyCTA />
    </>
  );
}
