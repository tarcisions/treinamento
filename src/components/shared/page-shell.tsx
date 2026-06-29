'use client';

import { ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import type { ThemeConfig } from '@/themes/types';

export function PageShell({ theme, children }: { theme: ThemeConfig; children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className={`${theme.tokens.bg} ${theme.tokens.text} ${theme.fonts.body} min-h-screen`}>
        {children}
      </div>
    </MotionConfig>
  );
}
