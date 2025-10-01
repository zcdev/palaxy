import './globals.css';
import { Black_Han_Sans, Spinnaker } from 'next/font/google';

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

export const metadata = {
  title: 'Palaxy',
  description: 'Survey the galaxy and find your alien friends!',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className={`${blackHanSans.variable} ${spinnaker.variable}`}>
      <body>{children}</body>
    </html>
  );
}
