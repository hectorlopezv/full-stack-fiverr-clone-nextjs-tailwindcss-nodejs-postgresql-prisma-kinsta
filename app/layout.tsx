'use client';
import '@/app/globals.css';
import { useBoundStore } from './store/store';
import ReactQueryProvider from './providers/ReactQueryProvider';
import { SessionProvider } from 'next-auth/react';
import HeroBanner from './components/HeroBanner';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

export default function RootLayout({
  children,
  authmodal
}: {
  authmodal: React.ReactNode;
  children: React.ReactNode;
}) {
  const app = useBoundStore(state => state.bears);
  return (
    <html lang="en">
      <body className="">
        <SessionProvider>
          <ReactQueryProvider>
            <NavBar />
            <HeroBanner>{children}</HeroBanner>
            {authmodal}
            <Footer />
          </ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
