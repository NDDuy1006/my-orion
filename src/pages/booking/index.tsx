import { Wrapper } from '@/components';
import BookingFeature from '@/components/Booking';
import MainLayout from '@/layouts/MainLayout';
import { NextSheetWidthLayout } from '@/types/layoutType';
import React from 'react';



type Props = {}


const BookingPage: NextSheetWidthLayout = (props: Props) => {

  return (
    <Wrapper className='text-center'>
      <BookingFeature />
    </Wrapper>
  )
}

BookingPage.Layout = MainLayout;

export default BookingPage