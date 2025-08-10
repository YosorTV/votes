import { FC, PropsWithChildren } from 'react';

import LoadingIcon from '@/assets/icons/Loading';
import { TSpinner } from '@/lib/interfaces/elements/spinner.types';
import cn from '@/lib/packages/cn';
import { loaderVariants, spinnerVariants } from '@/lib/packages/tailwind.variants';

const Spinner: FC<PropsWithChildren<TSpinner>> = ({ size, show = true, children, className }) => {
  const spinnerStyles = spinnerVariants({ show });
  const loaderStyles = cn(loaderVariants({ size }), className);

  if (!show) return null;

  return (
    <span className={spinnerStyles}>
      <LoadingIcon className={loaderStyles} />
      {children}
    </span>
  );
};

export default Spinner;
