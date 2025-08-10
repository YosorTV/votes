'use client';

import { FormEvent, KeyboardEvent, useCallback } from 'react';
import { Controller, FieldValues } from 'react-hook-form';

import withFormContext from '@/components/hoc/withFormContext';
import { TInputProps } from '@/lib/interfaces/elements/input.types';
import cn from '@/lib/packages/cn';
import { helperTextVariants, inputVariants, labelVariants } from '@/lib/packages/tailwind.variants';

const Input = <T extends FieldValues = FieldValues>({
  name,
  label,
  helperText,
  className,
  id,
  control,
  error,
  size,
  variant,
  type,
  ...props
}: TInputProps<T>) => {
  const inputId = id || String(name);
  const inputVariant = variant || (error ? 'error' : 'default');

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (type === 'tel') {
        if ([8, 9, 27, 13, 46, 37, 38, 39, 40].includes(e.keyCode)) {
          return;
        }

        const allowedChars = /[0-9()+\-\s]/;

        if (!allowedChars.test(e.key)) {
          e.preventDefault();
        }
      }
    },
    [type]
  );

  const handleInput = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      if (type === 'tel') {
        const { target } = e;
        const { value } = target as HTMLInputElement;

        const cleanedValue = value.replace(/[^0-9()+\-\s]/g, '');

        if (value !== cleanedValue) {
          (target as HTMLInputElement).value = cleanedValue;
        }
      }
    },
    [type]
  );

  return (
    <div className='w-full'>
      {label && (
        <label htmlFor={inputId} className={labelVariants({ size })}>
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            id={inputId}
            type={type}
            className={cn(inputVariants({ variant: inputVariant, size }), className)}
            aria-invalid={error ? 'true' : 'false'}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
            {...props}
          />
        )}
      />
      {error && (
        <p id={`${inputId}-error`} className={helperTextVariants({ variant: 'error', size })}>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className={helperTextVariants({ variant: 'default', size })}>
          {helperText}
        </p>
      )}
    </div>
  );
};

Input.displayName = 'Input';

export default withFormContext(Input);
