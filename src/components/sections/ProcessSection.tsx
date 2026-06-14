'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, PenTool, Code, CheckCircle, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and market landscape.',
    icon: Search,
  },
  {
    title: 'Strategy',
    description: 'Mapping out the technical architecture and product roadmap for success.',
    icon: Compass,
  },
  {
    title: 'Design',
    description: 'Creating intuitive, beautiful interfaces focusing on seamless user experiences.',
    icon: PenTool,
  },
  {
    title: 'Development',
    description: 'Writing clean, scalable, and production-ready code in agile sprints.',
    icon: Code,
  },
  {
    title: 'Testing',
    description: 'Rigorous QA testing ensures a bug-free, high-performance product.',
    icon: CheckCircle,
  },
  {
    title: 'Launch',
    description: 'Deploying to production and monitoring performance closely.',
    icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Our Proven Process
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach from concept to deployment, ensuring transparency and excellence at every stage.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[100px] left-0 right-0 h-0.5 bg-border -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Large Background Number */}
                <div className="absolute top-0 right-4 lg:-right-4 text-[120px] font-black text-foreground/5 dark:text-foreground/5 leading-none select-none -z-10 group-hover:text-primary/10 transition-colors duration-500">
                  {idx + 1}
                </div>

                {/* Icon Node */}
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-background flex items-center justify-center shadow-sm mb-6 relative z-10 group-hover:border-primary/20 group-hover:bg-primary/10 transition-all duration-300">
                  <step.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  
                  {/* Progress Line animation filler (Desktop) */}
                  <div className="hidden lg:block absolute top-1/2 left-full w-[calc(100vw/6)] h-[2px] -translate-y-1/2 bg-gradient-to-r from-primary to-transparent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
