import { FC } from 'react';

import { TContainer } from '@/lib/interfaces/units/container.types';
import cn from '@/lib/packages/cn';

const Container: FC<TContainer> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'relative container mx-auto max-w-sm flex-grow px-6 sm:max-w-md sm:px-4 md:max-w-2xl 2xl:max-w-4xl',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
