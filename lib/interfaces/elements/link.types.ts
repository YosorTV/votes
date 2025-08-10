import { MouseEvent, ReactNode } from 'react';

import { VariantProps } from 'class-variance-authority';

import { TID, TLinkTarget, TLinkType, TUrl, TWithClassName } from '@/interfaces/shared';
import { linkVariants } from '@/lib/packages/tailwind.variants';

export type TLink = TWithClassName & {
  href?: TUrl;
  target?: TLinkTarget;
  type?: TLinkType;
  id?: TID;
  prefetch?: boolean;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  variant?: VariantProps<typeof linkVariants>['variant'];
};
