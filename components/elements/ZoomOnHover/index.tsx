'use client';

import { FC } from 'react';

import { motion } from 'motion/react';

import { TZoomOnHover } from '@/lib/interfaces/elements/zoomOnHover.types';
import cn from '@/lib/packages/cn';

const ZoomOnHover: FC<TZoomOnHover> = ({ children, scale = 1.1, duration = 0.25, className, disabled = false }) => {
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration, ease: 'linear', type: 'tween' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default ZoomOnHover;
