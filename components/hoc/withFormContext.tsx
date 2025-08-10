'use client';

import { ComponentType } from 'react';
import { Control, FieldValues, Path, useFormContext } from 'react-hook-form';

interface WithFormContextProps<T extends FieldValues = FieldValues> {
  name: Path<T>;
  control?: Control<T>;
  error?: string;
}

const withFormContext = <P extends WithFormContextProps>(WrappedComponent: ComponentType<P>) => {
  const WithFormContextComponent = (props: Omit<P, 'control' | 'error'>) => {
    const formContext = useFormContext<FieldValues>();

    const { control, formState } = formContext;
    const { errors } = formState;
    const { name } = props;

    const fieldError = errors[name];
    const errorMessage = fieldError ? String(fieldError.message) : undefined;

    const enhancedProps = {
      ...props,
      control,
      error: errorMessage,
    } as P;

    return <WrappedComponent {...enhancedProps} />;
  };

  WithFormContextComponent.displayName = `withFormContext(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithFormContextComponent;
};

export default withFormContext;
