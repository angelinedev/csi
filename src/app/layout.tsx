
'use client';
import { useTheme } from 'next-themes';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';
import DarkVeil from '@/components/shared/dark-veil';
import { PlexusBackground } from '@/components/shared/plexus-background';
import { useEffect, useState } from 'react';

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
          <div className="fixed inset-0 -z-10">
            {mounted && resolvedTheme === 'dark' && (
              <DarkVeil
                noiseIntensity={0.03}
                scanlineIntensity={0.05}
                scanlineFrequency={30}
                warpAmount={0.3}
                hueShift={0}
                speed={0.2}
              />
            )}
            {mounted && resolvedTheme === 'light' && <PlexusBackground />}
          </div>
          <Header />
          <main className="overflow-x-hidden">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
