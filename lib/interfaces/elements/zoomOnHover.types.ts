import { ReactNode } from 'react';

export interface TZoomOnHover {
  children: ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
  disabled?: boolean;
}
