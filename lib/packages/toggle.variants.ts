import { cva } from 'class-variance-authority';

export const toggleVariants = cva(
  'group relative inline-flex shrink-0 rounded-full p-0.5 transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 hover:cursor-pointer',
  {
    variants: {
      size: {
        sm: 'w-9 h-5',
        md: 'w-12 h-7',
        lg: 'w-14 h-7',
      },
      variant: {
        primary: 'bg-gray-200 focus-visible:outline-indigo-600 has-checked:bg-info',
        secondary: 'bg-gray-200 focus-visible:outline-gray-600 has-checked:bg-gray-600',
        success: 'bg-gray-200 focus-visible:outline-green-600 has-checked:bg-green-600',
        warning: 'bg-gray-200 focus-visible:outline-yellow-600 has-checked:bg-yellow-600',
        danger: 'bg-gray-200 focus-visible:outline-red-600 has-checked:bg-red-600',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
      disabled: false,
    },
  }
);

export const toggleThumbVariants = cva(
  'rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out',
  {
    variants: {
      size: {
        sm: 'size-4',
        md: 'size-6',
        lg: 'size-6',
      },
      disabled: {
        true: 'opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
);

export const toggleInputVariants = cva('absolute inset-0 appearance-none focus:outline-hidden', {
  variants: {
    disabled: {
      true: 'cursor-not-allowed',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
