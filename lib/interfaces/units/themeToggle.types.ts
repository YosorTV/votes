import { TSizes, TVariants, TWithClassName } from '../shared';

export type TThemeToggle = TWithClassName & {
  size?: Exclude<TSizes, 'xs' | 'xl'>;
  variant?: TVariants;
};
