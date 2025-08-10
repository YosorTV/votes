import * as yup from 'yup';

import { REQUIRED_MESSAGE } from '../constants/system';

const phoneValidation = yup
  .string()
  .required(REQUIRED_MESSAGE)
  .trim()
  .test('phone-format', 'Please enter a valid phone number', (value) => {
    if (!value) return false;

    const cleanedValue = value.replace(/[^\d+]/g, '');

    if (cleanedValue.startsWith('+')) {
      return cleanedValue.length >= 11 && cleanedValue.length <= 15;
    }

    return cleanedValue.length >= 10 && cleanedValue.length <= 15;
  })
  .transform((value) => {
    if (!value) return value;

    const cleanedValue = value.replace(/[^\d+]/g, '');

    if (cleanedValue.length === 10 && !cleanedValue.startsWith('+')) {
      return `(${cleanedValue.slice(0, 3)}) ${cleanedValue.slice(3, 6)}-${cleanedValue.slice(6)}`;
    }

    if (cleanedValue.length === 11 && cleanedValue.startsWith('1') && !cleanedValue.startsWith('+')) {
      return `+1 (${cleanedValue.slice(1, 4)}) ${cleanedValue.slice(4, 7)}-${cleanedValue.slice(7)}`;
    }

    return cleanedValue;
  });

const contactSchema = yup.object({
  firstName: yup.string().required(REQUIRED_MESSAGE).trim(),
  lastName: yup.string().required(REQUIRED_MESSAGE).trim(),
  phone: phoneValidation,
  email: yup.string().required(REQUIRED_MESSAGE).email('Invalid email address'),
  message: yup.string().optional().nullable(),
});

export default contactSchema;
