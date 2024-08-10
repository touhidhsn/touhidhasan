import React from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight } from './RainbowHighlight.js';

const Hero = () => {
  return (
    <div>
      <div className='w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20'>
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={'#FF0000'}>Web developer</RainbowHighlight>
        </RoughNotationGroup>
      </div>
    </div>
  );
};

export default Hero;
