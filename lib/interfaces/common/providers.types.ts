import { PropsWithChildren } from 'react';

import { TTheme } from '@/lib/interfaces/constants/theme.types';

type TDefaultTheme = {
  defaultTheme?: TTheme;
};

export type TProviders = PropsWithChildren<TDefaultTheme>;
