import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';
import DarkVeil from '@/components/shared/dark-veil';

export const metadata: Metadata = {
  title: 'CSI Cyberspace - JCE',
  description:
    'The official website for the Computer Society of India (CSI) chapter at Jerusalem College of Engineering.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
            <DarkVeil
              noiseIntensity={0.03}
              scanlineIntensity={0.05}
              scanlineFrequency={30}
              warpAmount={0.3}
              hueShift={-20}
              speed={0.2}
            />
          </div>
          <Header />
          <main className="overflow-x-hidden">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}