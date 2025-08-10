'use client';

import { FC, PropsWithChildren } from 'react';

import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import Hamburger from '@/assets/icons/Hamburger';
import Logo from '@/assets/icons/Logo';
import Button from '@/components/elements/Button';
import withSidebar from '@/components/hoc/withSidebar';
import { TWithSidebar } from '@/lib/interfaces/hoc/withSidebar.types';
import { TWithClassName } from '@/lib/interfaces/shared';

type TSidebar = PropsWithChildren<TWithSidebar> &
  TWithClassName & {
    withLogo?: boolean;
  };

const Sidebar: FC<TSidebar> = ({ opened, toggle, children, withLogo = true }) => {
  return (
    <>
      <Button
        variant='ghost'
        type='button'
        onClick={() => toggle(true)}
        className='rounded-md px-2.5 py-1.5 text-sm font-semibold'
      >
        <Hamburger />
      </Button>

      <Dialog open={opened} onClose={toggle} className='relative z-50'>
        <div className='fixed inset-0 bg-black/80' />
        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10 md:pl-16'>
              <DialogPanel
                transition
                className='pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full
                  sm:duration-700'
              >
                <aside className='flex h-full flex-col overflow-y-auto bg-secondary shadow-xl'>
                  <div className='flex items-center justify-between gap-5 p-5'>
                    {withLogo && <Logo reverse />}
                    <Button
                      variant='ghost'
                      type='button'
                      onClick={() => toggle(false)}
                      className='relative text-primary hover:text-primary-foreground'
                    >
                      <span className='absolute -inset-2.5' />
                      <span className='sr-only'>Close panel</span>
                      <XMarkIcon aria-hidden='true' className='size-6' />
                    </Button>
                  </div>
                  <div className='flex flex-1 flex-col gap-y-5 p-5'>{children}</div>
                </aside>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

Sidebar.displayName = 'Sidebar';

export default withSidebar(Sidebar);
