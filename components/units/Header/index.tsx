import { FC } from 'react';

import { TWithClassName } from '@/lib/interfaces/shared';
import cn from '@/packages/cn';
import Navigation from '@/units/Navigation';

const Header: FC<TWithClassName> = ({ className }) => {
  return (
    <header className={cn('min-h-22', className)}>
      <Navigation />
    </header>
  );
};

export default Header;
