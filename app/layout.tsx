import type { Metadata } from 'next';
import { Shippori_Mincho } from 'next/font/google';
import { ReactNode } from 'react';
import Comment from './_components/comment';
import Footer from './_components/footer';
import Header from './_components/header';
import './globals.css';

const noto = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const title = 'AITガイド';
const description = '愛工大の施設の位置や経路を確認できます';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://ait-guide.sysken.net/'),
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    site: '@set_official',
  },
};

const comment =
  '[ 👀 ] ソースコードをのぞく時ソースコードもまたこちらをのぞいているのだ...!';

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body className={noto.className}>
        <Comment text={comment} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
