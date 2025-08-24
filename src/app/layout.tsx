
'use client';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';
import { useEffect, useState } from 'react';
import Beams from '@/components/shared/beams-background';
import { useTheme } from 'next-themes';

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

  const beamsConfig = {
    light: {
      lightColor: '#673AB7',
      speed: 1,
      beamNumber: 10,
      beamWidth: 1.5,
      beamHeight: 12,
      noiseIntensity: 1.2,
      scale: 0.15,
    },
    dark: {
      lightColor: '#673AB7',
      speed: 2,
      beamNumber: 12,
      beamWidth: 2,
      beamHeight: 15,
      noiseIntensity: 1.75,
      scale: 0.2,
    },
  };
  
  const currentConfig = resolvedTheme === 'light' ? beamsConfig.light : beamsConfig.dark;

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
            {mounted && (
              <Beams
                lightColor={currentConfig.lightColor}
                speed={currentConfig.speed}
                beamNumber={currentConfig.beamNumber}
                beamWidth={currentConfig.beamWidth}
                beamHeight={currentConfig.beamHeight}
                noiseIntensity={currentConfig.noiseIntensity}
                scale={currentConfig.scale}
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
