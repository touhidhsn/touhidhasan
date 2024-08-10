import React from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight } from './RainbowHighlight.js';
import Image from 'next/image.js';
import img from '../images/thavatar.png';

const Hero = () => {
  return (
    <div className='flex flex-row justify-center items-start overflow-hidden'>
      <div className='w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20'>
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={'#D397F8'}>
            <h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              Web Developer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={'#DA70D6'}>
            <h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              Designer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={'#B95CF4'}>
            <h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              Programmer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={'#7470DA'}>
            <h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              Gamer!
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <div className='hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20'>
        <div className='w-3/4'>
          <Image src={img} height={500} width={500} alt='Touhid' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
