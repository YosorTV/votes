import { FC } from 'react';

import Link from '@/components/elements/Link';
import { NAV_LINKS } from '@/lib/constants/system';
import { TNavLink, TWithClassName } from '@/lib/interfaces/shared';
import cn from '@/lib/packages/cn';

const NavList: FC<TWithClassName> = ({ className }) => {
  const printNavLink = (link: TNavLink) => {
    const { id, label, href } = link;

    return (
      <li key={id}>
        <Link href={href} variant='primary' className='font-semibold capitalize'>
          {label}
        </Link>
      </li>
    );
  };

  return <ul className={cn('text-xl lg:text-sm/6', className)}>{NAV_LINKS.map(printNavLink)}</ul>;
};

export default NavList;
