import React from 'react';
import figma from '../images/figma.png';
import js from '../images/javascript.png';
import typescript from '../images/typescript.png';
import html from '../images/html.png';
import css from '../images/css.png';
import tailwindcss from '../images/tailwind.png';
import react from '../images/react.png';
import vscode from '../images/vscode.png';

import Image from 'next/image.js';

export default function AboutMe() {
  return (
    <section className='bg-white dark:bg-gray-800'>
      <div className='max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800'>
        <h1 className=' text-5xl md:text-9xl font-bold py-20 text-center md:text-left'>
          About Me.
        </h1>
      </div>
      <div className='bg-[#F1F1F1] -mt-10 dark:bg-gray-900'>
        <div className='text-container max-w-6xl mx-auto pt-20'>
          <p
            className='leading-loose text-2xl md:text-4xl font-semibold  mx-4'
            style={{ lineHeight: '3rem' }}>
            I'm a software developer & UI designer
          </p>
        </div>
      </div>
      <div className='bg-[#F1F1F1] dark:bg-gray-900 px-4'>
        <div className='pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20'>
          {/* Social Buttons */}
          <div className='inline-flex flex-col'>
            <div>
              <h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
                Contact
              </h1>
              <p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
                For any sort help / enquiry, shoot a{' '}
                <a
                  href={`mailto:$touhidhsn@gmail.com`}
                  className='text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300'>
                  mail
                </a>{' '}
                and I'll get back insha allah.
              </p>
            </div>
            <div className='mt-8'>
              <h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
                Job Opportunities
              </h1>
              <p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
                I'm looking for a job currently, If you see me as a good fit,
                check my{' '}
                <a
                  href='#'
                  target='__blank'
                  className='text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300'>
                  CV
                </a>{' '}
                and I'd love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className='text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200'>
              Social Links
            </h1>
            <div className='mt-4 ml-4'>
              <div className='flex flex-row justify-start items-center '>
                <a
                  href='#'
                  className='flex flex-row items-center space-x-4 group'>
                  <div className='my-4'>&rarr;</div>
                  <div className='text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300'>
                    <div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
                    Peerlist
                  </div>
                </a>
              </div>
              <div className='flex flex-row justify-start items-center '>
                <a
                  href='#'
                  className='flex flex-row items-center space-x-4 group'>
                  <div className='my-4'>&rarr;</div>
                  <div className='text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300'>
                    <div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
                    Facebook
                  </div>
                </a>
              </div>
              <div className='flex flex-row justify-start items-center'>
                <a
                  href='#'
                  className='flex flex-row items-center space-x-4 group'>
                  <div className='my-4'>&rarr;</div>
                  <div className='text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300'>
                    <div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
                    Twitter
                  </div>
                </a>
              </div>
              <div className='flex flex-row justify-start items-center'>
                <a
                  href='#'
                  className='flex flex-row items-center space-x-4 group'>
                  <div className='my-4'>&rarr;</div>
                  <div className='text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300'>
                    <div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className='flex flex-row justify-start items-center'>
                <a
                  href='#'
                  className='flex flex-row items-center space-x-4 group'>
                  <div className='my-4'>&rarr;</div>
                  <div className='text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300'>
                    <div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              <div className='flex flex-row justify-start items-center'>
                <a
                  href='#'
                  className='flex flex-row items-center space-x-4 group'>
                  <div className='my-4'>&rarr;</div>
                  <div className='text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300'>
                    <div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300'></div>
                    Instagram
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div
            className='col-span-1 md:col-span-2'
            style={{ lineHeight: '3rem' }}>
            <h2 className='bg-red-500 text-3xl rounded-md px-2 py-1 my-8 inline-block font-bold text-gray-50'>
              Expertise in Front-End Technologies
            </h2>

            <p className='text-xl text-gray-700 mb-4 dark:text-gray-300 '>
              Experienced web developer with expertise in HTML, CSS, JavaScript,
              TypeScript, and React, along with knowledge of Figma for UI/UX
              design. My strong problem-solving skills enable me to tackle
              complex coding challenges and optimize performance. <br /> I have
              a proven track record of building scalable, responsive web
              applications, merging design and development seamlessly. With a
              focus on clean, maintainable code and a passion for creating
              intuitive user experiences, I bring a blend of technical and
              creative abilities to every project.
            </p>

            <h1 className='bg-red-500 text-3xl rounded-md px-2 py-1 mt-8 inline-block font-bold text-gray-50'>
              Tech Stack
            </h1>
            <div className='flex flex-row flex-wrap my-8'>
              <Image src={html} className='h-20 w-20 mx-4 my-4' alt='HTML' />
              <Image src={css} className='h-20 w-20 mx-4 my-4' alt='css' />
              <Image
                src={js}
                className='h-20 w-20 mx-4 my-4'
                alt='javascript'
              />
              <Image
                src={typescript}
                className='h-20 w-20 mx-4 my-4'
                alt='typescript'
              />
              <Image src={react} className='h-20 w-20 mx-4 my-4' alt='React' />
            </div>
            <h1 className='bg-red-500 text-3xl rounded-md px-2 py-1 mt-8 inline-block font-bold text-gray-50'>
              Software I love
            </h1>
            <div className='flex flex-row flex-wrap mt-8'>
              <Image src={figma} className='h-20 w-20 mx-4 my-4' alt='Figma' />
              <Image
                src={vscode}
                className='h-20 w-20 mx-4 my-4'
                alt='VS Code'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
