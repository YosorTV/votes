import { FC } from 'react';

import { Loader2 } from 'lucide-react';

import { TIcon } from '@/lib/interfaces/shared';
import cn from '@/lib/packages/cn';

const Loading: FC<TIcon> = ({ className }) => {
  return <Loader2 className={cn('animate-spin', className)} />;
};

export default Loading;
