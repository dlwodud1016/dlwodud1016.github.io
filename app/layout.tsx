import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Resume | Lee JiYeol',
  description: 'Professional resume of Lee JiYeol',
  generator: 'Next.js',
  creator: 'Lee JiYeol',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
