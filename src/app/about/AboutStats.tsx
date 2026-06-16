'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { target: 50, suffix: '+', label: 'Projects Delivered' },
  { target: 200, suffix: '+', label: 'Hours Saved Monthly' },
  { target: 98, suffix: '%', label: 'Client Satisfaction' },
  { target: 5, suffix: '★', label: 'Average Rating' },
];

export function AboutStats() {
  const [counts, setCounts] = React.useState(stats.map(() => 0));
  const ref = React.useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, idx) => {
            const duration = 2000;
            const start = performance.now();
            const animate = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCounts((prev) => {
                const next = [...prev];
                next[idx] = Math.round(eased * stat.target);
                return next;
              });
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={ref} className="py-20 bg-surface-elevated/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-2"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary">
                {counts[idx]}{stat.suffix}
              </h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
