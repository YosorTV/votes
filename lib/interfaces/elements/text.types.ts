import { HTMLAttributes } from 'react';

import { VariantProps } from 'class-variance-authority';

import { TWithClassName } from '@/interfaces/shared';
import { textVariants } from '@/lib/packages/tailwind.variants';

export type TTextTag = 'p' | 'span';

export type TText = HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> &
  TWithClassName &
  VariantProps<typeof textVariants> & {
    tag?: TTextTag;
  };
