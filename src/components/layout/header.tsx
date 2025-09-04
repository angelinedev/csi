'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full glassmorphic">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center md:flex-1">
           <Link href="/" className="flex items-center gap-2">
              <Image src="https://res.cloudinary.com/dfi26rd6m/image/upload/v1756807923/CSI_LOGO_jeozg4.avif" alt="CSI Logo" width={50} height={50} />
           </Link>
        </div>

        <nav className="hidden md:flex items-center justify-center gap-2">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Button key={href} asChild variant="ghost" className="relative">
                <Link href={href}>
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
                  )}
                </Link>
              </Button>
            );
          })}
        </nav>

        <div className="flex items-center justify-end md:flex-1">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-2 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu
              className={cn(
                'absolute transition-all duration-300 h-8 w-8',
                isOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
              )}
            />
            <X
              className={cn(
                'absolute transition-all duration-300 h-8 w-8',
                isOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
              )}
            />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'absolute top-20 left-0 w-full h-[calc(100vh-5rem)] md:hidden bg-background/95 backdrop-blur-lg transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="container mx-auto flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
