'use client';

import { FC, PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';

import Loading from '@/assets/icons/Loading';
import { TWithClassName } from '@/lib/interfaces/shared';
import cn from '@/lib/packages/cn';

import Button from '../Button';

type TSubmitButton = TWithClassName & { disabled?: boolean };

const SubmitButton: FC<PropsWithChildren<TSubmitButton>> = ({ children, className, disabled }) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  const isDisabled = disabled || isSubmitting;

  return (
    <Button
      variant='success'
      type='submit'
      disabled={isDisabled}
      className={cn('rounded-md px-3.5 py-2.5 text-center text-xs font-semibold', className)}
    >
      {isSubmitting ? (
        <>
          <Loading className='size-4' />
          <span className='ml-2'>Отправка...</span>
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
