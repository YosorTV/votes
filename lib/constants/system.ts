import { TScrollState } from '../interfaces/hoc/withScroll.types';

export const SITE_NAME = 'Голос за добро' as const;

export const initialScrollState: TScrollState = {
  isVisible: true,
  hasScrolled: false,
  scrollDirection: null,
} as const;

export const SYSTEM_ROUTES = {
  HOME: '/',
  FEATURES: 'features',
  SYSTEM: 'system',
  TESTIMONIALS: 'testimonials',
  NOMINANTS: 'nominants',
  TIMELINE: 'timeline',
  PARTNERSHIP: 'partnership',
  CONTENT: 'content',
} as const;

export const NAV_LINKS = [
  {
    id: 'home',
    label: 'Главная',
    href: `#${SYSTEM_ROUTES.HOME}`,
  },
  {
    id: 'content',
    label: 'О нас',
    href: `#${SYSTEM_ROUTES.CONTENT}`,
  },
  {
    id: 'nominants',
    label: 'Номинанты',
    href: `#${SYSTEM_ROUTES.NOMINANTS}`,
  },
  {
    id: 'partnership',
    label: 'Партнеры',
    href: `#${SYSTEM_ROUTES.PARTNERSHIP}`,
  },
] as const;

export const SUCCESS_CONTACT_MESSAGE = {
  toastKey: 'success',
  message: 'Ваше сообщение успешно отправлено',
} as const;

export const ERROR_CONTACT_MESSAGE = {
  toastKey: 'error',
  message: 'Не удалось отправить сообщение',
} as const;

export const REQUIRED_MESSAGE = '*Обязательное поле';

export const FORM_SPREE_URL = 'https://formspree.io/f/xdkdlrjk';
