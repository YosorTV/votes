'use client';

import { FC } from 'react';

import Logo from '@/assets/icons/Logo';
import withScroll from '@/components/hoc/withScroll';
import Container from '@/units/Container';
import NavActions from '@/units/NavActions';
import NavList from '@/units/NavList';

const Navigation: FC = () => {
  return (
    <Container>
      <nav aria-label='Global' className='flex items-center justify-between py-6'>
        <Logo />
        <NavList className='hidden gap-x-10 lg:flex' />
        <NavActions />
      </nav>
    </Container>
  );
};

Navigation.displayName = 'Navigation';

export default withScroll(Navigation);
