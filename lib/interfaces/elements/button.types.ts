import { ButtonHTMLAttributes, ReactNode } from 'react';

import { VariantProps } from 'class-variance-authority';

import { TWithClassName } from '@/interfaces/shared';
import { buttonVariants } from '@/lib/packages/tailwind.variants';

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> &
  TButtonVariants &
  TWithClassName & {
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    fullWidth?: boolean;
    disabled?: boolean;
  };

export type TButtonVariants = VariantProps<typeof buttonVariants>;
