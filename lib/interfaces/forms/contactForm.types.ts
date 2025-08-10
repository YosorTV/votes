export type TContactFormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
};

export type TContactFormResponse = {
  success: boolean;
  message: string;
};