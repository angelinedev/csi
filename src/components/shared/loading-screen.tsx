'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Hyperspeed from './hyperspeed';

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
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500',
        fadeout ? 'opacity-0' : 'opacity-100'
      )}
    >
      <Hyperspeed />
      <div className="absolute flex flex-col items-center justify-center text-center">
        <Image 
            src="https://res.cloudinary.com/dfi26rd6m/image/upload/v1756807923/CSI_LOGO_jeozg4.avif" 
            alt="CSI Logo" 
            width={150} 
            height={150}
            className="mb-4" 
        />
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
          Computer Society of India
        </h1>
        <p className="text-lg md:text-xl text-primary">
          Jerusalem College of Engineering Chapter
        </p>
      </div>
    </div>
  );
};