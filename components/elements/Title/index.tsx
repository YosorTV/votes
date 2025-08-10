import { FC, PropsWithChildren } from 'react';

import { THeadingTag, TTitle, TTitleSizes } from '@/lib/interfaces/elements/title.types';
import cn from '@/lib/packages/cn';
import { titleVariants } from '@/lib/packages/tailwind.variants';

const Title: FC<PropsWithChildren<TTitle>> = ({ level, className, children, variant, size, ...rest }) => {
  if (!children) return null;

  const HeadingTag = `h${level}` as THeadingTag;

  const levelSize = new Map<string, TTitleSizes>([
    ['1', '2xl'], // h1
    ['2', 'xl'], // h2
    ['3', 'lg'], // h3
    ['4', 'md'], // h4
    ['5', 'sm'], // h5
    ['6', 'xs'], // h6
  ]);

  const titleAttribute = typeof children === 'string' ? children : undefined;

  return (
    <HeadingTag
      title={titleAttribute}
      className={cn(
        titleVariants({
          variant,
          size: variant ? undefined : (size ?? levelSize.get(level)),
        }),
        className
      )}
      {...rest}
    >
      {children}
    </HeadingTag>
  );
};

export default Title;
