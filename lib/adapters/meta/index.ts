import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const metaDataAdapter = (): Metadata => ({
  title: {
    default: 'Голос за добро — поддержи добрые инициативы',
    template: '%s | Голос за добро',
  },
  description:
    'Платформа «Голос за добро» помогает поддерживать социальные и благотворительные инициативы. Голосуйте, делитесь и делайте мир лучше.',
  keywords: [
    'голос за добро',
    'добрые дела',
    'благотворительность',
    'социальные проекты',
    'волонтёрство',
    'голосование',
    'поддержка инициатив',
  ],
  authors: [{ name: 'Команда «Голос за добро»' }],
  creator: 'Голос за добро',
  publisher: 'Голос за добро',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    title: 'Голос за добро — поддержи добрые инициативы',
    description:
      'Поддерживайте социальные и благотворительные проекты. Голосуйте и делитесь добрыми делами вместе с «Голос за добро».',
    siteName: 'Голос за добро',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Голос за добро — платформа добрых инициатив',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Голос за добро — поддержи добрые инициативы',
    description:
      'Платформа для поддержки социальных и благотворительных проектов. Присоединяйтесь к движению добрых дел!',
    images: ['/logo.svg'],
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
