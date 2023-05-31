import React, { Fragment } from 'react';
import styles from './CardItem.module.scss';
import CardItemProps from './@types';
import Image from 'next/image';
import clsx from 'clsx';
import { Typography } from 'antd';
const { Title, Text } = Typography;

const CardItem = ({ image, height, title, content, icon }: CardItemProps) => {
  return (
    <div style={{ height }} className={clsx('rounded-xl overflow-hidden flex flex-col')}>
      <div className="h-2/4 overflow-hidden relative">
        <Image
          className="w-full h-full object-cover"
          src={image}
          alt={'...'}
          width={0}
          height={0}
          unoptimized
        />
        <div className='absolute -bottom-10 left-7 w-[50px] h-[50px] flex justify-center items-center text-White bg-Black'>
            {icon}
        </div>
      </div>
      <div className="h-3/4 p-8 bg-White">
        <div>{title}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default CardItem;
