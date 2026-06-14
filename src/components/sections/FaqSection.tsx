'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on scope and complexity. A standard MVP typically takes 4-8 weeks from discovery to launch. Enterprise-grade platforms may take 3-6 months. During our initial discovery call, we will provide a detailed timeline specific to your requirements.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible engagement models tailored to your needs. For well-defined projects, we provide fixed-price contracts. For ongoing development or projects with evolving scopes, we work on a dedicated team or time-and-materials basis. We always prioritize transparency with no hidden costs.',
  },
  {
    question: 'Do you work with startups or only enterprises?',
    answer: 'We partner with both. We help early-stage startups build rapid, scalable MVPs to secure funding or gain traction. For enterprises, we handle complex digital transformations, legacy system modernizations, and scalable AI integrations.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern, high-performance stacks. For the frontend, we rely on React, Next.js, and Vue. Our backend expertise includes Node.js, Python (FastAPI/Django), and Go. We also have deep expertise in AI integrations (OpenAI, LangChain), cloud architecture (AWS, Vercel), and mobile development (React Native, Swift).',
  },
  {
    question: 'How do we communicate during the project?',
    answer: 'We believe in radical transparency. You will have a dedicated Slack/Teams channel with our core team, weekly progress calls, and access to our project management board (Jira/Linear). You will always know exactly what we are working on and what is coming next.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Absolutely. Launch is just the beginning. We offer comprehensive maintenance and support packages to ensure your application remains secure, up-to-date, and performs optimally as your user base scales. We act as your long-term technical partner.',
  },
  {
    question: 'Can you work with our existing codebase?',
    answer: 'Yes. Before taking over an existing codebase, we conduct a thorough technical audit to assess code quality, security, and scalability. If the foundation is solid, we will build upon it. If not, we will recommend a strategic refactoring plan to eliminate technical debt.',
  },
  {
    question: 'How do we get started?',
    answer: 'It starts with a conversation. Book a free discovery call with our technical founders. We will discuss your vision, evaluate technical feasibility, and outline a high-level strategy. From there, we will provide a formal proposal and project roadmap.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0); // First item open by default

  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with Reinvity.
          </p>
        </div>

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
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'bg-surface border-primary/30' : 'bg-background border-border hover:border-foreground/30'
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
                  <div className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45 bg-primary text-primary-foreground' : 'bg-surface-elevated text-muted-foreground group-hover:text-foreground'}`}>
                    <Plus className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
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

      </div>
    </section>
  );
}
