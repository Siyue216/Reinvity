'use client';

import * as React from 'react';
import Link from 'next/link';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = React.useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: integrate with email service in production
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-surface-elevated border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              {/* Placeholder for Logo */}
              <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="text-xs font-bold text-primary">R</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Reinvity
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Empowering ambitious businesses to build faster, scale smarter, and win bigger through expert software engineering and AI solutions.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/web-development" className="text-sm text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-development" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services/saas-development" className="text-sm text-muted-foreground hover:text-primary transition-colors">SaaS Products</Link></li>
              <li><Link href="/services/ai-solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Solutions</Link></li>
              <li><Link href="/services/consulting" className="text-sm text-muted-foreground hover:text-primary transition-colors">Strategic Consulting</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog & Insights</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:hello@reinvity.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    hello@reinvity.com
                  </a>
                </li>
                <li>
                  <a href="tel:+910000000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    +91 (000) 000-0000
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="pt-2">
              <h4 className="text-sm font-semibold text-foreground mb-3">Subscribe to our newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
                <button 
                  type="submit"
                  className="bg-primary text-primary-foreground p-2 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Reinvity. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
