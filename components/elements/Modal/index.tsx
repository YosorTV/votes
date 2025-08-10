'use client';

import { FC } from 'react';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'motion/react';

import Button from '@/components/elements/Button';
import { TModal } from '@/lib/interfaces/elements/modal.types';
import cn from '@/lib/packages/cn';

const Modal: FC<TModal> = ({ isOpen, onClose, children, title, className }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={onClose} className='relative z-50'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm'
          />
          <div className='fixed inset-0 flex items-center justify-center p-4'>
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={cn('relative w-full max-w-md rounded-xl bg-background p-6 shadow-2xl', className)}
            >
              {title && (
                <div className='mb-4 flex items-center justify-between'>
                  <DialogTitle className='text-lg font-semibold text-secondary'>{title}</DialogTitle>
                  <Button variant='ghost' size='sm' onClick={onClose} className='text-secondary hover:text-primary'>
                    <XMarkIcon className='size-5' />
                  </Button>
                </div>
              )}
              {children}
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default Modal;
