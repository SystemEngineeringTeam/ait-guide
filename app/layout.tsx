import type { Metadata } from 'next';
import { Shippori_Mincho } from 'next/font/google';
import { ReactNode } from 'react';
import Footer from './_components/footer';
import Header from './_components/header';
import './globals.css';

const noto = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'AITガイド',
  description: '愛工大の施設の位置や経路を確認できます',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body className={noto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
