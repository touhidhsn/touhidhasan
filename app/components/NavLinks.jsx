import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = ({ title, path }) => {
  const pathName = usePathname();

  return (
    <Link
      key={title}
      href={path}
      className={`text-base  ${
        pathName === path
          ? 'text-gray-800 font-bold dark:text-gray-400'
          : 'text-gray-600 dark:text-gray-200 font-normal '
      }`}>
      {title}
      {pathName === path && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-arrow-down inline-block h-3 w-3'
          viewBox='0 0 16 16'>
          <path
            fillRule='evenodd'
            d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
          />
        </svg>
      )}
    </Link>
  );
};

export default NavLinks;
