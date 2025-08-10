import { cva } from 'class-variance-authority';

export const spinnerVariants = cva('flex gap-2.5 items-center justify-center', {
  variants: {
    show: {
      true: 'flex',
      false: 'hidden',
    },
  },
  defaultVariants: {
    show: true,
  },
});

export const loaderVariants = cva('animate-spin text-secondary', {
  variants: {
    size: {
      small: 'size-5',
      medium: 'size-6',
      large: 'size-7',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export const buttonVariants = cva(
  'inline-flex items-center justify-center cursor-pointer font-medium rounded-md transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-info text-white hover:bg-info/90',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        outline: 'text-primary/60 hover:bg-primary hover:text-info',
        ghost: 'text-secondary hover:bg-info',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
        xl: 'px-8 py-4 text-lg',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

export const linkVariants = cva('font-medium cursor-pointer transition-colors duration-200 ease-in-out text-balance', {
  variants: {
    variant: {
      primary: [
        'group relative text-primary-foreground',
        'before:absolute before:-bottom-1.5 before:left-0 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 before:ease-out',
        'hover:before:w-full',
      ],
      secondary: 'text-secondary hover:text-primary-foreground',
    },
  },
  defaultVariants: {
    variant: 'secondary',
  },
});

export const titleVariants = cva('font-medium break-words text-balance text-pretty', {
  variants: {
    variant: {
      primary: 'text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-primary-foreground',
      secondary: 'text-xl lg:text-2xl font-semibold tracking-tight text-secondary',
      tertiary: 'text-md lg:text-lg xl:text-xl font-semibold tracking-tight text-secondary',
    },
    size: {
      base: 'text-base',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
  },
  compoundVariants: [{ variant: ['primary', 'secondary'] }],
});

export const textVariants = cva('font-medium text-pretty text-secondary-foreground', {
  variants: {
    variant: {
      primary: 'text-sm sm:text-md ',
      secondary: 'text-base lg:text-sm',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const inputVariants = cva(
  'block w-full rounded-md bg-primary px-3.5 py-2 text-base text-secondary transition-colors duration-200',
  {
    variants: {
      variant: {
        default:
          'outline-2 -outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-info',
        error:
          '-ring-offset-2 ring-2 ring-destructive focus:outline-2 focus:-outline-offset-2 focus:outline-transparent',
      },
      size: {
        sm: 'text-xs',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export const labelVariants = cva('block mb-2.5 text-sm font-medium text-secondary', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export const helperTextVariants = cva('mt-1', {
  variants: {
    variant: {
      default: 'text-sm text-gray-500',
      error: 'text-xs text-destructive',
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
