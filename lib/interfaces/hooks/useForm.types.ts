import { FieldValues } from 'react-hook-form';

import type * as yup from 'yup';

export type TUseFormOptions<T extends FieldValues> = {
  schema?: yup.AnyObjectSchema;
  defaultValues: Partial<T>;
  onSubmit?: (data: T) => void | Promise<unknown>;
};
