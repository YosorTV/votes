import { FC, KeyboardEvent, MouseEvent, PropsWithChildren } from 'react';

import { Button as HeadlessButton } from '@headlessui/react';

import Spinner from '@/elements/Spinner';
import { TButton } from '@/lib/interfaces/elements/button.types';
import cn from '@/lib/packages/cn';
import { buttonVariants } from '@/lib/packages/tailwind.variants';

const Button: FC<PropsWithChildren<TButton>> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled = false,
  className,
  ...props
}) => {
  const buttonClasses = cn(buttonVariants({ variant, size, fullWidth }), className);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) {
      e.preventDefault();
      return;
    }

    props.onClick?.(e);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) {
      e.preventDefault();
      return;
    }

    props.onKeyDown?.(e);
  };

  return (
    <HeadlessButton
      className={buttonClasses}
      disabled={disabled || isLoading}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled || isLoading}
      aria-label={typeof children === 'string' ? children : undefined}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {isLoading && <Spinner size='medium' show={isLoading} />}
      {!isLoading && leftIcon && <span className='mr-2'>{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className='ml-2'>{rightIcon}</span>}
    </HeadlessButton>
  );
};

export default Button;
