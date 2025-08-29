
'use client';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import ElectricBorder from '@/components/shared/electric-border';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const officeBearersData = [
  { name: 'Mrs. Vanitha Sheba M', role: 'SBC-CSI', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494051/Mrs._Vanitha_Sheba_hrf9nl.png', handle: 'vanithasheba' },
  { name: 'Mahendra Udayakumar', role: 'President', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494049/Mahendra_mv2qlt.png', handle: 'mahendra' },
  { name: 'Megha Shree G', role: 'Vice President', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494043/Megha_t7rdpy.png', handle: 'meghashree' },
  { name: 'Syed Tamim Mehdi', role: 'Secretary', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494043/Tamim_ojlrs9.png', handle: 'tamimmehdi' },
  { name: 'Aliah Ridha A', role: 'Joint Secretary', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494045/Aliah_wqyhsk.png', handle: 'aliahridha' },
  { name: 'Deepika R', role: 'Treasurer', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494043/Deepika_uimnr7.png', handle: 'deepika' },
  { name: 'Rajadurga R', role: 'Joint Treasurer', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494042/Rajadurga_gqhqv5.png', handle: 'rajadurga' },
  { name: 'Manikandan Askar K', role: 'Executive Member', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494042/Askar_xcrymh.png', handle: 'manikandanaskar' },
  { name: 'Angeline Hepzibah J', role: 'Executive Member', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494051/Angeline_d8uaow.png', handle: 'angeline' },
  { name: 'Shruthi D', role: 'Executive Member', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494048/Shruthi_s3hia1.png', handle: 'shruthi' },
  { name: 'Sharan S', role: 'Executive Member', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494045/Sharan_upq8rx.png', handle: 'sharan' },
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
          <h3 className="text-2xl font-bold text-primary">About the Computer Society of India</h3>
          <p className="mt-4 text-foreground/80">
            The Computer Society of India (CSI), founded in 1965, is India’s oldest and largest professional body for IT professionals. It promotes knowledge-sharing, skill development, and innovation in computing and emerging technologies. CSI has over 100,000 members across academia, industry, and student communities. It organizes seminars, workshops, certifications, and national-level competitions to foster tech excellence. Our college is proudly affiliated with the CSI Kancheepuram Chapter, a vibrant regional hub known for hosting dynamic student conventions and technical events.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={400}>
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center">
            {officeBearersData.map((person, index) => (
                <ScrollReveal key={index} delay={100 * (index % 4)}>
                    <ElectricBorder className="group" style={{ borderRadius: 'var(--radius)' }}>
                        <Card className="w-full max-w-sm overflow-hidden glassmorphic rounded-lg">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={person.image}
                                    alt={`Portrait of ${person.name}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <CardContent className="p-4 text-center">
                                <h3 className="text-lg font-bold text-card-foreground">{person.name}</h3>
                                <p className="text-sm text-primary">{person.role}</p>
                            </CardContent>
                        </Card>
                    </ElectricBorder>
                </ScrollReveal>
            ))}
        </div>
      </section>
    </div>
  );
}
