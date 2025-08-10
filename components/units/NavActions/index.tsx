import { FC } from 'react';

import NavSidebarContent from '@/units/NavSidebarContent';
import Sidebar from '@/units/Sidebar';
import ThemeToggle from '@/units/ThemeToggle';

const NavActions: FC = () => {
  return (
    <div className='flex flex-1 justify-end gap-x-5'>
      <div className='hidden items-center gap-x-5 lg:flex'>
        <ThemeToggle />
      </div>
      <div className='flex lg:hidden'>
        <Sidebar>
          <NavSidebarContent />
        </Sidebar>
      </div>
    </div>
  );
};

export default NavActions;
