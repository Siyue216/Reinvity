import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { FaqSection } from '@/components/sections/FaqSection';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
