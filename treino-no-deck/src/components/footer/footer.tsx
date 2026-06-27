'use client';

import { config } from '@/lib/config';
import { content } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-cream/5 bg-night py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 text-center md:gap-8">
          <div className="flex items-center gap-3 text-xs font-medium tracking-[0.15em] text-sand/40 uppercase">
            <span>Body Wise</span>
            <span className="text-gold/30">·</span>
            <span>Le Buffet Lounge</span>
          </div>

          <div className="flex gap-6">
            <a
              href={config.instagramBodywise}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-wider text-sand/50 transition-colors hover:text-gold uppercase"
            >
              @bodywise
            </a>
            <a
              href={config.instagramLebuffet}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-wider text-sand/50 transition-colors hover:text-gold uppercase"
            >
              @lebuffet
            </a>
          </div>

          <div className="text-xs leading-relaxed text-sand/30">
            <p>{config.eventAddress}</p>
            <p className="mt-1">{content.event.name}</p>
          </div>

          <div className="pt-4">
            <p className="text-[10px] tracking-[0.25em] text-gold/30 uppercase">
              {content.microcopy[2]}
            </p>
          </div>

          <div className="pt-4 border-t border-cream/5 w-full max-w-xs">
            <p className="text-[10px] text-sand/20">
              TREINO NO DECK &mdash; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
