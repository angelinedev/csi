import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users } from 'lucide-react';
import ElectricBorder from '@/components/shared/electric-border';
import { Card } from '@/components/ui/card';

const officeBearers = [
  { name: 'Mrs. Vanitha Sheba M', role: 'SBC-CSI' },
  { name: 'Mahendra Udayakumar', role: 'President' },
  { name: 'Megha Shree G', role: 'Vice President' },
  { name: 'Syed Tamim Mehdi', role: 'Secretary' },
  { name: 'Aliah Ridha A', role: 'Joint Secretary' },
  { name: 'Deepika R', role: 'Treasurer' },
  { name: 'Rajadurga R', role: 'Joint Treasurer' },
  { name: 'Manikandan Askar K', role: 'Executive Member' },
  { name: 'Angeline Hepzibah J', role: 'Executive Member' },
  { name: 'Shruthi D', role: 'Executive Member' },
  { name: 'Sharan S', role: 'Executive Member' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 animate-fade-in-up">
      <ScrollReveal>
        <h1 className="text-4xl font-bold tracking-tighter text-center md:text-5xl">
          About CSI-JCE
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
          The Computer Society of India chapter at Jerusalem College of Engineering is dedicated to advancing the theory and practice of computer science and information technology. We aim to create a community of learners and innovators who can drive technological progress.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="mt-12 max-w-4xl mx-auto p-8 rounded-xl glassmorphic">
          <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
          <p className="mt-4 text-foreground/80">
            Our mission is to facilitate research, knowledge sharing, and career development among students in the field of computer science. We organize workshops, seminars, and competitions to provide a platform for students to showcase their skills and learn from industry experts.
          </p>
        </div>
      </ScrollReveal>

      <section className="mt-16 md:mt-24">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center tracking-tight md:text-4xl">
            Meet the Office Bearers
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
            The dedicated team leading the charge at the CSI-JCE chapter.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {officeBearers.map((bearer, index) => (
            <ScrollReveal key={bearer.name} delay={100 * (index % 4)}>
              <ElectricBorder className="h-full rounded-lg">
                <Card className="h-full glassmorphic rounded-lg">
                  <div className="flex flex-col items-center text-center p-6">
                    <Avatar className="w-24 h-24 mb-4 border-4 border-primary/50">
                      <AvatarImage src={`https://placehold.co/100x100.png`} data-ai-hint="portrait person" />
                      <AvatarFallback>
                        <Users className="w-8 h-8 text-muted-foreground" />
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="text-lg font-bold text-card-foreground">{bearer.name}</h4>
                    <p className="text-primary font-medium">{bearer.role}</p>
                  </div>
                </Card>
              </ElectricBorder>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
