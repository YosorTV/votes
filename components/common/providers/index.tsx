'use client';

import { FC } from 'react';

import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

import { TProviders } from '@/lib/interfaces/common/providers.types';

const Providers: FC<TProviders> = ({ children, defaultTheme = 'light' }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme={defaultTheme} enableSystem>
      {children}
      <Toaster position='bottom-right' richColors closeButton />
    </ThemeProvider>
  );
};

export default Providers;
