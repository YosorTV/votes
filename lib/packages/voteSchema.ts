import * as yup from 'yup';

import { REQUIRED_MESSAGE } from '../constants/system';

const russianPhoneValidation = yup
  .string()
  .required(REQUIRED_MESSAGE)
  .trim()
  .test('russian-phone-format', 'Введите корректный российский номер телефона', (value) => {
    if (!value) return false;

    const cleanedValue = value.replace(/[^\d+]/g, '');

    // Russian phone formats: +7XXXXXXXXXX, 8XXXXXXXXXX, 7XXXXXXXXXX
    if (cleanedValue.startsWith('+7')) {
      return cleanedValue.length === 12; // +7 + 10 digits
    }

    if (cleanedValue.startsWith('8') || cleanedValue.startsWith('7')) {
      return cleanedValue.length === 11; // 8/7 + 10 digits
    }

    return false;
  })
  .transform((value) => {
    if (!value) return value;

    const cleanedValue = value.replace(/[^\d+]/g, '');

    // Format as +7 (XXX) XXX-XX-XX
    if (cleanedValue.startsWith('+7') && cleanedValue.length === 12) {
      const digits = cleanedValue.slice(2);

      return `+7 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8)}`;
    }

    if (cleanedValue.startsWith('8') && cleanedValue.length === 11) {
      const digits = cleanedValue.slice(1);

      return `+7 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8)}`;
    }

    if (cleanedValue.startsWith('7') && cleanedValue.length === 11) {
      const digits = cleanedValue.slice(1);

      return `+7 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8)}`;
    }

    return value;
  });

const voteSchema = yup.object({
  firstName: yup.string().required(REQUIRED_MESSAGE).trim(),
  lastName: yup.string().required(REQUIRED_MESSAGE).trim(),
  phone: russianPhoneValidation,
  nominantName: yup.string().required(REQUIRED_MESSAGE),
});

export default voteSchema;
