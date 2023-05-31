import clsx from 'clsx';
import React from 'react';

interface AlpsIconProps {
  className?: string;
  height?: number;
  width?: number;
}

const RatingStarIcon = ({ className, height, width }: AlpsIconProps) => {
  return (
    <span className={clsx(className, 'inline-flex items-center justify-center')}>
      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#3A6EA5"/>
      </svg>
    </span>
  );
};

export default RatingStarIcon;