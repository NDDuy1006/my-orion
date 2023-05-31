import { Wrapper } from '@/components/global/Wrapper';
import React from 'react';
import HolidayPackages from './HolidayPackages';
import ViewSlide from './ViewSlide';

interface HolidaySectionProps {}

const HolidaySection = ({}: HolidaySectionProps) => {
  return (
    <Wrapper>
      <div className="text-center">
        <h3 className="text-[16px] font-normal text-Blue">Holiday Packages</h3>
        <h2 className="text-[30px] font-normal font-[Lora]">
          A holiday in the Sonnenhotels is when the sun comes into your heart
        </h2>
      </div>
      <HolidayPackages />
      <ViewSlide />
    </Wrapper>
  );
};

export default HolidaySection;
