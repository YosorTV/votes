import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...classNames: ClassValue[]) => twMerge(clsx(classNames));

export default cn;
