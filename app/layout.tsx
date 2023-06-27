'use client';

import { useBoundStore } from './store/store';
import ReactQueryProvider from './providers/ReactQueryProvider';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const app = useBoundStore(state => state.bears);
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
