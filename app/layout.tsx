'use client';

import type { Metadata } from 'next';
import './globals.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import Providers from '@/store/Providers';

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
    <html
      lang="en"
      data-qb-installed="true"
      suppressHydrationWarning={true}
  
    >
      <body
          cz-shortcut-listen="true"
      >
        <QueryClientProvider client={queryClient}>
          <Providers>{children}</Providers>
        </QueryClientProvider>
      </body>
    </html>
  );
}
