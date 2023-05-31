import clsx from 'clsx';
import React from 'react';

interface ElevatorIconProps {
  className?: string;
  height?: number;
  width?: number;
}

const ElevatorIcon = ({ className, height, width }: ElevatorIconProps) => {
  return (
    <span className={clsx(className, 'inline-flex ml-2 items-center justify-center')}>
      <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.2065 12.5928L32.1898 9.60958M32.1898 9.60958L35.173 12.5928M32.1898 9.60958V20.8748M35.173 17.8916L32.1898 20.8748M32.1898 20.8748L29.2065 17.8916M8.87522 5.96108H17.1165M12.9959 10.18V28.7422M5.92207 10.18H20.0698V28.7422H5.92207V10.18ZM1 1.74219H24.9919V28.7422H1V1.74219Z" stroke="black" stroke-width="1.6" stroke-miterlimit="10"/>
      </svg>
    </span>
  );
};

export default ElevatorIcon;