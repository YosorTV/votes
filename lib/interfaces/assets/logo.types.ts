import { TIcon, TWithSiteName } from '../shared';

export type TLogo = TIcon &
  TWithSiteName & {
    reverse?: boolean;
  };
