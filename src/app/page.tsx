
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import RollingGallery from '@/components/shared/rolling-gallery';

const pastEvents = [
  {
    title: 'ALCODE',
    img: 'https://placehold.co/600/400.png',
    hint: 'algorithm code',
  },
  {
    title: 'HACKATHON: INNOVEXON',
    img: 'https://placehold.co/600/400.png',
    hint: 'hackathon innovation',
  },
  {
    title: 'CODE UNRAVEL',
    img: 'https://placehold.co/600/400.png',
    hint: 'code puzzle',
  },
  {
    title: 'WORKSHOP: NETWORKING AND COMMUNICATION',
    img: 'https://placehold.co/600/400.png',
    hint: 'network workshop',
  },
  {
    title: 'POSTER - ON',
    img: 'https://placehold.co/600/400.png',
    hint: 'poster presentation',
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
