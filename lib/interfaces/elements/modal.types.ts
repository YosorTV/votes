import { ReactNode } from 'react';

export interface TModal {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  className?: string;
}
