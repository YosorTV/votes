import { PropsWithChildren } from 'react';

import ExternalScripts from '@/components/common/scripts/ExternalScripts';
import RootLayout from '@/components/layouts/Root';
import metaDataAdapter from '@/lib/adapters/meta';

import '@/app/globals.css';

export const metadata = metaDataAdapter();

export default function AppLayout({ children }: Readonly<PropsWithChildren>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <RootLayout locale='en'>
      {children}
      {gaId && <ExternalScripts id={gaId} />}
    </RootLayout>
  );
}
