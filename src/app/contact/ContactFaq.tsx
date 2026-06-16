'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly do you respond to inquiries?',
    answer: 'We respond to all inquiries within 24 hours during business days. For urgent matters, booking a discovery call directly is the fastest way to get in touch with our team.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'Our team reviews your project details and assigns the right expert to your inquiry. Within 24 hours, you will receive a personalized response with initial thoughts, relevant case studies, and next steps.',
  },
  {
    question: 'Do I need a detailed brief to get started?',
    answer: 'Not at all. A high-level idea is enough to start the conversation. During our discovery call, we will help you refine your requirements, identify technical considerations, and outline a roadmap.',
  },
  {
    question: 'What if I\'m not sure about my budget?',
    answer: 'That is completely fine. Select "Let\'s Discuss" in the budget field and we will work with you to find a solution that fits. Many projects start with a small MVP and scale based on results.',
  },
  {
    question: 'Can I book a call instead of filling out the form?',
    answer: 'Yes. You can book a free discovery call directly through the Calendly widget on this page. Pick a time that works for you and we will discuss your project one-on-one.',
  },
  {
    question: 'What information should I prepare for the discovery call?',
    answer: 'Just bring your idea and any questions you have. If available, reference projects, target audience insights, or technical constraints are helpful but not required. We will guide the conversation.',
  },
];

export function ContactFaq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className={`group border rounded-2xl overflow-hidden transition-colors duration-300 ${
              isOpen ? 'bg-background border-primary/30' : 'bg-background border-border hover:border-foreground/30'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
              aria-expanded={isOpen}
            >
              <span className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                {faq.question}
              </span>
              <div className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen
                  ? 'rotate-45 bg-primary text-primary-foreground'
                  : 'bg-surface-elevated text-muted-foreground group-hover:text-foreground'
              }`}>
                <Plus className="w-5 h-5" />
              </div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
