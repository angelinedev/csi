
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { ContactForm } from '@/components/contact-form';
import GlareHover from '@/components/shared/glare-hover';
import { Mail, User, Shield, Phone } from 'lucide-react';

const contactDetails = [
  {
    name: 'Mrs. Vanitha Sheba M',
    role: 'Faculty Coordinator',
    icon: Shield,
    phone: '+91 9840938563',
  },
  {
    name: 'Mahendra Udayakumar',
    role: 'President',
    icon: User,
    phone: '+91 9840673391',
  },
  {
    name: 'Megha Shree G',
    role: 'Vice President',
    icon: User,
    phone: '+91 7806803699',
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
                    <GlareHover className="p-6 glassmorphic">
                      <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-full">
                              <contact.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                              <h3 className="font-bold text-card-foreground">{contact.name}</h3>
                              <p className="text-sm text-muted-foreground">{contact.role}</p>
                              {contact.phone && (
                                <div className="mt-2 flex items-center gap-2 text-sm text-foreground/80">
                                  <Phone className="w-4 h-4 text-primary/80" />
                                  <span>{contact.phone}</span>
                                </div>
                              )}
                          </div>
                      </div>
                    </GlareHover>
                </ScrollReveal>
            ))}
        </div>

        <div className="lg:col-span-3">
          <ScrollReveal delay={200}>
            <div className="relative p-8 rounded-2xl overflow-hidden glassmorphic">
                <div className="relative z-10 p-4 sm:p-8 rounded-2xl ">
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
