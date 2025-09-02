
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlexusBackground } from '@/components/shared/plexus-background';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  finished: () => void;
}

export const LoadingScreen = ({ finished }: LoadingScreenProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      finished();
    }, 2500); 

    return () => clearTimeout(timer);
  }, [finished]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000",
        isMounted ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="absolute inset-0 z-0">
          <PlexusBackground />
      </div>
      <div className="relative z-10 flex flex-col items-center">
         <Image src="https://res.cloudinary.com/dfi26rd6m/image/upload/v1756807923/CSI_LOGO_jeozg4.avif" alt="CSI Logo" width={100} height={100} className="animate-pulse" />
      </div>
    </div>
  );
};
