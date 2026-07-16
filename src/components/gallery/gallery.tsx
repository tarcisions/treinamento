'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '@/lib/content';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

const tags = ['01', '02', '03'];

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const vh = window.innerHeight;
      const dist = Math.abs(center - vh / 2);
      const maxDist = vh;
      const p = Math.max(0, 1 - dist / maxDist);
      setProgress(p);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [ref]);

  return progress;
}

function VideoBlock({ item, index }: { item: typeof content.gallery[number]; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progress = useScrollProgress(sectionRef);
  const [open, setOpen] = useState(false);

  const isVisible = progress > 0.1;

  useEffect(() => {
    if (!videoRef.current) return;
    if (isVisible) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isVisible]);

  const opacity = Math.min(1, progress * 2);
  const scale = 0.85 + progress * 0.15;
  const blur = Math.max(0, (1 - progress) * 8);

  return (
    <>
      <div
        ref={sectionRef}
        className="relative flex min-h-[60vh] items-end overflow-hidden md:min-h-[70vh]"
        style={{
          opacity,
          transform: `scale(${scale})`,
          filter: `blur(${blur}px)`,
          transition: 'opacity 0.15s, transform 0.15s, filter 0.15s',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          suppressHydrationWarning
          preload="metadata"
          poster={item.poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
            <source src={item.src} type="video/mp4" suppressHydrationWarning />
          </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

        <button
          onClick={() => setOpen(true)}
          className="group relative z-10 w-full outline-none"
          aria-label={item.alt}
        >
          <div className="mx-auto max-w-6xl px-6 pb-12 md:pb-20">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase drop-shadow-[0_1px_6px_rgba(0,0,0,1)]">
                  {item.tag}
                </span>
                <div className="h-px w-8 bg-gold/70" />
                <span className="text-[10px] font-medium tracking-[0.15em] text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,1)]">
                  {tags[index]}
                </span>
              </div>
              <h3 className="font-display mt-3 text-2xl leading-tight tracking-tight text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,1)] md:text-4xl">
                {item.label}
              </h3>
            </div>

          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
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
                preload={index === 0 ? 'metadata' : 'none'}
                poster={item.poster}
                className="h-full w-full object-cover"
              >
                <source src={item.src} type="video/mp4" suppressHydrationWarning />
              </video>
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-105"
                aria-label="Fechar"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Gallery() {
  return (
    <section className="bg-night">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="h-px w-0 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
              animate={{ width: '3rem' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.h2
              className="font-display text-4xl leading-tight tracking-tight text-cream md:text-6xl"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
              }}
            >
              <motion.span
                className="inline-block mr-3"
                variants={{
                  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Assim foi a nossa
              </motion.span>
              <motion.span
                className="relative inline-block text-gold"
                variants={{
                  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                primeira edição
              </motion.span>
            </motion.h2>
          </div>
        </ScrollReveal>
      </div>

      <div className="flex flex-col">
        {content.gallery.map((item, i) => (
          <VideoBlock key={item.src} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}