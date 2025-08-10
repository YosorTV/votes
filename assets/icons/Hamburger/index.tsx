import { FC } from 'react';

import { MenuIcon } from 'lucide-react';

import { TIcon } from '@/lib/interfaces/shared';
import cn from '@/lib/packages/cn';

const Hamburger: FC<TIcon> = ({ className }) => {
  return <MenuIcon className={cn('size-6', className)} />;
};

export default Hamburger;
