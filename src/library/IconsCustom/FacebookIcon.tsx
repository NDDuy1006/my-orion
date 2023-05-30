import clsx from 'clsx';
import React from 'react';

interface FacebookIconProps {
  className?: string;
  height?: number;
  width?: number;
}

const FacebookIcon = ({ className, height, width }: FacebookIconProps) => {
  return (
    <span className={clsx(className, 'inline-flex items-center justify-center')}>
      <svg
        width={width || '14'}
        height={height || '25'}
        viewBox="0 0 14 25"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.67696 25V13.5972H12.5029L13.0769 9.15195H8.67696V6.31434C8.67696 5.02775 9.03277 4.15095 10.8798 4.15095L13.2317 4.14999V0.174037C12.825 0.121182 11.4288 0 9.80385 0C6.4106 0 4.08753 2.07121 4.08753 5.87409V9.15195H0.25V13.5972H4.08753V25H8.67696Z" />
      </svg>
    </span>
  );
};

export default FacebookIcon;
