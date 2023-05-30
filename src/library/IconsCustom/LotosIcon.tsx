import clsx from 'clsx';
import React from 'react';

interface LotusIconProps {
  className?: string;
  height?: number;
  width?: number;
}

const LotusIcon = ({ className, height, width }: LotusIconProps) => {
  return (
    <span className={clsx(className, 'inline-flex items-center justify-center')}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || "25"}
        height={height || "20"}
        viewBox="0 0 25 20"
        fill="currentColor"
      >
        <path
          d="M2.69148 14.7282C2.22297 14.2597 1.80691 13.7623 1.43733 13.2495C0.79548 13.6517 0.31965 14.0285 0.0878629 14.2221C-0.00520352 14.2998 -0.027225 14.4335 0.0359586 14.537C0.517648 15.3261 2.6134 18.475 5.66345 18.9778C7.01184 19.2001 8.34929 18.8726 9.48352 18.387C7.4594 17.8687 4.78718 16.824 2.69148 14.7282Z"
          fill="black"
        />
        <path
          d="M23.5628 13.2495C23.1932 13.7624 22.7771 14.2598 22.3086 14.7283C20.2128 16.8241 17.5407 17.8688 15.5165 18.387C16.6508 18.8726 17.9882 19.2001 19.3366 18.9778C22.3867 18.475 24.4824 15.3262 24.9641 14.537C25.0273 14.4335 25.0053 14.2999 24.9122 14.2221C24.6805 14.0285 24.2046 13.6516 23.5628 13.2495Z"
          fill="black"
        />
        <path
          d="M7.79123 5.7153C8.05696 4.65559 8.43713 3.67693 8.85271 2.81047C7.67502 1.72048 6.56902 1.01955 6.08977 0.737374C5.95828 0.659933 5.78923 0.720431 5.73665 0.863693C5.54114 1.3967 5.11751 2.68152 4.90222 4.31906C5.84231 4.66179 6.83386 5.1155 7.79123 5.7153Z"
          fill="black"
        />
        <path
          d="M20.0978 4.31906C19.8825 2.68152 19.4589 1.3967 19.2634 0.863693C19.2109 0.720431 19.0418 0.659933 18.9103 0.737374C18.431 1.0195 17.3251 1.72048 16.1473 2.81047C16.5629 3.67693 16.943 4.65554 17.2088 5.7153C18.1662 5.1155 19.1577 4.66179 20.0978 4.31906Z"
          fill="black"
        />
        <path
          d="M7.40934 8.70983C7.40934 8.22242 7.44127 7.7443 7.49874 7.27731C4.64894 5.28722 1.26886 4.84381 0.270617 4.75348C0.116125 4.73951 -0.012928 4.86857 0.0010368 5.02306C0.107336 6.19718 0.701428 10.6667 3.72721 13.6924C5.73937 15.7046 8.38966 16.6412 10.285 17.0743C9.09327 15.3454 7.40934 12.2714 7.40934 8.70983Z"
          fill="black"
        />
        <path
          d="M24.7294 4.75348C23.7312 4.84381 20.3511 5.28722 17.5013 7.27735C17.5588 7.7443 17.5907 8.22242 17.5907 8.70983C17.5907 12.2714 15.9067 15.3454 14.715 17.0743C16.6103 16.6412 19.2606 15.7046 21.2728 13.6924C24.2986 10.6666 24.8927 6.19713 24.999 5.02301C25.013 4.86857 24.8839 4.73951 24.7294 4.75348Z"
          fill="black"
        />
        <path
          d="M16.1259 8.70981C16.1259 12.9191 13.4303 16.4412 12.6875 17.3318C12.5898 17.449 12.4102 17.449 12.3125 17.3318C11.5697 16.4412 8.87415 12.9191 8.87415 8.70981C8.87415 4.50054 11.5698 0.978516 12.3125 0.0878906C12.4103 -0.0292969 12.5898 -0.0292969 12.6876 0.0878906C13.4303 0.978516 16.1259 4.50059 16.1259 8.70981Z"
          fill="black"
        />
      </svg>
    </span>
  );
};

export default LotusIcon;
