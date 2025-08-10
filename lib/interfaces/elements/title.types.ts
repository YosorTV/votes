import { HTMLAttributes } from 'react';

import { VariantProps } from 'class-variance-authority';

import { titleVariants } from '@/lib/packages/tailwind.variants';

export type TTitleSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

export type TTitle = TTitleProps & VariantProps<typeof titleVariants>;

export type THeadingTag = `h1` | `h2` | `h3` | `h4` | `h5` | `h6`;

export type TTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  level: HeadingLevel;
};
