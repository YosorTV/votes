import { FC, PropsWithChildren } from 'react';

import NextLink from 'next/link';

import { TLink } from '@/lib/interfaces/elements/link.types';
import cn from '@/lib/packages/cn';
import { linkVariants } from '@/lib/packages/tailwind.variants';

const Link: FC<PropsWithChildren<TLink>> = ({
  children,
  className,
  id,
  href,
  target,
  type,
  prefetch,
  onClick,
  variant,
}) => {
  if (!href) return null;

  return (
    <NextLink
      id={id ? String(id) : undefined}
      href={href}
      className={cn(linkVariants({ variant }), className)}
      target={target}
      rel={type}
      prefetch={prefetch}
      onClick={onClick}
    >
      {children}
    </NextLink>
  );
};

export default Link;
