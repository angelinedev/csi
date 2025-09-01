
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
import Autoplay from "embla-carousel-autoplay";

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
    {
        src: "https://res.cloudinary.com/dfi26rd6m/image/upload/v1756754394/Inauguration_2025_-_2_js78ko.avif",
        alt: "Inauguration of CSI-JCE - Team",
        hint: "team inauguration",
    },
    {
        src: "https://res.cloudinary.com/dfi26rd6m/image/upload/v1756752567/Inauguration_2025_jfvaly.avif",
        alt: "Inauguration of CSI-JCE - Dignitaries",
        hint: "dignitaries inauguration",
    }
]

export default function Home() {
  return (
    <div className="animate-fade-in-up">
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
              <Button asChild size="lg" variant="secondary">
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
                The official launch of the CSI-JCE chapter and introduction of our dedicated office bearers.
                </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                <div className="mt-12 max-w-5xl mx-auto group">
                     <div className="p-1 relative rounded-lg bg-background transition-all duration-500 group-hover:scale-105">
                         <div
                            className="absolute -z-10 inset-0 rounded-lg bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%] animate-[border-flow_5s_ease_infinite]"
                         />
                         <div className="p-1 rounded-lg bg-background">
                           <Carousel 
                             className="w-full"
                             plugins={[
                                Autoplay({
                                  delay: 3000,
                                  stopOnInteraction: true,
                                })
                             ]}
                           >
                              <CarouselContent>
                                {inaugurationImages.map((image, index) => (
                                  <CarouselItem key={index}>
                                    <div className="p-1">
                                      <Card className="overflow-hidden">
                                        <CardContent className="flex items-center justify-center p-0">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={1200}
                                                height={900}
                                                data-ai-hint={image.hint}
                                                className="object-contain"
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
                    </div>
                    <div className="mt-8 text-center">
                        <Button asChild size="lg">
                            <Link href="/about">Meet the Team</Link>
                        </Button>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center tracking-tight md:text-4xl">
              Moments from Our Past Events
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
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
