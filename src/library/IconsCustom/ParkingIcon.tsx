import clsx from 'clsx';
import React from 'react';

interface ParkingIconProps {
  className?: string;
  height?: number;
  width?: number;
}

const ParkingIcon = ({ className, height, width }: ParkingIconProps) => {
  return (
    <span className={clsx(className, 'inline-flex ml-2 items-center justify-center')}>
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.32016 5.71992V22.3174M9.32016 5.71992C9.32016 5.71992 9.33167 9.33285 9.33167 10.4038C9.33167 11.7077 9.35237 15.1083 9.35237 15.1083C9.35237 15.1083 12.6587 15.0876 13.9416 15.0876C16.5285 15.0876 18.7172 12.9906 18.7172 10.4038C18.7172 7.81692 16.5285 5.71993 13.9416 5.71993L9.32016 5.71992ZM23.9253 26H3.07469C1.92889 26 1 25.0711 1 23.9253V3.07469C1 1.92889 1.92889 1 3.07469 1H23.9253C25.0711 1 26 1.92889 26 3.07469V23.9253C26 25.0711 25.0711 26 23.9253 26Z" stroke="black" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  );
};

export default ParkingIcon;