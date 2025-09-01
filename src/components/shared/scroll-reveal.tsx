'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  initialX?: number;
}

export const ScrollReveal = ({ children, className, delay = 0, initialX = 0 }: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getInitialTransform = () => {
    if (initialX !== 0) {
      return `translate3d(${initialX}px, 5px, 0)`;
    }
    return 'translate3d(0, 5px, 0)';
  };
  
  const getVisibleTransform = () => {
     return 'translate3d(0, 0, 0)';
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: isVisible ? getVisibleTransform() : getInitialTransform(),
      }}
    >
      {children}
    </div>
  );
};
