import type { Metadata } from 'next';

const metaDataAdapter = (): Metadata => ({
  title: {
    default: 'Bunker Suite - Deploy to the Cloud with Confidence',
    template: '%s | Bunker Suite',
  },
  description:
    'Deploy your applications to the cloud with confidence. Bunker Suite provides secure, scalable cloud deployment with SSL certificates, simple queues, and push-to-deploy functionality.',
  keywords: ['bunker suite'],
  authors: [{ name: 'Bunker Suite Team' }],
  creator: 'Bunker Suite',
  publisher: 'Bunker Suite',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bunkersuite.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bunkersuite.com',
    title: 'Bunker Suite - Deploy to the Cloud with Confidence',
    description: 'Deploy your applications to the cloud with confidence. Secure, scalable cloud deployment platform.',
    siteName: 'Bunker Suite',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bunker Suite - Cloud Deployment Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bunker Suite - Deploy to the Cloud with Confidence',
    description: 'Deploy your applications to the cloud with confidence. Secure, scalable cloud deployment platform.',
    images: ['/og-image.png'],
    creator: '@bunkersuite',
  },
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
});

export default metaDataAdapter;
