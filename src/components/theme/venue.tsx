'use client';

import { motion } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import { config } from '@/lib/config';
import type { ThemeConfig } from '@/themes/types';
import { easeOutExpo } from '@/lib/motion';

export function ThemeVenue({ theme }: { theme: ThemeConfig }) {
  return (
    <section className={`${theme.tokens.bgAlt || theme.tokens.bg} py-20 md:py-28`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className={`text-center ${theme.tokens.text}`}>
          <span className={`text-xs font-medium tracking-[0.3em] uppercase ${theme.tokens.accentText}`}>O Encontro</span>
          <h2 className={`${theme.fonts.display} mt-3 text-3xl leading-tight tracking-tight md:text-5xl ${theme.tokens.text}`}>{C.venue.name}</h2>
        </div>
        <div className="my-12 flex justify-center"><div className={`h-px w-24 ${theme.components.sectionDivider}`} /></div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {C.venue.partners.map((partner, i) => (
            <div key={partner.name} className={`group p-6 backdrop-blur transition-all duration-300 hover:border-gold/20 md:p-8 ${theme.components.cardRadius} ${theme.components.cardBorder} ${theme.tokens.bgCard} ${theme.components.cardHover}`}>
              <span className={`text-xs font-medium tracking-[0.25em] uppercase ${theme.tokens.accentText}`}>{partner.subtitle}</span>
              <h3 className={`${theme.fonts.display} mt-2 text-2xl leading-tight tracking-tight md:text-3xl ${theme.tokens.text}`}>{partner.name}</h3>
              <p className={`mt-4 text-sm leading-relaxed ${theme.tokens.textMuted}`}>{partner.description}</p>
              <div className={`mt-5 flex items-center gap-2 text-xs ${theme.tokens.textMuted}`}>
                <svg className={`h-3.5 w-3.5 flex-shrink-0 ${theme.tokens.accentText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>{partner.address}</span>
              </div>
              <a href={i === 0 ? config.bodywiseMapsUrl : config.eventMapsUrl} target="_blank" rel="noopener noreferrer"
                className={`mt-3 inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wider uppercase transition-colors ${theme.tokens.accentText} hover:opacity-80`}>
                Ver no mapa <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-6 backdrop-blur md:p-8 ${theme.components.cardRadius} ${theme.components.cardBorder} ${theme.tokens.bgCard}`}>
          <p className={`text-sm leading-relaxed md:text-base ${theme.tokens.textMuted}`}>{C.venue.description}</p>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {C.venue.highlights.map((h) => (
              <div key={h} className={`flex items-start gap-2 text-xs ${theme.tokens.textMuted}`}>
                <span className={`mt-1.5 h-px w-3 flex-shrink-0 ${theme.components.sectionDivider}`} />
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
