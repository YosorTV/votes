export type ToastKeys = 'success' | 'error' | 'info' | 'warning';

export interface IToasterProps {
  toastKey: ToastKeys;
  message: string;
  description?: string;
}

export type TToastFunction = (message: string, description?: string) => void;

export type TToastResponse = {
  [toastKey in ToastKeys]: TToastFunction;
};
