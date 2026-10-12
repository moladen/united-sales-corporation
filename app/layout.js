import { Montserrat, Nunito_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Logo from '@/components/layout/Logo';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import MotionProvider from '@/components/ui/MotionProvider';
import JsonLd from '@/components/ui/JsonLd';
import { site } from '@/lib/site';
import { organizationSchema } from '@/lib/seo';

// Montserrat echoes the logo's heavy geometric wordmark; Nunito Sans pairs with it for body text.
const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-montserrat', display: 'swap' });
const nunito = Nunito_Sans({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-body', display: 'swap' });

export const metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: {
    default: `${site.name} | Engineering, Fire & Life Safety, MEP`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    siteName: site.name,
    locale: 'en_IN',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#022559',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${montserrat.variable} ${nunito.variable}`}>
      <head>
        <noscript>
          {/* Keep scroll-revealed content visible when JavaScript is unavailable */}
          <style>{'[style*="opacity:0"]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-[100] rounded-[3px] bg-navy-900 px-4 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to main content
        </a>
        <MotionProvider>
          <Header logo={<Logo priority />} />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </MotionProvider>
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
