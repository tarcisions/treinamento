'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '@/lib/content';
import { easeOutExpo } from '@/lib/motion';
import { SectionDivider } from '@/components/shared/section-divider';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-cream/5">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left outline-none transition-colors hover:text-gold focus-visible:text-gold md:py-6"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium leading-snug text-cream md:text-base">
          {question}
        </span>
        <motion.svg
          className="h-3 w-3 flex-shrink-0 text-gold/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: easeOutExpo }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-sand/60 md:pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-[0.3em] text-gold uppercase">
            FAQ
          </span>
          <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight text-cream md:text-5xl">
            Dúvidas frequentes
          </h2>
        </ScrollReveal>

        <SectionDivider />

        <div>
          {content.faq.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
