import MainLayout from '@/layouts/MainLayout';
import { NextPageWidthLayout } from '@/types/layoutType';
import React, { useEffect } from 'react';

const HomePage: NextPageWidthLayout = () => {
  return <div className="container h-[600px]"></div>;
};

HomePage.Layout = MainLayout;

export default HomePage;
