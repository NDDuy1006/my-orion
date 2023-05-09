import { Wrapper } from '@/components';
import BookingFeature from '@/components/Booking';
import MainLayout from '@/layouts/MainLayout';
import { NextPageWidthLayout } from '@/types/layoutType';
import React from 'react';



type Props = {}

const BookingPage: NextPageWidthLayout = (props: Props) => {
  return (
    <Wrapper>
      <BookingFeature />
    </Wrapper>
  )
}

BookingPage.Layout = MainLayout;

export default BookingPage