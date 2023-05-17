import SearchMenu from '@/components/global/SearchMenu';
import { LayoutProps } from '@/types/layoutType';
import React from 'react';

const BookingLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <SearchMenu />
      {children}
    </>
  );
};

export default BookingLayout;
