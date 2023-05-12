import { Wrapper } from '@/components';
import BookingFeature from '@/components/Booking';
import MainLayout from '@/layouts/MainLayout';
import { NextSheetWidthLayout } from '@/types/layoutType';
import React from 'react';

type Props = {};

const BookingPage: NextSheetWidthLayout = (props: Props) => {
  return (
    <div>
      <BookingFeature />
      <div className="h-[600px]"></div>
    </div>
  );
};

BookingPage.Layout = MainLayout;

export default BookingPage;
