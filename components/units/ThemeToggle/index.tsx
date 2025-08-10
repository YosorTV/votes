'use client';

import { FC } from 'react';

import { MoonIcon, SunIcon } from 'lucide-react';

import Toggle from '@/components/elements/Toggle';
import withThemeToggle from '@/components/hoc/withThemeToggle';
import { TWithThemeToggle } from '@/lib/interfaces/hoc/withThemeToggle.types';
import { TThemeToggle } from '@/lib/interfaces/units/themeToggle.types';
import cn from '@/lib/packages/cn';

const ThemeToggle: FC<TThemeToggle & TWithThemeToggle> = ({
  className,
  size = 'md',
  variant = 'primary',
  isDark,
  toggleTheme,
}) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Toggle
        size={size}
        checked={isDark}
        variant={variant}
        onChange={toggleTheme}
        aria-label='Toggle theme mode'
        uncheckedIcon={<SunIcon className='size-4 stroke-secondary' />}
        checkedIcon={<MoonIcon className='size-4 fill-primary' />}
      />
    </div>
  );
};

ThemeToggle.displayName = 'ThemeToggle';

export default withThemeToggle(ThemeToggle);
