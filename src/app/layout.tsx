
'use client';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Plasma from '@/components/shared/plasma-background';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
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
      <body className="font-body">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10 h-full w-full bg-background">
            {mounted && (
              <Plasma 
                color={resolvedTheme === 'dark' ? '#673ab7' : '#e0e7ff'}
                speed={0.5}
                scale={resolvedTheme === 'dark' ? 1.5 : 2}
                opacity={resolvedTheme === 'dark' ? 0.3 : 0.6}
              />
            )}
          </div>
          <Header />
          <main className="overflow-x-hidden">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
