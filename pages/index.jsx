import ContainerBlock from '@/app/components/ContainerBlock';
import FavouriteProjects from '@/app/components/FavoriteProjects';
import Hero from '@/app/components/Hero';
import React from 'react';

const Home = () => {
  return (
    <ContainerBlock>
      <Hero />
      <FavouriteProjects />
    </ContainerBlock>
  );
};

export default Home;
