import type { Variants, Transition } from 'framer-motion';

export const easeOutExpo: Transition['ease'] = [0.16, 1, 0.3, 1] as const;
export const easeInOut: Transition['ease'] = [0.65, 0, 0.35, 1] as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

export const fadeUp = (delay = 0, y = 32, duration = 0.6): Transition => ({
  duration,
  delay,
  ease: easeOutExpo,
});

export const scaleIn: Transition = {
  duration: 0.3,
  ease: easeOutExpo,
};
