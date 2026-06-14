'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Reinvity delivered our complex SaaS platform 3 weeks ahead of schedule. Their engineers didn't just write code; they brought product insights that made the final application substantially better.",
    name: 'Sarah Chen',
    title: 'CTO',
    company: 'Nexus Analytics',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 2,
    quote: "Finding a reliable engineering partner is incredibly hard. Reinvity stands out because of their transparency, speed, and absolute dedication to code quality. They are an extension of our own team.",
    name: 'Marcus Thorne',
    title: 'Founder & CEO',
    company: 'FinStack',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 3,
    quote: "The AI integration Reinvity built for our customer service workflow reduced resolution times by 40%. Their deep understanding of both LLMs and scalable architecture was exactly what we needed.",
    name: 'Elena Rodriguez',
    title: 'VP of Product',
    company: 'HealthTech Solutions',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 4,
    quote: "Their UI/UX team transformed our clunky legacy enterprise software into a modern, intuitive platform. User adoption doubled in the first month after launch. Outstanding work.",
    name: 'David Kim',
    title: 'Director of Operations',
    company: 'Global Logistics Inc.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [direction, setDirection] = React.useState(1); // 1 for right, -1 for left

  const nextSlide = React.useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  React.useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  // Framer Motion variants for sliding
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what engineering leaders and founders have to say about partnering with Reinvity.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-border hover:bg-surface hover:text-primary transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-border hover:bg-surface hover:text-primary transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative h-[400px] md:h-[300px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) {
                  nextSlide();
                } else if (swipe > 10000) {
                  prevSlide();
                }
              }}
              className="absolute inset-0 w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                {/* 
                  To show 3 items on desktop, we slice the array based on the current index.
                  If it overflows, we wrap around. 
                */}
                {[0, 1, 2].map((offset) => {
                  const itemIndex = (currentIndex + offset) % testimonials.length;
                  const item = testimonials[itemIndex];
                  
                  return (
                    <div 
                      key={item.id}
                      className={`p-8 rounded-2xl bg-surface-elevated border border-border flex flex-col h-full ${
                        offset > 0 ? 'hidden md:flex' : 'flex'
                      } ${offset > 1 ? 'lg:flex hidden' : ''}`}
                    >
                      <div className="flex gap-1 mb-6">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      <p className="text-foreground text-lg leading-relaxed mb-8 flex-grow font-medium">
                        "{item.quote}"
                      </p>
                      
                      <div className="flex items-center gap-4 mt-auto">
                        <img 
                          src={item.avatar} 
                          alt={item.name} 
                          className="w-12 h-12 rounded-full object-cover border border-border"
                        />
                        <div>
                          <h4 className="font-bold text-foreground">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.title}, {item.company}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-primary' : 'bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
