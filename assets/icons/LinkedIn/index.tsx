import { FC } from 'react';

import Image from '@/components/elements/Image';
import { TWithClassName } from '@/lib/interfaces/shared';
import cn from '@/packages/cn';

const LinkedIn: FC<TWithClassName> = ({ className }) => {
  return <Image src='/linkedin.svg' alt='LinkedIn' width={24} height={24} className={cn('size-6', className)} />;
};

export default LinkedIn;
