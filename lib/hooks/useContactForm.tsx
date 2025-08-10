import { useCallback, useMemo } from 'react';

import contactService from '@/services/contact';

import useForm from './useForm';
import { ERROR_CONTACT_MESSAGE, SUCCESS_CONTACT_MESSAGE } from '../constants/system';
import { TContactFormData } from '../interfaces/forms/contactForm.types';
import { TUseFormOptions } from '../interfaces/hooks/useForm.types';
import toaster from '../packages/toaster';
import contactSchema from '../packages/yup';

const defaultValues: TContactFormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  message: '',
};

const useContactForm = () => {
  const onSubmit = useCallback(async (data: TContactFormData) => {
    const { success } = await contactService(data);

    return success ? toaster(SUCCESS_CONTACT_MESSAGE) : toaster(ERROR_CONTACT_MESSAGE);
  }, []);

  const config: TUseFormOptions<TContactFormData> = useMemo(() => {
    return { onSubmit, defaultValues, schema: contactSchema };
  }, [defaultValues, onSubmit]);

  const { form, handleSubmit } = useForm<TContactFormData>(config);

  return { form, handleSubmit };
};

export default useContactForm;
