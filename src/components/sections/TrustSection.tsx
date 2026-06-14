'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { CounterAnimation } from '../ui/CounterAnimation';

export function TrustSection() {
  const stats = [
    { target: 50, suffix: '+', label: 'Projects Delivered' },
    { target: 200, suffix: '+', label: 'Hours Saved Monthly' },
    { target: 98, suffix: '%', label: 'Client Satisfaction' },
    { target: 5, suffix: '★', label: 'Average Rating' },
  ];

  return (
    <section className="py-20 bg-surface-elevated/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
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
                <CounterAnimation target={stat.target} suffix={stat.suffix} />
              </h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Marquee / Grid */}
        <div className="pt-10 border-t border-border">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            TRUSTED BY FORWARD-THINKING COMPANIES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {/* Textual placeholders as requested */}
            <div className="text-xl font-bold text-foreground grayscale hover:grayscale-0 transition-all">ACME Corp</div>
            <div className="text-xl font-bold text-foreground grayscale hover:grayscale-0 transition-all">GlobalTech</div>
            <div className="text-xl font-bold text-foreground grayscale hover:grayscale-0 transition-all">Innovate AI</div>
            <div className="text-xl font-bold text-foreground grayscale hover:grayscale-0 transition-all">Nexus Systems</div>
            <div className="text-xl font-bold text-foreground grayscale hover:grayscale-0 transition-all">Stellar SaaS</div>
          </div>
        </div>

      </div>
    </section>
  );
}
