'use client';

import { FC } from 'react';

import Form from '@/elements/Form';
import Input from '@/elements/Input';
import SubmitButton from '@/elements/SubmitButton';
import useVoteForm from '@/lib/hooks/useVoteForm';

type TVoteForm = {
  nominantName: string;
  onSuccess?: () => void;
};

const VoteForm: FC<TVoteForm> = ({ nominantName, onSuccess }) => {
  const { form, handleSubmit } = useVoteForm(nominantName, onSuccess);

  return (
    <Form form={form} onSubmit={handleSubmit} className='space-y-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <Input name='firstName' label='Имя' type='text' />
        <Input name='lastName' label='Фамилия' type='text' />
      </div>
      <Input name='phone' label='Телефон' type='tel' placeholder='+7 (XXX) XXX-XX-XX' />
      <Input name='nominantName' label='Номинант' type='text' disabled />
      <div className='flex justify-end'>
        <SubmitButton>Проголосовать</SubmitButton>
      </div>
    </Form>
  );
};

export default VoteForm;
