
'use client';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';
import { useEffect, useRef, useState } from 'react';
import { Footer } from '@/components/layout/footer';
import { LoadingScreen } from '@/components/shared/loading-screen';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(circle at ${
          e.clientX
        }px ${
          e.clientY
        }px, hsl(var(--primary) / 0.1), hsl(var(--background)) 70%)`;
      }
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  
    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body flex flex-col min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {loading && <LoadingScreen />}
            <div ref={spotlightRef} className="fixed inset-0 -z-10 h-full w-full bg-background animated-gradient">
            </div>
            <Header />
            <main className="overflow-x-hidden flex-grow">{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}
