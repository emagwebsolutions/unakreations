'use client'

import type { Metadata } from 'next';
import './globals.scss';
import { Provider } from 'react-redux';
import store from '@/store/store';

export const metadata: Metadata = {
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
        <Provider store={store}>
        {children}
        </Provider>
        </body>
    </html>
  );
}
