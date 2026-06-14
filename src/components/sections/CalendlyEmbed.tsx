'use client';

import * as React from 'react';

export function CalendlyEmbed() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-border bg-surface">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Book a Free Discovery Call</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Pick a time that works for you. We&apos;ll discuss your project and see how we can help.
        </p>
      </div>
      <div className="aspect-[4/3] min-h-[400px]">
        <iframe
          src="https://calendly.com/reinvity/discovery-call?hide_gdpr_banner=1&background_color=0F172A&text_color=F8FAFC&primary_color=3B82F6"
          width="100%"
          height="100%"
          frameBorder="0"
          className="h-full w-full"
          title="Book a discovery call with Reinvity"
        />
      </div>
    </div>
  );
}
