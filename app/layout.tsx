import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import Providers from './Providers';

export const metadata: Metadata = {
  title: 'Mohammad Touhid Hasan',
  description: 'Welcome to my showoff center!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Providers>{children}</Providers>
    </html>
  );
}
