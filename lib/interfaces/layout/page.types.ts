import { PropsWithChildren } from 'react';

import { TWithClassName, TWithLocale } from '@/lib/interfaces/shared';

export type TPageLayout = PropsWithChildren & TWithLocale & TWithClassName;
