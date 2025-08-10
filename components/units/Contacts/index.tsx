'use client';

import { FC } from 'react';

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

import Shape from '@/assets/icons/Shape';
import Link from '@/components/elements/Link';
import Tag from '@/components/elements/Tag';
import Text from '@/components/elements/Text';
import Title from '@/components/elements/Title';
import ContactForm from '@/components/forms/ContactForm';
import { TWithId } from '@/lib/interfaces/shared';

const Contacts: FC<TWithId> = ({ id }) => {
  return (
    <Tag tag='section' id={id} className='relative isolate bg-background py-5 md:py-10 lg:py-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='relative border-r border-primary-foreground/10 px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48'>
          <Shape className='size-1/2' />
          <div className='mx-auto max-w-xl overflow-hidden lg:mx-0 lg:max-w-lg'>
            <Title level='2' size='2xl' className='font-semibold text-secondary'>
              Get in touch
            </Title>
            <Text variant='secondary' className='mt-6'>
              Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
              integer elementum id sem. Arcu sed malesuada et magna.
            </Text>
            <dl className='mt-10 space-y-4 text-base/7 text-secondary-foreground'>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Address</span>
                  <BuildingOffice2Icon aria-hidden='true' className='h-7 w-6 text-secondary-foreground' />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Telephone</span>
                  <PhoneIcon aria-hidden='true' className='h-7 w-6 text-secondary-foreground' />
                </dt>
                <dd>
                  <Link href='tel:+1 (555) 234-5678' className='text-secondary-foreground hover:text-secondary'>
                    +1 (555) 234-5678
                  </Link>
                </dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Email</span>
                  <EnvelopeIcon aria-hidden='true' className='h-7 w-6 text-secondary-foreground' />
                </dt>
                <dd>
                  <Link href='mailto:hello@example.com' className='text-secondary-foreground hover:text-secondary'>
                    hello@example.com
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className='w-full px-6 py-10 sm:pb-32 lg:px-8 lg:py-48'>
          <ContactForm />
        </div>
      </div>
    </Tag>
  );
};

export default Contacts;
