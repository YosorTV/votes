import { useCallback } from 'react';
import { type DefaultValues, type FieldValues, useForm as useReactHookForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import type { TUseFormOptions } from '../interfaces/hooks/useForm.types';

const useForm = <T extends FieldValues>(options: TUseFormOptions<T>) => {
  const { schema, defaultValues, onSubmit } = options;

  const form = useReactHookForm<T>({
    resolver: schema ? yupResolver(schema) : undefined,
    defaultValues: defaultValues as DefaultValues<T>,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const handleSubmit = useCallback(
    form.handleSubmit(async (data: T) => {
      const response = await onSubmit?.(data);

      if (response) {
        form.reset(defaultValues as DefaultValues<T>);
      }

      return response;
    }),
    [form, defaultValues, onSubmit]
  );

  return {
    form,
    handleSubmit,
    isSubmitting: form.formState.isSubmitting,
    isDirty: form.formState.isDirty,
    isValid: form.formState.isValid,
    errors: form.formState.errors,
    reset: form.reset,
    setValue: form.setValue,
    getValues: form.getValues,
    watch: form.watch,
  };
};

export default useForm;
