import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Provider } from '@/components/provider';
import { basePath, origin } from '@/lib/shared';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: { default: 'bklink docs', template: '%s | bklink docs' },
  description: 'Documentation for bklink (backlink audits) and mxverify (backlink values), including the BV API.',
  icons: { icon: `${basePath}/favicon.ico`, apple: `${basePath}/apple-touch-icon.png` },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
