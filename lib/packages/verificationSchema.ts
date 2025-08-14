import * as yup from 'yup';

import { REQUIRED_MESSAGE } from '../constants/system';

const verificationSchema = yup.object({
  phone: yup.string().required(REQUIRED_MESSAGE).trim(),
  verificationCode: yup.string().required(REQUIRED_MESSAGE).trim(),
});

export default verificationSchema;
