import { ScrollReveal } from '@/components/shared/scroll-reveal';
import ElectricBorder from '@/components/shared/electric-border';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

const events = [
  {
    title: 'Cyberfest 2024',
    description: 'A national level technical symposium with a series of workshops, competitions, and talks from industry leaders.',
    date: 'October 26, 2024',
    time: '9:00 AM - 5:00 PM',
    image: 'https://placehold.co/600x400.png',
    hint: 'technology festival',
    status: 'Upcoming',
  },
  {
    title: 'AI & Machine Learning Workshop',
    description: 'A hands-on workshop covering the fundamentals of Artificial Intelligence and Machine Learning with practical examples.',
    date: 'September 15, 2024',
    time: '10:00 AM - 4:00 PM',
    image: 'https://placehold.co/600x400.png',
    hint: 'ai workshop',
    status: 'Upcoming',
  },
  {
    title: 'Hackathon: Code Genesis',
    description: 'A 24-hour coding competition to build innovative solutions for real-world problems. Exciting prizes to be won!',
    date: 'August 20, 2024',
    time: 'Starts 10:00 AM',
    image: 'https://placehold.co/600x400.png',
    hint: 'hackathon computer',
    status: 'Past',
  },
  {
    title: 'Intro to Quantum Computing',
    description: 'A seminar exploring the revolutionary world of quantum computing and its potential impact on technology.',
    date: 'July 05, 2024',
    time: '2:00 PM - 4:00 PM',
    image: 'https://placehold.co/600x400.png',
    hint: 'quantum computing',
    status: 'Past',
  },
];

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

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {events.map((event, index) => (
          <ScrollReveal key={event.title} delay={100 * (index % 2)}>
            <ElectricBorder className="h-full group rounded-lg">
              <Card className="h-full group overflow-hidden glassmorphic rounded-lg">
                <div className="flex flex-col md:flex-row h-full">
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
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-card-foreground">{event.title}</h3>
                      <Badge variant={event.status === 'Upcoming' ? 'default' : 'secondary'} className="ml-4 shrink-0 bg-primary/20 text-primary border-primary/30">
                        {event.status}
                      </Badge>
                    </div>
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
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
