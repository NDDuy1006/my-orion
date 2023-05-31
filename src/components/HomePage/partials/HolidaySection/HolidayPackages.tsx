import React from 'react';
import { Wrapper } from '@/components/global/Wrapper';
import { Splide, SplideSlide, SplideProps } from '@splidejs/react-splide';
import Image from 'next/image';

interface HolidayPackagesProps {}
const holidayContent = [
  {
    image: 'http://localhost:3000/images/holidayPackages/ThemesList1Picture.jpg',
    text: 'Mountain & Snow',
  },
  {
    image: 'http://localhost:3000/images/holidayPackages/ThemesList2Picture.jpg',
    text: 'Countryside Getaways',
  },
  {
    image: 'http://localhost:3000/images/holidayPackages/ThemesList3Picture.jpg',
    text: 'By the Water',
  },
  {
    image: 'http://localhost:3000/images/holidayPackages/ThemesList4Picture.jpg',
    text: 'Family Fun',
  },
  {
    image: 'http://localhost:3000/images/holidayPackages/ThemesList5Picture.jpg',
    text: 'Romantics Getaways',
  },
  { image: 'http://localhost:3000/images/holidayPackages/ThemesList6Picture.jpg', text: 'Golfing' },
];
interface SlpideCardProps {
  image: string;
  text: string;
}
const SlpideCard = ({ image, text }: SlpideCardProps) => {
  return (
    <div className="relative h-[270px]">
      <Image
        alt={'gallery'}
        className="w-full h-full"
        unoptimized
        width={0}
        height={0}
        src={image}
      />
      <div className="absolute w-fit bottom-4 left-1/2 -translate-x-1/2 ">
        <p className="text-White !font-[Lora] text-center">{text}</p>
      </div>
    </div>
  );
};
const SlideOption: SplideProps = {
  options: {
    rewind: false,
    type: 'loop',
    gap: '1.5rem',
    perPage: 6,
    perMove: 1,
    pagination: false,
    lazyLoad: true,
    drag: 'free',
  },
};
const HolidayPackages = ({}: HolidayPackagesProps) => {
  return (
    <div className="pt-8 holiday">
      <Splide aria-label="holiday slide" {...SlideOption}>
        {holidayContent.map((splide) => (
          <SplideSlide key={splide.text} className="cursor-grab">
            <SlpideCard {...splide} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default HolidayPackages;
