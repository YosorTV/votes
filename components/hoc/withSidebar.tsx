'use client';

import { ComponentType, FC, useCallback, useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { TWithSidebar } from '@/lib/interfaces/hoc/withSidebar.types';

const withSidebar = <P extends object>(Component: ComponentType<P & TWithSidebar>) => {
  const WrappedComponent: FC<P> = (props) => {
    const pathname = usePathname();

    const [opened, setOpened] = useState<boolean>(false);

    const handleToggle = useCallback((value: boolean) => {
      setOpened(value);
    }, []);

    useEffect(() => {
      setOpened(false);
    }, [pathname]);

    return <Component opened={opened} toggle={handleToggle} {...props} />;
  };

  WrappedComponent.displayName = `withSidebar(${Component.displayName || Component.name})`;

  return WrappedComponent;
};

export default withSidebar;
