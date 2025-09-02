
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Orb from './orb-background';

export const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadeout, setFadeout] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeout(true);
    }, 3500);

    const visibilityTimer = setTimeout(() => {
      setVisible(false);
    }, 4000); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(visibilityTimer);
    };
  }, []);

  if (!visible) return null;
  
  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500',
        fadeout ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div className="absolute inset-0">
        <Orb hue={290} forceHoverState={true} />
      </div>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <Image 
            src="https://res.cloudinary.com/dfi26rd6m/image/upload/v1756807923/CSI_LOGO_jeozg4.avif" 
            alt="CSI Logo" 
            width={150} 
            height={150}
            className="mb-4" 
        />
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide [text-shadow:0_2px_10px_hsl(var(--primary)/0.5)]">
          Computer Society of India
        </h1>
        <p className="text-lg md:text-xl text-primary [text-shadow:0_1px_4px_hsl(var(--primary)/0.3)]">
          Jerusalem College of Engineering Chapter
        </p>
      </div>
    </div>
  );
};
