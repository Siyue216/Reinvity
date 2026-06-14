'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] px-4 pt-28 pb-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
        >
          ✦ Innovation-First Company
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
        >
          We Build Digital Products <span className="text-primary">That Scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Reinvity is a full-service tech company helping ambitious startups and enterprises build faster, scale smarter, and win bigger.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button className="rounded-md bg-primary px-8 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Start Your Project &rarr;
          </button>
          <button className="rounded-md border border-border bg-background px-8 py-3 font-medium text-foreground hover:bg-surface transition-colors">
            See Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
