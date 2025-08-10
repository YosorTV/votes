'use client';

import { TextareaHTMLAttributes } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import withFormContext from '@/components/hoc/withFormContext';
import cn from '@/lib/packages/cn';
import { helperTextVariants, inputVariants, labelVariants } from '@/lib/packages/tailwind.variants';

interface TextareaProps<T extends FieldValues = FieldValues>
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> {
  name: Path<T>;
  label?: string;
  helperText?: string;
  control?: Control<T>;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error';
}

const Textarea = <T extends FieldValues = FieldValues>({
  name,
  label,
  helperText,
  className,
  id,
  control,
  error,
  size = 'sm',
  variant,
  ...props
}: TextareaProps<T>) => {
  const textareaId = id || String(name);
  const textareaVariant = variant || (error ? 'error' : 'default');

  return (
    <div className='w-full'>
      {label && (
        <label htmlFor={textareaId} className={labelVariants({ size })}>
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            id={textareaId}
            className={cn(inputVariants({ variant: textareaVariant, size }), 'resize-vertical min-h-20', className)}
            aria-invalid={error ? 'true' : 'false'}
            {...props}
          />
        )}
      />
      {error && (
        <p id={`${textareaId}-error`} className={helperTextVariants({ variant: 'error', size })}>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${textareaId}-helper`} className={helperTextVariants({ variant: 'default', size })}>
          {helperText}
        </p>
      )}
    </div>
  );
};

Textarea.displayName = 'Textarea';

export default withFormContext(Textarea);
