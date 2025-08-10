export type TWithClassName = {
  className?: string;
};

export type TWithLocale = {
  locale: string;
};

export type TServerActionState = {
  errors?: Record<string, string[]> | null;
  message?: string | null;
  success?: boolean;
  [key: string]: unknown;
};

export type TUrl = string;
export type TLinkType = 'internal' | 'external';
export type TLinkTarget = '_self' | '_blank' | '_parent' | '_top';

export type TID = number | string;

export type TIcon = TWithClassName;

export type TVariants = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type TSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TWithSiteName = {
  siteName?: string;
};

export type TNavLink = {
  id: string;
  label: string;
  href: TUrl;
};

export type TWithId = { id?: TID };

export type ThrottleFunction<T extends unknown[]> = (...args: T) => void;

export type TFormState = {
  data: Record<string, unknown> | null;
  errors: Record<string, string[]> | null;
  message: string | null;
  success: boolean;
  isSubmitting: boolean;
};


