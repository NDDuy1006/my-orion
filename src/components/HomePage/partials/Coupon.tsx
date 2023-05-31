import ButtonShare, { BtnConstClassName } from '@/components/global/ButtonShare';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './../HomePage.module.scss';

type CouponProps = { image?: string; title: string; buttonContent: string; description: string };

const Coupon = ({ image, title, buttonContent, description }: CouponProps) => {
  return (
    <div
      // className={clsx(styles.coupon)}
      className="relative"
    >
      <Image
        alt={'logo'}
        className="absolute right-[150px] top-[77px] w-[203px] h-[270px]"
        unoptimized
        src={require('@/assets/couponBg.png')}
      />
      <div className="absolute top-[154px] right-[181px] w-[140px] text-center">
        <h3>{title}</h3>
        <p>{description}</p>
        <ButtonShare content={buttonContent} style={BtnConstClassName.dark} size="medium" />
      </div>
    </div>
  );
};

export default Coupon;
