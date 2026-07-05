import type { Metadata } from 'next';
import { AboutStats } from './AboutStats';
import { Target, Eye, Heart, Code2, Lightbulb, Users, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Reinvity',
  description: 'Reinvity is a software engineering and AI partner helping ambitious businesses build faster, scale smarter, and win bigger.',
};

const values = [
  {
    icon: Target,
    title: 'Impact First',
    description: 'Every line of code we write is measured by the business outcome it drives. We ship what matters.',
  },
  {
    icon: Eye,
    title: 'Radical Transparency',
    description: 'No black boxes. You see our progress, challenges, and decisions in real time — always.',
  },
  {
    icon: Heart,
    title: 'Craft Over Haste',
    description: 'We move fast without cutting corners. Quality is not a trade-off, it is a multiplier.',
  },
  {
    icon: Code2,
    title: 'Modern by Default',
    description: 'We use the best tools for the job. React, Next.js, Node, Python, AI — no legacy tax.',
  },
  {
    icon: Lightbulb,
    title: 'Curiosity-Driven',
    description: 'We stay ahead of the curve. Every team member is expected to explore, experiment, and share.',
  },
  {
    icon: Sparkles,
    title: 'Delight the User',
    description: 'Great engineering is invisible. The user should feel the difference, not see the mechanics.',
  },
];

const team = [
  { name: 'Ayeshkant Reinvity', role: 'Founder & CEO', initials: 'AR', description: '15+ years building products at startups and enterprises. Passionate about AI-driven digital transformation.' },
  { name: 'Priya Sharma', role: 'CTO', initials: 'PS', description: 'Ex-Google engineer leading architecture and AI strategy. Deep expertise in distributed systems.' },
  { name: 'Rahul Verma', role: 'Head of Design', initials: 'RV', description: 'Award-winning designer with a passion for crafting intuitive, accessible user experiences.' },
  { name: 'Ananya Patel', role: 'Lead Engineer', initials: 'AP', description: 'Full-stack engineer specializing in Next.js and cloud infrastructure. Open source contributor.' },
];

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col w-full">

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative space-y-6">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            About Us
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            We Build Products That{' '}
            <span className="text-primary">Scale Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Reinvity is a software engineering and AI partner that helps ambitious companies turn ideas
            into production-ready products — faster, smarter, and without compromise.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Born from the belief that great software{' '}
              <span className="text-primary">should not be a luxury</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Reinvity was founded to bridge the gap between ambitious ideas and exceptional execution.
                We saw too many promising projects fail — not because the vision was wrong, but because
                the engineering partnerships were broken.
              </p>
              <p>
                We set out to change that. By combining deep technical expertise with a genuine
                partnership model, we help startups launch MVPs in weeks and enterprises modernize
                legacy systems without disruption.
              </p>
              <p>
                Today, we are a team of engineers, designers, and strategists who share one belief:
                technology should serve people, not the other way around.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-primary/[0.03] to-transparent border border-border flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl font-bold text-primary/20">2024</div>
              <p className="text-muted-foreground mt-2">Founded in Bangalore</p>
            </div>
          </div>
        </div>
      </section>

      <AboutStats />

      {/* Values */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground">
              Principles that guide every decision, every line of code, and every relationship we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-transform duration-500 scale-0 group-hover:scale-150 transform-gpu" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                      <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground">
              A group of passionate engineers, designers, and thinkers dedicated to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group p-8 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-colors duration-300 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300">
                  <span className="text-2xl font-bold text-primary">{member.initials}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
