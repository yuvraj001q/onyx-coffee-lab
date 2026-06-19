import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Onyx Coffee Lab — Never Settle For Good Enough',
  description: 'World-class specialty coffee. Radical transparency. Founded in Northwest Arkansas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
