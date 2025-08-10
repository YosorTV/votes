import { FC } from 'react';

import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid';

import Text from '@/components/elements/Text';
import Title from '@/components/elements/Title';
import Tag from '@/elements/Tag';
import { SYSTEM_ROUTES } from '@/lib/constants/system';
import { TWithId } from '@/lib/interfaces/shared';
import Container from '@/units/Container';
import LearnMore from '@/units/LearnMore';

const features = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu.',
    href: `#${SYSTEM_ROUTES.SYSTEM}`,
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: `#${SYSTEM_ROUTES.SYSTEM}`,
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod.',
    href: `#${SYSTEM_ROUTES.SYSTEM}`,
    icon: ArrowPathIcon,
  },
];

const Features: FC<TWithId> = ({ id }) => {
  return (
    <Tag tag='section' id={id} className='bg-background py-5 md:py-10 lg:py-20' inMotion={false}>
      <Container>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <Text className='text-base/7 font-semibold text-info'>Deploy faster</Text>
          <Title level='2' variant='secondary' className='mt-4'>
            Everything you need to deploy your app
          </Title>
          <Text variant='primary' className='mt-6'>
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </Text>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            {features.map((feature) => (
              <div key={feature.name} className='flex flex-col'>
                <dt className='flex items-center gap-x-3 text-base/7 font-semibold text-primary-foreground'>
                  <feature.icon aria-hidden='true' className='size-5 flex-none text-info' />
                  {feature.name}
                </dt>
                <dd className='mt-4 flex flex-auto flex-col'>
                  <Text variant='secondary' className='flex-auto'>
                    {feature.description}
                  </Text>
                  <LearnMore className='mt-6' href={feature.href} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Tag>
  );
};

export default Features;
