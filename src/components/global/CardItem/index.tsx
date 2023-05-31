import React from 'react';
import CardItemProps from './@types';
import Image from 'next/image';
import clsx from 'clsx';

const CardItem = ({ image, height, title, content, icon }: CardItemProps) => {
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
      <div className="h-3/4 p-8 bg-White relative">
        <div className="absolute -top-7 left-7 w-[50px] h-[50px] flex justify-center items-center text-White rounded bg-Black">
          {icon}
        </div>
        <div>{title}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default CardItem;
