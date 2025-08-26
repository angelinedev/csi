
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Item {
  title: string;
  img: string;
  hint?: string;
}

interface InfiniteMarqueeProps {
  items: Item[];
  options?: EmblaOptionsType;
  className?: string;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ items, options, className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'center',
      containScroll: 'trimSnaps',
      ...options 
    },
    [Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (emblaApi) {
      onSelect(emblaApi);
      emblaApi.on('select', onSelect);
      return () => {
        emblaApi.off('select', onSelect);
      };
    }
  }, [emblaApi, onSelect]);

  // Double the items for a seamless loop appearance
  const displayItems = [...items, ...items];


  return (
    <div className={cn('overflow-hidden w-full', className)} ref={emblaRef}>
      <div className="flex">
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="relative flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] mx-4 transition-transform duration-500 ease-out"
            style={{
              transform: `scale(${selectedIndex === (index % items.length) ? '1.05' : '0.9'})`,
            }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl glowing-border group">
                <Image
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={400}
                    data-ai-hint={item.hint || 'event picture'}
                    className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-white font-bold text-lg drop-shadow-md">{item.title}</h3>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
