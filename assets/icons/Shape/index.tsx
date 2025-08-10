import { FC } from 'react';

import { TIcon } from '@/lib/interfaces/shared';
import cn from '@/lib/packages/cn';

const Shape: FC<TIcon> = ({ className }) => {
  return (
    <svg
      aria-hidden='true'
      className={cn(
        'absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200',
        className
      )}
    >
      <defs>
        <pattern
          x='50%'
          y={-1}
          id='0787a7c5-978c-4f66-83c7-11c213f99cb7'
          width={200}
          height={200}
          patternUnits='userSpaceOnUse'
        >
          <path d='M.5 200V.5H200' fill='none' />
        </pattern>
      </defs>
      <rect fill='url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)' width='100%' height='100%' strokeWidth={0} />
    </svg>
  );
};

export default Shape;
