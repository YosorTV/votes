'use client';

import { FC } from 'react';

import Form from '@/elements/Form';
import Input from '@/elements/Input';
import SubmitButton from '@/elements/SubmitButton';
import useVerificationForm from '@/lib/hooks/useVerificationForm';

type TVerificationForm = {
  onSuccess?: () => void;
};

const VerificationForm: FC<TVerificationForm> = ({ onSuccess }) => {
  const { form, handleSubmit } = useVerificationForm(onSuccess);

  return (
    <Form form={form} onSubmit={handleSubmit} className='space-y-4'>
      <Input name='phone' type='tel' disabled hidden />
      <Input name='verificationCode' label='Код верификации' type='text' placeholder='Введите код верификации' />
      <div className='flex justify-end'>
        <SubmitButton>Подтвердить</SubmitButton>
      </div>
    </Form>
  );
};

export default VerificationForm;
