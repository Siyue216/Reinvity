'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, BrainCircuit, Settings, Lightbulb, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'We build fast, scalable, and beautiful web applications using the latest frameworks.',
    icon: Code,
    href: '/services/web-development',
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications engineered for performance and scale.',
    icon: Smartphone,
    href: '/services/mobile-development',
  },
  {
    id: 'saas',
    title: 'SaaS Products',
    description: 'End-to-end SaaS product development from MVP to enterprise-grade platforms.',
    icon: Cloud,
    href: '/services/saas-development',
  },
  {
    id: 'ai',
    title: 'AI Solutions',
    description: 'Intelligent AI integrations and custom LLM applications that transform operations.',
    icon: BrainCircuit,
    href: '/services/ai-solutions',
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Eliminate manual work with automated workflows that save hundreds of hours.',
    icon: Settings,
    href: '/services/automation',
  },
  {
    id: 'consulting',
    title: 'Strategic Consulting',
    description: 'Technology advisory from architecture reviews to growth roadmapping.',
    icon: Lightbulb,
    href: '/services/consulting',
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Capabilities That Drive Growth
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital solutions designed to help your business operate more efficiently and scale faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={service.href} className="block group h-full">
                <div className="h-full p-8 rounded-2xl bg-surface border border-border transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-primary group-hover:shadow-[0_8px_32px_rgba(37,99,235,0.12)] dark:group-hover:shadow-[0_8px_32px_rgba(59,130,246,0.1)] relative overflow-hidden">
                  
                  {/* Subtle background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-8 flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors mt-auto">
                      Learn More 
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
