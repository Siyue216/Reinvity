'use client';

import * as React from 'react';
import { useInView, motion } from 'framer-motion';

interface CounterAnimationProps {
  target: number;
  duration?: number;
  suffix?: string;
}

export function CounterAnimation({ target, duration = 2, suffix = '' }: CounterAnimationProps) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true }); // Animates only the first time

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = target / (duration * 60); // Assuming 60 FPS
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}
