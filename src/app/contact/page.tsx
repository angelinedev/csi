import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { ContactForm } from '@/components/contact-form';
import { ElectricBorderCard } from '@/components/shared/electric-border-card';
import { Mail, User, Shield } from 'lucide-react';

const contactDetails = [
  {
    name: 'Mrs. Vanitha Sheba M',
    role: 'Faculty Coordinator',
    icon: Shield,
  },
  {
    name: 'Mahendra Udayakumar',
    role: 'President',
    icon: User,
  },
  {
    name: 'Megha Shree G',
    role: 'Vice President',
    icon: User,
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 animate-fade-in-up">
      <ScrollReveal>
        <h1 className="text-4xl font-bold tracking-tighter text-center md:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
          Have a question or a proposal? We'd love to hear from you. Reach out to us through our coordinators or use the contact form below.
        </p>
      </ScrollReveal>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-8">
            <ScrollReveal>
                <h2 className="text-2xl font-bold text-primary">Contact Persons</h2>
            </ScrollReveal>
            {contactDetails.map((contact, index) => (
                <ScrollReveal key={contact.name} delay={100 * index}>
                    <ElectricBorderCard className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <contact.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-card-foreground">{contact.name}</h3>
                                <p className="text-sm text-muted-foreground">{contact.role}</p>
                            </div>
                        </div>
                    </ElectricBorderCard>
                </ScrollReveal>
            ))}
        </div>

        <div className="lg:col-span-3">
          <ScrollReveal delay={200}>
            <div className="relative p-8 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-plasma-purple animate-plasma-flow bg-[size:200%_200%] opacity-30"></div>
                <div className="relative z-10 p-4 sm:p-8 rounded-2xl glassmorphic">
                    <div className="flex items-center gap-4 mb-6">
                        <Mail className="w-8 h-8 text-accent" />
                        <h2 className="text-3xl font-bold">Send us a Message</h2>
                    </div>
                    <ContactForm />
                </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
