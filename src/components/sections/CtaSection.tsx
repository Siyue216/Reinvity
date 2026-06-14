'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-blue-900 dark:from-[#070B14] dark:via-[#0c1a38] dark:to-[#070B14] -z-20" />
      
      {/* Decorative glowing orbs (visible mostly in dark mode, subtle in light mode) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/30 dark:bg-primary/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-sm">
            Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Extraordinary?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100/90 max-w-2xl mx-auto font-light leading-relaxed">
            Let&apos;s turn your vision into a product your customers will love. Partner with us for engineering excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-base font-bold text-primary hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-0.5 duration-300">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-white/30 bg-transparent px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
              <Calendar className="mr-2 w-5 h-5" />
              Book a Free Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
