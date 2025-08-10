import { FC } from 'react';

import Tag from '@/components/elements/Tag';
import Text from '@/components/elements/Text';
import TIMELINE from '@/lib/constants/timeline';
import { TWithId } from '@/lib/interfaces/shared';

const Timeline: FC<TWithId> = ({ id }) => {
  return (
    <Tag tag='section' id={id} className='py-24 sm:py-32' inMotion={false}>
      <div className='mx-auto px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-10 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4'>
          {TIMELINE.map((item) => (
            <div key={item.name}>
              <time dateTime={item.dateTime} className='flex items-center text-sm/6 font-semibold text-secondary'>
                <svg viewBox='0 0 4 4' aria-hidden='true' className='mr-4 size-1 flex-none'>
                  <circle r={2} cx={2} cy={2} fill='currentColor' />
                </svg>
                {item.date}
                <div
                  aria-hidden='true'
                  className='absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto
                    lg:translate-x-0'
                />
              </time>
              <Text variant='secondary' className='mt-6 text-info'>
                {item.name}
              </Text>
              <Text variant='secondary' className='mt-1'>
                {item.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Tag>
  );
};

export default Timeline;
