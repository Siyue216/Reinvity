'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 pt-28 pb-16 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white"
        >
          We Build Digital Products <span className="text-blue-300">That Scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-white/80 max-w-2xl mx-auto"
        >
          Reinvity is a full-service tech company helping ambitious startups and enterprises build faster, scale smarter, and win bigger.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/contact"
            className="rounded-md bg-white px-8 py-3 font-medium text-gray-900 hover:bg-white/90 transition-colors"
          >
            Start Your Project &rarr;
          </Link>
          <Link
            href="/"
            className="rounded-md border border-white/30 px-8 py-3 font-medium text-white hover:bg-white/10 transition-colors"
          >
            See Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
