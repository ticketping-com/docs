import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import SearchDialog from '@/components/search';
import { Inter, JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const interDisplay = Inter({
  subsets: ['latin'],
  variable: '--font-display',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-96x96.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interDisplay.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen" style={{ fontFamily: 'var(--font-sans)' }}>
        <RootProvider
          search={{
            SearchDialog,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
