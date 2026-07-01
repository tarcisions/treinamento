'use client';

import { useRef } from 'react';
import { useCountdown } from '@/lib/use-countdown';
import { config } from '@/lib/config';
import { content } from '@/lib/content';

export function CountdownSection() {
  const { isExpired } = useCountdown(config.eventDate);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="inscricoes" ref={sectionRef} className="bg-night py-20 md:py-28">
      <div className="mx-auto max-w-lg px-6 text-center">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-3 whitespace-nowrap rounded-sm border border-gold/25 bg-gold/[0.06] px-6 py-4 text-base font-semibold tracking-[0.25em] text-gold/80 uppercase md:gap-4 md:px-10 md:py-5 md:text-xl">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            {content.event.ctaSoon}
          </span>
        </div>
      </div>
    </section>
  );
}
