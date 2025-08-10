'use client';

import { ComponentType, FC, useCallback, useEffect, useMemo, useState } from 'react';

import { useTheme } from 'next-themes';

import { TWithThemeToggle } from '@/lib/interfaces/hoc/withThemeToggle.types';

const withThemeToggle = <P extends object>(WrappedComponent: ComponentType<P & TWithThemeToggle>) => {
  const WithThemeToggle: FC<P> = (props) => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    const toggleTheme = useCallback(() => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    }, [resolvedTheme, setTheme]);

    const isDark = resolvedTheme === 'dark';

    const themeProps: TWithThemeToggle = useMemo(
      () => ({
        isDark,
        toggleTheme,
      }),
      [isDark, toggleTheme, mounted]
    );

    return <WrappedComponent {...props} {...themeProps} />;
  };

  WithThemeToggle.displayName = `withThemeToggle(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithThemeToggle;
};

export default withThemeToggle;
