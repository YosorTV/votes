import { FC } from 'react';

import { TWithClassName } from '@/lib/interfaces/shared';
import cn from '@/lib/packages/cn';

const clipPath = `polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)`;

const Gradient: FC<TWithClassName> = ({ className }) => {
  return (
    <div
      style={{ clipPath }}
      className={cn('aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30', className)}
    />
  );
};

export default Gradient;
