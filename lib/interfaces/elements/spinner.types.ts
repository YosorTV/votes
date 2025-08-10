import { VariantProps } from 'class-variance-authority';

import { TWithClassName } from '@/interfaces/shared';
import { loaderVariants, spinnerVariants } from '@/lib/packages/tailwind.variants';

export type TSpinner = VariantProps<typeof spinnerVariants> & VariantProps<typeof loaderVariants> & TWithClassName;
