import SearchMenu from '@/components/global/SearchMenu';
import { Wrapper } from '@/components/global/Wrapper';
import clsx from 'clsx';
import React from 'react';
import styles from './../HomePage.module.scss';

type HeroBannerProps = {};

const HeroBanner = ({}: HeroBannerProps) => {
  return (
    <div className={clsx(styles.bookingEngineBg)}>
      <Wrapper>
        <h1 className={clsx('text-Main text-5xl text-center pt-[16.5rem]')}>
          <span>Where the sun comes</span>
          <br />
          <span>into your heart</span>
        </h1>
      </Wrapper>
      <SearchMenu />
    </div>
  );
};

export default HeroBanner;
