'use client';

import type { Metadata } from 'next';
import './globals.scss';

import { Provider } from 'react-redux';
import { apidata } from '@/store/features/fetchData';
import store from '@/store/store';

const metadata: Metadata = {
  title: 'UNA KREATIONS',
  description: 'Graphics Design,Printing,Clodin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
