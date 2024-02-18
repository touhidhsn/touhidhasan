'use client';

import { useMediaQuery } from '@/utils/media_query';
import Link from 'next/link';
import { BsSun } from 'react-icons/bs';

const Header = () => {
  const isMobile = useMediaQuery();
  return (
    <header className='header text-gray-700 dark:text-gray-200'>
      <div className='mx-auto flex h-16 max-w-7xl items-center px-4 md:px-6'>
        <Link href='/' className='text-3xl font-bold'>
          <span>Porto</span>
          <span className='text-primary-500'>.</span>
        </Link>
        <ul className='ml-auto hidden items-center md:flex'>
          <li>
            <Link
              href={'/works'}
              className='inline-block px-4 font-semibold  transition-colors duration-150 hover:text-primary-600 hover:underline'>
              Works
            </Link>
            <Link
              href={'/blogs'}
              className='inline-block px-4 font-semibold  transition-colors duration-150 hover:text-primary-600 hover:underline'>
              Blog
            </Link>
            <Link
              href={'/contact'}
              className='inline-block px-4 font-semibold  transition-colors duration-150 hover:text-primary-600 hover:underline'>
              Contact
            </Link>
          </li>
        </ul>
        <button
          type='button'
          className='ml-auto transition-colors duration-150 hover:text-primary-500 md:-mt-0.5 md:ml-3'>
          <BsSun size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
