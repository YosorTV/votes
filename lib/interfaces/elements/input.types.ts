import { InputHTMLAttributes } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

export type TInputProps<T extends FieldValues = FieldValues> = Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> & {
  name: Path<T>;
  label?: string;
  helperText?: string;
  control?: Control<T>;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error';
};
