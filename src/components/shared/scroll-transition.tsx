'use client';

import { useRef, useState, useEffect, ReactNode } from 'react';

interface ScrollTransitionProps {
  children: ReactNode;
  className?: string;
}

export function ScrollTransition({ children, className = '' }: ScrollTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
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
      setProgress(Math.max(0, 1 - dist / maxDist));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const opacity = Math.min(1, progress * 1.8);
  const scale = 0.92 + progress * 0.08;
  const blur = Math.max(0, (1 - progress) * 6);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity,
        transform: `scale(${scale})`,
        filter: `blur(${blur}px)`,
        transition: 'opacity 0.2s, transform 0.2s, filter 0.2s',
      }}
    >
      {children}
    </div>
  );
}