import Head from 'next/head';
import React from 'react';
import Navbar from './navbar.js';

const ContainerBlock = ({ children }) => {
  const meta = {
    title: 'Touhid Hasan',
    description: 'I have working as a web developer!',
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
      </Head>

      <main className='dark:bg-black w-full'>
        <Navbar />
        <div>{children}</div>
      </main>
    </>
  );
};

export default ContainerBlock;
