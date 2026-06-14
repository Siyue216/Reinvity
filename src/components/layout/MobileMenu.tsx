'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Close the menu when navigating
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 -mr-2 text-foreground hover:bg-surface rounded-md transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu-wrapper"
            className="fixed inset-0 z-40"
          >
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-background border-l border-border shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-bold text-lg">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-foreground hover:bg-surface rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 px-4 space-y-6">
                <nav className="flex flex-col space-y-2">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-lg font-medium text-foreground hover:text-primary py-2 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="pt-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                  
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="flex justify-center items-center w-full rounded-md bg-primary px-4 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="pt-6 border-t border-border space-y-3 text-sm text-muted-foreground">
                  <a href="mailto:hello@reinvity.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <Mail className="w-4 h-4" />
                    hello@reinvity.com
                  </a>
                  <a href="tel:+910000000000" className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <Phone className="w-4 h-4" />
                    +91 (000) 000-0000
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
