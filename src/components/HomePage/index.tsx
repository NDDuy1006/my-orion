import React from 'react';
import SearchMenu from '../global/SearchMenu';
import Gallery from './partials/Gallery';
import HeroBanner from './partials/HeroBanner';
import HolidayPackages from './partials/HolidayPackages';

type HomeProps = {};

const Home = ({}: HomeProps) => {
  return (
    <div>
      <HeroBanner />
      <HolidayPackages />
      <Gallery />
    </div>
  );
};

export default Home;
