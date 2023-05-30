import clsx from 'clsx';
import React from 'react';

interface SunSineIconProps {
  className?: string;
  height?: number;
  width?: number;
}

const SunSineIcon = ({ className, height, width }: SunSineIconProps) => {
  return (
    <span className={clsx(className, 'inline-flex items-center justify-center')}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || "24"}
        height={height || "30"}
        viewBox="0 0 24 30"
        fill="currentColor"
      >
        <path
          d="M15 4.28571C15.2842 4.28571 15.5567 4.17283 15.7576 3.9719C15.9585 3.77097 16.0714 3.49845 16.0714 3.21429V1.07143C16.0714 0.787268 15.9585 0.514746 15.7576 0.313814C15.5567 0.112882 15.2842 0 15 0C14.7158 0 14.4433 0.112882 14.2424 0.313814C14.0415 0.514746 13.9286 0.787268 13.9286 1.07143V3.21429C13.9286 3.49845 14.0415 3.77097 14.2424 3.9719C14.4433 4.17283 14.7158 4.28571 15 4.28571Z"
          fill="black"
        />
        <path
          d="M15 25.7143C14.7158 25.7143 14.4433 25.8272 14.2424 26.0281C14.0415 26.229 13.9286 26.5016 13.9286 26.7857V28.9286C13.9286 29.2127 14.0415 29.4853 14.2424 29.6862C14.4433 29.8871 14.7158 30 15 30C15.2842 30 15.5567 29.8871 15.7576 29.6862C15.9585 29.4853 16.0714 29.2127 16.0714 28.9286V26.7857C16.0714 26.5016 15.9585 26.229 15.7576 26.0281C15.5567 25.8272 15.2842 25.7143 15 25.7143Z"
          fill="black"
        />
        <path
          d="M3.21429 13.9286H1.07143C0.787268 13.9286 0.514746 14.0415 0.313814 14.2424C0.112882 14.4433 0 14.7158 0 15C0 15.2842 0.112882 15.5567 0.313814 15.7576C0.514746 15.9585 0.787268 16.0714 1.07143 16.0714H3.21429C3.49845 16.0714 3.77097 15.9585 3.9719 15.7576C4.17283 15.5567 4.28571 15.2842 4.28571 15C4.28571 14.7158 4.17283 14.4433 3.9719 14.2424C3.77097 14.0415 3.49845 13.9286 3.21429 13.9286Z"
          fill="black"
        />
        <path
          d="M5.90893 22.5761L4.39286 24.0911C4.19182 24.2921 4.07887 24.5648 4.07887 24.8491C4.07887 25.1334 4.19182 25.4061 4.39286 25.6072C4.5939 25.8082 4.86658 25.9211 5.15089 25.9211C5.43521 25.9211 5.70789 25.8082 5.90893 25.6072L7.42393 24.0922C7.52626 23.9933 7.60789 23.8751 7.66404 23.7444C7.72019 23.6137 7.74975 23.4731 7.75098 23.3308C7.75222 23.1885 7.72511 23.0474 7.67124 22.9158C7.61737 22.7841 7.53781 22.6645 7.43721 22.5639C7.33661 22.4633 7.21698 22.3837 7.08531 22.3298C6.95364 22.276 6.81255 22.2489 6.67029 22.2501C6.52802 22.2513 6.38743 22.2809 6.25671 22.337C6.12599 22.3932 6.00777 22.4748 5.90893 22.5772V22.5761Z"
          fill="black"
        />
        <path
          d="M5.90893 7.42393C6.111 7.6191 6.38165 7.72709 6.66257 7.72465C6.9435 7.72221 7.21223 7.60953 7.41088 7.41088C7.60953 7.21223 7.72221 6.9435 7.72465 6.66257C7.72709 6.38165 7.6191 6.111 7.42393 5.90893L5.90893 4.39286C5.70789 4.19182 5.43521 4.07887 5.15089 4.07887C4.86658 4.07887 4.5939 4.19182 4.39286 4.39286C4.19182 4.5939 4.07887 4.86658 4.07887 5.15089C4.07887 5.43521 4.19182 5.70789 4.39286 5.90893L5.90893 7.42393Z"
          fill="black"
        />
        <path
          d="M16.0714 6.49286C15.3597 6.40714 14.6403 6.40714 13.9286 6.49286C11.8524 6.74857 9.94149 7.75467 8.5557 9.32162C7.16991 10.8886 6.40496 12.9082 6.40496 15C6.40496 17.0918 7.16991 19.1114 8.5557 20.6784C9.94149 22.2453 11.8524 23.2514 13.9286 23.5071C14.6403 23.5929 15.3597 23.5929 16.0714 23.5071C18.1476 23.2514 20.0585 22.2453 21.4443 20.6784C22.8301 19.1114 23.5951 17.0918 23.5951 15C23.5951 12.9082 22.8301 10.8886 21.4443 9.32162C20.0585 7.75467 18.1476 6.74857 16.0714 6.49286ZM13.9286 21.3321C12.4313 21.0803 11.0716 20.3061 10.0911 19.1468C9.11051 17.9876 8.57246 16.5183 8.57246 15C8.57246 13.4817 9.11051 12.0124 10.0911 10.8532C11.0716 9.69395 12.4313 8.91968 13.9286 8.66786C14.282 8.60294 14.6407 8.57066 15 8.57143V21.4286C14.6407 21.4293 14.282 21.3971 13.9286 21.3321Z"
          fill="black"
        />
      </svg>
    </span>
  );
};

export default SunSineIcon;
