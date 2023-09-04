'use client';

import type { Metadata } from 'next';
import './globals.scss';

import { QueryClient, QueryClientProvider } from 'react-query';

const metadata: Metadata = {
  title: 'UNA KREATIONS',
  description: 'Graphics Design,Printing,Clodin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
