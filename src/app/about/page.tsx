
'use client';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import TiltedCard from '@/components/shared/tilted-card';
import Image from 'next/image';

const officeBearersData = [
  { name: 'Mrs. Vanitha Sheba M', role: 'SBC-CSI', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494084/Mrs._Vanitha_Sheba_M_dueits.avif' },
  { name: 'Mahendra Udayakumar', role: 'President', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756664807/Mahendra_m8tczw.avif' },
  { name: 'Megha Shree G', role: 'Vice President', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494082/IMG_20250216_213647_995_h8v617.avif' },
  { name: 'Syed Tamim Mehdi', role: 'Secretary', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494081/Tamim_nqqpve.avif' },
  { name: 'Aliah Ridha A', role: 'Joint Secretary', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494082/Aliah_Ridha_A_svd1fl.avif' },
  { name: 'Deepika R', role: 'Treasurer', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494082/Deepika_R_wsorco.avif' },
  { name: 'Rajadurga R', role: 'Joint Treasurer', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494083/IMG-20240816-WA0040_2_hp8ftj.avif' },
  { name: 'Manikandan Askar K', role: 'Executive Member', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494081/askar1_jqucud.avif' },
  { name: 'Angeline Hepzibah J', role: 'Executive Member', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494081/Angeline_lnff2t.avif' },
  { name: 'Shruthi D', role: 'Executive Member', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494083/IMG_0620_1_ki4wjb.avif' },
  { name: 'Sharan S', role: 'Executive Member', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494082/SHARAN_S_zr1onr.avif' },
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 justify-items-center">
          {officeBearersData.map((person, index) => (
            <ScrollReveal key={index} delay={100 * (index % 4)}>
               <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                 <TiltedCard
                  imageSrc={person.image}
                  altText={person.name}
                  overlayContent={
                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent rounded-2xl">
                      <h3 className="text-lg font-bold text-white">{person.name}</h3>
                      <p className="text-sm text-white/80">{person.role}</p>
                    </div>
                  }
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
