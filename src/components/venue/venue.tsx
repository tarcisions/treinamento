'use client';

import { motion } from 'framer-motion';
import { content } from '@/lib/content';
import { SectionDivider } from '@/components/shared/section-divider';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { easeOutExpo } from '@/lib/motion';

export function Venue() {
  return (
    <section className="bg-night py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-[0.3em] text-gold uppercase">
            O Encontro
          </span>
          <h2 className="font-display mt-2 text-3xl leading-tight tracking-tight text-cream md:text-5xl">
            {content.venue.name}
          </h2>
        </ScrollReveal>

        <SectionDivider />

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {content.venue.partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              className="flex flex-col rounded-sm border border-cream/5 bg-night/50 p-5 backdrop-blur md:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: easeOutExpo }}
            >
              <span className="text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
                {partner.subtitle}
              </span>
              <h3 className="font-display mt-1 text-xl leading-tight tracking-tight text-cream md:text-2xl">
                {partner.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/60">
                {partner.description}
              </p>
              <a
                href={partner.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs text-gold/50 transition-colors hover:text-gold"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                @{partner.instagram?.split('/').slice(-2, -1)[0] || 'instagram'}
              </a>
              {partner.mapsUrl && (
                <div className="mt-1 flex items-center gap-2 text-xs text-sand/40">
                  <svg className="h-3 w-3 flex-shrink-0 text-gold/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="flex-1">{partner.address}</span>
                  <a
                    href={partner.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 font-medium tracking-wider text-gold/40 transition-colors hover:text-gold uppercase"
                  >
                    Ver no mapa
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-6 text-center">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
              <span className="text-[10px] font-medium tracking-[0.35em] text-gold/70 uppercase">Sobre o evento</span>
              <div className="h-px flex-1 bg-gradient-to-l from-gold/30 to-transparent" />
            </div>
            <p className="text-sm leading-relaxed text-sand/70 max-w-3xl mx-auto md:text-base">
              {content.venue.description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="relative mt-8 overflow-hidden rounded-sm border border-gold/10 min-h-[60vh] md:min-h-[70vh]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster={content.spaceSection.poster}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={content.spaceSection.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase drop-shadow-[0_1px_6px_rgba(0,0,0,1)]">
                  {content.spaceSection.venue}
                </span>
                <div className="h-px w-8 bg-gold/70" />
              </div>
              <h3 className="font-display mt-2 text-2xl leading-tight tracking-tight text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,1)] md:text-4xl">
                {content.spaceSection.title}
              </h3>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {content.venue.highlights.map((h) => (
              <span key={h} className="inline-flex items-center gap-1.5 rounded-full border border-gold/15 bg-gold/[0.04] px-3 py-1.5 text-[11px] font-medium text-sand/60">
                <span className="h-1 w-1 rounded-full bg-gold/50" />
                {h}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
