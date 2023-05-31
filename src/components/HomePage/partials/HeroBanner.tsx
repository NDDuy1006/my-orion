import SearchMenu from '@/components/global/SearchMenu';
import { Wrapper } from '@/components/global/Wrapper';
import clsx from 'clsx';
import React from 'react';
import styles from './../HomePage.module.scss';
import Coupon from './Coupon';
const heroBannerJson = {
  coupon: {
    title: 'coupons',
    description: 'get free coupons and discounts',
    buttonContent: 'Learn more',
  },
  titles: ['Where the sun comes', 'into your heart'],
};
const { coupon, titles } = heroBannerJson;
type HeroBannerProps = {};

const HeroBanner = ({}: HeroBannerProps) => {
  return (
    <div className={clsx(styles.heroBanner)}>
      <Coupon {...coupon} />
      <Wrapper>
        <h1 className="text-White text-[60px] font-normal text-center pt-[22.5rem] flex flex-col w-fit mx-auto">
          {titles.map((title) => (
            <span key={title}>{title}</span>
          ))}
        </h1>
      </Wrapper>
      <SearchMenu />
    </div>
  );
};

export default HeroBanner;
