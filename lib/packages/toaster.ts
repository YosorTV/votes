import { toast } from 'sonner';

import { IToasterProps, TToastResponse } from '@/lib/interfaces/elements/toaster.types';

const toaster = ({ toastKey, message, description }: IToasterProps): void => {
  const response: TToastResponse = {
    success: () => toast.success(message, { description }),
    error: () => toast.error(message, { description }),
    info: () => toast.info(message, { description }),
    warning: () => toast.warning(message, { description }),
  };

  return response[toastKey](message, description);
};

export default toaster;
