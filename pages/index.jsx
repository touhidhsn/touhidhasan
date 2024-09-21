import ContainerBlock from '@/app/components/ContainerBlock';
import FavouriteProjects from '@/app/components/FavoriteProjects';
import Hero from '@/app/components/Hero';
import LatestCode from '@/app/components/LatestCode';
import React from 'react';

const Home = () => {
  return (
    <ContainerBlock>
      <Hero />
      <FavouriteProjects />
      <LatestCode />
    </ContainerBlock>
  );
};

export default Home;
