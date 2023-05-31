import clsx from 'clsx';
import React from 'react';

interface BedIconProps {
  className?: string;
  height?: number;
  width?: number;
}

const BedIcon = ({ className, height, width }: BedIconProps) => {
  return (
    <span className={clsx(className, 'inline-flex ml-2 items-center justify-center')}>
      <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.4291 8.57143V13.5714C20.4291 13.9657 20.1087 14.2857 19.714 14.2857C19.3193 14.2857 18.999 13.9657 18.999 13.5714V12.8571H1.83826V13.5714C1.83826 13.9657 1.51793 14.2857 1.12323 14.2857C0.728537 14.2857 0.408203 13.9657 0.408203 13.5714V8.57143C0.408203 7.39 1.37063 6.42857 2.55329 6.42857H18.284C19.4666 6.42857 20.4291 7.39 20.4291 8.57143Z" fill="black"/>
        <path d="M2.55329 5V0.714286C2.55329 0.32 2.87363 0 3.26833 0H17.5689C17.9636 0 18.284 0.32 18.284 0.714286V5H16.1389V4.28571C16.1389 3.49786 15.4975 2.85714 14.7088 2.85714H12.5637C11.775 2.85714 11.1337 3.49786 11.1337 4.28571V5H9.7036V4.28571C9.7036 3.49786 9.06222 2.85714 8.27354 2.85714H6.12845C5.33977 2.85714 4.69839 3.49786 4.69839 4.28571V5H2.55329Z" fill="black"/>
      </svg>
    </span>
  );
};

export default BedIcon;