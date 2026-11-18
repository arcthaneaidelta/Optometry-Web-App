import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../../data/faqs';

interface AccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenIndex }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex !== undefined ? defaultOpenIndex : 0
  );

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const headingId = `faq-head-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
              isOpen ? 'border-forest/40 bg-white shadow-sm' : 'border-stone-border bg-white/70 hover:border-forest/20'
            }`}
          >
            <button
              id={headingId}
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              <span className="font-serif text-lg sm:text-xl text-charcoal font-medium pr-4">
                {item.question}
              </span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                  isOpen
                    ? 'border-forest bg-forest text-ivory rotate-180'
                    : 'border-stone-border bg-ivory text-charcoal'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 py-0 pb-5 px-5 sm:px-6' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <p className="text-xs sm:text-sm text-olive leading-relaxed font-light border-t border-stone-border/60 pt-3">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
