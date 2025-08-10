'use client';

import { FC } from 'react';

import Gradient from '@/assets/icons/Gradient';
import Shape from '@/assets/icons/Shape';
import Tag from '@/components/elements/Tag';
import Text from '@/components/elements/Text';
import Title from '@/components/elements/Title';
import { SYSTEM_ROUTES } from '@/lib/constants/system';
import { TWithId } from '@/lib/interfaces/shared';
import LearnMore from '@/units/LearnMore';

import ImageGrid from '../ImageGrid';

const Hero: FC<TWithId> = ({ id }) => {
  return (
    <Tag tag='section' id={id} className='relative isolate overflow-hidden bg-transparent' inMotion={false}>
      <div className='relative isolate overflow-hidden'>
        <Shape />
        <div
          aria-hidden='true'
          className='absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
        >
          <Gradient />
        </div>
        <div className='overflow-visible px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32'>
          <div className='mx-auto max-w-sm flex-grow pl-6 sm:max-w-md sm:pl-4 lg:max-w-2xl lg:items-center xl:flex xl:max-w-none 2xl:max-w-4xl'>
            <div className='relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl'>
              <Title level='1' variant='primary'>
                Твой голос способен на большее
              </Title>
              <Text variant='secondary' className='mt-8'>
                Когда мы объединяем усилия, даже самые смелые мечты становятся достижимыми. Поделись своим голосом.
                Поддержи добро.
              </Text>
              <div className='mt-10 flex items-center gap-x-6'>
                <LearnMore href={`#${SYSTEM_ROUTES.CONTENT}`} />
              </div>
            </div>
            <ImageGrid />
          </div>
        </div>
      </div>
    </Tag>
  );
};

export default Hero;
