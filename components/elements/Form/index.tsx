'use client';

import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

import cn from '@/lib/packages/cn';

import Title from '../Title';

interface FormProps<T extends FieldValues = FieldValues> {
  form: UseFormReturn<T, unknown, unknown>;
  title?: string;
  children: React.ReactNode;
  className?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = <T extends FieldValues = FieldValues>({ form, title, children, className, onSubmit }: FormProps<T>) => {
  return (
    <div className={cn('w-full space-y-8', className)}>
      {title && (
        <Title level='2' variant='secondary'>
          {title}
        </Title>
      )}
      <FormProvider {...form}>
        <form onSubmit={onSubmit} className='space-y-4'>
          {children}
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
