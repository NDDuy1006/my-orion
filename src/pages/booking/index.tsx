import { Wrapper } from '@/components';
import BookingFeature from '@/components/Booking';
import MainLayout from '@/layouts/MainLayout';
import { NextSheetWidthLayout } from '@/types/layoutType';
import React from 'react';

type Props = {};

const BookingPage: NextSheetWidthLayout = (props: Props) => {
  return <BookingFeature />;
};

BookingPage.Layout = MainLayout;

export default BookingPage;
