import React from 'react';
import { Splide, SplideSlide, SplideProps } from '@splidejs/react-splide';
import Image from 'next/image';
import { Wrapper } from '@/components/global/Wrapper';

interface ViewSlideProps {}

const viewSlideContent = [
  {
    image: 'http://localhost:3000/images/offers/OffersList1Picture.jpg',
    text: 'Alpaca Wellness at the Mainschleife',
    icon: 'http://localhost:3000/icons/icon3.png',
    price: '€325.10',
  },
  {
    image: 'http://localhost:3000/images/offers/OffersList2Picture.jpg',
    text: 'Girls Wellness Weekend',
    icon: 'http://localhost:3000/icons/icon2.png',
    price: '€325.10',
  },
  {
    image: 'http://localhost:3000/images/offers/OffersList3Picture.jpg',
    text: 'A relaxing stay at Mecklenburg Lake',
    icon: 'http://localhost:3000/icons/icon1.png',
    price: '€325.10',
  },
];
interface RenderViewSlideCardProps {
  image: string;
  text: string;
  icon: string;
  price: string;
}
const RenderViewSlideCard = ({ text, icon, price, image }: RenderViewSlideCardProps) => {
  return (
    <div className="relative h-[288px]">
      <Image
        alt={'gallery'}
        className="w-full h-full rounded-lg"
        unoptimized
        width={0}
        height={0}
        src={image}
      />
      <div className="absolute bottom-4 w-full flex items-center justify-center gap-4">
        <div className="bg-White rounded-lg w-[50px] h-[50px] flex items-center justify-center">
          <Image
            alt={'gallery'}
            className="w-[32px] h-[32px]"
            unoptimized
            width={0}
            height={0}
            src={icon}
          />
        </div>
        <p className="text-White !font-[Lora] max-w-[183px]">{text}</p>
        <p className="px-2 py-1 border border-solid border-White w-fit text-White rounded">
          {price}
        </p>
      </div>
    </div>
  );
};
const SlideOption: SplideProps = {
  options: {
    rewind: false,
    type: 'loop',
    perPage: 3,
    gap: '1.5rem',
    perMove: 1,
    pagination: false,
    lazyLoad: true,
    drag: 'free',
  },
};
const ViewSlide = ({}: ViewSlideProps) => {
  return (
    <div className="holiday pt-6">
      <Splide aria-label="holiday slide" {...SlideOption}>
        {viewSlideContent.map((splide) => (
          <SplideSlide key={splide.text} className="cursor-grab">
            <RenderViewSlideCard {...splide} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ViewSlide;
