import { FC } from 'react';

import Image from '@/components/elements/Image';
import Link from '@/components/elements/Link';
import { SITE_NAME, SYSTEM_ROUTES } from '@/lib/constants/system';
import { TLogo } from '@/lib/interfaces/assets/logo.types';
import cn from '@/lib/packages/cn';

const Logo: FC<TLogo> = ({ className, siteName = SITE_NAME, reverse = false }) => {
  return (
    <Link href={SYSTEM_ROUTES.HOME} className='flex-1'>
      <span className='sr-only'>{siteName}</span>
      <Image
        src='/logo.svg'
        alt={siteName}
        width={100}
        height={100}
        className={cn(className, 'size-10 scale-300 dark:invert', reverse ? 'invert' : '')}
      />
    </Link>
  );
};

export default Logo;
