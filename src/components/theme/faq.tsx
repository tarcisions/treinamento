'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { treinoNoDeck as C } from '@/content/treino-no-deck';
import type { ThemeConfig } from '@/themes/types';
import { easeOutExpo } from '@/lib/motion';

function AccordionItem({ question, answer, isOpen, onToggle, theme }: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void; theme: ThemeConfig
}) {
  return (
    <div className={`border-b ${theme.tokens.borderLight}`}>
      <button onClick={onToggle} className={`flex w-full items-center justify-between gap-4 py-5 text-left outline-none transition-colors md:py-6 ${theme.tokens.text} hover:${theme.tokens.accentText} focus-visible:${theme.tokens.accentText}`} aria-expanded={isOpen}>
        <span className={`text-sm font-medium leading-snug md:text-base ${theme.tokens.text}`}>{question}</span>
        <motion.svg className={`h-3 w-3 flex-shrink-0 ${theme.tokens.accentText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2, ease: easeOutExpo }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOutExpo }} className="overflow-hidden">
            <p className={`pb-5 text-sm leading-relaxed md:pb-6 ${theme.tokens.textMuted}`}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ThemeFAQ({ theme }: { theme: ThemeConfig }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`${theme.tokens.bg} py-20 md:py-28`}>
      <div className="mx-auto max-w-3xl px-6">
        <div className={`text-center ${theme.tokens.text}`}>
          <span className={`text-xs font-medium tracking-[0.3em] uppercase ${theme.tokens.accentText}`}>FAQ</span>
          <h2 className={`${theme.fonts.display} mt-3 text-3xl leading-tight tracking-tight md:text-5xl ${theme.tokens.text}`}>Dúvidas frequentes</h2>
        </div>
        <div className="my-12 flex justify-center"><div className={`h-px w-24 ${theme.components.sectionDivider}`} /></div>
        <div>
          {C.faq.map((item, i) => (
            <AccordionItem key={i} question={item.q} answer={item.a} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}
