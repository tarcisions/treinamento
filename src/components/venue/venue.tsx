'use client';

import { motion } from 'framer-motion';
import { content } from '@/lib/content';
import { config } from '@/lib/config';
import { SectionDivider } from '@/components/shared/section-divider';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { easeOutExpo } from '@/lib/motion';

export function Venue() {
  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-[0.3em] text-gold uppercase">
            O Encontro
          </span>
          <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight text-cream md:text-5xl">
            {content.venue.name}
          </h2>
        </ScrollReveal>

        <SectionDivider />

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {content.venue.partners.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 0.1}>
              <div className="group rounded-sm border border-cream/5 bg-night/50 p-6 backdrop-blur transition-all duration-300 hover:border-gold/20 md:p-8">
                <span className="text-xs font-medium tracking-[0.25em] text-gold uppercase">
                  {partner.subtitle}
                </span>
                <h3 className="font-display mt-2 text-2xl leading-tight tracking-tight text-cream md:text-3xl">
                  {partner.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-sand/70">
                  {partner.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs text-sand/40">
                  <svg className="h-3.5 w-3.5 flex-shrink-0 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>{partner.address}</span>
                </div>
                <a
                  href={i === 0 ? config.bodywiseMapsUrl : config.eventMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wider text-gold/60 transition-colors hover:text-gold uppercase"
                >
                  Ver no mapa
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 rounded-sm border border-cream/5 bg-night/30 p-6 backdrop-blur md:p-8">
            <p className="text-sm leading-relaxed text-sand/60 md:text-base">
              {content.venue.description}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              {content.venue.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2 text-xs text-sand/50">
                  <span className="mt-1.5 h-px w-3 flex-shrink-0 bg-gold/40" />
                  {h}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
