import './globals.css';
import type { Metadata } from 'next';
import { Black_Han_Sans, Spinnaker } from 'next/font/google';
import Background from './components/ui/Background';

const blackHanSans = Black_Han_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-headline',
  display: 'swap',
});

const spinnaker = Spinnaker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Palaxy',
  description: 'Discover your cosmic counterpart in Palaxy — an interactive galaxy of avatars, forces, and personality energy.',
  keywords: [
    'Palaxy',
    'cosmic personality test',
    'interactive web app',
    'React TypeScript project',
    'Next.js portfolio',
    'frontend developer project',
    'cosmic avatars',
    'UI UX design',
    'creative web development',
    'motion design',
    'Framer Motion',
    'Zod validation',
    'Supabase backend',
    'Lighthouse 100 score',
    'modern web app'
  ],
  openGraph: {
    title: 'Palaxy',
    description: 'Enter the Palaxy, where six unique cosmic avatars reflect the forces that shape you. Experience motion, art, and discovery in a galactic personality journey powered by modern web tech.',
    url: 'https://palaxy.app',
    siteName: 'Palaxy',
    images: [
      {
        url: '/palaxy-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Palaxy app preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palaxy',
    description: 'Enter the Palaxy, where six unique cosmic avatars reflect the forces that shape you. Experience motion, art, and discovery in a galactic personality journey powered by modern web tech.',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://palaxy.app'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {

  return (
    <html lang="en" className={`${blackHanSans.variable} ${spinnaker.variable}`}>
      <body>
        <Background />
        {children}
      </body>
    </html>
  );
}
