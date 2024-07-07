'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <div className='max-w-6xl  mx-auto px-4 py-10 md:py-20'>
      <div className='flex  md:flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <Link href='/'>
            <h1 className='font-semibold text-xl dark:text-gray-100'>
              Touhid Hasan
            </h1>
            <p className='text-base font-light text-gray-500 dark:text-gray-300'>
              Software developer
            </p>
          </Link>
        </div>
        <div className='space-x-8 hidden md:block'>
          <Link
            href='/about'
            className={`text-base  ${
              router.asPath === '/about'
                ? 'text-gray-800 font-bold dark:text-gray-400'
                : 'text-gray-600 dark:text-gray-300 font-normal '
            }`}>
            About{' '}
            {router.asPath === '/about' && (
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
          <Link
            href='/projects'
            className={`text-base  ${
              router.asPath === '/projects'
                ? 'text-gray-800 font-bold dark:text-gray-400'
                : 'text-gray-600 dark:text-gray-300 font-normal '
            }`}>
            Projects
            {router.asPath === '/projects' && (
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
          <Link
            href='/experience'
            className={`text-base  ${
              router.asPath === '/experience'
                ? 'text-gray-800 font-bold dark:text-gray-400'
                : 'text-gray-600 dark:text-gray-300 font-normal '
            }`}>
            Experience{' '}
            {router.asPath === '/experience' && (
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
          <Link
            href='/contact'
            className={`text-base  ${
              router.asPath === '/contact'
                ? 'text-gray-800 font-bold dark:text-gray-400'
                : 'text-gray-600 dark:text-gray-300 font-normal '
            }`}>
            Contact
            {router.asPath === '/contact' && (
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
