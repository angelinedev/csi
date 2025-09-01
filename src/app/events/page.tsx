
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import ElectricBorder from '@/components/shared/electric-border';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

const allEvents = [
  {
    title: 'Upcoming Event',
    description: 'Details for the next event will be announced soon. Stay tuned!',
    date: 'Upcoming',
    time: 'Upcoming',
    image: 'https://placehold.co/600x400.png',
    hint: 'coming soon',
    status: 'Upcoming',
  },
  {
    title: 'ALCODE',
    description: 'A competitive coding contest to challenge your algorithmic skills.',
    date: 'August 21, 2024',
    time: '10:00 AM onwards',
    image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404485/POSTER_yk38m1.avif',
    hint: 'algorithm code',
    status: 'Past',
  },
  {
    title: 'HACKATHON: INNOVEXON',
    description: 'A 24-hour hackathon to build innovative solutions and win exciting prizes.',
    date: 'September 04, 2024',
    time: 'All Day',
    image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404547/innovexon_poster_beehro.avif',
    hint: 'hackathon innovation',
    status: 'Past',
  },
  {
    title: 'CODE UNRAVEL',
    description: 'Unravel complex coding problems and showcase your debugging prowess.',
    date: 'March 06, 2025',
    time: '1:00 PM - 3:00 PM',
    image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404519/POSTER_hx3dgu.avif',
    hint: 'code puzzle',
    status: 'Past',
  },
  {
    title: 'WORKSHOP: NETWORKING AND COMMUNICATION',
    description: 'A hands-on workshop on the fundamentals of networking and communication protocols.',
    date: 'April 02, 2025',
    time: '10:00 AM - 1:00 PM',
    image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404576/POSTER_e5eme5.avif',
    hint: 'network workshop',
    status: 'Past',
  },
  {
    title: 'POSTER - ON',
    description: 'A poster presentation competition to visualize and present your technical ideas.',
    date: 'April 23, 2025',
    time: '11:00 AM - 1:00 PM',
    image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404461/POSTER_viwzgl.avif',
    hint: 'poster presentation',
    status: 'Past',
  },
];

const upcomingEvents = allEvents.filter(event => event.status === 'Upcoming');
const pastEvents = allEvents.filter(event => event.status === 'Past');


const EventCard = ({ event }: { event: (typeof allEvents)[0] }) => (
    <ElectricBorder
      className="group"
      style={{ borderRadius: 'var(--radius)' }}
    >
      <Card className="group overflow-hidden glassmorphic rounded-lg flex flex-col h-full">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
                data-ai-hint={event.hint}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="p-6 flex flex-col md:w-3/5">
                <div className="flex justify-between items-start mb-2">
                    <Badge variant={event.status === 'Upcoming' ? 'default' : 'secondary'} className="bg-primary/20 text-primary border-primary/30">
                        {event.status}
                    </Badge>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">{event.title}</h3>
                <p className="mt-2 text-muted-foreground flex-grow">{event.description}</p>
                <div className="mt-4 space-y-2 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                    </div>
                </div>
                {event.status === 'Upcoming' && (
                <Button className="mt-6 w-full md:w-auto self-start">Register Now</Button>
                )}
            </div>
        </div>
      </Card>
    </ElectricBorder>
);


export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 animate-fade-in-up">
      <ScrollReveal>
        <h1 className="text-4xl font-bold tracking-tighter text-center md:text-5xl">
          Our Events
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
          Join us for a variety of technical and non-technical events designed to foster learning, innovation, and community.
        </p>
      </ScrollReveal>

      <section className="mt-16 md:mt-24">
        <ScrollReveal>
            <h2 className="text-3xl font-bold text-center tracking-tight md:text-4xl">
                Upcoming Events
            </h2>
             <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
                Stay tuned for our next big thing.
            </p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start">
            {upcomingEvents.map((event, index) => (
            <ScrollReveal key={event.title} delay={100 * (index % 2)}>
                <EventCard event={event} />
            </ScrollReveal>
            ))}
        </div>
      </section>

      <section className="mt-16 md:mt-24">
         <ScrollReveal>
            <h2 className="text-3xl font-bold text-center tracking-tight md:text-4xl">
                Past Events
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
                A look back at our memorable moments.
            </p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start">
            {pastEvents.map((event, index) => (
                <ScrollReveal key={event.title} delay={100 * (index % 2)}>
                    <EventCard event={event} />
                </ScrollReveal>
            ))}
        </div>
      </section>
    </div>
  );
}
