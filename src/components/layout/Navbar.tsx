'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/primary-logo-light.png" alt="Reinvity" className="h-10 w-auto dark:hidden" />
              <img src="/primary-logo-dark.png" alt="Reinvity" className="h-10 w-auto hidden dark:block" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <MegaMenu />
            <Link href="/portfolio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
              Portfolio
            </Link>
            <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
              About
            </Link>
          </nav>

          {/* Right side CTAs & Toggles */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            {/* The mobile drawer handles the actual menu, we just render the button here via MobileMenu component */}
            <MobileMenu />
          </div>

        </div>
      </div>
    </motion.header>
  );
}
