'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, BrainCircuit, Lightbulb, Smartphone, Cloud, PenTool } from 'lucide-react';

const services = {
  development: [
    { name: 'Web Development', href: '/services/web-development', icon: Code },
    { name: 'Mobile Apps', href: '/services/mobile-development', icon: Smartphone },
    { name: 'SaaS Products', href: '/services/saas-development', icon: Cloud },
    { name: 'UI/UX Design', href: '/services/ui-ux-design', icon: PenTool },
  ],
  intelligence: [
    { name: 'AI Solutions', href: '/services/ai-solutions', icon: BrainCircuit },
    { name: 'Automation', href: '/services/automation', icon: Code },
  ],
  strategy: [
    { name: 'Consulting', href: '/services/consulting', icon: Lightbulb },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions', icon: Cloud },
    { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Cloud },
  ]
};

export function MegaMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        href="/services" 
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
        onClick={() => setIsOpen(false)}
      >
        Services
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[700px] z-50"
          >
            <div className="bg-background rounded-xl shadow-lg border border-border p-8 grid grid-cols-3 gap-8 relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

              {/* Development Column */}
              <div className="space-y-4">
                <Link href="/services#development" onClick={() => setIsOpen(false)} className="block text-sm font-bold text-foreground hover:text-primary transition-colors border-b border-border pb-2">
                  DEVELOPMENT
                </Link>
                <ul className="space-y-3">
                  {services.development.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
                        <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intelligence Column */}
              <div className="space-y-4">
                <Link href="/services#intelligence" onClick={() => setIsOpen(false)} className="block text-sm font-bold text-foreground hover:text-primary transition-colors border-b border-border pb-2">
                  INTELLIGENCE
                </Link>
                <ul className="space-y-3">
                  {services.intelligence.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
                        <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategy Column */}
              <div className="space-y-4">
                <Link href="/services#strategy" onClick={() => setIsOpen(false)} className="block text-sm font-bold text-foreground hover:text-primary transition-colors border-b border-border pb-2">
                  STRATEGY
                </Link>
                <ul className="space-y-3">
                  {services.strategy.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
                        <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="col-span-3 pt-4 mt-2 border-t border-border flex justify-end">
                <Link href="/services" onClick={() => setIsOpen(false)} className="text-sm font-medium text-primary hover:text-primary-hover flex items-center gap-1">
                  View All Services &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
