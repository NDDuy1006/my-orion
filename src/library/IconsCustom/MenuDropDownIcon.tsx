import clsx from 'clsx';
import React from 'react';

interface MenuDropDownIconProps {
  className?: string;
  height?: number;
  width?: number;
}

const MenuDropDownIcon = ({ className, height, width }: MenuDropDownIconProps) => {
  return (
    <span className={clsx(className, 'inline-flex ml-2 items-center justify-center')}>
      <svg width="10" height="12" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.5L6 6.5L11 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </span>
  );
};

export default MenuDropDownIcon;