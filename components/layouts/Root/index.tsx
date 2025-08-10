import { FC } from 'react';

import { inter } from '@/assets/fonts';
import Providers from '@/common/providers';
import { TRootLayout } from '@/interfaces/layout/root.types';
import cn from '@/lib/packages/cn';
import Footer from '@/units/Footer';
import Header from '@/units/Header';

const RootLayout: FC<TRootLayout> = ({ children, locale }) => {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning className={cn(inter.className, 'overflow-x-clip bg-background')}>
        <Providers>
          <Header />
          <main className='flex min-h-screen flex-col overflow-x-clip'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
