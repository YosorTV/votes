import { useCallback, useMemo } from 'react';

import googleSheetsService from '@/services/googleSheets';

import useForm from './useForm';
import { TVoteFormData } from '../interfaces/forms/voteForm.types';
import { TUseFormOptions } from '../interfaces/hooks/useForm.types';
import toaster from '../packages/toaster';
import voteSchema from '../packages/voteSchema';

const useVoteForm = (nominantName: string, onSuccess?: () => void) => {
  const defaultValues: TVoteFormData = useMemo(
    () => ({
      firstName: '',
      lastName: '',
      phone: '',
      nominantName,
    }),
    [nominantName]
  );

  const onSubmit = useCallback(
    async (data: TVoteFormData) => {
      try {
        const result = await googleSheetsService(data);

        if (result.result === 'success') {
          toaster({
            toastKey: 'success',
            message: 'Голос принят!',
          });
          onSuccess?.();
        } else {
          toaster({
            toastKey: 'error',
            message: 'Ошибка отправки',
            description: result.msg || 'Не удалось отправить голос',
          });
        }
      } catch (error) {
        console.error('Vote submission error:', error);
        toaster({
          toastKey: 'error',
          message: 'Ошибка отправки',
        });
      }
    },
    [onSuccess]
  );

  const config: TUseFormOptions<TVoteFormData> = useMemo(() => {
    return { onSubmit, defaultValues, schema: voteSchema };
  }, [defaultValues, onSubmit]);

  const { form, handleSubmit } = useForm<TVoteFormData>(config);

  return { form, handleSubmit };
};

export default useVoteForm;
