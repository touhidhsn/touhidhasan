import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='max-w-6xl  mx-auto px-4 py-10 md:py-20'>
      <div className='flex  md:flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <Link href='/'>
            <h1 className='font-semibold text-xl dark:text-gray-100'>
              Touhid Hasan
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
