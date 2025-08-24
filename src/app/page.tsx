
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const pastEvents = [
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Past Event 1',
    hint: 'technology conference',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Past Event 2',
    hint: 'coding workshop',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Past Event 3',
    hint: 'hackathon event',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Past Event 4',
    hint: 'ai seminar',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Past Event 5',
    hint: 'cybersecurity talk',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Past Event 6',
    hint: 'robotics competition',
  },
];

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
              Moments from Our Past Events
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
              A glimpse into the vibrant and engaging events hosted by CSI-JCE.
            </p>
          </ScrollReveal>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event, index) => (
                <ScrollReveal key={index} delay={100 * (index % 3)}>
                  <Card className="group relative overflow-hidden rounded-xl glowing-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                    <CardContent className="p-0">
                      <Image
                        src={event.src}
                        alt={event.alt}
                        width={600}
                        height={400}
                        data-ai-hint={event.hint}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
