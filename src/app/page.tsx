
'use client';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import RollingGallery from '@/components/shared/rolling-gallery';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const pastEvents = [
  {
    title: 'ALCODE',
    img: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404618/2_nyc6vo.avif',
    hint: 'algorithm code',
  },
  {
    title: 'ALCODE',
    img: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404617/1_ojyxae.avif',
    hint: 'algorithm code',
  },
  {
    title: 'HACKATHON: INNOVEXON',
    img: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404683/Picture1_uolfy0.avif',
    hint: 'hackathon innovation',
  },
    {
    title: 'HACKATHON: INNOVEXON',
    img: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404682/Picture2_lrdi1k.avif',
    hint: 'hackathon innovation',
  },
  {
    title: 'CODE UNRAVEL',
    img: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404647/Picture1_jeecol.avif',
    hint: 'code puzzle',
  },
  {
    title: 'CODE UNRAVEL',
    img: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404645/Picture2_ongdpj.avif',
    hint: 'code puzzle',
  },
  {
    title: 'WORKSHOP: NETWORKING AND COMMUNICATION',
    img: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404709/Picture2_cxovol.avif',
    hint: 'network workshop',
  },
  {
    title: 'WORKSHOP: NETWORKING AND COMMUNICATION',
    img: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404707/Picture1_czskry.avif',
    hint: 'network workshop',
  },
];

const inaugurationImages = [
  'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756754394/Inauguration_2025_-_2_js78ko.avif',
  'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756752567/Inauguration_2025_jfvaly.avif',
];

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div>
       <section className="relative flex h-[80vh] min-h-[500px] items-center justify-center text-center">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
        
        <div className="relative z-10 px-4">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Computer Society of India
            </h1>
            <p className="mt-4 text-lg font-medium text-primary md:text-xl">
              Jerusalem College of Engineering Chapter
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Exploring the frontiers of technology. Fostering innovation and collaboration in the digital age.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/events">Upcoming Events</Link>
              </Button>
              <Button asChild size="lg" variant="glowing">
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center tracking-tight md:text-4xl">
              Our Inauguration
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
              The official launch of the CSI student chapter at Jerusalem College of Engineering, a milestone event celebrating our commitment to technology and innovation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-12 max-w-5xl mx-auto">
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {inaugurationImages.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="overflow-hidden glassmorphic">
                          <CardContent className="flex aspect-video items-center justify-center p-6">
                             <Image
                                src={src}
                                alt={`Inauguration of CSI Student Chapter ${index + 1}`}
                                width={1200}
                                height={800}
                                className="rounded-lg w-full h-auto object-cover"
                                data-ai-hint="inauguration event"
                              />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center tracking-tight md.text-4xl">
              Moments from Our Past Events
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md.text-lg">
              A glimpse into the vibrant and engaging events hosted by CSI-JCE.
            </p>
          </ScrollReveal>
        </div>
        <div className="mt-12">
            <RollingGallery items={pastEvents} autoplay pauseOnHover />
        </div>
      </section>
    </div>
  );
}
