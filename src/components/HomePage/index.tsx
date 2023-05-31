import React from 'react';
import SearchMenu from '../global/SearchMenu';
import Gallery from './partials/Gallery';
import HeroBanner from './partials/HeroBanner';
import HolidaySection from './partials/HolidaySection';
import HolidayPackages from './partials/HolidaySection/HolidayPackages';
import ViewSlide from './partials/HolidaySection/ViewSlide';

type HomeProps = {};

const Home = ({}: HomeProps) => {
  return (
    <div>
      <HeroBanner />
      <HolidaySection />
      <Gallery />
    </div>
  );
};

export default Home;
