'use client';

import { config } from '@/lib/config';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import type { ThemeConfig } from '@/themes/types';

export function ThemeFooter({ theme }: { theme: ThemeConfig }) {
  return (
    <footer className={`border-t ${theme.tokens.borderLight} ${theme.tokens.bg} py-12 md:py-16`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className={`flex flex-col items-center gap-6 text-center md:gap-8 ${theme.tokens.text}`}>
          <div className={`flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase ${theme.tokens.textMuted}`}>
            <span>Body Wise</span>
            <span className={theme.tokens.accentText}>·</span>
            <span>Le Buffet Lounge</span>
          </div>
          <div className="flex gap-6">
            <a href={config.instagramBodywise} target="_blank" rel="noopener noreferrer"
              className={`text-xs tracking-wider uppercase transition-colors ${theme.tokens.textMuted} hover:${theme.tokens.accentText}`}>@bodywise</a>
            <a href={config.instagramLebuffet} target="_blank" rel="noopener noreferrer"
              className={`text-xs tracking-wider uppercase transition-colors ${theme.tokens.textMuted} hover:${theme.tokens.accentText}`}>@lebuffet</a>
          </div>
          <div className={`text-xs leading-relaxed ${theme.tokens.textMuted}`}>
            <p>{config.eventAddress}</p>
            <p className="mt-1">{C.event.name}</p>
          </div>
          <div className="pt-4">
            <p className={`text-[10px] tracking-[0.25em] uppercase ${theme.tokens.accentText}`}>{C.microcopy[2]}</p>
          </div>
          <div className={`w-full max-w-xs border-t ${theme.tokens.borderLight} pt-4`}>
            <p className={`text-[10px] ${theme.tokens.textMuted}`}>TREINO NO DECK &mdash; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
