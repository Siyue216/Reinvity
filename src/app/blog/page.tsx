import type { Metadata } from 'next';
import { BlogGrid } from './BlogGrid';

export const metadata: Metadata = {
  title: 'Blog | Reinvity',
  description: 'Insights on software engineering, AI, design, and digital transformation from the Reinvity team.',
};

export default function BlogPage() {
  return (
    <main className="flex-1 flex flex-col w-full">

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative space-y-6">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Blog
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Insights &{' '}
            <span className="text-primary">Perspectives</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Engineering deep-dives, AI strategies, design thinking, and lessons from shipping products
            that scale.
          </p>
        </div>
      </section>

      <BlogGrid />

    </main>
  );
}
