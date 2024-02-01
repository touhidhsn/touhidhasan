'use client';

import { useMediaQuery } from '@/utils/media_query';
import Logo from './Logo';

const Header = () => {
  const isMobile = useMediaQuery();
  return (
    <header className='pt-5 pb-5 sticky top-0 z-10 bg-inherit shadow-sm'>
      <div className='container-md'>
        <div className='flex justify-center gap-3'>
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;
