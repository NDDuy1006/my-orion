import clsx from 'clsx';
import React from 'react';

interface BarIconProps {
  className?: string;
  height?: number;
  width?: number;
}

const BarIcon = ({ className, height, width }: BarIconProps) => {
  return (
    <span className={clsx(className, 'inline-flex ml-2 items-center justify-center')}>
      <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.5733 6.37008V4.63705H19.1808L21.4119 1.91238L20.0519 0.79875L16.9089 4.63705H11.91C11.3697 1.9943 9.02664 0 6.22656 0C3.02799 0 0.425781 2.60221 0.425781 5.80078C0.425781 8.99936 3.02799 11.6016 6.22656 11.6016C7.22154 11.6016 8.15875 11.3496 8.97795 10.9064L14.5469 17.7348V28.2422H11.0508V30H19.8008V28.2422H16.3047V17.7348L25.5733 6.37008ZM7.56684 6.39486H12.9487C12.5671 6.97564 12.3479 7.63078 12.3232 8.28082C12.2901 9.15217 12.6193 9.94459 13.2263 10.4549C13.6815 10.8375 14.2659 11.039 14.8894 11.039C15.0975 11.039 15.3099 11.0166 15.5232 10.9709C16.3075 10.8032 17.0487 10.3429 17.6102 9.67488C18.1718 9.00686 18.4979 8.19762 18.5284 7.39611C18.5417 7.04496 18.4953 6.70711 18.3965 6.39486H23.2848L15.4258 16.0312L7.56684 6.39486ZM16.7719 7.32932C16.7564 7.73613 16.5715 8.17875 16.2647 8.54373C15.958 8.90865 15.5537 9.16682 15.1555 9.25195C14.9685 9.29197 14.616 9.3266 14.3574 9.10928C13.9105 8.73357 14.0177 7.81014 14.5868 7.13314C14.9792 6.66645 15.5246 6.39592 15.9721 6.39592C16.1736 6.39592 16.3554 6.45088 16.4942 6.56754C16.7527 6.78492 16.7791 7.13812 16.7719 7.32932ZM6.22656 9.84375C3.99725 9.84375 2.18359 8.0301 2.18359 5.80078C2.18359 3.57146 3.99725 1.75781 6.22656 1.75781C8.05141 1.75781 9.59699 2.97334 10.098 4.63705H5.27834V6.37008L7.83748 9.50801C7.34359 9.72346 6.79896 9.84375 6.22656 9.84375Z" fill="black"/>
      </svg>
    </span>
  );
};

export default BarIcon;