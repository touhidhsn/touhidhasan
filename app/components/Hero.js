import React from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight } from './RainbowHighlight.js';

const Hero = () => {
  return (
    <div>
      <RoughNotationGroup show={true}>
        <RainbowHighlight color={'#FF0000'}>Web developer</RainbowHighlight>
      </RoughNotationGroup>
    </div>
  );
};

export default Hero;
