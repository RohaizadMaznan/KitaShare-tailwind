import React from 'react';

import HeroHome from '../components/HeroHome';
import FeaturesHome from '../components/Features';
import FeaturesBlocks from '../components/FeaturesBlocks';
import Meta from '../components/layout/meta/Meta';

function Home() {
  return (
    <>  
        <Meta title="Greater repository for fellow students | KitaShare Web Application and OCR" />
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
    </>
  );
}

export default Home;