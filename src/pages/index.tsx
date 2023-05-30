import Home from '@/components/HomePage';
import MainLayout from '@/layouts/MainLayout';
import { NextSheetWidthLayout } from '@/types/layoutType';
import React, { useEffect } from 'react';

const HomePage: NextSheetWidthLayout = (posts: any) => {
  return <Home />;
};

HomePage.Layout = MainLayout;

export default HomePage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
