import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coming Soon | Reinvity',
};

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Coming Soon
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          This Page Is <br />
          <span className="text-primary">Under Construction</span>
        </h1>
        <p className="text-muted-foreground">
          We&apos;re working on something exciting. This page will be available soon.
          In the meantime, feel free to explore what we already have.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
