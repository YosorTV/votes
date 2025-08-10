import ThemeToggle from '@/units/ThemeToggle';

import NavList from '../NavList';

const NavSidebarContent = () => {
  return (
    <div className='flex flex-1 flex-col gap-y-10 py-5'>
      <NavList className='flex flex-1 flex-col gap-y-5 md:gap-y-10 [&>li>a]:text-primary' />
      <div className='flex flex-1 items-end justify-end px-4'>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavSidebarContent;
