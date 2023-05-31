import clsx from 'clsx';
import React from 'react';

interface BikingIconProps {
  className?: string;
  height?: number;
  width?: number;
}

const BikingIcon = ({ className, height, width }: BikingIconProps) => {
  return (
    <span className={clsx(className, 'inline-flex ml-2 items-center justify-center')}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.43926 23.3918C9.44249 23.3918 11.8772 20.9572 11.8772 17.954C11.8772 14.9507 9.44249 12.5161 6.43926 12.5161C3.43604 12.5161 1.00141 14.9507 1.00141 17.954C1.00141 20.9572 3.43604 23.3918 6.43926 23.3918ZM6.43926 23.3918L1 25.7113V29H28.1459V17.8206L24.7876 16.2397L13.201 23.3929L6.43926 23.3918ZM15.7839 4.52685L11.393 15.4443L6.66819 17.4014L7.4013 7.98953M22.3829 10.8921L13.1642 2L10.8148 2.9732M2.97546 7.89045L8.45736 5.61976M5.31113 6.92301L13.201 10.9489M17.2687 11.2158C17.2687 8.21253 19.7033 5.77791 22.7066 5.77791C25.7099 5.77791 28.1444 8.21253 28.1444 11.2158C28.1444 14.219 25.7099 16.6537 22.7066 16.6537C19.7033 16.6537 17.2687 14.219 17.2687 11.2158Z" stroke="black" stroke-width="1.8" stroke-miterlimit="10"/>
      </svg>
    </span>
  );
};

export default BikingIcon;