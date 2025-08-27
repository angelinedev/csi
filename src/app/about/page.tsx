
'use client';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import ChromaGrid, {
  ChromaItem,
} from '@/components/shared/chroma-grid';

const officeBearersData = [
  { name: 'Mrs. Vanitha Sheba M', role: 'SBC-CSI', image: 'https://placehold.co/300x300.png' },
  { name: 'Mahendra Udayakumar', role: 'President', image: 'https://placehold.co/300x300.png' },
  { name: 'Megha Shree G', role: 'Vice President', image: 'https://placehold.co/300x300.png' },
  { name: 'Syed Tamim Mehdi', role: 'Secretary', image: 'https://placehold.co/300x300.png' },
  { name: 'Aliah Ridha A', role: 'Joint Secretary', image: 'https://placehold.co/300x300.png' },
  { name: 'Deepika R', role: 'Treasurer', image: 'https://placehold.co/300x300.png' },
  { name: 'Rajadurga R', role: 'Joint Treasurer', image: 'https://placehold.co/300x300.png' },
  { name: 'Manikandan Askar K', role: 'Executive Member', image: '/p/CgABCNzbA1kSDAgAEgYIwIC6qAY=/manikandan.jpeg' },
  { name: 'Angeline Hepzibah J', role: 'Executive Member', image: '/p/CgABCTTbA1kSDAgAEgYIgJm2qAY=/angeline.jpeg' },
  { name: 'Shruthi D', role: 'Executive Member', image: 'https://placehold.co/300x300.png' },
  { name: 'Sharan S', role: 'Executive Member', image: 'https://placehold.co/300x300.png' },
];

const officeBearers: ChromaItem[] = officeBearersData.map((person) => ({
    title: person.name,
    subtitle: person.role,
    image: person.image,
}));

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

        <div className="mt-12">
            <ChromaGrid items={officeBearers} />
        </div>
      </section>
    </div>
  );
}
