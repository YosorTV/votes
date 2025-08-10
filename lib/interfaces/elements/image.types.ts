import { ImageProps } from 'next/image';

export type TImage = ImageProps & {
  name?: string;
  fill?: boolean;
  caption?: string | null;
};
