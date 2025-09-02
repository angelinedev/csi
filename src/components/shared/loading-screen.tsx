
'use client';
import { useState, useEffect } from 'react';
import Hyperspeed from './hyperspeed';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;
  
  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-1000',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
