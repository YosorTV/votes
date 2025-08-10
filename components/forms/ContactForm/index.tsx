'use client';

import Form from '@/elements/Form';
import Input from '@/elements/Input';
import SubmitButton from '@/elements/SubmitButton';
import Textarea from '@/elements/Textarea';
import useContactForm from '@/lib/hooks/useContactForm';

const ContactForm = () => {
  const { form, handleSubmit } = useContactForm();

  return (
    <Form form={form} onSubmit={handleSubmit} className='mx-auto max-w-md'>
      <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
        <Input name='firstName' label='First Name' type='text' />
        <Input name='lastName' label='Last Name' type='text' />
      </div>
      <Input name='phone' label='Phone' type='tel' />
      <Input name='email' label='Email' type='email' />
      <Textarea name='message' label='Message' rows={4} size='sm' />
      <div className='flex justify-end'>
        <SubmitButton>Send message</SubmitButton>
      </div>
    </Form>
  );
};

export default ContactForm;
