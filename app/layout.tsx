'use client';

import type { Metadata } from 'next';
import './globals.scss';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apidata } from '@/store/features/fetchData';

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
        <ApiProvider api={apidata}>{children}</ApiProvider>
      </body>
    </html>
  );
}
