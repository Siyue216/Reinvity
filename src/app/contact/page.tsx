import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/sections/ContactForm';
import { Mail, Phone, Clock, MapPin, ArrowRight, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Reinvity',
  description: 'Get in touch with Reinvity. Start your project, discuss AI integration, or book a free discovery call.',
};

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ayeshkant.reinvity@gmail.com',
    href: 'mailto:ayeshkant.reinvity@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 96233 18714',
    href: 'tel:+919623318714',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Pune',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Fri: 9:00 AM – 7:00 PM IST',
    sub: 'Sat: 10:00 AM – 3:00 PM IST',
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative space-y-6">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Let&apos;s Build Something{' '}
            <span className="text-primary">Great Together</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within 24 hours with a plan
            to turn your vision into reality.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-surface border border-border rounded-2xl p-8 sm:p-10">
              <div className="mb-8 pb-8 border-b border-border">
                <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
                <p className="text-muted-foreground mt-1">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">

            {/* Contact Info */}
            <div className="space-y-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const Wrapper = method.href ? 'a' : 'div';
                const wrapperProps = method.href
                  ? { href: method.href, className: 'flex items-start gap-4 p-4 rounded-xl bg-surface border border-border group hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-300' }
                  : { className: 'flex items-start gap-4 p-4 rounded-xl bg-surface border border-border' };

                return (
                  <Wrapper key={method.label} {...wrapperProps}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">{method.label}</p>
                      <p className="text-sm text-muted-foreground truncate">{method.value}</p>
                      {method.sub && (
                        <p className="text-sm text-muted-foreground">{method.sub}</p>
                      )}
                    </div>
                    {method.href && (
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all ml-auto flex-shrink-0 mt-1" />
                    )}
                  </Wrapper>
                );
              })}
            </div>

            {/* Trust Signal */}
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-primary/[0.04] to-transparent border border-primary/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/[0.06] rounded-bl-full" />
              <div className="relative">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">50+ companies</span> trust Reinvity
                  for their digital transformation.{' '}
                  <span className="font-semibold text-foreground">98% client satisfaction.</span>
                </p>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-3"
                >
                  View our work <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-blue-900 dark:from-[#070B14] dark:via-[#0c1a38] dark:to-[#070B14]" />
        <div className="absolute w-96 h-96 bg-blue-400/30 rounded-full blur-[100px] mix-blend-screen -top-48 -left-48 pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -bottom-48 -right-48 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-blue-200 max-w-xl mx-auto">
            Book a free discovery call with our technical founders. No commitment, just a conversation
            about your vision.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://calendly.com/reinvity/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary hover:bg-blue-50 transition-colors shadow-lg"
            >
              Book a Free Call
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 backdrop-blur-sm transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
