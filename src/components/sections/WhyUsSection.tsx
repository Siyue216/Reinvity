'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, BrainCircuit, ShieldCheck, TrendingUp, Globe } from 'lucide-react';

const differentiators = [
  {
    title: 'Speed Without Compromise',
    description: 'We ship production-ready code in days, not months, using battle-tested frameworks and agile sprints.',
    icon: Zap,
  },
  {
    title: 'True Partnership',
    description: 'We embed with your team, understand your business model, and act as strategic co-founders, not just vendors.',
    icon: Users,
  },
  {
    title: 'AI-First Thinking',
    description: 'Every solution we build considers intelligent automation opportunities from day one.',
    icon: BrainCircuit,
  },
  {
    title: 'Enterprise Security',
    description: 'SOC2-ready practices, secure code reviews, and robust architecture baked in from the start.',
    icon: ShieldCheck,
  },
  {
    title: 'Scalability Built In',
    description: 'Our architecture decisions are made with 10× growth in mind — your stack won\'t be a bottleneck.',
    icon: TrendingUp,
  },
  {
    title: 'Global-Tier Quality',
    description: 'World-class engineering standards delivered at competitive rates.',
    icon: Globe,
  },
];

export function WhyUsSection() {
  return (
    <section className="py-24 bg-surface-elevated/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Why Choose Reinvity
          </h2>
          <p className="text-lg text-muted-foreground">
            We don&apos;t just write code. We partner with you to solve complex business challenges through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors duration-300 relative overflow-hidden group"
            >
              {/* Subtle glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-transform duration-500 scale-0 group-hover:scale-150 transform-gpu" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                  <item.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
