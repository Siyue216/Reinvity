'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Web', 'Mobile', 'AI', 'SaaS', 'Design'];

const mockProjects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Web',
    description: 'A comprehensive financial analytics dashboard for enterprise clients.',
    techStack: ['Next.js', 'Tailwind', 'Recharts'],
    // Using a generic unsplash placeholder for visual testing, to be replaced by actual images
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    height: 'h-[400px]',
  },
  {
    id: 2,
    title: 'HealthCare AI App',
    category: 'Mobile',
    description: 'AI-powered symptom checker and telehealth scheduling platform.',
    techStack: ['React Native', 'OpenAI', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    height: 'h-[480px]',
  },
  {
    id: 3,
    title: 'Logistics SaaS',
    category: 'SaaS',
    description: 'Real-time supply chain tracking and predictive maintenance system.',
    techStack: ['Vue.js', 'PostgreSQL', 'AWS'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?auto=format&fit=crop&w=800&q=80',
    height: 'h-[360px]',
  },
  {
    id: 4,
    title: 'Smart Home Hub',
    category: 'Design',
    description: 'UI/UX design system for a modern IoT home automation ecosystem.',
    techStack: ['Figma', 'Protopie', 'Design System'],
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    height: 'h-[420px]',
  },
  {
    id: 5,
    title: 'Legal Document AI',
    category: 'AI',
    description: 'Automated contract analysis and risk highlighting for law firms.',
    techStack: ['Python', 'LangChain', 'React'],
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    height: 'h-[460px]',
  },
  {
    id: 6,
    title: 'E-commerce Platform',
    category: 'Web',
    description: 'High-conversion headless commerce frontend with instant search.',
    techStack: ['Next.js', 'Shopify', 'Algolia'],
    imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80',
    height: 'h-[380px]',
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = mockProjects.filter((project) => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section className="py-24 bg-surface-elevated/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Selected Work
            </h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into the digital products and platforms we&apos;ve built for ambitious companies worldwide.
            </p>
          </div>
          
          <button className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors group">
            See All Work
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 space-x-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-foreground text-background shadow-md' 
                  : 'bg-surface border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid (CSS Columns approximation) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative group rounded-2xl overflow-hidden bg-surface border border-border cursor-pointer break-inside-avoid ${project.height}`}
              >
                {/* Background Image Placeholder */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                />
                
                {/* Default Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-foreground/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0">
                  <p className="text-background/90 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-background/20 text-background rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="inline-flex items-center text-background font-medium hover:text-primary transition-colors">
                    View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>

                {/* Default Title (visible until hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-primary font-medium text-sm mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-foreground dark:text-white drop-shadow-md">{project.title}</h3>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <button className="md:hidden mt-8 w-full inline-flex justify-center items-center gap-2 text-primary font-medium border border-border rounded-lg py-3 hover:bg-surface transition-colors">
          See All Work
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </section>
  );
}
