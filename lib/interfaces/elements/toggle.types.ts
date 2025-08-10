import { ChangeEvent, FC, InputHTMLAttributes, ReactNode } from 'react';

export type TToggle = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  'aria-label'?: string;
  disabled?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
  thumbClassName?: string;
  inputClassName?: string;
  icon?: ReactNode;
  checkedIcon?: ReactNode;
  uncheckedIcon?: ReactNode;
};

export type TToggleComponent = FC<TToggle>;
