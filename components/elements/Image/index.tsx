import { FC } from 'react';

import NextImage from 'next/image';

import { TImage } from '@/lib/interfaces/elements/image.types';

const Image: FC<TImage> = ({
  src,
  height = 100,
  width = 100,
  className,
  alt,
  priority = false,
  fill = false,
  blurDataURL,
  loading,
  sizes = '(max-width:768px) 50vw, (max-width:968px) 70vw, (max-width:1200px) 100vw',
}) => {
  if (fill) {
    return (
      <NextImage
        quality={99}
        sizes={sizes}
        src={src}
        fill={fill}
        priority={priority}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        alt={alt ?? 'image'}
        className={className}
      />
    );
  }

  return (
    <NextImage
      src={src}
      height={height}
      width={width}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
      className={className}
      alt={alt ?? 'image'}
      priority={priority}
      quality={99}
      loading={loading}
    />
  );
};

export default Image;
