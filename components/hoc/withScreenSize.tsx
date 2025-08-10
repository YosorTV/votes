'use client';

import { ComponentType, FC } from 'react';

import useScreen from '@/lib/hooks/useScreen';
import TWithScreenSize from '@/lib/interfaces/hoc/withScreenSize.types';

const withScreenSize = <P extends object>(Component: ComponentType<P & TWithScreenSize>) => {
  const WrappedComponent: FC<P> = (props) => {
    const screen = useScreen();

    return <Component {...(props as P)} screen={screen} />;
  };

  WrappedComponent.displayName = `${Component.displayName || Component.name}`;

  return WrappedComponent;
};

export default withScreenSize;
