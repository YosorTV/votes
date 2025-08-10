import { createElement, FC, PropsWithChildren } from 'react';

import { TText } from '@/lib/interfaces/elements/text.types';
import cn from '@/lib/packages/cn';
import { textVariants } from '@/lib/packages/tailwind.variants';

const Text: FC<PropsWithChildren<TText>> = ({ children, tag = 'p', className, variant, size, ...props }) => {
  const defaultParams = {
    className: cn(textVariants({ variant, size }), className),
    'aria-label': typeof children === 'string' ? children : undefined,
  };

  return createElement(tag, { ...defaultParams, ...props }, children);
};

export default Text;
