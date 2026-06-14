import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';
import { CalendlyEmbed } from '@/components/sections/CalendlyEmbed';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Reinvity',
  description: 'Get in touch with Reinvity. Start your project, discuss AI integration, or book a free discovery call.',
};

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      {/* Hero */}
      <section className="pt-36 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Let&apos;s Build Something{' '}
            <span className="text-primary">Great Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll get back to you within 24 hours with a plan
            to turn your vision into reality.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form — takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-surface border border-border rounded-2xl p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>

          {/* Sidebar — takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:hello@reinvity.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      hello@reinvity.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a href="tel:+910000000000" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +91 (000) 000-0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Office</p>
                    <p className="text-sm text-muted-foreground">Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon – Fri: 9:00 AM – 7:00 PM IST
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sat: 10:00 AM – 3:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust signal */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">50+ companies</span> trust Reinvity
                for their digital transformation. <span className="font-semibold text-foreground">98% client satisfaction.</span>
              </p>
            </div>

            {/* Calendly */}
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </main>
  );
}
