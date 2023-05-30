import React, { Fragment } from 'react';
import styles from './CardItem.module.scss';
import CardItemProps from './@types';
import Image from 'next/image';
import clsx from 'clsx';
import { Typography } from 'antd';
const { Title, Text } = Typography;

const CardItem = ({ image, height, title, content }: CardItemProps) => {
  return (
    <div style={{ height }} className={clsx('rounded-xl overflow-hidden flex flex-col')}>
      <div className="h-2/4 overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={image}
          alt={'...'}
          width={0}
          height={0}
          unoptimized
        />
      </div>
      <div className="h-3/4 p-8 bg-White">
        <div>{title}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default CardItem;
