import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

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
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? Send us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="bg-surface border border-border rounded-2xl p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const Wrapper = method.href ? 'a' : 'div';
              const wrapperProps = method.href
                ? { href: method.href, className: 'flex items-start gap-4 p-4 rounded-xl bg-surface border border-border hover:border-primary/20 transition-all duration-300' }
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
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
