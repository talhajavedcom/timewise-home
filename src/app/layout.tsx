import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Diptas Math Academy',
  description: "Your child doesn't need a math tutor forever.",
  keywords: ['math tutor', 'math tutoring', 'math tutor for kids', 'math tutor for adults'],
  authors: [{ name: 'Diptas Math Academy' }],
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
