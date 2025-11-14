import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WebVitals } from '@/components/performance/WebVitals';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'TikTok Creator Calculator - Earnings, Engagement & Analytics Tools',
    template: '%s | TikTok Creator Calculator',
  },
  description:
    'Free TikTok calculators for creators: estimate Creator Fund earnings, engagement rates, brand deal rates, LIVE gifts, and more. Data-driven tools with transparent methodology.',
  keywords: [
    'tiktok calculator',
    'tiktok money calculator',
    'tiktok engagement rate calculator',
    'tiktok creator fund calculator',
    'tiktok earnings calculator',
    'tiktok brand deal calculator',
  ],
  authors: [{ name: 'TikTok Creator Calculator' }],
  creator: 'TikTok Creator Calculator',
  publisher: 'TikTok Creator Calculator',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://calculatecreator.com',
    title: 'TikTok Creator Calculator - Earnings & Analytics Tools',
    description:
      'Free TikTok calculators for creators: estimate earnings, engagement rates, brand deal rates, and more.',
    siteName: 'TikTok Creator Calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Creator Calculator',
    description:
      'Free TikTok calculators for creators: estimate earnings, engagement rates, and more.',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="w-C9CwLR5pFTw0kjkeKFKIJ-qM3RQGok1qm3Zt8pSwA" />

        {/* Preload critical resources for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className="font-sans">
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Service Worker Registration */}
        <Script id="service-worker" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `}
        </Script>
        <div className="flex min-h-screen flex-col">
          <Header />
          <ErrorBoundary>
            <main className="flex-1">{children}</main>
          </ErrorBoundary>
          <Footer />
          <WebVitals />
        </div>
      </body>
    </html>
  );
}
