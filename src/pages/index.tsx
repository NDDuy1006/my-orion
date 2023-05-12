import requesterAxios from '@/clientApi/requester';
import BookingFeature from '@/components/Booking';
import MainLayout from '@/layouts/MainLayout';
import { NextSheetWidthLayout } from '@/types/layoutType';
import React, { useEffect } from 'react';

const HomePage: NextSheetWidthLayout = (posts: any) => {
  return <BookingFeature />;
};

HomePage.Layout = MainLayout;

export default HomePage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
