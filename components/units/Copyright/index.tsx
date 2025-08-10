import { FC } from 'react';

import { SITE_NAME } from '@/lib/constants/system';
import cn from '@/lib/packages/cn';

interface CopyrightProps {
  className?: string;
  siteName?: string;
  showRightsReserved?: boolean;
}

const Copyright: FC<CopyrightProps> = ({ className, siteName = SITE_NAME, showRightsReserved = true }) => {
  const currentYear = new Date().getFullYear();

  return (
    <p className={cn('mt-10 text-center text-sm/6 text-gray-600', className)}>
      &copy; {currentYear} {siteName}
      {showRightsReserved && '. All rights reserved.'}
    </p>
  );
};

export default Copyright;
