import { PropsWithChildren } from 'react';

import { TFormState, TWithClassName } from '../shared';

export type TChildProps = PropsWithChildren<{
  name?: string;
  [key: string]: unknown;
}>;

export type TPromiseResult = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export type TFormSubmit = (formData: Record<string, unknown>) => Promise<TPromiseResult>;

export type TForm = TWithClassName &
  PropsWithChildren<{
    onSubmit: TFormSubmit;
    onError?: (formState: TFormState) => void;
    onSuccess?: (formState: TFormState) => void;
    title?: string;
    errorMessage?: string;
    successMessage?: string;
  }>;
