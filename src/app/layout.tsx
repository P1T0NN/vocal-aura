import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

// PROVIDERS
import { ThemeProvider } from '@/components/ui/theme-provider';

// COMPONENTS
import { Header } from '@/components/ui/header/header';
import { Footer } from '@/components/ui/footer/footer';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vocal Aura | Talent Management Company',
  description: 'Where passion meets opportunity. Authentic music. Unstoppable talent.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
          
          <Footer />

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
