'use client';
import '@/app/globals.css';
import { useBoundStore } from './store/store';
import ReactQueryProvider from './providers/ReactQueryProvider';
import { SessionProvider } from 'next-auth/react';
import HeroBanner from './components/HeroBanner';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const app = useBoundStore(state => state.bears);
  return (
    <html lang="en">
      <body className="">
        <SessionProvider>
          <ReactQueryProvider>
            <HeroBanner>{children}</HeroBanner>
          </ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
