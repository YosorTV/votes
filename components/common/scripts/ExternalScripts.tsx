'use client';

import { FC } from 'react';

import { GoogleAnalytics } from '@next/third-parties/google';

import { TWithId } from '@/lib/interfaces/shared';

const ExternalScripts: FC<TWithId> = ({ id }) => {
  if (!id) return null;

  return <GoogleAnalytics gaId={String(id)} />;
};

export default ExternalScripts;
