'use client';

import { FC } from 'react';

import { useTheme } from 'next-themes';

import Image from '@/components/elements/Image';
import Tag from '@/components/elements/Tag';
import Title from '@/components/elements/Title';
import { TWithId } from '@/lib/interfaces/shared';

const Partnership: FC<TWithId> = ({ id }) => {
  const { theme } = useTheme();

  return (
    <Tag tag='section' id={id} inMotion={false} className='py-10 sm:py-20'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <Title level='3' variant='tertiary' className='text-center'>
            Наши партнеры
          </Title>
          <div className='mx-auto mt-24 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5'>
            <Image
              alt='Transistor'
              src={
                theme === 'dark'
                  ? 'https://tailwindcss.com/plus-assets/img/logos/transistor-logo-white.svg'
                  : 'https://tailwindcss.com/plus-assets/img/logos/transistor-logo-gray-900.svg'
              }
              width={158}
              height={48}
              className='col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1'
            />

            <Image
              alt='Reform'
              src={
                theme === 'dark'
                  ? 'https://tailwindcss.com/plus-assets/img/logos/reform-logo-white.svg'
                  : 'https://tailwindcss.com/plus-assets/img/logos/reform-logo-gray-900.svg'
              }
              width={158}
              height={48}
              className='col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1'
            />

            <Image
              alt='Tuple'
              src={
                theme === 'dark'
                  ? 'https://tailwindcss.com/plus-assets/img/logos/tuple-logo-white.svg'
                  : 'https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg'
              }
              width={158}
              height={48}
              className='col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1'
            />

            <Image
              alt='SavvyCal'
              src={
                theme === 'dark'
                  ? 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-white.svg'
                  : 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg'
              }
              width={158}
              height={48}
              className='col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1'
            />

            <Image
              alt='Statamic'
              src={
                theme === 'dark'
                  ? 'https://tailwindcss.com/plus-assets/img/logos/statamic-logo-white.svg'
                  : 'https://tailwindcss.com/plus-assets/img/logos/statamic-logo-gray-900.svg'
              }
              width={158}
              height={48}
              className='col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1'
            />
          </div>
        </div>
      </div>
    </Tag>
  );
};

export default Partnership;
