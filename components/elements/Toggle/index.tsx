import { ChangeEvent, FC } from 'react';

import { TToggle } from '@/lib/interfaces/elements/toggle.types';
import cn from '@/lib/packages/cn';
import { toggleInputVariants, toggleThumbVariants, toggleVariants } from '@/lib/packages/toggle.variants';

const Toggle: FC<TToggle> = ({
  checked,
  defaultChecked,
  onChange,
  name,
  id,
  'aria-label': ariaLabel,
  disabled = false,
  required = false,
  size = 'md',
  variant = 'primary',
  className,
  thumbClassName,
  inputClassName,
  icon,
  checkedIcon,
  uncheckedIcon,
  ...props
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    onChange?.(event.target.checked, event);
  };

  const inputClasses = cn(toggleInputVariants({ disabled }), inputClassName);
  const containerClasses = cn(toggleVariants({ size, variant, disabled }), className);
  const thumbClasses = cn(toggleThumbVariants({ size, disabled }), 'group-has-checked:translate-x-5', thumbClassName);

  const uncheckedIconToShow = uncheckedIcon || icon;
  const checkedIconToShow = checkedIcon || icon;

  return (
    <div className={containerClasses}>
      <span className={cn('relative', thumbClasses)}>
        {(uncheckedIconToShow || checkedIconToShow) && (
          <>
            <span
              aria-hidden='true'
              className='absolute inset-0 flex size-full items-center justify-center opacity-100 transition-opacity duration-200 ease-in
                group-has-checked:opacity-0 group-has-checked:duration-100 group-has-checked:ease-out'
            >
              {uncheckedIconToShow}
            </span>
            <span
              aria-hidden='true'
              className='absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out
                group-has-checked:opacity-100 group-has-checked:duration-200 group-has-checked:ease-in'
            >
              {checkedIconToShow}
            </span>
          </>
        )}
      </span>
      <input
        type='checkbox'
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={handleChange}
        name={name}
        id={id}
        aria-label={ariaLabel}
        disabled={disabled}
        required={required}
        className={inputClasses}
        {...props}
      />
    </div>
  );
};

export default Toggle;
