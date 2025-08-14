export type TVerificationFormData = {
  phone: string;
  verificationCode: string;
};

export type TVerificationFormResponse = {
  result: 'success' | 'error';
  msg: string;
};
