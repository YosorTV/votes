import { useCallback, useMemo } from 'react';

import googleSheetsService from '@/services/googleSheets';

import useForm from './useForm';
import { TVerificationFormData } from '../interfaces/forms/verificationForm.types';
import { TUseFormOptions } from '../interfaces/hooks/useForm.types';
import toaster from '../packages/toaster';
import verificationSchema from '../packages/verificationSchema';

const useVerificationForm = (onSuccess?: () => void) => {
  const defaultValues: TVerificationFormData = useMemo(() => {
    const savedPhone = typeof window !== 'undefined' ? localStorage.getItem('verificationPhone') || '' : '';

    return {
      phone: savedPhone,
      verificationCode: '',
    };
  }, []);

  const onSubmit = useCallback(
    async (data: TVerificationFormData) => {
      try {
        const { result } = await googleSheetsService<TVerificationFormData>(data, 'updateVerificationCode');

        if (result === 'success') {
          localStorage.removeItem('verificationPhone');

          toaster({
            toastKey: 'success',
            message: 'Верификация прошла успешно',
            description: 'Спасибо за участие',
          });
          onSuccess?.();
        } else {
          toaster({
            toastKey: 'error',
            message: 'Ошибка верификации',
          });
        }
      } catch (error) {
        console.error('Verification error:', error);
        toaster({
          toastKey: 'error',
          message: 'Ошибка верификации',
        });
      }
    },
    [onSuccess]
  );

  const config: TUseFormOptions<TVerificationFormData> = useMemo(() => {
    return { onSubmit, defaultValues, schema: verificationSchema };
  }, [defaultValues, onSubmit]);

  const { form, handleSubmit } = useForm<TVerificationFormData>(config);

  return { form, handleSubmit };
};

export default useVerificationForm;
