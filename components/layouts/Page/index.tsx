import { FC } from 'react';

import { TPageLayout } from '@/lib/interfaces/layout/page.types';
import cn from '@/lib/packages/cn';

const PageLayout: FC<TPageLayout> = ({ children, className }) => {
  return <section className={cn('flex flex-grow flex-col', className)}>{children}</section>;
};

export default PageLayout;
